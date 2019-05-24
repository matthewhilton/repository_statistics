import React, { Component } from 'react'

class TryButton extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.props.callback(this.props.tryit)
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}> {this.props.tryit} </button>
      </div>
    )
  }
}

export default TryButton;
