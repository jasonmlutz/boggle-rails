import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  scores: [],
  status: "idle",
  error: null,
};

export const fetchScores = createAsyncThunk("scores/fetchScores", async () => {
  const response = await fetch("/api/scores");
  return response.json();
});

const scoresSlice = createSlice({
  name: "scores",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchScores.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchScores.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Add any fetched scores to the array
        state.scores = state.scores.concat(action.payload);
      })
      .addCase(fetchScores.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default scoresSlice.reducer

export const selectAllScores = (state) => state.scores.scores;

export const selectScoreById = (state, scoreId) =>
  state.scores.find((score) => score.id === scoreId);