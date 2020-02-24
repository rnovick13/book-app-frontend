import React from 'react';
import {connect} from 'react-redux'
import display from '../actions/display'




const BookCard = ({book, display}) => {

  function handleOnClick(id){
    display(id)
  }

  function addFavorite(){
    console.log({book})
  }

  return(
    <div>
      <img height="100px" width="100px" src={book.cover} alt={book.title} onClick={() => handleOnClick(book.id)}/>
      <p>{book.title}</p>
      <button onClick={() => addFavorite(book)}>Favorite</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    favorites: state.favorites
  }
}
export default connect (mapStateToProps, {display})(BookCard);
