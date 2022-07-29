// app/javascript/store.js
import { configureStore } from "@reduxjs/toolkit";

import gamesReducer from "./features/games/gamesSlice";
import scoresReducer from "./features/scores/scoresSlice";
import wordsReducer from "./features/words/wordsSlice";
import lettersReducer from "./features/letters/lettersSlice";

export default configureStore({
  reducer: {
    games: gamesReducer,
    scores: scoresReducer,
    words: wordsReducer,
    letters: lettersReducer,
  },
});
