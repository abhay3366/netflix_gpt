
import {  useSelector } from "react-redux";
import useMoviesTriler from "../customeHooks/useMoviesTrailer";


const VideoBackground = ({ moviesId }) => {
    const trailerVideo = useSelector((store)=>store.movies.trailerVideo)
    useMoviesTriler(moviesId)
  return (
    <div>
      <iframe
        width="100%"
        height="315"
        src={"https://www.youtube.com/embed/"+trailerVideo?.key}
        title="YouTube video player"

        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        
      ></iframe>
    </div>
  );
};

export default VideoBackground;
