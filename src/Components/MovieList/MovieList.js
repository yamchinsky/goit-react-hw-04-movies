import React from "react";

const siteName = "https://www.themoviedb.org/t/p/w600_and_h900_bestv2";

const MovieList = ({ moviePoster, movieGenres, movieTitle, movieVotes }) => {
  const genres = movieGenres.map(({ id, name }) => <li key={id}>{name}</li>);
  return (
    <div>
      <img src={`${siteName}${moviePoster}`} alt="" width="200" />

      <h1>{movieTitle}</h1>
      <p>{movieVotes}</p>
      <ul>{genres}</ul>
    </div>
  );
};

export default MovieList;
