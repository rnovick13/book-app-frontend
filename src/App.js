import React, {Component} from 'react';
import './App.css';
import BookContainer from './containers/BookContainer';

class App extends Component {
  render() {
    return(
      <div className="App">
        <h1>Book Tracker</h1>
        <NavBar />
        <BookContainer />
      </div>
    )
  }
}

export default App;
