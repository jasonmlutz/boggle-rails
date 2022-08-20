import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { addLetter, selectAllLetters } from "../letters/lettersSlice";
import { selectActiveWord } from "../words/wordsSlice";

const Cube = ({ letter, row, col, index, id }) => {
  const dispatch = useDispatch();

  const letters = useSelector(selectAllLetters);
  const activeWordIndexes = useSelector(selectActiveWord);
  const highlightBlue = letters.some((letter) => letter.index === index);
  const highlightRed = activeWordIndexes.includes(index);
  // const highlightRed = false;

  function handleClick() {
    console.log(row, col, letter, id);
    dispatch(addLetter({ letter, row, col, index, id }));
  }

  return (
    <div
      className={
        "border border-black rounded-md p-2 m-2 w-24 h-24 hover:bg-slate-200" +
        (highlightRed ? " border-red-400 border-4" : "") +
        (highlightBlue ? " bg-blue-400" : "")
      }
      onClick={handleClick}
    >
      <p className="font-bold">Cube.jsx</p>
      <p>{letter.toUpperCase()}</p>
    </div>
  );
};

export default Cube;
