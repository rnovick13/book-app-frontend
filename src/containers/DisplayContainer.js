import React, {Component} from 'react';
import DisplayCard from '../components/DisplayCard'

class DisplayContainer extends Component {

  render() {
    return (
      <div>
        <DisplayCard book={this.props.book}/>
      </div>
    )
  }

}


export default DisplayContainer
