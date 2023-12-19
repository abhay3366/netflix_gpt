
import {  useSelector } from "react-redux";
import useMoviesTriler from "../customeHooks/useMoviesTrailer";


const VideoBackground = ({ moviesId }) => {
    const trailerVideo = useSelector((store)=>store.movies.trailerVideo)
    useMoviesTriler(moviesId)
  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
       
        src={"https://www.youtube.com/embed/"+trailerVideo?.key+"?autoplay=1&loop=1"}
        title="YouTube video player"

        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        
      ></iframe>
    </div>
  );
};

export default VideoBackground;
