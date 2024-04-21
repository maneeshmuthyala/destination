// Write your code here

import {Component} from 'react'

import './index.css'

class DestinationItem extends Component {
  render() {
    const {destinationsList} = this.props
    const {id, name, imgUrl} = destinationsList
    return (
      <li className="list-item" key={id}>
        <img src={imgUrl} alt={name} className="img" />
        <h1>{name}</h1>
      </li>
    )
  }
}

export default DestinationItem
