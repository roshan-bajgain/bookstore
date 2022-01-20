import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
// import { addBook } from '../redux/books/books';
import { addBookApi } from '../redux/books/books';

function BookForm() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const dispatch = useDispatch();
  const addBookStore = () => {
    const Newbook = {
      item_id: uuid(),
      title,
      category,
    };
    dispatch(addBookApi(Newbook));
    setTitle('');
    setAuthor('');
  };
  return (
    <form>
      <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Book Title" />
      <input value={author} onChange={(e) => setAuthor(e.target.value)} type="text" placeholder="Author" />
      <button onClick={addBookStore} type="button">Add Books</button>
    </form>
  );
}

export default BookForm;
