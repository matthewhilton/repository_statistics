import React, { Component } from 'react'
import "./repositoryinfo.css"

class RepositoryInfo extends Component {
  render() {
    return (
      <div id="repositoryinfo">
        <div>
          <img ref='img' src={this.props.imageUrl} />
        </div>

        <div>
            <b> Owner: </b>
            <h2> {this.props.owner} </h2>
        </div>

        <div>
          <b> Name: </b>
          <h2> {this.props.name} </h2>
        </div>

        <div>
          <b> Favourite day to commit: </b>
          <h2> {this.props.most_day} </h2>
        </div>
        
      </div>
    )
  }
}

export default RepositoryInfo;
