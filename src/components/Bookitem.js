import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const BookItem = (props) => {
  const {
    book: {
      id, title, author,
    },
  } = props;

  const dispatch = useDispatch();
  const removeBookFromStore = () => {
    dispatch(removeBook({ id }));
  };

  return (
    <div>
      <div className="books-container d-flex">
        <h2>Hello</h2>
        <p>{title}</p>
        <p>{author}</p>
        <button
          onClick={removeBookFromStore}
          type="button"
        >
          Delete
        </button>
      </div>
    </div>
  );
};
BookItem.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
  }).isRequired,
};

export default BookItem;
