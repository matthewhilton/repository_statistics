import React, { Component } from 'react'
import './error.css'

class Error extends Component {
  render() {
    const { message } = this.props

    if(message != ''){
      return (
        <div>
          <b className="error"> Error: {message}</b>
        </div>
      )
    } else {
      return (
        <div></div>
      )
    }

  }
}

export default Error;
