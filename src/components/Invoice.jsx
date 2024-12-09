import React from "react";
import { useSelector } from "react-redux";

const Invoice = () => {

    const invoiceState = useSelector((state)=> state.invoice.invoiceData)
    const invoiceState2 = useSelector((state)=> state.invoice.invoiceData2)
    const today = new Date()
    const year = today.getFullYear()
    const month = today.getMonth()
    const date = today.getDate()

    const subTotal = invoiceState.reduce((acc, value)=>{
        const {count,price} = value
        acc = acc + (price * count)
        return acc
    },0)
  return (
    <div className="min-h-screen bg-gray-100 md:p-6 p-3">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md md:p-6 p-2 ">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">Invoice</h1>

        {/* Invoice Details */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-600">Invoice Details</h2>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="p-2 border border-gray-300 rounded-lg w-full">{(Math.random() * Date.now()).toFixed(0)}</div>
            <div className="p-2 border border-gray-300 rounded-lg w-full">{date}/{month}/{year}</div>
          </div>
        </div>

        {/* Items Table */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-600">Items</h2>
          <table className="table-auto w-full mt-4 border-collapse border border-gray-300">
            <thead>
                <tr className="bg-gray-100">
                <th className="border border-gray-300 p-2 text-left">Item</th>
                <th className="border border-gray-300 p-2 text-right">Quantity</th>
                <th className="border border-gray-300 p-2 text-right">Price</th>
                <th className="border border-gray-300 p-2 text-right">Total</th>
                </tr>
            </thead>
            <tbody>
                {
                invoiceState.map((items,index)=>
                <tr key={items.id}>
                    <td className="border border-gray-300 p-2">{items.title}</td>
                    <td className="border border-gray-300 p-2 text-right">{items.count}</td>
                    <td className="border border-gray-300 p-2 text-right">${items.price}</td>
                    <td className="border border-gray-300 p-2 text-right">${items.price * items.count}</td>
                </tr>
                )
                }

            </tbody>
            </table>
        </div>

        {/* Add Item Section */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-600">Customer Details</h2>
          {
            invoiceState2.map((item,index) =>
            <div key={index} className="grid grid-cols-4 gap-4 mt-4">
            <div className="p-2 border border-gray-300 rounded-lg w-full col-span-2">Name: {item.First_Name} {item.Last_Name}</div>
            <div className="p-2 border border-gray-300 rounded-lg w-full">Address: {item.Address}</div>
            <div className="p-2 border border-gray-300 rounded-lg w-full">Zip Code: {item.Zip_Code}</div>
          </div>
            )
          }
        </div>

        {/* Summary */}
        <div className="border-t border-gray-300 pt-4">
          <div className="flex justify-between items-center">
            <span className="font-semibold text-gray-600">Subtotal:</span>
            <span className="font-bold text-gray-800">${subTotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between items-center mt-2">
            <span className="font-semibold text-gray-600">Shipping:</span>
            <span className="font-bold text-gray-800">$5</span>
          </div>
          <div className="flex justify-between items-center mt-2">
            <span className="font-semibold text-gray-600">Total:</span>
            <span className="font-bold text-gray-800">${(subTotal + 5).toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
