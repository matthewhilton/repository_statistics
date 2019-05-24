import React, { Component } from 'react'
import './searchwidget.css';

class SearchWidget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Update state whenever input box changes
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  // Reads state as updated before
  handleSubmit(event) {
    this.props.callback(this.state.value)
    this.setState({value: ''})
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <b className="search"> Search Repositories </b>
        <p> use format owner/repositoryname</p>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>

        <h2> {this.state.ownerName} </h2>
      </div>
    );
  }
}

export default SearchWidget;
