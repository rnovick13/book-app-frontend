import React, {Component} from 'react';
import './App.css';
import BookContainer from './containers/BookContainer';
import FavoriteContainer from './containers/FavoriteContainer'
import ShowFavoritesButton from './components/ShowFavoritesButton';
// import ShowAllButton from './components/ShowAllButton';
const API = `http://localhost:3000/books`
const API2 = `http://localhost:3000/favorites`

class App extends Component {

  constructor() {
    super()
    this.state = {
      books: [],
      favorites: [],
      isAllBooks: true
    }
  }

  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then(books => this.setState({books: books}))
    fetch(API2)
      .then(response => response.json())
      .then(favorites => this.setState({favorites: favorites}))
  }

  triggerShowFavorites = () => {
    this.setState({
      ...this.state,
      isAllBooks: false,
      isAllFavorites: true
    })
  }

  triggerShowAll = () => {
    this.setState({
      ...this.state,
      isAllFavorites: false,
      isAllBooks: true
    })
  }

  // addFavorite = (book) => {
  //   this.setState({favorites: book})
  // };



  render() {
    return(
      <div className="App">
        <h1>Book Tracker</h1>

          {this.state.isAllBooks && <ShowFavoritesButton showFavorites={this.triggerShowFavorites} favorites={this.state.favorites}/>}

        {this.state.isAllFavorites && <FavoriteContainer favorite={this.state.favorites} />}


      </div>
    )
  }
}

export default App;
