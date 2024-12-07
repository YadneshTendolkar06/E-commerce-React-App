import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchData : ''
}


const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        searchProduct: (state,action)=> {
            state.searchData = action.payload
        }
    }
})

export const {searchProduct} = searchSlice.actions
export default searchSlice.reducer