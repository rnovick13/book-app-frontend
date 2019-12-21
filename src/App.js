import React, {Component} from 'react';
import './App.css';
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
        <BookContainer books={this.state.books} fetchIndvBook={() => this.fetchIndvBook()}/>
        // <button onClick={this.handleClick}>Click Me</button>
      </div>
    )
  }
}

export default App;
