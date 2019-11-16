import React, {Component} from 'react'
import FavoriteCard from '../components/FavoriteCard'

class FavoriteContainer extends Component {

  render() {
    const faveCards = this.props.favorites.map(favorite => <FavoriteCard key={favorite.id} book={favorite.book_id}/>)
    return(
      <div>{faveCards}</div>
    )
  }
}

export default FavoriteContainer
