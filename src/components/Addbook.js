import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const AddBook = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    const submitBookToStore = (e) => {
        e.preventDefault();
        if (title === '' || author === '') return;
        const newBook = {
          id: uuidv4(),
          title,
          author,
        };
        dispatch(addBook(newBook));
        setTitle('');
        setAuthor('');
      };
}