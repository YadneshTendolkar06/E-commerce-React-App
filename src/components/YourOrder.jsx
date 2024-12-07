import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {deleteOrder} from '../features/orderSlice'
import { useNavigate } from "react-router-dom";
import { LookInvoice,deleteInvoice } from "../features/InvoiceSlice";

function YourOrders() {
    const today = new Date()
    const year = today.getFullYear()
    const month = today.getMonth()
    const date = today.getDate()
    const navigate = useNavigate()
    const OrderState = useSelector((state) => state.order.order);
    const Invoice = useSelector(state => state.invoice.invoiceData)
    const dispatch = useDispatch()

    function handleCancelOrder(i,id){
        dispatch(deleteOrder(i))
        dispatch(deleteInvoice(id))
    }

    function handleInvoiceId(id){
        navigate("/invoice")
    }

    return (
    <div className="min-h-screen bg-gray-100 py-12">
        <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Your Orders</h1>
        <div className="space-y-6">
            {OrderState.map((order,index) => (
            <div
                key={index}
                className="bg-white shadow-md rounded-lg p-4 flex items-center justify-between"
            >
                <div className="flex items-center">
                <img
                    src={order.thumbnail}
                    className="w-20 h-20 object-cover rounded-lg"
                />
                <div className="ml-4">
                    <h2 className="text-lg font-semibold">{order.title}</h2>
                    <p className="text-gray-600">Quantity :{order.count}</p>
                    <p className="text-gray-600">Order Date: {date}-{month}-{year}</p>
                    <p className="text-gray-600">Payment: Cash On Delivery</p>
                    <p
                    className={`mt-1 text-sm font-medium ${
                        order.status === "Delivered"
                        ? "text-green-600"
                        : "text-blue-600"
                    }`}
                    >
                    Status: {order.status}
                    </p>
                </div>
                </div>
                <div className="flex items-center space-x-4">
                <p className="text-gray-800 font-bold">${order.price}</p>
                <button onClick={()=> handleInvoiceId(order.id)} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                    Invoice
                </button>
                <button onClick={()=> handleCancelOrder(index,order.id)} className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                    Cancel Order
                </button>
                </div>
            </div>
            ))}
        </div>
        </div>
    </div>
    );
}

export default YourOrders;
