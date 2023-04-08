import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/booksSlice';
import './addBookForm.css';

const AddBookForm = () => {
  const dispatch = useDispatch();
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const book = {
      item_id: uuidv4(),
      title,
      author,
      category: 'action',
    };
    dispatch(addBook(book));
    setTitle('');
    setAuthor('');
  };

  return (
    <div className="addBookForm">
      <h3 className="addBookForm-title">Add new book</h3>
      <form onSubmit={handleSubmit} className="addBookForm-form">
        <input
          className="addBookForm-text-input"
          type="text"
          id="title"
          value={title}
          placeholder="Book title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          className="addBookForm-categories"
          type="text"
          id="author"
          value={author}
          placeholder="author"
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
        />

        <button type="submit" className="addBookForm-submit">
          Add book
        </button>
      </form>
    </div>
  );
};

export default AddBookForm;
