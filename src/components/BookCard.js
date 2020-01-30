import React from 'react';



const BookCard = ({book}) => {

  return(
    <div>
      <img height="100px" width="100px" src={book.cover} alt={book.title} onClick={()=>this.props.getBook(book.id)}/>
      <p>{book.title}</p>
      <button onClick={()=> this.props.addFavorite(book.id)}>Favorite</button>
    </div>
  )
}


export default BookCard;
