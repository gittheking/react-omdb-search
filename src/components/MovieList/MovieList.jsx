import React from 'react';
import MovieListItem from '../MovieListItem/MovieListItem';
import './MovieList.css';

const MovieList = props => {
  const movies = props.movies.map((movie, i) => {
    return (
      <MovieListItem
        key={i}
        title={movie.Title}
        year={movie.Year}
        poster={movie.Poster}
        imdbID={movie.imdbID}
      />
    );
  });

  return (
    <div id="results-container">
      {movies}
    </div>
  );
}

export default MovieList;
