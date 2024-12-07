import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {IncreaseQuantity, removeCart, DecreaseQuantity} from '../features/cartSlice'
import {OrderSummery} from './index'
import { useNavigate } from 'react-router-dom'

function CartPage() {

    const cartState = useSelector((state) => state.cart.cart)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    function handleRemoveCart(title){
        dispatch(removeCart(title))
    }

    function handleDecreaseQuantity(id){
        dispatch(DecreaseQuantity(id))
    }

    function handleProductCount(id){
        dispatch(IncreaseQuantity(id))
    }

    return (
        <div className="bg-gray-100 min-h-screen">
        <div className="container mx-auto py-12">
            <h1 className="text-3xl font-bold text-gray-800 mb-8">Shopping Cart</h1>

          {/* Cart Items Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="md:col-span-2">
                { cartState.length !== 0 ? cartState.map((item, index) => (
                <div
                    key={item.id}
                    className="flex items-center bg-white shadow-md rounded-lg p-4 mb-4"
                >
                    <img
                    src={item.thumbnail}
                    alt="Product"
                    className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="ml-4 flex-1">
                    <h2 className="text-lg font-semibold">{item.title}</h2>
                    <p className="text-gray-600">${item.price * item.count}</p>
                    </div>

                    <div className="flex items-center gap-2">
                    <button onClick={()=> handleDecreaseQuantity(item.id)} className="bg-gray-300 text-gray-800 px-2 py-1 rounded-lg hover:bg-gray-400">
                        -
                    </button>
                    <span className="px-4">{item.count}</span>
                    <button onClick={()=> {handleProductCount(item.id)}} className="bg-gray-300 text-gray-800 px-2 py-1 rounded-lg hover:bg-gray-400">
                        +
                    </button>
                    </div>

                    <button onClick={()=> handleRemoveCart(item.title)} className="ml-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
                    Remove
                    </button>
                </div>
                )):
                <div className="text-center mt-8">
                    <h2 className="text-2xl text-gray-600">Your cart is empty.</h2>
                    <button onClick={() => navigate("/dashboard")} className="mt-4 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">
                Continue Shopping
                    </button>
                </div>
                }
            </div>

            {/* Summary Section */}



            {
                cartState.length &&

                <div className="bg-white shadow-md rounded-lg p-6">
                <OrderSummery cartState={cartState} />
            </div>
            }

            </div>
        </div>
        </div>
    )
}

export default CartPage