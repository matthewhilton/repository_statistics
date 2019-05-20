import React, { Component } from 'react'
import './navbar.css';

class Navbar extends Component {
  render() {
    const { title, linkto } = this.props

    return (
      <div>
        <span id="navbarContainer">
          <h1> { title } </h1>
          <a href={linkto}>
            <button className="whiteButton"> View Source on Github </button>
          </a>
        </span>
      </div>
    )
  }
}

export default Navbar;
