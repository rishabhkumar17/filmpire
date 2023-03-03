import { createSlice } from '@reduxjs/toolkit';

export const genreOrCategory = createSlice({
  name: 'genreOrCategory',
  initialState: {
    genreOrCategoryName: '',
    page: 1,
    searchQuery: '',
  },
  reducers: {
    SelectGenreOrCategory: (state, action) => {
      console.log(action.payload);
    },
  },
});

export const { SelectGenreOrCategory } = genreOrCategory;

export default genreOrCategory.reducer;
