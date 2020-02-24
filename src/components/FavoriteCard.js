import React from 'react';
import {connect} from 'react-redux'
import deleteFavorite from '../actions/deleteFavorite'


const FavoriteCard = ({favorite, deleteFavorite}) => {

  return(
    <div>
      <img height="100px" width="100px" src={favorite.cover} alt={favorite.title} />
      <p>{favorite.title}</p>
      <button>Remove From Favorites</button>
    </div>
  )
}


export default connect(null, {deleteFavorite})(FavoriteCard);
