import React, {Component} from 'react'
import BookCard from '../components/BookCard'
// import books from '../book-data'
const API = `http://localhost:3000/books`

class BookContainer extends Component {
  constructor() {
    super()
    this.state = {
      books: [],
      favorites: []
    }
  }

  fetchBooks(API) {
    fetch(API)
      .then(response => response.json())
      .then(books => this.setState({books: books}))
  }

  componentDidMount() {
    fetchBooks(API)
  }

  render() {
    const bookCards = this.state.books.map(book => <BookCard key={book.title} book={book}/>)
    return(
      <div>{bookCards}</div>
    )
  }
}

export default BookContainer
