import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BookItem from './Bookitem';
import { fetchBookApi } from '../redux/books/books';

function Booklist() {
  const books = useSelector((state) => state.booksReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBookApi());
  }, [dispatch]);
  return (
    <div>
      {books.map((book) => (
        <BookItem book={book} key={book.item_id} />
      ))}
    </div>
  );
}

export default Booklist;
