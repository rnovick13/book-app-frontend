import React from 'react';



const DisplayCard = ({book}) => {

  return(
    <div>
      <img height="100px" width="100px" src={book.data.attributes.cover} alt={book.data.attributes.title} />
      <h3>{book.data.attributes.title}</h3>
      
      <h3>Reviews</h3>
    </div>
  )
}


export default DisplayCard;
