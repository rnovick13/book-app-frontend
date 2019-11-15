import React, {Component} from 'react'
import FavoriteCard from '../components/FavoriteCard'
const API = `http://localhost:3000/books`
const API2 = `http://localhost:3000/favorites`

class FavoriteContainer extends Component {

  render() {
    const faveCards = this.props.favorites.map(favorite => <FavoriteCard key={favorite.id} book={favorite.book_id}/>)
    return(
      <div>{faveCards}</div>
    )
  }
}

export default FavoriteContainer
