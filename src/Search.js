import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import propTypes from 'prop-types'
import Bookshelf from './Bookshelf'
import './App.css'

class Search extends Component {

  static propTypes = {
    books: propTypes.array.isRequired,
    addToShelf: propTypes.func.isRequired
  }

  state = {
    query: ''
  }

  updateQuery = (query) => {
      this.setState({
      query: query.trim()
    })
  }

  render() {
    const { query } = this.state;
    const { books, addToShelf } = this.props;

    const showingBooks = query === '' ? books
    : books.filter((book) => (
      book.title.toLowerCase().includes(query.toLowerCase())
    ))

    return (
      <Route exact path='/search' render = {() => (
        <div className="search-books">
          <div className="search-books-bar">
            <Link to="/Library" className="close-search">Close</Link>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title or author"
                value={this.state.query}
                onChange={(event) => this.updateQuery(event.target.value)}/>
            </div>
          </div>
          <div className="search-books-results">
            <Bookshelf
              books={showingBooks}
              addToShelf={addToShelf}
              />
          </div>
        </div>
      )} />
    )
  }
}

export default Search
