import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { addBookApi } from '../redux/books/books';

function BookForm() {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  const dispatch = useDispatch();
  const addBookStore = () => {
    const Newbook = {
      id: uuid(),
      title,
      category,
    };
    dispatch(addBookApi(Newbook));
    setTitle('');
    setCategory('');
  };
  return (
    <form>
      <h2 className="Newbook">ADD NEW BOOK</h2>
      <div className="form-wrapper">
        <input className="input" value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Book Title" required />
        <input className="category" value={category} onChange={(e) => setCategory(e.target.value)} type="text" placeholder="Category" required />
        <button className="btn" onClick={addBookStore} type="button">Add Books</button>
      </div>
    </form>
  );
}

export default BookForm;
