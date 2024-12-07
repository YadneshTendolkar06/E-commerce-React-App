import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import LogoutBtn from './LogoutBtn'

function Header() {
    const authState = useSelector((state)=> state.auth.status)
    const navigate = useNavigate()

    const navItems = [
        {
            name: "SignUp",
            address: "/signup",
            active: !authState
        },
        {
            name: "Login",
            address: "/login",
            active: !authState
        }
    ]

    return (
        <>

        <div className="container mx-auto flex justify-between items-center">
            <h1 className="px-4 text-2xl font-bold text-gray-800">
            Shop<span className="text-blue-500">Zone</span>
            </h1>
            <div className="flex pr-7 items-center gap-6">
        {
            navItems.map((item)=>
                item.active ?
                <div key={item.name}>
                    <button onClick={()=> navigate(item.address)}>{item.name}</button>
                </div>
                : null
            )
        }
        {
            authState ?
            <LogoutBtn />
            : null
        }
        </div>
        </div>
        </>
    )
}

export default Header