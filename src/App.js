import React, { Component } from 'react';
import Navbar from './components/navbar/navbar.js'
import SearchWidget from './components/searchwidget/searchwidget.js'
import RepositoryImage from './components/repositoryimage/repositoryimage.js'
import RepositoryInfo from './components/repositoryinfo/repositoryinfo.js'
import RepositoryGraph from './components/repositorygraph/repositorygraph.js'
import Error from './components/error/error.js'

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repositoryOwner: "null_owner",
      repositoryName: "null_repository",
      favouriteDay: "null_day",
      favouriteTime: "null_time",
      datalabels: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'],
      dataseries: [
        [12,15,7,5,10,20,30]
      ],
      error: '',
    };

    this.changeData = this.changeData.bind(this)
    this.fetchStatistics = this.fetchStatistics.bind(this)
  }
   changeData() {
     console.log("test function please ignore")
     this.setState({dataseries: [[5,20,50,100,10]]})
   }

   // Calls github API using search entered in box, passed up from child Searchwidget component
   fetchStatistics(query) {
     console.log("searching for query: " + query)

     //
     fetch("https://api.github.com/repos/" + query)
      .then(res => res.json())
      .then(
        (result) => {
          if(result.message == undefined){
            console.log(result)
            this.setState({error: ''})
          } else {
            // Github API responds with message if error occurs (most likely 404 not found)
            console.log(result.message)
            this.setState({error: result.message})
          }
        },
        (error) => {
          console.log("an error occurred")
          console.log(error)
        }
      )
   }

  render() {
    return (
      <div className="App">
      <button onClick={this.changeData}>Test </button>
        <Navbar title="Github Repository Statistics" linkto="https://github.com/unxpctederr/repository_statistics" />
        <div id="appContainer">
          <div id="topbar">
            <SearchWidget callback={this.fetchStatistics}/>
            <Error message={this.state.error}/>
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

            <RepositoryGraph datalabels={this.state.datalabels} dataseries={this.state.dataseries} />

          </div>
        </div>
      </div>
    );
  }
}

export default App;
