import React from 'react'

const VideoTile = ({title,overview}) => {
    console.log('overview: ', overview);


  return (
    <div className='pt-36 px-24 w-screen pt-[10%] aspect-video absolute bg-gradient-to-r from-black'>
        <h1 className='text-3xl font-bold text-white'>{title}</h1>
        <p className='py-6 text-lg w-1/4 text-white'>{overview}</p>
        <div className='d-flex justify-between'>
        <button className="bg-white hover:bg-opacity-80 bg-opacity-50 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Play</button>
            {/* <button className='py-2   w-10 text-white bg-slate-400 text-lg mx-5'></button> */}
            <button className="bg-white bg-opacity-50 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-8">More Info</button>
        </div>
    </div>
  )
}

export default VideoTile