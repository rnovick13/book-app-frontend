import React, {Component} from 'react';
import './App.css';
import HomeContainer from './containers/HomeContainer'
import DisplayContainer from './containers/DisplayContainer'

class App extends Component {

  constructor() {
    super()
  }

  render() {
    return(
      <div className="App">
        <div className="App-header">
          <h1>Book Tracker</h1>
        </div>
        <div className= "Display-Book">
          <DisplayContainer />
        </div>
        <div className= "Book-list">
          <HomeContainer />
        </div>
      </div>
    )
  }
}

export default App;
