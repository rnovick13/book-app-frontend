import React, {Component} from 'react';
import ReviewCard from '../components/ReviewCard'

import deleteReview from '../actions/deleteReview'

class ReviewContainer extends Component {

  constructor() {
    super()
    this.state = {
      reviews: []
    }
  }

  componentDidMount(){
    const bookId = this.props.book
    fetch(`http://localhost:3000/reviews/${bookId}`)
    .then(response => response.json())
    .then(reviews => this.setState({reviews: reviews}))
  }

  addReview = (review) => {
    fetch('http://localhost:3000/reviews', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(review)
    })
    .then(r => r.json())
    .then(resp => {
      this.setState({reviews: [...this.state.reviews, resp]})
    })
  }

  render() {
    const bookId = this.props.book
    const reviewCards = this.props.books.map(book => <ReviewCard />)
    return(
      <div>
        {reviewCards}
      </div>
    )
  }
}


export default ReviewContainer
