import React, {Component} from 'react';
import {connect} from 'react-redux'
import deleteFavorite from '../actions/deleteFavorite'
// import findBook from '../actions/findIndBook'

class FavoriteCard extends Component {

  constructor(){
    super()
    this.state = {
      book: []
    }
  }

  componentDidMount(){
    debugger
    this.findBook(this.props.book)
  }

  findBook(id){
      fetch('http://localhost:3000/books/${id}')
      .then(response => response.json())
      .then(book => this.setState({ book: book }));
  }

  render() {
    return(
      <div>
        <img height="100px" width="100px" src={this.state.book.data.attributes.cover} alt={this.state.book.data.attributes.title} />
        <p>{this.state.book.data.attributes.title}</p>
        <button>Remove From Favorites</button>
      </div>
    )
  }
}


export default connect(null, {deleteFavorite})(FavoriteCard);
