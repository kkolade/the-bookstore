import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const API_KEY = 'Gt8ioRdE9t5U5NKHXwfG';

export const fetchBooks = createAsyncThunk('books/fetchAllBooks/', async () => {
  try {
    return axios.get(`${baseURL}/apps/${API_KEY}/books/`);
  } catch (error) {
    return error;
  }
});

export const addBook = createAsyncThunk('books/addBook', async (book) => {
  try {
    axios.post(`${baseURL}/apps/${API_KEY}/books`, book);
    return book;
  } catch (error) {
    return error;
  }
});

export const deleteBook = createAsyncThunk('books/deleteBook/', async (id) => {
  try {
    axios.delete(`${baseURL}/apps/${API_KEY}/books/${id}`);
    return id;
  } catch (error) {
    return error;
  }
});

const initialState = {
  books: [],
  isLoading: false,
  isSuccessful: false,
  error: null,
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      const books = Object.keys(action.payload.data).map((key) => {
        const book = action.payload.data[key][0];

        return {
          id: key,
          ...book,
        };
      });
      state.isLoading = false;
      state.books = books;
    });

    builder.addCase(addBook.fulfilled, (state, action) => {
      const newBook = {
        id: action.payload.item_id,
        title: action.payload.title,
        author: action.payload.author,
      };
      state.isLoading = false;
      state.books.push(newBook);
      return state;
    });

    builder.addCase(addBook.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(deleteBook.fulfilled, (state, action) => {
      const newState = state.books.filter((book) => book.id !== action.payload);
      state.isLoading = false;
      state.books = newState;
    });
  },
});

export default booksSlice.reducer;
