import React from "react";
import PropTypes from "prop-types";

const siteName = "https://www.themoviedb.org/t/p/w600_and_h900_bestv2";

const MovieList = ({ moviePoster, movieGenres, movieTitle, movieVotes }) => {
  const genres = movieGenres.map(({ id, name }) => <li key={id}>{name}</li>);
  return (
    <div>
      <img src={`${siteName}${moviePoster}`} alt="" width="200" />

      <h1 className="movie-item">{movieTitle}</h1>
      <p className="movie-item">{movieVotes}</p>
      <ul className="movie-item">Genres:{genres}</ul>
    </div>
  );
};

MovieList.PropTypes = {
  moviePoster: PropTypes.string.isRequired,
  movieGenres: PropTypes.string.isRequired,
  movieTitle: PropTypes.object.isRequired,
  movieVotes: PropTypes.number.isRequired,
};

export default MovieList;
