import React from "react";
import { useSelector } from "react-redux";

import { selectAllWords } from "./wordsSlice";

function handleMouseEnter(word) {
  console.log(word.word, word.indexes);
}
function handleMouseLeave() {
  console.log("leaving!");
}
const WordList = () => {
  const words = useSelector(selectAllWords).map((word, i) => (
    <li
      onMouseEnter={() => handleMouseEnter(word)}
      onMouseLeave={() => handleMouseLeave(word)}
      key={i}
      className="border border-black rounded-md p-2 mb-1 hover:bg-slate-200"
    >
      {word.word}
    </li>
  ));
  return <ul className="flex flex-row flex-wrap">{words}</ul>;
};

export default WordList;
