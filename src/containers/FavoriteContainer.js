import React, {Component} from 'react'
import FavoriteCard from '../components/FavoriteCard'
import {connect} from 'react-redux'

class FavoriteContainer extends Component {



  render() {
    let favorites = this.props.favorites
    let container
    const faveCards = this.props.favorites.map(favorite => <FavoriteCard key={favorite.id} book={favorite.book_id}/>)

    if (favorites.length > 0) {
      container = this.props.favorites.map(favorite => <FavoriteCard key={favorite.id} book={favorite.book_id}/>)
    } else {

    }

    return(
      <div>{container}</div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    favorites: state.favorites
  }
}

export default connect (mapStateToProps)(FavoriteContainer)
