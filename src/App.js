import React from 'react'
import * as BooksAPI from './BooksAPI'
import Library from './Library'
import Search from './Search'
import './App.css'

class BooksApp extends React.Component {
  componentDidMount(){
    BooksAPI.getAll().then(books => {
      console.log(books);
      this.setState({
        books: books
      });
    })
  }
  state = {
    books: [],
    showSearchPage: false
    /*currentlyReading: ,
    read: ,
    wantToRead:*/
  }

  getShelf(shelf){
    return this.state.books.filter(book => book.shelf == shelf);
  }

  render() {

    return (
        <div className="app">
          <Library
            currentlyReading={this.getShelf('currentlyReading')}
            wantToRead={this.getShelf('wantToRead')}
            read={this.getShelf('read')}/>
          <Search />
        </div>
      )}
  }

export default BooksApp
