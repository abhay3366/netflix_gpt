import { useEffect } from "react";
import { addTrailerVideo } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";

const useMoviesTriler=(moviesId)=>{
    const dispatch=useDispatch()
   

//   console.log(moviesId);
  const getMoviesVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${moviesId}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();
    // console.log("json: ", json);

    const filterData = json.results.filter((video) => video.type == "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    // console.log("Trailer: ", trailer);
    dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
    getMoviesVideos();
  },[]);
};




export default useMoviesTriler;