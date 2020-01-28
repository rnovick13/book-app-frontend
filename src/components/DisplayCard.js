import React from 'react';



const DisplayCard = ({book}) => {

  return(
    <div>
      <img src={book.cover} alt={book.title} />
      <h3>{book.title}</h3>
      <h4>{book.included.attributes.name}</h4>
      <h3>Reviews</h3>
    </div>
  )
}


export default DisplayCard;
