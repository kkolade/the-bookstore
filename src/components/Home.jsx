import React from 'react';
// import { v4 as uuidv4 } from 'uuid';
import AddBookForm from './AddBookForm';
import BookList from './BookList';

const Home = () => (
  <div>
    <h2>Book List</h2>
    <BookList />
    <AddBookForm />
  </div>
);

export default Home;
