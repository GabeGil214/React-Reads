import React from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import Bookshelf from './Bookshelf'
import { Link } from 'react-router-dom'

class Library extends React.Component {
  render() {
    return (
      <Route exact path='/library' render = {() => (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
            <Bookshelf
              books={this.props.currentlyReading}
              shelf='Currently Reading'
              />
            <Bookshelf
              books={this.props.wantToRead}
              shelf='Want To Read'
              />
            <Bookshelf
              books={this.props.read}
              shelf='Finished Reading'
              />
          </div>
          <div className="open-search">
            <Link to="/search" onClick={() => this.setState({ showSearchPage: true })}>Add a book</Link>
          </div>
        </div>
      )} />
    )
  }
}

export default Library;
