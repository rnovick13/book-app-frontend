export default function deleteReview() {
  return(
    deleteReview = (reviewId) => {
      fetch(`http://localhost:3000/reviews/${reviewId}`, {
        method: 'DELETE'
      })
      .then(r => r.json())
      .then(resp => {
        this.setState({reviews: this.state.reviews.filter(review => review.id != resp.id)})
      })
    }
  )
}
