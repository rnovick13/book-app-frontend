import React from 'react';
import ReviewContainer from '../containers/ReviewContainer'



const DisplayCard = ({book}) => {
  console.log({book})
  return(
    <div>
      <img height="100px" width="100px" src={book.data.attributes.cover} alt={book.data.attributes.title} />
      <h3>{book.data.attributes.title}</h3>
      <h3>{book.included[0].attributes.name}</h3>

      <h3>Reviews</h3>

    </div>
  )
}


export default DisplayCard;
