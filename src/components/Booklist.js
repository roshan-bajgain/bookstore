import React from 'react';
import { useSelector } from 'react-redux';
import BookItem from './Bookitem';
import { fetchBookApi } from '../redux/books/books'

function Booklist() {
  const books = useSelector((state) => state.booksReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBookApi());
  }, [dispatch]);
  return (
    <div>
      {books.map((book) => (
        <BookItem book={book} key={book.id} />
      ))}
    </div>
  );
}

export default Booklist;
