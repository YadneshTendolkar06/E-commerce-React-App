import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import authService from '../../appwrite/Auth'
import { logout } from '../../features/AuthSlice'
import { useNavigate } from 'react-router-dom'
import { searchProduct } from '../../features/searchSlice'

function LogoutBtn() {
    const [loader, setLoader] = useState(false)
    const dispatch = useDispatch()
    const currentState = useSelector((state)=> state.cart.cart)
    const navigate = useNavigate()
    function handleLogout(){
        setLoader(true)
        authService.logout()
        .then(()=> {
            dispatch(logout())
            navigate("/login")
            setLoader(false)
        })
    }

    function handleSearch(e){
        dispatch(searchProduct(e.target.value))
    }

    return loader ? "Loading" : (
        <>
            <input onChange={handleSearch}
                type="search"
                placeholder="Search products..."
                className="border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button onClick={()=> navigate("/yourorder")} className="bg-blue-500 relative text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                Your Order
            </button>
            <button onClick={()=> navigate("/cartpage")} className="bg-blue-500 relative text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                <span className='h-7 w-7 absolute top-1 left-12 rounded-full bg-red-500' >{currentState.length}</span>
                Cart
            </button>
            <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
                Logout
            </button>
            </>
                )
}

export default LogoutBtn