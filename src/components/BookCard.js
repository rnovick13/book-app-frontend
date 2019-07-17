import React from 'react';


const BookCard = ({book}) => {
  return(
    <div>
      <img height="100px" width="100px" src={book.cover} alt={book.title}/>
      <p>{book.title}</p>
      <p>{book.author}</p>
      <button>Favorite</button>
      <button>Reviews</button>
    </div>
  )
}

//favorites on click adds to favorites list prob boolean
//reviews on click goes to list of reviews and crud options

export default BookCard;
