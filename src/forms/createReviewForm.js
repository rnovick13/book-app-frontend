import React, {Component} from 'react'

class CreateReviewForm extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);

    fetch('http://localhost:3000/reviews', {
      method: 'POST',
      body: data,
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="username">Name:</label>
        <input id="username" name="username" type="text" />

        <label htmlFor="body">Write Your Review:</label>
        <input id="birthdate" name="birthdate" type="text" />

        <button>Send data!</button>
      </form>
    );
  }
}

export default CreateReviewForm
