export default function fetchAllBooks() {

  return (dispatch) => {
    fetch(`http://localhost:3000/books`)
      .then(response => response.json())
      .then(resp => {
        dispatch({type: 'FETCH_ALL', payload: resp})
      })
  }
}
