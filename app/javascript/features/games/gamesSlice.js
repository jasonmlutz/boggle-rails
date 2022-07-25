import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  games: [
    { id: "1", cubes: "3a2c8d55-760b-4ba9-b877-23edb2145a42" },
    { id: "2", cubes: "n4b4m0i5c4l2j4h0d3k4a4f5g0p3o2e5" },
  ],
  status: "idle",
  error: null,
};

const gamesSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
});

export default gamesSlice.reducer;
