import React from 'react';

const Book = ({ books }) => {
  return (
    <div>
      {books.map((book) => (
        <li key={book.id}>
          <p>
            {book.title} by {book.author}
          </p>
        </li>
      ))}
    </div>
  );
};

export default Book;
