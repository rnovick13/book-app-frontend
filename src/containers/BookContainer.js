import React, {Component} from 'react'
import BookCard from '../components/BookCard'

class BookContainer extends Component {

  render() {
    const bookCards = this.props.books.map(book => <BookCard key={book.title} book={book} favorite ={this.props.favorite}/>)
    return(
      <div>{bookCards}</div>
    )
  }
}

export default BookContainer
