import React, {Component} from 'react'
import data from '~/tmp/biggest10.json'
// import * as d3 from 'd3'

class MeteoriteViz extends Component {
  shouldComponentUpdate () {
    return false
  }

  componentDidMount () {
    d3.select('.js-meteorites-viz-container')
    .selectAll('div')
    .data(data)
    .append('div')
    .text((d) => (d.name))
  }

  render () {
    return (
      <div className='js-meteorites-viz-container'>
        {data[0].name}
      </div>
    )
  }
}

export default MeteoriteViz
