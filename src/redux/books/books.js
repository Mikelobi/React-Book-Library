import { v4 as uuidv4 } from 'uuid';

const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const DELETE_BOOK = 'bookstore/books/DELETE_BOOK';

const initialState = [
  { title: 'Software Development', author: 'Miki' },
  { title: 'Project Hub', author: 'Github' },
];

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_BOOK:
      return state.concat({
        id: uuidv4(),
        ...action.payload.data,
      });
    case DELETE_BOOK:
      return state.filter((book) => book.id !== action.payload.id);
    default:
      return state;
  }
}

export const addBook = (data) => ({
  type: ADD_BOOK,
  payload: {
    data,
  },
});

export const deleteBook = (id) => ({
  type: DELETE_BOOK,
  payload: {
    id,
  },
});
