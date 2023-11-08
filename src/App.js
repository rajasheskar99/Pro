import {Component} from 'react'
import './App.css'
import Header from './components/Header/index'
import MoveCardItem from './components/MoveCardItem/index'

class App extends Component {
  state = {movesdata: []}

  componentDidMount() {
    this.getMovesdata()
  }

  getMovesdata = async () => {
    const url = 'https://run.mocky.io/v3/3d59aba6-f03d-44b5-aa8c-1fac10657d3b'
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    const updatedData = data.Customer_Estimate_Flow.map(each => ({
      id: each.user_id,
      fromAdd: each.from_address,
      toAdd: each.to_address,
      date: each.date_created,
      distance: each.distance,
      totalItems: each.total_items,
      propertySize: each.property_size,
      estimateId: each.estimate_id,
    }))

    this.setState({movesdata: updatedData})
  }

  render() {
    const {movesdata} = this.state
    return (
      <div className="app-body">
        <Header />
        <div className="moves-section">
          <h1 className="moves-head">My Moves</h1>
          <ul className="moves-card-container">
            {movesdata.map(eachItem => (
              <MoveCardItem movedata={eachItem} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default App
