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
    debugger
    // const reviewCards = book.map(book => <ReviewCard />)
    return(
      <div>{"reviewCards"}</div>
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
