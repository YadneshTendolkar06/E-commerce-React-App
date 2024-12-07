import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: []
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state,action)=> {
            const addcart = {
                id: action.payload.id,
                title: action.payload.title,
                thumbnail: action.payload.thumbnail,
                price: action.payload.price,
                count: 1
            }
            state.cart.push(addcart)
        },
        removeCart: (state, action)=>{
            state.cart = state.cart.filter((items)=> items.title !== action.payload)
        },
        IncreaseQuantity: (state,action)=>{
            const product = state.cart.find((items)=> items.id === action.payload)
            if (product) {
                product.count += 1;
            }
        },
        DecreaseQuantity: (state,action)=>{
            const product = state.cart.find((items)=> items.id === action.payload)
            if (product && product.count > 1) {
                product.count -= 1;
            }
        }
    }
})

export const {addToCart,removeCart, IncreaseQuantity,DecreaseQuantity} = cartSlice.actions
export default cartSlice.reducer