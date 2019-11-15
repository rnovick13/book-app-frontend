import React, {Component} from 'react'
import BookCard from '../components/BookCard'
// import books from '../book-data'
const API = `http://localhost:3000/books`
const API2 = `http://localhost:3000/favorites`

class BookContainer extends Component {
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
    fetch(API2)
      .then(response => response.json())
      .then(favorites => this.setState({favorites: favorites}))
  }

  render() {
    const bookCards = this.state.books.map(book => <BookCard key={book.title} book={book}/>)
    return(
      <div>{bookCards}</div>
    )
  }
}

export default BookContainer
