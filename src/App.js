import React, {Component} from 'react';
import './App.css';
import HomeContainer from './containers/HomeContainer'
const API = `http://localhost:3000/books`


class App extends Component {

  constructor() {
    super()
    this.state = {
      books: [],
      favorites: []
    }
  }

  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then(books => this.setState({books: books}))
  }



  render() {
    return(
      <div className="App">
        <div className="App-header">
          <h1>Book Tracker</h1>
        </div>
        <div className= "Book-list">
          <HomeContainer books={this.state.books} favorites={this.state.favorites} />
        </div>
      </div>
    )
  }
}

export default App;
