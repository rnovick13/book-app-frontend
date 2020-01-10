import React, {Component} from 'react';
import './App.css';
import HomeContainer from './containers/HomeContainer';
import BookContainer from './containers/BookContainer';
import ShowBookCard from './components/ShowBookCard';
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

  fetchIndvBook(book) {
    debugger
    fetch(`http://localhost:3000/books/{book.id}`)
      .then(response => response.json())
      .then(book => <ShowBookCard book={this.book}/>)
  }

  handleClick() {
    console.log('Click happened');
  }

  // addFavorite() {
  //   this.setState({favorites: e})
  // };



  render() {
    return(
      <div className="App">
        <h1>Book Tracker</h1>
        <button>All Books</button>
        <button>Favorites</button>
        <HomeContainer books={this.state.books} favorites={this.state.favorites} fetchIndvBook={() => this.fetchIndvBook()}/>
      </div>
    )
  }
}

export default App;
