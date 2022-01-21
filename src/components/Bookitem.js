import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
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
  const percentage = 67;

  return (
    <div className="books-container d-flex">
      <div className="first-wrapper">
        <p className="title">{title}</p>
        <p className="author">{category}</p>
        <div className="btns">
          <button className="btn1" type="button">Comment</button>
          <div className="line" />
          <button className="btn1" onClick={removeBookFromStore} type="button"> Remove </button>
          <div className="line" />
          <button className="btn1" type="button">Edit</button>
        </div>
      </div>
      <div className="d-flex">
        <div className="progress-bar-c">
          <CircularProgressbar
            value={percentage}
            styles={buildStyles({ pathColor: '#0EA5E9', marginRight: '10px' })}
            className="progress-bar"
          />
          <div className="progress-value-c">
            <p className="progress-percentage">
              {percentage}
              %
            </p>
            <p className="progress-completed">Completed</p>
          </div>
        </div>
        <div className="update-progg-c">
          <h2 className="chapter-h2">CURRENT CHAPTER</h2>
          <h3 className="chapter-h3">
            Chapter
            {' '}
            { `${Math.floor(Math.random() * 50)}`}
          </h3>
          <button type="button" className="update-progg-btn">Update Progress</button>
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
