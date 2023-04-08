import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/booksSlice';
import './book.css';

const Book = ({
  key, id, title, author,
}) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteBook(id));
  };

  return (
    <li key={key} className="Book-card">
      <div className="Book-detail">
        <p className="Book-category">Action</p>
        <p className="Book-title">{title}</p>
        <p className="Book-author">{author}</p>
        <div className="">
          <button type="submit" className="Book-button">
            Comment
          </button>
          <button type="submit" onClick={handleClick} className="Book-button">
            Remove
          </button>
          <button type="submit" className="Book-button">
            Edit
          </button>
        </div>
      </div>
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
