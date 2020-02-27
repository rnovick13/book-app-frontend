import React, {Component} from 'react'
import '../App.css'
import {connect} from 'react-redux'
import addReview from '../actions/addReview'

class CreateReviewForm extends Component {

  constructor() {
    super();
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleBodyChange = this.handleBodyChange.bind(this)
    this.state = {
      name: "",
      body: "",
      book_id: ""
    }
  }

  componentDidMount(){
    this.setState({
      book_id: this.props.display.data.id
    })
  }

  handleNameChange = (event) => {
    console.log(this)
    this.setState({name: event.target.value})
  }

  handleBodyChange(event) {
    this.setState({body: event.target.value})
  }


  handleSubmit = event => {
    event.preventDefault();
    this.props.addReview(this.state)

  }

  render() {
    return (
      <div className="review-form">
        <form onSubmit={event => this.handleSubmit(event)}>
          <p>

            <label>Name</label>
            <input
              type="text"
              value={this.state.name}
              onChange={this.handleNameChange}
              />

            <label>Write Your Review</label>
            <input
              type="text"
              className="field"
              value={this.state.body}
              onChange={(event) => this.handleBodyChange(event)}
              />

          </p>
          <input className="button" type="submit" />
        </form>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    display: state.display
  }
}

export default connect (mapStateToProps, {addReview})(CreateReviewForm)
