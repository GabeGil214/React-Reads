import React from 'react'
import * as BooksAPI from './BooksAPI'
import Library from './Library'
import Search from './Search'
import './App.css'
import Landing from './Landing'

class BooksApp extends React.Component {
  constructor(props){
    super(props);
    this.addToShelf = this.addToShelf.bind(this);
    this.getShelf = this.getShelf.bind(this);

    this.state = {
      books: []
    }
  }

  componentDidMount(){
    BooksAPI.getAll().then(books => {
      this.setState({
        books: books
      });
    })
  }


    addToShelf(book, shelf){
      BooksAPI.update(book, shelf);
      const id = book.id;
      var newBooks;
      if(!this.state.books.includes(book)){
        newBooks = this.state.books.concat(book);
      } else {
        newBooks = this.state.books;
      }
      const newState = newBooks.map(function(currBook){
        if(currBook.id === id){
          currBook.shelf = shelf;
        }
        return currBook;
      });
      this.setState({
        books: newState
      })
    }

  getShelf = shelf => (this.state.books.filter(book => book.shelf === shelf));

  render() {

    return (
        <div className="app">
          <Landing />
          <Library
            currentlyReading={this.getShelf('currentlyReading')}
            read={this.getShelf('read')}
            wantToRead={this.getShelf('wantToRead')}
            addToShelf={this.addToShelf}
            library={this.state.books}
            />
          <Search
            library={this.state.books}
            addToShelf={this.addToShelf}
          />
        </div>
      )}
  }

export default BooksApp
