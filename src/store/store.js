import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/AuthSlice"
import cartSlice from "../features/cartSlice"
import searchSlice from '../features/searchSlice'
import orderSlice from '../features/orderSlice'
import invoiceSlice from '../features/InvoiceSlice'

const store = configureStore({
    reducer: {
        auth: authSlice,
        cart: cartSlice,
        search: searchSlice,
        order: orderSlice,
        invoice: invoiceSlice
    }
})

export default store