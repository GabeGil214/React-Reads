import React, { Component } from 'react'
import './App.css';
import propTypes from 'prop-types'
import Form from './Form'


class Book extends Component {


  render() {
    return (
      <div className="bookshelf-books">
        <ol className="books-grid">
          {this.props.books.length ? (
            this.props.books.map((book) => (
              <li key={book.id}>
                <div className="book">
                  <div className="book-top">
                    {book.imageLinks ? (
                      <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                    ) : (
                      <i className="fas fa-book-open"></i>
                    )}
                    <div className="book-shelf-changer">
                      <Form
                        library={this.props.library}
                        book={book}
                        addToShelf={this.props.addToShelf}
                        />
                    </div>
                  </div>
                  <div className="book-title">{book.title}</div>
                  <div className="book-authors"><p>{book.authors ? book.authors.reduce(function(acc, currValue, i, array) {
                      if(i === array.length && i === 1){
                        return acc;
                      } else if(i === array.length && i !== 1){
                        return acc + currValue;
                      } else {
                        return acc + ", " + currValue;
                      }
                  }) : ''}</p></div>
                </div>
              </li>
            ))) : (
              <div className="empty-results">No Books to Display</div>
            )
          }
        </ol>
      </div>
    )
  }
}

Book.propTypes = {
  books: propTypes.array.isRequired,
  addToShelf: propTypes.func.isRequired
}

export default Book
