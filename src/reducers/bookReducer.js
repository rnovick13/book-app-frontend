const bookReducer = (state = {books: [], favorites: [], display: null, reviews: []}, action) => {
  switch(action.type) {

    case 'FETCH_ALL':
      return {...state, books: action.payload}
    case 'DISPLAY_BOOK':
      return {...state, display: action.payload}
    case 'FETCH_REVIEW':
      return {...state, reviews: action.payload}
    case 'ADD_REVIEW':
      return {...state, reviews: [...state.reviews, action.payload]}
    case 'DELETE_REVIEW':
      const reviews = state.reviews.filter(review => review.id !== action.payload)
      return {...state, reviews: reviews}
    case 'EDIT_REVIEW':
      return {...state}
    case 'FETCH_FAVORITES':
      return {...state, favorites: [...state.favorites, action.payload]}
    default:
      return state
  }
}



export default bookReducer;
