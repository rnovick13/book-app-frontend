export default function display(id) {

  return (dispatch) => {
    fetch(`http://localhost:3000/books/${id}`)
      .then(response => response.json())
      .then(resp => {
        dispatch({type: 'DISPLAY_BOOK', payload: resp})
      })
  }
}
