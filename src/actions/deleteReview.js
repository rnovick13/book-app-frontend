export default function deleteReview(id){

  return (dispatch) => {

    fetch(`http://localhost:3000/reviews/${id}`, {
      method: 'DELETE'
    })
    .then(r => r.json())
    .then(review =>{
      dispatch({type: 'DELETE_REVIEW', payload: review})
    })
  }
}
