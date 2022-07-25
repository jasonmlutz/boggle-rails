import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "1", player: "jason", score: "13" },
  { id: "2", player: "kim", score: "52" },
];

const scoresSlice = createSlice({
  name: 'scores',
  initialState,
  reducers: {}
})

export default scoresSlice.reducer