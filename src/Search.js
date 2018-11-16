import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import propTypes from 'prop-types'
import { debounce } from 'throttle-debounce'
import * as BooksAPI from './BooksAPI'
import Bookshelf from './Bookshelf'
import './App.css'

class Search extends Component {
  constructor(props) {
    super(props);
    this.updateResults = debounce(150, this.updateResults);
    this.state = {
      query: '',
      books: []
    }
  }

  handleChange(e) {
    this.updateResults(e.target.value);
    this.setState({
      query: e.target.value
    })
  }

  updateResults = (query) => {

    if (query === '' || query === undefined){
      this.setState({
        books: []
      })
    } else {
      BooksAPI.search(query).then(books => {
        Array.isArray(books) ?
        this.setState({
          books: books
        }) :
        this.setState({
          books: []
        });
      })
    }



  }

  render() {
    const { query, books } = this.state;
    const { addToShelf, library } = this.props;

    return (
      <Route exact path='/search' render = {() => (
        <div className="search-books">
          <div className="search-books-bar">
            <Link to="/library" className="close-search">Close</Link>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title or author"
                value={query ? query : ''}
                onChange={this.handleChange.bind(this)}/>
            </div>
          </div>
          <div className="search-books-results">
            <Bookshelf
              library={library}
              books={books ? books : []}
              addToShelf={addToShelf}
              />
          </div>
        </div>
      )} />
    )
  }
}

Search.propTypes = {
  library: propTypes.array.isRequired,
  addToShelf: propTypes.func.isRequired
}

export default Search
