import React, { useEffect, useState } from "react";
import MovieList from "../MovieList/MovieList";
import { API_KEY, BASE_URL } from "../../common/keys/movieApiKey";
const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchMovies = async () => {
      const movieText = "Harry";
      const response = await fetch(
        `${BASE_URL}=${API_KEY}&s=${movieText}&type=movie`
      );

      const data = await response.json();
      if (data.Response === "False" || data.Error) {
        setIsLoading(false);
        throw new Error(
          "Ooops, something went wrong while trying to get the data!"
        );
      }

      console.log(data);
      setIsLoading(false);
    };

    fetchMovies().catch((err) => {
      console.log(err);
      setError(err.message);
      // 36:30
    });
  }, []);

  if (isLoading) {
    return <p>We're getting the movies, please wait!</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <React.Fragment>
      <div className="banner-img"></div>
      <MovieList />
    </React.Fragment>
  );
};

export default Home;
