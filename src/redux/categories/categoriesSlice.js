import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.categories = [...(state.categories.status = 'Under Construction')];
    },
  },
});

export const { addBook, deleteBook } = categoriesSlice.actions;
export default categoriesSlice.reducer;
