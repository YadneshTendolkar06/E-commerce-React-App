import React from 'react'

function Pagination({total,page,setPage}) {
    const totalPages = Math.ceil(total / 20)

    function handlePagination(paginate){
        if(paginate >= 1 && paginate <= 10){
            setPage(paginate)
        }

    }

    return (
        <div className='flex justify-center'>
            <span onClick={()=> handlePagination(page - 1)} className='text-4xl cursor-pointer'>◀️</span>
            {
                Array.from({length: totalPages}, (_,index)=>
                    <span onClick={()=> handlePagination(index + 1)} key={index} className={page == index + 1 ? 'paginating border-2 border-black p-3 cursor-pointer' : 'border-2 border-black p-3 cursor-pointer '}>{index + 1}</span>
                )
            }
            <span onClick={()=> handlePagination(page + 1)} className='text-4xl cursor-pointer'>▶️</span>
        </div>
    )
}

export default Pagination