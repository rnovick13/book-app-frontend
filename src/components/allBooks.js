import React, {Component} from 'react';
import {connect} from 'react-redux'
import Book from './book'

class AllBook extends Component {
  render() {
    return (
      <div>
        //map book cards here
      </div>
    )
  }
}


export default connect()(AllBook)
