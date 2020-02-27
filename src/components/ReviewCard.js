import React from 'react';
import '../App.css'
import {connect} from 'react-redux'
import deleteReview from '../actions/deleteReview'



const ReviewCard = ({review, deleteReview}) => {

  function handleOnClick(id) {
    deleteReview(id)
  }

  return(
    <div className="review">
      <h4>{review.name}</h4>
      <p>{review.body}</p>
      <button className="button" onClick={() => handleOnClick(review.id)}>Delete</button>
    </div>
  )
}


export default connect (null, {deleteReview})(ReviewCard);
