export default function deleteReview(id){

  return (dispatch) => {
    // debugger

    fetch(`http://localhost:3000/reviews/${id}`, {
      method: 'DELETE'
    })
    .then(r => r.json())
    .then(r =>{
      dispatch({type: 'DELETE_REVIEW', payload: id})
    })
  }
}
