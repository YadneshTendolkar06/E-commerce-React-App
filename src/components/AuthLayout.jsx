import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

function AuthLayout({children, authentication = true}) {

    const navigate = useNavigate()
    const authStatus = useSelector((state) => state.auth.status)
    const [loader, setLoader] = useState(true)

    useEffect(()=> {
        if(authentication && authStatus !== authentication){
            navigate("/login")
        }else if(!authentication && authStatus !== authentication){
            navigate("/dashboard")
        }else{
            setLoader(false)
        }
    },[navigate, authStatus, authentication])

    return loader ? <div>Loading</div> : <div>{children}</div>
}

export default AuthLayout