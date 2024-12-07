import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    invoiceData : [],
    invoiceData2: []
}

const invoiceSlice = createSlice({
    name: "invoice",
    initialState,
    reducers: {
        checkInvoice: (state,action)=>{
            const product = {
                id: action.payload.id,
                title: action.payload.title,
                thumbnail: action.payload.thumbnail,
                price: action.payload.price,
                count: action.payload.count
            }
            state.invoiceData.push(product)
        },
        LookInvoice: (state,action)=>{
            const product2 = {
                First_Name: action.payload.First_Name,
                Last_Name: action.payload.Last_Name,
                Email_Address: action.payload.Email_Address,
                Address: action.payload.Address,
                Zip_Code: action.payload.Zip_Code
            }
            state.invoiceData2.push(product2)
        },
        deleteInvoice: (state,action)=> {
            state.invoiceData = state.invoiceData.filter((items)=> items.id !== action.payload)
        },
    }
})

export const {checkInvoice,LookInvoice,deleteInvoice} = invoiceSlice.actions
export default invoiceSlice.reducer