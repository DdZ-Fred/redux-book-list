// state is not the application state, only the piece
// of state this reducer is responsible for
export default function (state = null, action) {
  switch (action.type) {
    case 'BOOK_SELECTED': {
      return action.book;
    }

    default: {
      return state;
    }
  }
}
