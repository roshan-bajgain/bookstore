import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { addBook } from '../redux/books/books';

function BookForm() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const dispatch = useDispatch();
  const addBookStore = () => {
    const Newbook = {
      id: uuid(),
      title,
      author,
    };
    dispatch(addBook(Newbook));
  };
  return (
    <form>
      <input onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Book Title" />
      <input onChange={(e) => setAuthor(e.target.value)} type="text" placeholder="Author" />
      <button onClick={addBookStore} type="button">Add Books</button>
    </form>
  );
}

export default BookForm;
