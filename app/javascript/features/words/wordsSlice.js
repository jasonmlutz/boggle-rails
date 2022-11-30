import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const wordsAdapter = createEntityAdapter({
  sortComparer: (a, b) => a.word.localeCompare(b.word),
});

const initialState = wordsAdapter.getInitialState({
  activeWordIndexes: [],
  submittedWords: [],
});

const wordsSlice = createSlice({
  name: "words",
  initialState,
  reducers: {
    addWord(state, action) {
      const { word } = action.payload;
      if (!state.submittedWords.includes(word)) {
        wordsAdapter.addOne(state, action.payload);
        state.submittedWords.push(word);
      } else {
        console.log("word already exists in list!");
      }
    },
    setActiveWord(state, action) {
      state.activeWordIndexes = action.payload;
    },
    clearActiveWord(state) {
      state.activeWordIndexes = [];
    },
  },
});

export default wordsSlice.reducer;

export const { addWord, setActiveWord, clearActiveWord } = wordsSlice.actions;

export const { selectAll: selectAllWords } = wordsAdapter.getSelectors(
  (state) => state.words
);

export function selectActiveWord(state) {
  return state.words.activeWordIndexes;
}
