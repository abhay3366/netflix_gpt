import { useEffect } from "react";
import { addNowPalyingMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constant"
import { useDispatch } from "react-redux";
const useNowPlayingMovies=()=>{
    const dispatch=useDispatch()
  const getNowPlayingMovies = async() =>{
    const data=await fetch('https://api.themoviedb.org/3/movie/now_playing?lpage=1', API_OPTIONS)
    // console.log('data: ', data);
    const json=await data.json();
    // console.log('dataa: ', json.results);
    
    // const js̥ons=await data.json();
    // console.log(jsons);
    dispatch(addNowPalyingMovies(json.results));
  }
  useEffect(()=>{
    getNowPlayingMovies()
  },[])
}
export default useNowPlayingMovies;