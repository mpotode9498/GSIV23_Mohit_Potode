import { createSlice } from "@reduxjs/toolkit";

export const movieSlice = createSlice({
  name: "movies",
  initialState: {
    url: {},
    genres: {},
  },
  reducers: {
    getConfiguration: (state, action) => {
      state.url = action.payload;
    },
  },
});

export const { getConfiguration } = movieSlice.actions;

export default movieSlice.reducer;
