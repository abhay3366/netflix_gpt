import { useEffect } from "react";
import { addNowPalyingMovies, addPopularMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constant"
import { useDispatch } from "react-redux";
const usePopularMovies=()=>{
    const dispatch=useDispatch()
  const getPopularMovies = async() =>{
    const data=await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS)
    // console.log('data: ', data);
    const json=await data.json();
    console.log('dataa: ', json.results);
    
    // const js̥ons=await data.json();
    // console.log(jsons);
    dispatch(addPopularMovies(json.results));
  }
  useEffect(()=>{
    getPopularMovies()
  },[])
}
export default usePopularMovies;