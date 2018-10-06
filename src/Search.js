import React, { Component } from 'react'
import SearchBar from './SearchBar'
import SearchResults from './SearchResults'
import { Route } from 'react-router-dom'

class Search extends Component {
  render() {
    return (
      <Route exact path='/search' render = {() => (
        <div className="search-books">
          <SearchBar />
          <SearchResults />
        </div>
      )} />
    )
  }
}

export default Search
