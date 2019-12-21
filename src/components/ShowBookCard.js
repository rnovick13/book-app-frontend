import React from 'react';



const ShowBookCard = ({book}) => {

  return(
    <div>
      <img src={book.cover} alt={book.title} />
      <p>{book.title}</p>
      <p>{book.included.atributes.name}</p>
      <button onClick={()=> this.addFavorite(book)}>Favorite</button>
      <button>Reviews</button>
    </div>
  )
}


export default ShowBookCard;
