import React from "react";
import { useSelector } from "react-redux";

import { selectAllWords } from "./wordsSlice";

const WordList = () => {
  const words = useSelector(selectAllWords).map((word, i) => (
    <li key={i}>{word.word}</li>
  ));
  return <ul>{words}</ul>;
};

export default WordList;
