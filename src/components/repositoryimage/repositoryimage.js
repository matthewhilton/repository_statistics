import React, { Component } from 'react'
import './repositoryimage.css';

class RepositoryImage extends React.Component {
  render() {
    return (
      <div className="repositoryImageContainer">
        <img ref="image" src={this.props.imageURL} />
      </div>
    );
  }
}

export default RepositoryImage;
