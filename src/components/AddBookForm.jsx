import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/booksSlice';

const AddBookForm = () => {
  const dispatch = useDispatch();
  const [formInputs, setFormInputs] = useState({ title: '', author: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = uuidv4();
    const newBook = {
      item_id: id,
      ...formInputs,
    };

    dispatch(addBook(newBook));
    setFormInputs({
      title: '',
      author: '',
    });
  };

  const handleChange = (e) => {
    setFormInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div>
      <h3>Add New Book</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="author">
            Author:
            <input
              type="text"
              name="author"
              id="author"
              value={formInputs.author}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="form-control">
          <label htmlFor="title">
            Title:
            <input
              type="text"
              name="title"
              id="title"
              value={formInputs.title}
              onChange={handleChange}
            />
          </label>
        </div>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBookForm;
