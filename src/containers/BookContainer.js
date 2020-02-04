import React, {Component} from 'react'
import BookCard from '../components/BookCard'

class BookContainer extends Component {

  testGetBook(id){
    this.props.getBook(id)
  }

  render() {
    const bookCards = this.props.books.map(book => <BookCard key={book.title} book={book} getBook={(id)=>this.testGetBook(id)}/>)
    return(
      <div>{bookCards}</div>
    )
  }
}

export default BookContainer
