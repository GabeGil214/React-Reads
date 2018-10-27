import React from 'react'
import './App.css'
import Book from './Book'
import propTypes from 'prop-types'

class Bookshelf extends React.Component {
  render() {
    return (
      <div className="list-books-content">
        <div className="bookshelf">
          <h2 className="bookshelf-title">{this.props.shelf}</h2>
            <Book
              books={this.props.books}
              addToShelf={this.props.addToShelf}/>
        </div>
      </div>
    )
  }
}

Bookshelf.propTypes = {
  books: propTypes.array.isRequired,
  addToShelf: propTypes.func.isRequired
}

export default Bookshelf;
