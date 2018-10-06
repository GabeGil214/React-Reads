import React, { Component } from 'react'
import Bookshelf from './Bookshelf'

class SearchResults extends Component {
  render() {
    return (
      <div className="search-books-results">
        <Bookshelf />
      </div>
    )
  }
}

export default SearchResults;
