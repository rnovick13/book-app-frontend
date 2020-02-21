import React, {Component} from 'react';
import BookContainer from './BookContainer'
import FavoriteContainer from './FavoriteContainer'

class HomeContainer extends Component {
    constructor(props) {
      super(props);
      this.handleBookClick = this.handleBookClick.bind(this);
      this.handleFavoriteClick = this.handleFavoriteClick.bind(this);
      this.state = {
        showBook: true,
      };
      }

    handleBookClick() {
      this.setState({showBook: true});
    }

    handleFavoriteClick() {
      this.setState({showBook: false});
    }

    render() {
      const showBook = this.state.showBook;
      let button;
      let container;

      if (showBook) {
        button = <FavoriteButton onClick={this.handleFavoriteClick} />;
      } else {
        button = <BookButton onClick={this.handleBookClick} />;
      }

      if (showBook) {
        container = <BookContainer
          addFavorite={this.props.addFavorite}
          getBook={(id)=>{ this.props.getBook(id)}}
        />;
      } else {
        container = <FavoriteContainer />;
      }

      return (
        <div>
          <Heading showBook={showBook} />
          {button}
          {container}
        </div>
      );
    }
  }

  function AllHeading(props) {
    return <h3>All of our books!</h3>;
  }

  function FavoriteHeading(props) {
    return <h3>Your Favorites!</h3>;
  }

  function Heading(props) {
    const showBook = props.showBook;
    if (showBook) {
      return <AllHeading />;
    }
    return <FavoriteHeading />;
  }

  function BookButton(props) {
    return (
      <button onClick={props.onClick}>
        All Books
      </button>
    );
  }

  function FavoriteButton(props) {
    return (
      <button onClick={props.onClick}>
        Favorites
      </button>
    );
  }


export default HomeContainer
