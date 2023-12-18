import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";

const VideoBackground = ({ moviesId }) => {
  console.log(moviesId);
  const getMoviesVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${moviesId}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();
    console.log("json: ", json);

    const filterData = json.results.filter((video) => video.type == "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    console.log("Trailer: ", trailer);
  };
  useEffect(() => {
    getMoviesVideos();
  });
  return (
    <div>
      <iframe
        width="100%"
        height="315"
        src="https://www.youtube.com/embed/1oZUCkJEuvo?si=xyliuRuhmzHXK3eY&autoplay=1"
        title="YouTube video player"

        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
