import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import LogoutBtn from './LogoutBtn'
import { GiHamburgerMenu } from "react-icons/gi";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false)
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
            Shop<span className="text-blue-500">Easy</span>
            </h1>

            {/* Hamburger */}
                <div className="md:hidden absolute top-2 right-4 bg-white border rounded shadow-md z-50">
                <button onClick={()=> setMenuOpen(!menuOpen)} className='block mr-4 md:hidden p-2 focus:outline-none focus:ring-2 focus:ring-blue-400'><GiHamburgerMenu className='text-3xl' /></button>


                { menuOpen &&
                <div className="flex flex-col gap-5 absolute top-12 right-4 bg-white border rounded shadow-md p-4 z-50">
                {
                authState ?
                <LogoutBtn />
                : null
                }
                {
                    !authState &&
                        navItems.map((item)=>
                            item.active ?
                            <div key={item.name}>
                                <button onClick={()=> navigate(item.address)}>{item.name}</button>
                            </div>
                            : null
                        )
                }
                </div>

}
                </div>


            {/* desktop mode */}
            <div className="hidden md:flex pr-7 items-center gap-6">
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