import React, { Component } from 'react';
import Navbar from './components/navbar/navbar.js'
import SearchWidget from './components/searchwidget/searchwidget.js'
import RepositoryImage from './components/repositoryimage/repositoryimage.js'
import RepositoryInfo from './components/repositoryinfo/repositoryinfo.js'
import { Bar } from 'react-chartjs-2';

import './App.css';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repositoryOwner: "null_owner",
      repositoryName: "null_repository",
      favouriteDay: "null_day",
      favouriteTime: "null_time",
    };
  }

  render() {
    return (
      <div className="App">
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

            <Bar
              data={data}
              width={200}
              height={60}
              options={{
                responsive: true,
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
