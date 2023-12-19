import { useSelector } from "react-redux"
import MoviesList from "./MoviesList"


const SecondaryContainer = () => {
    const  movies=useSelector((store)=>store.movies)
    // console.log('movies: ', movies);


  return (
    <div>
       <MoviesList title={"Now Playing"} movies={movies.nowPlayingMovies} />
    </div>
  )
}

export default SecondaryContainer