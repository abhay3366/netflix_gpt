import React from 'react'
import lang from '../utils/languageConstant'

const GptSearchBar = () => {
  return (
    <div className='flex justify-center'>
        <form className='bg-black mt-[20%] w-1/2 grid grid-cols-12'>
            <input type='text' className='p-4 m-4  col-span-9' placeholder={lang.hindi.gptSearchPlaceholder}/>
            <button className="py-2 px-4 m-3 col-span-3 bg-red-700 text-white">{lang.hindi.search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar