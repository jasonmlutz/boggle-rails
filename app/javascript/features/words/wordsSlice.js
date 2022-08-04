import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const wordsAdapter = createEntityAdapter({
  sortComparer: (a, b) => a.word.localeCompare(b.word),
});

const initialState = wordsAdapter.getInitialState({});

const wordsSlice = createSlice({
  name: "words",
  initialState,
  reducers: {
    addWord(state, action) {
      const { word } = action.payload;
      const words = Object.values(state.entities);
      if (!words.includes(word)) wordsAdapter.addOne(state, action.payload);
      else console.log("word exists in word list!");
    },
  },
});

export default wordsSlice.reducer;

export const { addWord } = wordsSlice.actions;

export const { selectAll: selectAllWords } = wordsAdapter.getSelectors(
  (state) => state.words
);
