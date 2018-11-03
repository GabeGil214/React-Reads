import React, { Component } from 'react'
import './App.css';
import propTypes from 'prop-types'


class Form extends Component {

  constructor(props){
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      selectValue: 'none'
    }
  }

  componentDidMount(){
    var inLibrary = this.props.library.filter((book) => (
      book.id === this.props.book.id
    ))

    if(inLibrary.length){
      var shelf = inLibrary[0].shelf;
      this.setState({
        selectValue: shelf
      });
    }

  }

  handleSubmit(e){
    this.props.addToShelf(this.props.book, e.target.value);
    this.setState({
      selectValue: e.target.value
    });
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
  book: propTypes.object.isRequired,
  addToShelf: propTypes.func.isRequired
}


export default Form
