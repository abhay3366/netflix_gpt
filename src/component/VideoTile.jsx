import React from 'react'

const VideoTile = ({title,overview}) => {
    console.log('overview: ', overview);


  return (
    <div className='pt-36 px-24'>
        <h1 className='text-3xl font-bold'>{title}</h1>
        <p className='py-6 text-lg w-1/4'>{overview}</p>
        <div className='d-flex justify-between'>
        <button className="bg-gray-500 bg-opacity-50 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded">Play</button>
            {/* <button className='py-2   w-10 text-white bg-slate-400 text-lg mx-5'></button> */}
            <button className="bg-gray-500 bg-opacity-50 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded mx-8">More Info</button>
        </div>
    </div>
  )
}

export default VideoTile