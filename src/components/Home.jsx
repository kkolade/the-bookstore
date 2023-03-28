import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddBookForm from './AddBookForm';
import BookList from './BookList';

const Home = () => {
  const books = [
    {
      title: 'A Time to Kill',
      author: 'John Grisham',
      id: uuidv4(),
    },
    {
      title: 'Vulture is a Patient Bird',
      author: 'James Hadley Chase',
      id: uuidv4(),
    },
    {
      title: 'Good Times',
      author: 'Kola Kolade',
      id: uuidv4(),
    },
    {
      title: 'To Catch a Tiger by the Tail',
      author: 'James Hadley Chase',
      id: uuidv4(),
    },
  ];
  return (
    <div>
      <h2>Book List</h2>
      <BookList books={books} />
      <AddBookForm />
    </div>
  );
};

export default Home;
