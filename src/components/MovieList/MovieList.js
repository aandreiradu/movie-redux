import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies, getAllShows } from "../../store/movies-slice";
import MovieItem from '../MovieItem/MovieItem';
import './MovieList.scss';

const MovieList = () => {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);
  console.log(movies);

  let renderedMovies = Object.keys(movies).length && movies.map((movie, index) => (
    <MovieItem
      key={index}
      title={movie.Title}
      year={movie.Year}
      type={movie.Type}
      poster={movie.Poster}
      imdbID={movie.imdbID}
    />
  ));

  let renderedShows = Object.keys(shows).length && shows.map((show, index) =>
    <MovieItem
      key={index}
      title={show.Title}
      year={show.Year}
      type={show.Type}
      poster={show.Poster}
      imdbID={show.imdbID}
    />

  )

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">
          {renderedMovies}
        </div>
      </div>
      <div className="show-list">
        <h2>Shows</h2>
        <div className="movie-container">
          {renderedShows}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
