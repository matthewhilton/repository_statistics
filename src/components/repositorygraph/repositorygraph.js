import React, { Component } from 'react'
import ChartistGraph from 'react-chartist';
import './chartist.min.css'
import './repositorygraph.css'

class RepositoryGraph extends Component {
  render() {
    var options = {
      low: 0,
      showArea: true,
      axisY: {
        labelInterpolationFnc: function(value, index) {
          return index % 2 === 0 ? value : null;
        }
      },
    };

    var type = "Line"

    var data = {
      labels: this.props.datalabels,
      series: this.props.dataseries,
    }

    return (
      <div id="repositoryGraph">
        <ChartistGraph data={data} options={options} type={type}/>
      </div>
    )
  }
}

export default RepositoryGraph;
