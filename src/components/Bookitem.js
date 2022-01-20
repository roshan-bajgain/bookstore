import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBookApi } from '../redux/books/books';

const BookItem = (props) => {
  const {
    book: {
      item_id, title, category,
    },
  } = props;

  const dispatch = useDispatch();
  const removeBookFromStore = () => {
    dispatch(removeBookApi({ item_id }));
  };

  return (
    <div>
      <div className="books-container d-flex">
        <h2>Hello</h2>
        <p>{title}</p>
        <p>{category}</p>
        <button onClick={removeBookFromStore} type="button"> Delete </button>
      </div>
    </div>
  );
};
BookItem.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string,
    title: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
};

export default BookItem;
