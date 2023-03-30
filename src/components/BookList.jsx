import PropTypes from 'prop-types';
import React from 'react';
import Book from './Book';

const BookList = ({ books }) => (
  <div>
    <Book books={books} />
  </div>
);

BookList.propTypes = {
  books: PropTypes.arrayOf.isRequired,
};

export default BookList;
