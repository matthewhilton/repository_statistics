import React, { Component } from 'react';
import Navbar from './components/navbar/navbar.js'
import SearchWidget from './components/searchwidget/searchwidget.js'
import RepositoryImage from './components/repositoryimage/repositoryimage.js'
import RepositoryInfo from './components/repositoryinfo/repositoryinfo.js'

import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip  } from 'recharts';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repositoryOwner: "null_owner",
      repositoryName: "null_repository",
      favouriteDay: "null_day",
      favouriteTime: "null_time",
      data: [{name: 'Monday', commits: 200},{name: 'Tuesday', commits: 500}]
    };
  }
   test() {
     console.log("test function please ignore")
   }
  render() {
    return (
      <div className="App">
      <button onClick={this.test}>Test </button>
        <Navbar title="Github Repository Statistics" linkto="#" />
        <div id="appContainer">
          <div id="topbar">
            <SearchWidget />
            <p> <b> Owner:</b> <br  /> {this.state.repositoryOwner} </p>
            <div className="graphContainer">
              <RepositoryImage imageURL="https://via.placeholder.com/150/0000FF/FFFFFF/?text=Digital.com"/>
            </div>
          </div>

          <div id="mainpage">
            <RepositoryInfo
              name={this.state.repositoryName}
              most_day={this.state.favouriteDay}
              most_time={this.state.favouriteTime}
            />

            <LineChart width={600} height={300} data={this.state.data}>
              <Line type="monotone" dataKey="commits" stroke="#8884d8" />
              <CartesianGrid stroke="#ccc" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
            </LineChart>

          </div>
        </div>
      </div>
    );
  }
}

export default App;
