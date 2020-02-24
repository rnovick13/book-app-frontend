export default function fetchReview() {
  
  return (dispatch) => {
    fetch(`http://localhost:3000/reviews`)
      .then(response => response.json())
      .then(resp => {
        dispatch({type: 'FETCH_REVIEW', payload: resp})
      })
  }
}
