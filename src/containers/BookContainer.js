import React, {Component} from 'react'
import BookCard from '../components/BookCard'
import {connect} from 'react-redux'
import fetchAllBooks from '../actions/fetchAllBooks'
import fetchFavorites from '../actions/fetchFavorites'

class BookContainer extends Component {


  componentDidMount(){
    this.props.fetchAllBooks()
    this.props.fetchFavorites()
  }

  render() {
    const bookCards = this.props.books.map(book => <BookCard key={book.title} book={book} />)
    return(
      <div>{bookCards}</div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    books: state.books
  }
}

export default connect(mapStateToProps, {fetchAllBooks, fetchFavorites})(BookContainer)
