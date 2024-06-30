import { createSlice } from "@reduxjs/toolkit";

const intialMovieState = {
  movies: [],
};

export const movieSlice = createSlice({
  name: "movies",
  initialState: intialMovieState,
  reducers: {
    addMovie: (state, action) => {
      state.movies.push(action.payload);
    },
  },
});

export const movieActions = movieSlice.actions;

export default movieSlice.reducer;
