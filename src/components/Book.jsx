import PropTypes from 'prop-types';
import React from 'react';

const Book = ({ books }) => (
  <div>
    {books.map((book) => (
      <li key={book.id}>
        <p>
          {book.title}
          {' '}
          by
          {book.author}
        </p>
      </li>
    ))}
  </div>
);

Book.propTypes = {
  books: PropTypes.arrayOf.isRequired,
};

export default Book;
