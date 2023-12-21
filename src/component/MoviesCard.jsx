import React from 'react'
import { IMF_CDN_URL } from '../utils/constant'

const MoviesCard = ({posterPath}) => {
  // console.log('posterPath: ', posterPath);
  return (
    <div className='w-52 pr-4'>
      <img src={IMF_CDN_URL+posterPath} alt="name of movies" />
    </div>
  )
}

export default MoviesCard