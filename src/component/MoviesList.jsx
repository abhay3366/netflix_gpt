import MoviesCard from "./MoviesCard";
import PropTypes from "prop-types";

const MoviesList = ({ title, movies }) => {
  MoviesList.propTypes = {
    title: PropTypes.string.isRequired,
    movies: PropTypes.array.isRequired,
  };
  // console.log('movies: ', movies);
  return (
    <div className=" px-6 bg-transparent">
    <h1 className="text-3xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll bg-black">
        
        <div className="flex">
          {movies &&
            movies.map((el) => (
              <MoviesCard key={el.id} posterPath={el.poster_path} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default MoviesList;
