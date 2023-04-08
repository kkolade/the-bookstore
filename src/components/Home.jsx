import React from 'react';
// import { v4 as uuidv4 } from 'uuid';
import AddBookForm from './AddBookForm';
import BookList from './BookList';

const Home = () => (
  <div>
    <BookList />
    <AddBookForm />
  </div>
);

export default Home;
