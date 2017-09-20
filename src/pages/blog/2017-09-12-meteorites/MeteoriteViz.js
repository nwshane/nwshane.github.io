import React, {Component} from 'react'
// import * as d3 from 'd3'

class MeteoriteViz extends Component {
  shouldComponentUpdate () {
    return false
  }

  componentDidMount () {
    // d3.select('.js-meteorites-viz-container')
    // .text("It's working!!!")
  }

  render () {
    return (
      <div className='js-meteorites-viz-container'>
        Waiting for d3 to fill text in here
      </div>
    )
  }
}

export default MeteoriteViz
