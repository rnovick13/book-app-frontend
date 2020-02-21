const bookReducer = (state = {books: [], display: null}, action) => {
  switch(action.type) {

    case 'FETCH_ALL':
      return {...state, books: action.payload}
    default:
      return state
  }
}



export default bookReducer;
