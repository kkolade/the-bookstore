import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL =
  'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const API_KEY = 'Gt8ioRdE9t5U5NKHXwfG';
const exerciseURK =
  'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/g7dj58UKgU7fzx0rJuTx/books/';

export const fetchBooks = createAsyncThunk('books/fetchAllBooks/', async () => {
  try {
    return axios.get(exerciseURK);
    // return axios.get(`${baseUrl}/apps/${apiKey}/books/`);
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
      return books;
    });
  },
});

export default booksSlice.reducer;
