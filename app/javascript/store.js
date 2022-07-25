// app/javascript/store.js
import { configureStore } from '@reduxjs/toolkit'

import gamesReducer from './features/games/gamesSlice'
import scoresReducer from './features/scores/scoresSlice'

export default configureStore({
  reducer: {
    games: gamesReducer,
    scores: scoresReducer,
  },
})