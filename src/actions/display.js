export default function display(id) {

  console.log("Found the book")
  return (dispatch) => {
    fetch(`http://localhost:3000/books/${id}`)
      .then(response => response.json())
      .then(resp => {
        dispatch({type: 'DISPLAY_BOOK', payload: resp})
      })
  }
}