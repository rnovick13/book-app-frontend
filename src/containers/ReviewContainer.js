import React from 'react'
import ReviewCard from '../components/ReviewCard'


class ReviewContainer extends Component {


  render() {
    const reviewCards = this.props.books.map(book => <ReviewCard />)
    return(
      <div>{reviewCards}</div>
    )
  }
}


export default ReviewContainer
