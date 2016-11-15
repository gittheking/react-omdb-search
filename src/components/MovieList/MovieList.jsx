import React, { Component } from 'react';
import MovieListItem from '../MovieListItem/MovieListItem';
import './MovieList.css';

class MovieList extends Component {
  render() {
    const movies = this.props.movies.map((movie, i) => {
      return (
        <MovieListItem
          key={i}
          title={movie.Title}
          year={movie.Year}
          poster={movie.Poster}
        />
      );
    });

    return (
      <div id="results-container">
        {movies}
      </div>
    );
  }
}

export default MovieList;
