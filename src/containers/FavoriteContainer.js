import React, {Component} from 'react'
import FavoriteCard from '../components/FavoriteCard'

class FavoriteContainer extends Component {

  render() {
    const faveCards = this.props.favorite.map(favorite => <FavoriteCard key={favorite.id} favorite={favorite}/>)
    return(
      <div>{faveCards}</div>
    )
  }
}

export default FavoriteContainer
