import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/booksSlice';

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
    <div>
      <h3>Add new book</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="title"
          value={title}
          placeholder="Book title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          type="text"
          id="author"
          value={author}
          placeholder="author"
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
        />
        <button type="submit">Add book</button>
      </form>
    </div>
  );
};

export default AddBookForm;
