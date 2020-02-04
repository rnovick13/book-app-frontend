import React from 'react';



const BookCard = ({book, addFavorite, getBook}) => {

  function handleOnClick(id){
    
    getBook(id)
  }

  return(
    <div>
      <img height="100px" width="100px" src={book.cover} alt={book.title} onClick={() => handleOnClick(book.id)}/>
      <p>{book.title}</p>
      <button onClick={()=> addFavorite(book.id)}>Favorite</button>
    </div>
  )
}


export default BookCard;
