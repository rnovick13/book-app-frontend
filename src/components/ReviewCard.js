import React from 'react';



const ReviewCard = ({review}) => {

  return(
    <div>
      <h4>{review.name}</h4>
      <p>{review.body}</p>
    </div>
  )
}


export default ReviewCard;
