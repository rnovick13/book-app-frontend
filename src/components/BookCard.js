import React from 'react';
import {connect} from 'react-redux'



const BookCard = ({book}) => {

  function addFavorite(id){
  this.setState({favorites: [...this.state.favorites, id]})
  }

  return(
    <div>
      <img height="100px" width="100px" src={book.cover} alt={book.title} />
      <p>{book.title}</p>
      <button onClick={()=> addFavorite(book.id)}>Favorite</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    favorites: state.favorites
  }
}

export default (mapStateToProps)(BookCard);
