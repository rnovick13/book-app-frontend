import React from 'react';



const ReviewCard = () => {

  function handleOnClick(id){

    getBook(id)
  }

  return(
    <div>
      <p>{review.name}</p>
      <p>{review.body}</p>
    </div>
  )
}


export default ReviewCard;
