import React from 'react'
import * as BooksAPI from './BooksAPI'
import Library from './Library'
import Landing from './Landing'
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

  getShelf = shelf => (this.state.books.filter(book => book.shelf === shelf))

  addToShelf(book, shelf){
    BooksAPI.update(book, shelf).then(books => {
      this.setState({
        books:books
      });
    })
  }

  render() {

    return (
        <div className="app">
          <Landing />
          <Library
            currentlyReading={this.getShelf('currentlyReading')}
            wantToRead={this.getShelf('wantToRead')}
            read={this.getShelf('read')}
            addToShelf={this.addToShelf}/>
          <Search
            books={this.state.books}
            addToShelf={this.addToShelf}
          />
        </div>
      )}
  }

export default BooksApp
