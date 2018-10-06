import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Book from './Book'

class Bookshelf extends React.Component {
  render() {
    return (
      <div className="list-books-content">
        <div className="bookshelf">
          <h2 className="bookshelf-title">{this.props.shelf}</h2>
            <Book books={this.props.books}/>
        </div>
      </div>
    )
  }
}

export default Bookshelf;
