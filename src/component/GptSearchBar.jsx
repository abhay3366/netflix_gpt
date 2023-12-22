import React from 'react'

const GptSearchBar = () => {
  return (
    <div className='flex justify-center'>
        <form className='bg-black mt-[20%] w-1/2 grid grid-cols-12'>
            <input type='text' className='p-4 m-4  col-span-9' placeholder='What would you like to search'/>
            <button className="py-2 px-4 m-3 col-span-3 bg-red-700 text-white">Search</button>
        </form>
    </div>
  )
}

export default GptSearchBar