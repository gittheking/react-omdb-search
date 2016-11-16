import React from 'react';
import './MovieListItem.css';

const MovieListItem = props => (
      <div className="movie-item">
        <h2>{`${props.title} (${props.year})`}</h2>
        <img src={props.poster} alt={props.title} />
        <a href={`http://imdb.com/title/${props.imdbID}`}>More Info</a>
      </div>
    );

export default MovieListItem;
