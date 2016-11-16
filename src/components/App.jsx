import React, { Component } from 'react';
import SearchHeader from './SearchHeader/SearchHeader';
import MovieList from './MovieList/MovieList';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      searchTerm: '',
      movies: [],
      currentPage: 1,
      totalResults: 0
    }
  }

  handleUpdateSearch(e) {
    console.log(e.key);
    this.setState({
      searchTerm: e.target.value
    });
  }

  handleSubmitSearch(page=1) {
    fetch(`http://www.omdbapi.com/?s=${this.state.searchTerm}&page=${page}`)
    .then(r => r.json())
    .then((data) => {
      this.setState({
        movies: data.Search,
        totalResults: data.totalResults,
        currentPage: page
      });
    })
    .catch(err => console.log('Error: ',err));
  }

  displayNext() {
    if (this.state.totalResults > this.state.currentPage * 10) {
      return (
          <button
            id="next-button"
            onClick={() => this.handleSubmitSearch(this.state.currentPage + 1)}
          >
            Next Page
          </button>
        );
    }
  }

  displayPrev() {
    if (this.state.currentPage > 1) {
      return (
          <button
            id="prev-button"
            onClick={() => this.handleSubmitSearch(this.state.currentPage - 1)}
          >
            Previous Page
          </button>
        );
    }
  }

  render() {
    return (
      <div className="App">
        <SearchHeader
          searchTerm={this.state.searchTerm}
          handleUpdateSearch={event => this.handleUpdateSearch(event)}
          handleSubmitSearch={()=> this.handleSubmitSearch()}
        />
        <MovieList 
          movies={this.state.movies}
        />
        {this.displayPrev()}
        {this.displayNext()}
      </div>
    );
  }
}

export default App;
