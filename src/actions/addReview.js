export default function addReview(){

return (
  addReview = (review) => {
    fetch('http://localhost:3000/reviews', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(review)
    })
    .then(r => r.json())
    .then(resp => {
      this.setState({reviews: [...this.state.reviews, resp]})
    })
  }
)
}
