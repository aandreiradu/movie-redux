import React, { useEffect } from "react";
import MovieList from "../MovieList/MovieList";

import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows } from '../../store/movies-slice';

const Home = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncMovies());
    dispatch(fetchAsyncShows());
  }, [dispatch]);

  return (
    <React.Fragment>
      <div className="banner-img"></div>
      <MovieList />
    </React.Fragment>
  );
};

export default Home;
