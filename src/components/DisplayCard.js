import React from 'react';
import ReviewContainer from '../containers/ReviewContainer'



const DisplayCard = ({book}) => {

  return(
    <div>
      <img height="100px" width="100px" src={book.data.attributes.cover} alt={book.data.attributes.title} />
      <h3>{book.data.attributes.title}</h3>

      <h3>Reviews</h3>
      <ReviewContainer book={book.data.id} />
    </div>
  )
}


export default DisplayCard;
