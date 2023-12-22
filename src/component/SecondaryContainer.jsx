import { useSelector } from "react-redux"
import MoviesList from "./MoviesList"
import { useEffect } from "react";


const SecondaryContainer = () => {
    const  movies=useSelector((store)=>store.movies)
    console.log('movies: ', movies);
    // console.log('moviessss: ', movies.PopularMovies);

    useEffect(() => {
      // console.log('moviessss: ', movies.PopularMovies);
    }, [movies.PopularMovies]);
  return (
    <div className="bg-black">
      <div className="-mt-48 relative z-10 ">
      <MoviesList title={"Now Playing"} movies={movies.nowPlayingMovies} /></div>
       
       <MoviesList title={"Trending"} movies={movies.nowPlayingMovies} />
       <MoviesList title={"Popular"} movies={movies.PopularMovies} />
       <MoviesList title={"Upcoming Movies"} movies={movies.nowPlayingMovies} />
       <MoviesList title={"Now Playing"} movies={movies.nowPlayingMovies} />
    </div>
  )
}

export default SecondaryContainer;