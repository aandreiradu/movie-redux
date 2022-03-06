import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncMovieOrShowByID, getDetailsById } from '../../store/movies-slice';
import './MovieDetails.scss';
import { movieActions } from '../../store/movies-slice';

const MovieDetails = () => {
  const { imdbId } = useParams();
  const dispatch = useDispatch();
  const detailsData = useSelector(getDetailsById)


  useEffect(() => {
    dispatch(fetchAsyncMovieOrShowByID(imdbId));

    return () => {
      dispatch(movieActions.removeSelectedMoviedOrShow());
    }
  }, [dispatch, imdbId]);

  return (
    <div className="movie-section">
      {Object.keys(detailsData).length === 0 ? (<div>Loading...</div>) : (
        <>
          <div className="section-left">
            <div className="movie-title">
              {detailsData.Title}
            </div>
            <div className="movie-raiting">
              <span>
                IMDB Rating <i className="fa fa-start"> : {detailsData.imdbRating}</i>
              </span>
              <span>
                IMDB Votes <i className="fa fa-thumbs-up"> : {detailsData.imdbVotes}</i>
              </span>
              <span>
                IMDB Runtime <i className="fa fa-film"> : {detailsData.Runtime}</i>
              </span>
              <span>
                IMDB Year <i className="fa fa-calendar"> : {detailsData.Year}</i>
              </span>
            </div>
            <div className="movie-plot">
              {detailsData.Plot}
            </div>
            <div className="movie-info">
              <div>
                <span>Director</span>
                <span>{detailsData.Director}</span>
              </div>
              <div>
                <span>Start</span>
                <span>{detailsData.Actors}</span>
              </div>
              <div>
                <span>Genres</span>
                <span>{detailsData.Genre}</span>
              </div>
              <div>
                <span>Language</span>
                <span>{detailsData.Language}</span>
              </div>
              <div>
                <span>Awards</span>
                <span>{detailsData.Awards}</span>
              </div>
            </div>
          </div>
          <div className="section-right">
            <img src={detailsData.Poster} alt={detailsData.Title} />
          </div>
        </>
      )}

    </div>
  );
};

export default MovieDetails;
