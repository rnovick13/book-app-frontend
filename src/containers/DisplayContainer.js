import React, {Component} from 'react';
import DisplayCard from '../components/DisplayCard'
import BlankDisplayCard from '../components/BlankDisplayCard'

class DisplayContainer extends Component {

  render() {
    const display = this.props.book;
    let container;

    if (display === null) {
      container = <BlankDisplayCard />;
    } else {
      container = <DisplayCard book={display}/>;
    }
    return (
      <div>
        {container}
      </div>
    )
  }

}


export default DisplayContainer
