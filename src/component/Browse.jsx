import { useEffect } from "react"
import { API_OPTIONS } from "../utils/constant"
import Header from "./Header"
const Browse = () => {
  const getNowPlayingMovies = async() =>{
    const data=await fetch('https://api.themoviedb.org/3/movie/now_playing?lpage=1', API_OPTIONS)
    const js̥̥̥on=await data.json();
    console.log("🚀 ~ file: Browse.jsx:8 ~ getNowPlayingMovies ~ js̥̥̥on:", js̥̥̥on)
   
  }
  useEffect(()=>{
    getNowPlayingMovies()
  },[])
  return (
    <div><Header/></div>
  )
}

export default Browse