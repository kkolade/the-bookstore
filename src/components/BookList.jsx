import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from '../redux/books/booksSlice';
import AddBookForm from './AddBookForm';
import Book from './Book';

const BookList = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);
  console.log(books);
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <div>
      <ul>
        {console.log(books)}
        {books &&
          books.map((book) => (
            <Book
              title={book.title}
              author={book.author}
              id={book.id}
              key={book.id}
            />
          ))}
      </ul>
      <AddBookForm />
    </div>
  );
};

export default BookList;
