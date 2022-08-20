import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { selectAllWords, setActiveWord, clearActiveWord } from "./wordsSlice";

const WordList = () => {
  const dispatch = useDispatch();

  function handleMouseEnter(word) {
    dispatch(setActiveWord(word.indexes));
  }
  function handleMouseLeave() {
    dispatch(clearActiveWord());
  }
  const words = useSelector(selectAllWords).map((word, i) => (
    <li
      onMouseEnter={() => handleMouseEnter(word)}
      onMouseLeave={() => handleMouseLeave(word)}
      key={i}
      className="border border-black rounded-md p-2 mb-1 mr-1 hover:bg-slate-200"
    >
      {word.word}
    </li>
  ));
  return <ul className="flex flex-row flex-wrap">{words}</ul>;
};

export default WordList;
