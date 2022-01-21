import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBookApi } from '../redux/books/books';

const BookItem = (props) => {
  const {
    book: {
      id, title, category,
    },
  } = props;

  const dispatch = useDispatch();
  const removeBookFromStore = () => {
    dispatch(removeBookApi(id));
  };

  return (
    <div>
      <div className="books-container d-flex">
        <p className="title">{title}</p>
        <p className="author">{category}</p>
        <div className="btns">
          <button className="btn1" type="button">Comment</button>
          <button className="btn1" onClick={removeBookFromStore} type="button"> Remove </button>
          <button className="btn1" type="button">Edit</button>
        </div>
      </div>
    </div>
  );
};
BookItem.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
};

export default BookItem;
