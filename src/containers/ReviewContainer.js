import React, {Component} from 'react';
import ReviewCard from '../components/ReviewCard'
import {connect} from 'react-redux'
import fetchReview from '../actions/fetchReview'


class ReviewContainer extends Component {

  componentDidMount(){
    this.props.fetchReview()
  }

  render() {
    let book = this.props.display.data.attributes.id;
    let reviews = this.props.reviews.filter(review => review.book_id === book)
    const reviewCards = reviews.map(review => <ReviewCard key={review.id} review={review}/>)
    return(
      <div>{reviewCards}</div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    display: state.display,
    reviews: state.reviews
  }
}


export default connect(mapStateToProps, {fetchReview})(ReviewContainer)
