import { useSelector } from "react-redux"
import VideoBackground from "./VideoBackground";
import VideoTile from "./VideoTile";


const MainContainer = () => {
    const movies=useSelector((store)=>store.movies?.nowPlayingMovies);
    if(movies===null) return; //this process is no as early return
    const mainMovies=movies[0];
    console.log('mainMovies: ', mainMovies);

    const {original_title,overview,id}=mainMovies;
    console.log('original_title: ', original_title);
    
  return (
    <div>
        <VideoTile title={original_title} overview={overview}/>
        <VideoBackground moviesId={id}/>
    </div>
  )
}

export default MainContainer