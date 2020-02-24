export default function fetchFavorites() {

  return (dispatch) => {
    fetch(`http://localhost:3000/favorites`)
      .then(response => response.json())
      .then(resp => {
        dispatch({type: 'FETCH_FAVORITES', payload: resp})
      })
  }
}
