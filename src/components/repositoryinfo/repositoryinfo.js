import React, { Component } from 'react'
import "./repositoryinfo.css"

class RepositoryInfo extends Component {
  render() {
    const { name, most_day, most_time } = this.props

    return (
      <div id="repositoryinfo">
        <div>
          <b> Name: </b>
          <h2> {name} </h2>
        </div>

        <div>
          <b> Favourite day to commit: </b>
          <h2> {most_day} </h2>
        </div>

        <div>
          <b> Favourite time to commit: </b>
          <h2> {most_time} </h2>
        </div>

      </div>
    )
  }
}

export default RepositoryInfo;
