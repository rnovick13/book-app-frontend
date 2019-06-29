import React, {Container} from 'react'

class BookContainer extends Component {
  constructor() {
    super()
    this.state = {
      books: []
    }
  }

  componentDidMount() {
    //put fetch function
    this.setState({
      books: books
    })
  }

  render() {
    const bookCards = this.state.books.map(book => <BookCard />)
  }
}

export default BookContainer
