import React from "react";
import { Link } from 'react-router-dom';
import './MovieItem.scss'

const MovieItem = (props) => {
  const { title, year, poster, imdbID } = props;
  return (
    <div className="card-item">
      <Link to={`/movie/${imdbID}`}>
        <div className="card-inner">
          <div className="card-top">
            <img src={poster} alt={title} />
          </div>
          <div className="card-bottom">
            <div className="card-info">
              <h4>{title}</h4>
              <p>{year}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MovieItem;
