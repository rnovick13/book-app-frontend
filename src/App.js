import React, {Component} from 'react';
import './App.css';
import BookContainer from './containers/BookContainer';
// import FavoriteContainer from './containers/FavoriteContainer'
const API = `http://localhost:3000/books`
// const API2 = `http://localhost:3000/favorites`

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

  // addFavorite() {
  //   this.setState({favorites: e})
  // };



  render() {
    return(
      <div className="App">
        <h1>Book Tracker</h1>
        <h3>Book List</h3>
        <BookContainer books={this.state.books} />

      </div>
    )
  }
}

export default App;
