export default function deleteReview(){

  return (dispatch) => {

    fetch(`http://localhost:3000/reviews/${id}`, {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(review)
    })
    .then(r => r.json())
    .then(review =>{
      dispatch({type: 'DELETE_REVIEW', payload: review})
    })
  }
}
