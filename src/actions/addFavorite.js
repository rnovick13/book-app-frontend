export default function addFavorite(book){

  return (dispatch) => {
    debugger
    fetch()
    .then(r => r.json())
    .then(favorite =>{
      dispatch({type: 'ADD_FAVORITE', payload: review})
    })
  }
}
