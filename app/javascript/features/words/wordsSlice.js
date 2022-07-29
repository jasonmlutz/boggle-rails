import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const wordsAdapter = createEntityAdapter({
  sortComparer: (a, b) => a.word.localeCompare(b.word),
});

const initialState = wordsAdapter.getInitialState({
  status: "idle",
  error: null,
});

const wordsSlice = createSlice({
  name: "words",
  initialState,
  reducers: {},
});

export default wordsSlice.reducer;

export const { selectAll: selectAllWords } = wordsAdapter.getSelectors(
  (state) => state.words
);
