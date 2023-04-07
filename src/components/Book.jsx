import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/booksSlice';

const Book = ({ key, id, title, author }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteBook(id));
  };

  return (
    <li key={key}>
      {title}
      {' by '}
      {author}
      <button type="submit" onClick={handleClick}>
        Remove
      </button>
    </li>
  );
};

Book.propTypes = {
  key: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
