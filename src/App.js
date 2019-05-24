import React, { Component } from 'react';
import Navbar from './components/navbar/navbar.js'
import SearchWidget from './components/searchwidget/searchwidget.js'
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
      repositoryImageURL: "https://github.com/identicons/github.png",
      favouriteDay: "null_day",
      favouriteTime: "null_time",
      datalabels: ['Sun','Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'],
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
   };

   // Calls github API using search entered in box, passed up from child Searchwidget component
   fetchStatistics(query) {
     console.log("searching for query: " + query)

     // Fetch Repository image, url and owner
     fetch("https://api.github.com/repos/" + query)
      .then(res => res.json())
      .then(
        (result) => {
          if(result.message == undefined){
            // Update state to add data from response
            this.setState({
              error: '',
              repositoryImageURL: result.owner.avatar_url,
              repositoryName: result.name,
              repositoryOwner: result.owner.login,
            })

            // Now get repository commit activity

            fetch("https://api.github.com/repos/"+this.state.repositoryOwner+"/"+this.state.repositoryName+"/stats/commit_activity")
             .then(res => res.json())
             .then(
               (result) => {
                 var averageEachDay = [0,0,0,0,0,0,0]

                 // Make running total of values each day
                 for(var i = 0; i < result.length; i++){
                   // Get array containing commits per each day in a week (starting sunday)
                   var weeklyData = result[i]['days']
                   // Add data into one array
                   for(var x = 0; x < 7; x++){
                     var dailyData = weeklyData[x]
                     averageEachDay[x] += dailyData
                   }

                   /// TODO: work out favourite day to commit
                 }

                 // Divide to get average
                 for(var x = 0; x < averageEachDay.length; x++){
                   averageEachDay[x] = Math.round(averageEachDay[x] / result.length)
                 }

                 //Update state with data


               },
               (error) => {
                 console.log("an error occurred")
                 console.log(error)
               }
             )

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
   };



  render() {
    return (
      <div className="App">
      <button onClick={this.changeData}>Test </button>
        <Navbar title="Github Repository Statistics" linkto="https://github.com/unxpctederr/repository_statistics" />
        <div id="appContainer">
          <div id="topbar">
            <SearchWidget callback={this.fetchStatistics}/>
            <Error message={this.state.error}/>
          </div>

          <div id="mainpage">

            <RepositoryInfo
              imageUrl={this.state.repositoryImageURL}
              name={this.state.repositoryName}
              owner={this.state.repositoryOwner}
              most_day={this.state.favouriteDay}
            />

            <RepositoryGraph datalabels={this.state.datalabels} dataseries={this.state.dataseries} />

          </div>
        </div>
      </div>
    );
  }
}

export default App;
