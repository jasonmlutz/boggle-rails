import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuid } from "uuid";

import { cubeLetters } from "../../resources/cubeLetters";
import Cube from "./Cube";

import { selectAllLetters, clearCurrentWord } from "../letters/lettersSlice";
import { addWord } from "../words/wordsSlice";

import WordList from "../words/WordList";

const BoardDisplay = ({ cubes }) => {
  const dispatch = useDispatch();

  const letters = useSelector(selectAllLetters);

  const currentWord = letters
    .map((letter) => letter.letter)
    .join("")
    .toUpperCase();

  const currentIndexes = letters.map((letter) => letter.index);

  function parseCubes(cubes) {
    const parsed = [];
    for (let i = 0; i < 32; i += 2) {
      const cubeIndex = cubes.charCodeAt(i) - 97; // a=0, b=1, etc
      const letterIndex = cubes[i + 1];
      const letter = cubeLetters[cubeIndex].split(" ")[letterIndex];
      parsed.push(letter);
    }
    return parsed;
  }

  function renderCubes() {
    let row = -1;
    let col = 0;
    return parseCubes(cubes).map((letter, i) => {
      row++;
      if (row === 4) (row = 0), col++;
      return (
        <li key={i}>
          <Cube letter={letter} row={row} col={col} id={i} index={i} />
        </li>
      );
    });
  }

  function handleSubmit() {
    console.log(`submitting currentWord: ${currentWord}`);
    // generate id

    dispatch(
      addWord({ word: currentWord, id: uuid(), indexes: currentIndexes })
    );
    dispatch(clearCurrentWord());
  }

  return (
    <div className="w-[450px] border border-black rounded-md p-2 m-2">
      <p className="font-bold">
        app/javascript/components/Board/BoardDisplay.jsx
      </p>
      <p className="italic text-xs">width 450px</p>
      <ul className="grid grid-cols-4 grid-rows-4">{renderCubes()}</ul>
      <div className="flex flex-row justify-between">
        <button
          className="border border-black rounded-md p-2 m-2 hover:bg-slate-200 cursor:pointer"
          onClick={() => dispatch(clearCurrentWord())}
        >
          CLEAR
        </button>
        <ul className="flex flex-col w-40 h-16 border border-black rounded-md p-2 m-2">
          <li>Current Word:</li>
          <li>{currentWord}</li>
        </ul>
        <button
          className="border border-black rounded-md p-2 m-2 hover:bg-slate-200 cursor:pointer"
          onClick={handleSubmit}
        >
          SUBMIT
        </button>
      </div>
      <WordList />
    </div>
  );
};

export default BoardDisplay;
