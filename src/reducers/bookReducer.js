const bookReducer = (state = {books: [], favorites: [], display: null}, action) => {
  switch(action.type) {

    case 'FETCH_ALL':
      return {...state, books: action.payload}
    case 'DISPLAY_BOOK':
      return {...state, display: action.payload}
    default:
      return state
  }
}



export default bookReducer;
