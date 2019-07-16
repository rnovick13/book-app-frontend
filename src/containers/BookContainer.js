import React, {Component} from 'react'
import BookCard from './components/BookCard'
const API = 'http://localhost:3000/'

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
    .then(res=> .json())
    .then(books => this.setState({books: books}))
  }

  render() {
    const bookCards = this.state.books.map(book => <BookCard key={book.title} book={book}/>)
  }
}

export default BookContainer
