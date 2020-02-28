import React, {Component} from 'react';
import BookContainer from './BookContainer'

import '../App.css';

class HomeContainer extends Component {
    constructor(props) {
      super(props);

      this.state = {
        showBook: true,
      };
      }



    render() {

      return (
        <div>
          <BookContainer books={this.props.books}/>
        </div>
      );
    }
  }



export default HomeContainer
