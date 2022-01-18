// import React from 'react';

// const BooksPage = () => (
//   <div>
//     <div className="books-container d-flex">
//       <h2>Name of Book</h2>
//       <p>The Merchant of Venice</p>
//       <button type="button">Delete</button>
//     </div>
//     <input type="text" name="addBooks" placeholder="Book Title" />
//     <button type="button">Add Books</button>
//   </div>
// );

// export default BooksPage;
const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

const initialState = [];

export const addBook = payload => ({
  type: ADD_BOOK,
  payload
})
export const  removeBook = payload => ({
  type: REMOVE_BOOK,
  payload
})

const reducer =  (state = initialState, action) => {
  switch (action.type) {
      case ADD_BOOK:

        return [...state, action.payload];
        
      case REMOVE_BOOK:

        return state.filter((book) => book.id !== action.payload.id);
  
      default:
          return state;
      }
  };
  
  export default reducer;
