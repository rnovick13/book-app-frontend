import React from 'react';



const BookCard = ({book}) => {

  return(
    <div>
      <img height="100px" width="100px" src={book.cover} alt={book.title} />
      <p>{book.title}</p>
      <button onClick={()=> this.props.favorite}>Favorite</button>
      <button>Reviews</button>
    </div>
  )
}


export default BookCard;
