import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addOrder } from '../features/orderSlice'
import { useNavigate } from 'react-router-dom'
import { addToCart } from '../features/cartSlice'
import { checkInvoice, LookInvoice } from '../features/InvoiceSlice'

function OrderSummery({cartState}) {

    const curruntState = useSelector((state)=> state.cart.cart)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [newData, setNewData] = useState({First_Name: '' , Last_Name: '', Email_Address: '', Address: '', Zip_Code: ''})

    const ac = curruntState.reduce((acc, value)=>{
        const {price, count} = value
        return acc = acc + (price * count)
    }, 0)

    function handleInput(e){
      const {value, name} = e.target
      setNewData({...newData, [name]: value})
    }

    function handleCheckout(e){
      e.preventDefault()
      cartState.map((items)=>{
        dispatch(addOrder(items))
        dispatch(checkInvoice(items))
      })
      dispatch(LookInvoice(newData))
      navigate("/yourorder")
    }

    return (
        <>
        <h2 className="text-xl font-bold mb-4">Billing Details</h2>

<form onSubmit={handleCheckout} className="space-y-4">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div>
      <label
        htmlFor="firstName"
        className="block text-sm font-medium text-gray-600"
      >
        First Name
      </label>
      <input
        name='First_Name'
        value={newData.First_Name}
        type="text"
        id="firstName"
        className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
        placeholder="John" required={true}
        onChange={handleInput}
      />
    </div>
    <div>
      <label
        htmlFor="lastName"
        className="block text-sm font-medium text-gray-600"
      >
        Last Name
      </label>
      <input
        name='Last_Name'
        value={newData.Last_Name}
        type="text"
        id="lastName"
        className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
        placeholder="Doe" required={true} onChange={handleInput}
      />
    </div>
  </div>

  <div>
    <label
      htmlFor="email"
      className="block text-sm font-medium text-gray-600"
    >
      Email Address
    </label>
    <input
      name='Email_Address'
      value={newData.Email_Address}
      type="email"
      id="email"
      className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
      placeholder="johndoe@example.com" required={true} onChange={handleInput}
    />
  </div>

  <div>
    <label
      htmlFor="address"
      className="block text-sm font-medium text-gray-600"
    >
      Address
    </label>
    <input
      name='Address'
      value={newData.Address}
      type="text"
      id="address"
      className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
      placeholder="123 Main St." required={true} onChange={handleInput}
    />
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div>
      <label
        htmlFor="city"
        className="block text-sm font-medium text-gray-600"
      >
        City
      </label>
      <input
        type="text"
        id="city"
        className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
        placeholder="Mumbai" required={true}
      />
    </div>
    <div>
      <label
        htmlFor="zip"
        className="block text-sm font-medium text-gray-600"
      >
        Zip Code
      </label>
      <input
        name='Zip_Code'
        value={newData.Zip_Code}
        type="text"
        id="zip"
        className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
        placeholder="10001" required={true} onChange={handleInput}
      />
    </div>
  </div>
    <hr />

        <h2 className="text-xl font-bold mb-4">Price Details</h2>
                <div className="flex justify-between mb-2">
                <p className="text-gray-600">Subtotal</p>
                <p className="text-gray-800">${(ac).toFixed(2)}</p>
                </div>
                <div className="flex justify-between mb-4">
                <p className="text-gray-600">Shipping</p>
                <p className="text-gray-800">$5.00</p>
                </div>
                <hr className="my-4" />
                <div className="flex justify-between text-lg font-bold">
                <p>Total</p>
                <p>${(ac + 5.00).toFixed(2)}</p>
                </div>
                <button className="mt-6 w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600">
                Proceed to Checkout
                </button>
                </form>
        </>
    )
}

export default OrderSummery