export function selectBook(book) {
  // selectBook is a ActionCreator and returns an action,
  // an object with a type property
  return {
    type: 'BOOK_SELECTED',
    payload: book,
  };
}
