import React, { useEffect, useState } from 'react'
import {addToCart} from '../features/cartSlice'
import { useDispatch,useSelector } from 'react-redux'
import {Pagination} from './index'

function FeaturedProduct() {

    const [product,setProduct] = useState([])
    const [total, setTotal] = useState()
    const [page, setPage] = useState(1)
    const currentState = useSelector((state)=> state.search.searchData)
    const dispatch = useDispatch()
    const ProductApi = fetch(`https://dummyjson.com/products/search?q=${currentState}&limit=20&skip=${ (page - 1) * 20}`)

    useEffect(()=>{
        ProductApi.then((v)=> v.json())
        .then((v)=> {
            setProduct(v.products)
            setTotal(v.total)
        })
        .catch(()=> console.log("error"))
    },[currentState,page])

    function handleSubmitCart(id){
        product.map((items)=>{
            if(items.id === id){
                dispatch(addToCart(items))
                alert("Product is added to your cart")
            }else{
                items
            }
            // items.id === id ? {dispatch(addToCart(items)) alert("Product is added to your cart") }: items
    })
    }

    return product.length !== 0 ? (
        <div>
        <h3 className="text-3xl font-bold text-gray-800 mb-6">Featured Products</h3>

        <Pagination total={total} page={page} setPage={setPage} />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {
                product.map((items)=>
                <div
                key={items.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
            >
                <img
                src={items.thumbnail}
                className="w-full h-48 object-cover"
                />
                <div className="p-4">
                <h4 className="text-lg font-semibold text-gray-800">
                    {items.title}
                </h4>
                <p className="text-gray-600 mt-2">$ {items.price}</p>
                <button onClick={()=> handleSubmitCart(items.id)} className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
                    Add to Cart
                </button>
                </div>
                </div>
                )
            }
        </div>
        </div>
    )
    : (<div>Loading</div>)
}

export default FeaturedProduct