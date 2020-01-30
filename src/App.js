import React, {Component} from 'react';
import './App.css';
import HomeContainer from './containers/HomeContainer'
import DisplayContainer from './containers/DisplayContainer'
const API = `http://localhost:3000/books`
const IndBook = `http://localhost:3000/books/{id}`

class App extends Component {

  constructor() {
    super()
    this.state = {
      books: [],
      favorites: [],
      display: []
    }
  }

  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then(books => this.setState({books: books}))
  }

  fetchAll() {
    fetch(API)
      .then(response => response.json())
      .then(books => this.setState({books: books}))
  }

  addFavorite(id) {
    fetch(IndBook)
      .then(response => response.json())
      .then(book => this.setState({favorites: book}))
  }

  getBook(id){
    fetch(`http://localhost:3000/books/{id}`)
      .then(response => response.json())
      .then(book => this.setState({display: book}))
    }


  render() {
    return(
      <div className="App">
        <div className="App-header">
          <h1>Book Tracker</h1>
        </div>
        <div className= "Book-list">
          <HomeContainer books={this.state.books} favorites={this.state.favorites} addFavorite={()=> this.addFavorite()} getBook={()=>this.getBook()}/>
        </div>
        <div className= "Display-Book">
          <DisplayContainer book={this.state.display}/>
        </div>
      </div>
    )
  }
}

export default App;
