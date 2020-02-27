import React, {Component} from 'react';
import '../App.css';
import DisplayCard from '../components/DisplayCard'
import BlankDisplayCard from '../components/BlankDisplayCard'
import {connect} from 'react-redux'

class DisplayContainer extends Component {

  render() {
    const display = this.props.display;
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

const mapStateToProps = (state) => {
  return {
    display: state.display
  }
}


export default connect (mapStateToProps)(DisplayContainer)
