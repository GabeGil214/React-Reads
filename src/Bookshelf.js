import React from 'react'
import './App.css'
import Book from './Book'
import propTypes from 'prop-types'

function Bookshelf(props) {
    return (
      <div className="list-books-content">
        <div className="bookshelf">
          <h2 className="bookshelf-title">{props.shelf}</h2>
            <Book
              books={props.books}
              addToShelf={props.addToShelf}
              library={props.library ? props.library : []}/>
        </div>
      </div>
    )
}

Bookshelf.propTypes = {
  books: propTypes.array.isRequired,
  addToShelf: propTypes.func.isRequired
}

export default Bookshelf;
