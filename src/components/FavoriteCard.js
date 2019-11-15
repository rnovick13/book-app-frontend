import React from 'react';


const FavoriteCard = ({favorite}) => {

  return(
    <div>
      <img height="100px" width="100px" src={favorite.book_id.cover} alt={favorite.book_id.title} />
      <p>{favorite.book_id.title}</p>
      <p>{favorite.book_id.author_id.name}</p>
      <button>Reviews</button>
    </div>
  )
}


export default FavoriteCard;
