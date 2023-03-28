import React from 'react';
import Book from './Book';
const BookList = ({ books }) => {
  return (
    <div>
      <Book books={books} />
    </div>
  );
};

export default BookList;
