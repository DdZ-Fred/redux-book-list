import { combineReducers } from 'redux';
import reducerBooks from './reducerBooks';
import reducerActiveBook from './reducerActiveBook';

const rootReducer = combineReducers({
  books: reducerBooks,
  activeBook: reducerActiveBook,
});

export default rootReducer;
