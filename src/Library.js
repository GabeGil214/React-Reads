import React from 'react'
import './App.css'
import propTypes from 'prop-types'
import { Route, Link } from 'react-router-dom'
import Bookshelf from './Bookshelf'

class Library extends React.Component {

  render() {
    const { addToShelf, currentlyReading, read, wantToRead, library } = this.props;

    const shelves = {
      currentlyReading: {
        title: 'Currently Reading',
        key: 'currentlyReading',
        books: currentlyReading
      },
      wantToRead: {
        title: 'Want To Read',
        key: 'wantToRead',
        books: wantToRead
      },
      read: {
        title: 'Finished Reading',
        key: 'read',
        books: read
      }
    }
    return (
      <Route exact path='/library' render = {() => (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          { Object.keys(shelves).map((shelf) =>
            <Bookshelf
              key={shelves[shelf].key}
              books={shelves[shelf].books}
              shelf={shelves[shelf].title}
              addToShelf={addToShelf}
              library={library}
              />
          )}
          <div className="open-search">
            <Link to="/search">Add a book</Link>
          </div>
        </div>
      )} />
    )
  }
}

Library.propTypes = {
  read: propTypes.array.isRequired,
  wantToRead: propTypes.array.isRequired,
  currentlyReading: propTypes.array.isRequired,
  addToShelf: propTypes.func.isRequired
}

export default Library;
