import React from 'react';
import logo from '../../logo.svg';
import './SearchHeader.css';

function handleKeyPress(e, cb) {
  if (e.key === 'Enter') cb();
}

const SearchHeader = props => (
  <div>
    <header>
      <img src={logo} alt="React Logo" />
      <h1>OMDB Search</h1>
    </header>
    <div id="search-container">
      <input
        type="text"
        value={props.searchTerm}
        onChange={props.handleUpdateSearch}
        onKeyPress={event => handleKeyPress(event, props.handleSubmitSearch)}
        placeholder="Search by movie title..."
      />
      <button onClick={props.handleSubmitSearch}>Search</button>
    </div>
  </div>
);

export default SearchHeader;
