import React from 'react'
import * as BooksAPI from './BooksAPI'
import Library from './Library'
import Search from './Search'
import './App.css'

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
      const newShelf = shelf;
      const newBooks = this.state.books.map(function(currBook){
        if(currBook.id === id){
          currBook.shelf = newShelf;
        }
        return currBook;
      });
      this.setState({
        books: newBooks
      })
    }

  getShelf = shelf => (this.state.books.filter(book => book.shelf === shelf));

  render() {
    // const currentlyReading = this.getShelf('currentlyReading');
    // const read = this.getShelf('read');
    // const wantToRead = this.getShelf('wantToRead');

    return (
        <div className="app">
          <Library
            currentlyReading={this.getShelf('currentlyReading')}
            read={this.getShelf('read')}
            wantToRead={this.getShelf('wantToRead')}
            addToShelf={this.addToShelf}/>
          <Search
            books={this.state.books}
            addToShelf={this.addToShelf}
          />
        </div>
      )}
  }

export default BooksApp
