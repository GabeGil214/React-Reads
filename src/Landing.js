import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import './landing.css'


class Landing extends Component {
  render(){
    return (
      <Route exact path='/'  render = {() => (
          <div className="hero-image-container">
            <div className="hero-layer">
              <div className="hero-text-container">
                <h2>Welcome to My Reads!</h2>
                <div className="link-container">
                  <Link to="/search"><button>Search for Books</button></Link>
                  <Link to="/library"><button>My Library</button></Link>
                </div>
              </div>
            </div>
          </div>
        )}
      />
    )
  }
}

export default Landing
