import React from 'react';

const AddBookForm = () => (
  <div>
    <h3>Add New Book</h3>
    <form action="" method="post">
      <div className="form-control">
        <label htmlFor="author">
          Title:
          <input type="text" name="title" id="title" />
        </label>
      </div>
      <div className="form-control">
        <label htmlFor="title">
          Author:
          <input type="text" name="author" id="author" />
        </label>
      </div>
      <button type="submit">Add Book</button>
    </form>
  </div>
);

export default AddBookForm;
