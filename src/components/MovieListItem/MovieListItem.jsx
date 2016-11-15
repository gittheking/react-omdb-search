import React, { Component } from 'react';
import './MovieListItem.css';

class MovieListItem extends Component {
  render() {
    return (
      <div className="movie-item">
        <h2>{`${this.props.title} (${this.props.year})`}</h2>
        <img src={this.props.poster} alt={this.props.title} />
        <a href={`http://imdb.com/title/${this.props.imdbID}`}>more info...</a>
      </div>
    );
  }
}

export default MovieListItem;
