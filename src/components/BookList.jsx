import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from '../redux/books/booksSlice';
import Book from './Book';

const BookList = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);
  const isLoading = useSelector((state) => state.books.isLoading);
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  if (isLoading) {
    return (
      <>
        <p>loading...</p>
      </>
    );
  }

  return (
    <div>
      <ul>
        {books
          && books.map((book) => (
            <Book
              title={book.title}
              author={book.author}
              id={book.id}
              key={book.id}
            />
          ))}
      </ul>
    </div>
  );
};

export default BookList;
