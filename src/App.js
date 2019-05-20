import React, { Component } from 'react';
import Navbar from './components/navbar/navbar.js'
import SearchWidget from './components/searchwidget/searchwidget.js'
import RepositoryImage from './components/repositoryimage/repositoryimage.js'

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repositoryOwner: "null",
      repositoryName: "null"
    };
  }

  render() {
    return (
      <div className="App">
        <Navbar title="Github Repository Statistics Search" linkto="#" />
        <div id="appContainer">
          <div id="sidebar">
            <SearchWidget />
            <p> <b> Owner:</b> <br  /> {this.state.repositoryOwner} </p>
            <RepositoryImage imageURL="https://via.placeholder.com/150/0000FF/FFFFFF/?text=Digital.com"/>
          </div>

          <div id="mainpage">
            <h2> { this.state.repositoryName } </h2>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
