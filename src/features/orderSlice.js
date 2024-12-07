import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    order: []
}

const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
        addOrder: (state, action)=> {
            const orderData = {
                id: action.payload.id,
                title: action.payload.title,
                thumbnail: action.payload.thumbnail,
                status: "In Transit",
                price: action.payload.price,
                count: action.payload.count
            }
            state.order.push(orderData)
        },
        deleteOrder: (state,action)=> {
            state.order = state.order.filter((_,index)=> index !== action.payload)
        },
    }
})

export const {addOrder, deleteOrder} = orderSlice.actions
export default orderSlice.reducer