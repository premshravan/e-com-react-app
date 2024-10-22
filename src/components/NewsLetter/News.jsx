import React from 'react'

const News = () => {
  return (
    <div className='flex justify-center h-full w-full items-center py-10 px-2 bg-gray-600 rounded'>
        <div className='max-w-sm w-full'>
            <h1 className='py-3 font-bold text-2xl'>Subscribe for more updates:</h1>
            <div className='flex w-full'>
                <input type="email" className='w-full border-red-500 rounded h-7 text-black font-semibold text-xl focus:outline-none focus:border-emerald-700 py-4 px-1' />
                <button className='bg-black text-white px-4 rounded'>Send</button>
            </div>
        </div>
    </div>
  )
}

export default News