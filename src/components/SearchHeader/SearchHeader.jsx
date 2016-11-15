import React, { Component } from 'react';
import logo from '../../logo.svg';
import './SearchHeader.css';

class SearchHeader extends Component {
  render() {
    return (
      <div>
        <header>
          <img src={logo} alt="React Logo" />
          <h1>OMDB Search</h1>
        </header>
        <div id="search-container">
          <input
            type="text"
            value={this.props.searchTerm}
            onChange={this.props.handleUpdateSearch}
          />
          <button onClick={this.props.handleSubmitSearch}>Search</button>
        </div>
      </div>
    );
  }
}

export default SearchHeader;
