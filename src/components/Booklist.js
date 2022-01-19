import React from 'react';
import { useSelector } from 'react-redux';
import BookItem from './Bookitem';

function Booklist() {
  const books = useSelector((state) => state.booksReducer);
  return (
    <div>
      {books.map((book) => (
        <BookItem book={book} key={book.id} />
      ))}
    </div>
  );
}

export default Booklist;
