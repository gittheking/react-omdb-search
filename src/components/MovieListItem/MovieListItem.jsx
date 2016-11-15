import React, { Component } from 'react';
import './MovieListItem.css';

class MovieListItem extends Component {
  render() {
    return (
      <div className="movie-item">
        <h2>{`${this.props.title} (${this.props.year})`}</h2>
        <img src={this.props.poster} alt={this.props.title} />
      </div>
    );
  }
}

export default MovieListItem;
