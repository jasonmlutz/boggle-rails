import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  games: [],
  status: "idle",
  error: null,
};

const gamesSlice = createSlice({
  name: "games",
  initialState,
  reducers: {}
});

export default gamesSlice.reducer;
