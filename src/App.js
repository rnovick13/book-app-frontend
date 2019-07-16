import React, {Component} from 'react';
import './App.css';
import BookContainer from './containers/BookContainer';
import NavBar from './components/NavBar';

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
