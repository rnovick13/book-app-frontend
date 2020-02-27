import React from 'react';
import '../App.css'
import {connect} from 'react-redux'
import display from '../actions/display'




const BookCard = ({book, display}) => {

  function handleOnClick(id){
    display(id)
  }

  return(
    <div className="card">
      <img class="cover" src={book.cover} alt={book.title} onClick={() => handleOnClick(book.id)}/>
      <p class="title">{book.title}</p>
    </div>
  )
}

export default connect (null, {display})(BookCard);
