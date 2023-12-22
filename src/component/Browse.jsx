import Header from "./Header";
import useNowPlayingMovies from "../customeHooks/useNowPalyingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../customeHooks/usePopularMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";
const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  //fetch data form tmdb api usei cutome hooks
  useNowPlayingMovies();
  usePopularMovies();
  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};
export default Browse;
