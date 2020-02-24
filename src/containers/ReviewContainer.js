import React, {Component} from 'react';
import ReviewCard from '../components/ReviewCard'
import {connect} from 'react-redux'
import fetchReview from '../actions/fetchReview'
import CreateReviewForm from '../forms/createReviewForm'


class ReviewContainer extends Component {

    constructor() {
      super()
      this.handleNewClick = this.handleNewClick.bind(this);
      this.handleCloseClick = this.handleCloseClick.bind(this);
      this.state = {
        showForm: false
      }
    }

  componentDidMount(){
    this.props.fetchReview()
  }

  handleNewClick() {
    this.setState({showForm: true});
  }

  handleCloseClick() {
    this.setState({showForm: false});
  }


  render() {
    const showForm = this.state.showForm;
    let button;
    let form;

    if (showForm) {
      button = <CloseFormButton  onClick={this.handleCloseClick}/>;
    } else {
      button = <NewReviewButton  onClick={this.handleNewClick}/>;
    }

    if (showForm) {
      form = <CreateReviewForm id = {this.props.display.data.attributes.id}/>
    } else {
      form = ""
    }

    let book = this.props.display.data.attributes.id;
    let reviews = this.props.reviews.filter(review => review.book_id === book)
    const reviewCards = reviews.map(review => <ReviewCard key={review.id} review={review}/>)
    return(
      <div>
        {button}
        {form}
        {reviewCards}
      </div>
    )
  }
}

function NewReviewButton(props) {
  return (
    <button onClick={props.onClick}>
      Add New Review
    </button>
  );
}

function CloseFormButton(props) {
  return (
    <button onClick={props.onClick}>
      Close Form
    </button>
  );
}

const mapStateToProps = (state) => {
  return {
    display: state.display,
    reviews: state.reviews
  }
}


export default connect(mapStateToProps, {fetchReview})(ReviewContainer)
