import React from 'react'
import MoviesCard from './MoviesCard'

const MoviesList = ({title,movies}) => {
    // console.log('movies: ', movies);
  return (
    <div>
        <div>
            <h1>{title}</h1>
            <div>
                <MoviesCard />
            </div>
        </div>
    </div>
  )
}

export default MoviesList