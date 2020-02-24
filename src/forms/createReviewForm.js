// import React, {Component} from 'react'
// import {connect} from 'react-redux'
//
// class CreateReviewForm extends Component {
//   constructor() {
//     super();
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.state = {
//       name: "",
//       body: "".
//       book_id: this.props.display
//     }
//   }
//
//   handleSubmit(event) {
//     event.preventDefault();
//     const data = new FormData(event.target);
//
//     fetch('http://localhost:3000/reviews', {
//       method: 'POST',
//       body: data,
//     });
//   }
//
//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label htmlFor="username">Name:</label>
//         <input id="username" name="username" type="text" />
//
//         <label htmlFor="body">Write Your Review:</label>
//         <input id="birthdate" name="birthdate" type="text" />
//
//         <button>Submit</button>
//       </form>
//     );
//   }
// }
//
// export default connect(mapStateToProps)(CreateReviewForm)
