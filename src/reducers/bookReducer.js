export default function bookReducer(state = {books: [], favorites: [], display: null}, action) {

  switch (action.type) {
    case 'FETCH_FAVORITES':
      return {...state, favorites: action.payload}
    case 'FETCH_ALL':
      return {...state, books: action.payload}
    case 'DISPLAY_BOOK':
      return {display: action.payload}

    default:
      return state
  }

}
