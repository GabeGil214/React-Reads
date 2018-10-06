import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class SearchBar extends Component {
  state = {
    query: ''
  }
  updateQuery = (query) => {
      this.setState({
      query: query.trim()
    })
  }
  render(){
    return (
      <div className="search-books-bar">
        <Link to="/Library" className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title or author"
            value={this.state.query}
            onChange={(event) => this.updateQuery(event.target.value)}/>
        </div>
      </div>
    )
  }
}

export default SearchBar;
