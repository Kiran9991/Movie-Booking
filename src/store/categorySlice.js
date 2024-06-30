
import { createSlice } from '@reduxjs/toolkit';

const initialCategoryState = {
    categories: []
}

export const categorySlice = createSlice({
  name: 'categories',
  initialState: initialCategoryState,
  reducers: {
    addCategory: (state, action) => {
      state.categories.push(action.payload);
    },
  },
});

export const categoryActions = categorySlice.actions;

export default categorySlice.reducer;
