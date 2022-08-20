import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const lettersAdapter = createEntityAdapter({
  selectId: (cube) => cube.index,
});

const initialState = lettersAdapter.getInitialState({
  lastLetter: null,
});

function isNeighbor(a, b) {
  return (
    Math.abs(parseInt(a.row) - parseInt(b.row)) < 2 &&
    Math.abs(parseInt(a.col) - parseInt(b.col)) < 2
  );
}

const lettersSlice = createSlice({
  name: "letters",
  initialState,
  reducers: {
    clearCurrentWord(state, action) {
      lettersAdapter.removeAll(state, action);
      state.lastLetter = null;
    },
    addLetter(state, action) {
      const { row, col } = action.payload;
      if (!state.lastLetter || isNeighbor({ row, col }, state.lastLetter)) {
        lettersAdapter.addOne(state, action.payload);
        state.lastLetter = action.payload;
      } else {
        console.log("letter must be adjacent to terminal letter!");
      }
    },
  },
});

export const { clearCurrentWord, addLetter } = lettersSlice.actions;

export default lettersSlice.reducer;

export const { selectAll: selectAllLetters } = lettersAdapter.getSelectors(
  (state) => state.letters
);

export function isHighlighted(state, index) {
  if (state.hasOwnProperty("ids")) return state.ids.includes(index);
  else return false;
}
