import React from 'react';
import {connect} from 'react-redux'
import display from '../actions/display'



const BookCard = ({book, addFavorite, display}) => {

  function handleOnClick(id){
    display(id)
  }

  return(
    <div>
      <img height="100px" width="100px" src={book.cover} alt={book.title} onClick={() => handleOnClick(book.id)}/>
      <p>{book.title}</p>
      <button onClick={()=> addFavorite(book.id)}>Favorite</button>
    </div>
  )
}


export default connect (null, {display})(BookCard);
