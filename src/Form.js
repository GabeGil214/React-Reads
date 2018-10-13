import React, { Component } from 'react'
import './App.css';
import propTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'


class Form extends Component {

  constructor(props){
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      selectValue: ''
    }
  }

  componentDidMount(){
    BooksAPI.get(this.props.book.id).then(book => {
      this.setState({
        selectValue: book.shelf
      });
    })
  }

  handleSubmit(e){
    this.setState({
      selectValue: e.target.value
    })
    BooksAPI.update(this.props.book, e.target.value);
  }

  render(){
    return(
        <select value={this.state.selectValue}
          className="select-menu"
          onChange={this.handleSubmit}>
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
    )
  }
}

Form.propTypes = {
  book: propTypes.object.isRequired
}


export default Form
