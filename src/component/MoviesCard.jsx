import React from 'react'
import { IMF_CDN_URL } from '../utils/constant'

const MoviesCard = ({posterPath}) => {
  return (
    <div>
      <img src={IMF_CDN_URL+posterath} alt="name of movies" />
    </div>
  )
}

export default MoviesCard