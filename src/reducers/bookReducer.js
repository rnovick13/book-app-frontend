const bookReducer = (state = {books: [], favorites: [], display: null, reviews: []}, action) => {
  switch(action.type) {

    case 'FETCH_ALL':
      return {...state, books: action.payload}
    case 'DISPLAY_BOOK':
      return {...state, display: action.payload}
    case 'FETCH_REVIEW':
      return {...state, reviews: action.payload}
    default:
      return state
  }
}



export default bookReducer;
