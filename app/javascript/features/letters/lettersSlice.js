import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const lettersAdapter = createEntityAdapter({
  selectId: (cube) => cube.index,
});

const initialState = lettersAdapter.getInitialState();

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
    clearCurrentWord: lettersAdapter.removeAll,
    addLetter(state, action) {
      const { row, col } = action.payload;
      const values = Object.values(state.entities);
      if (
        !values.length ||
        isNeighbor({ row, col }, values[values.length - 1])
      ) {
        lettersAdapter.addOne(state, action.payload);
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
