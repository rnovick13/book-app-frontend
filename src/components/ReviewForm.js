import React, {Component} from 'react'

class Reviewform extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: "",
      body: ""
    }
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.addReview(this.state)
    this.setState((
      name: "",
      body: ""
    ))
  }



}

export default ReviewForm
