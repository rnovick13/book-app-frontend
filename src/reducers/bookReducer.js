const bookReducer = (state = {books: [], favorites: [], display: null, reviews: []}, action) => {
  switch(action.type) {

    case 'FETCH_ALL':
      return {...state, books: action.payload}
    case 'DISPLAY_BOOK':
      return {...state, display: action.payload}
    case 'FETCH_REVIEW':
      return {...state, reviews: action.payload}
    case 'ADD_REVIEW':
      return {...state, reviews: action.payload}
    case 'DELETE_REVIEW':
      return {...state, reviews: state.reviews.filter(review => review !== action.payload)}
    default:
      return state
  }
}



export default bookReducer;
