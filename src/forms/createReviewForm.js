import React, {Component} from 'react'

class CreateReviewForm extends Component {

  constructor() {
    super();
    this.state = {
      name: "",
      body: ""
    }
  }

  handleNameChange(event) {
    this.setState({
      name: event.target.value
    })
  }

  handleBodyChange(event) {
    this.setState({
      body: event.target.value
    })
  }

  render() {
    return (
      <div>
        <form>
          <p>
            <label>Name</label>
            <input type="text" onChange={(event) => this.handleNameChange(event)}/>
            <label>Write Your Review</label>
            <input type="text" onChange={(event) => this.handleBodyChange(event)}/>
          </p>
          <input type="submit" />
        </form>
      </div>
    )
  }

}

export default CreateReviewForm
