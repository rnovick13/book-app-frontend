export default function bookReducer(state = {books: [], favorites: [], display: null}, action) {

  switch (action.type) {
    case 'FETCH_FAVORITES':
      return {...state, favorites: action.payload}

    default:
      return state
  }

}
