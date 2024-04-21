// Write your code here
import {Component} from 'react'

import DestinationItem from '../DestinationItem'

import './index.css'

class DestinationSearch extends Component {
  state = {
    searchInput: '',
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props
    const searchResults = destinationsList.filter(eachUser =>
      eachUser.name.includes(searchInput),
    )
    return (
      <div className="cont">
        <h1 className="header">Destination Search</h1>
        <input type="search" className="inp" placeholder="Search.." />
        <ul className="con">
          {searchResults.map(eachItem => (
            <DestinationItem
              destinationsList={eachItem}
              key={eachItem.id}
              value={searchInput}
              onChange={this.onChangeSearchInput}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default DestinationSearch
