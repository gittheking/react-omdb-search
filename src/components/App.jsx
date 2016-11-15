import React, { Component } from 'react';
import SearchHeader from './SearchHeader/SearchHeader';
import MovieList from './MovieList/MovieList';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      searchTerm: '',
      movies: []
    }
  }

  handleUpdateSearch(e) {
    this.setState({
      searchTerm: e.target.value
    });
  }

  handleSubmitSearch(e) {
    fetch(`http://www.omdbapi.com/?s=${this.state.searchTerm}`)
    .then(r => r.json())
    .then((data) => {
      this.setState({
        movies: data.Search
      });
      console.log(this.state.movies);
    })
    .catch(err => console.log('Error: ',err));
  }

  render() {
    return (
      <div className="App">
        <SearchHeader
          searchTerm={this.state.searchTerm}
          handleUpdateSearch={event => this.handleUpdateSearch(event)}
          handleSubmitSearch={event => this.handleSubmitSearch(event)}
        />
        <MovieList 
          movies={this.state.movies}
        />
      </div>
    );
  }
}

export default App;
