export default function addReview(review){

  return (dispatch) => {
    // debugger
    fetch('http://localhost:3000/reviews', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(review)
    })
    .then(r => r.json())
    .then(review =>{
      dispatch({type: 'ADD_REVIEW', payload: review})
    })
  }
}
