import React from 'react'
import { useNavigate } from 'react-router-dom'
import promotionalData from '../Data/PromotionalData'

function LandingPage() {
    const navigate = useNavigate()
    return (
    <>
    <div className="bg-gray-100 min-h-screen flex items-center justify-center pb-5">
        <div className="container mx-auto px-6 text-center">
        {/* Hero Section */}
        <div className="bg-white shadow-md rounded-lg md:mt-0 mt-10 p-8 md:p-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
            Welcome to <span className="text-blue-500">ShopEasy</span>
            </h1>
            <p className="mt-4 text-gray-600 text-lg md:text-xl">
            Discover amazing deals on top-quality products, delivered to your door.
            </p>
          {/* Call-to-Action Buttons */}
            <div className="mt-6 flex flex-col md:flex-row justify-center gap-4">
            <a
                onClick={()=> navigate("/login")}
                className="bg-blue-500 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 cursor-pointer"
            >
                Start Shopping
            </a>
            <a
                onClick={()=> navigate("/learnmore")}
                className="bg-gray-200 text-gray-800 py-3 px-6 rounded-lg shadow-lg hover:bg-gray-300 transition duration-300 cursor-pointer"
            >
                Learn More
            </a>
            </div>
        </div>
        {/* Promotional Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {
        promotionalData.map(item =>
            <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800">{item.p_name}</h3>
            <p className="mt-2 text-gray-600">{item.p_desc}</p>
            </div>
            )}
        </div>
        </div>
    </div>
    </>
    )
}

export default LandingPage