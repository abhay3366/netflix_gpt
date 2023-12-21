import { useEffect } from "react";
// import { API_OPTIONS } from "../utils/constant"
import Header from "./Header";
// import { useDispatch } from "react-redux"
// import { addNowPalyingMovies } from "../utils/moviesSlice"
import useNowPlayingMovies from "../customeHooks/useNowPalyingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../customeHooks/usePopularMovies";

const Browse = () => {
  //fetch data form tmdb api usei cutome hooks
  useNowPlayingMovies();
  usePopularMovies();

  // !ui
  // MainContainer
  //   -VideoContainer
  //   -videoTitle
  // SecondaryContainer
  //   -MoviesList*n
  //   -cards*n

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
