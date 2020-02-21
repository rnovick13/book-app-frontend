import React, {Component} from 'react'
import FavoriteCard from '../components/FavoriteCard'
import {connect} from 'react-redux'
import fetchFavorites from '../actions/fetchFavorites'

class FavoriteContainer extends Component {

  componentDidMount(){
    this.props.fetchFavorites()
  }

  render() {
    const faveCards = this.props.favorites.map(favorite => <FavoriteCard key={favorite.id} book={favorite.book_id}/>)
    return(
      <div>{faveCards}</div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    favorites: state.favorites
  }
}

export default connect(mapStateToProps, {fetchFavorites})(FavoriteContainer)
