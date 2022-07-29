import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";

const scoresAdapter = createEntityAdapter({
  sortComparer: (a, b) => b.score - a.score, // largest scores first
});

const initialState = scoresAdapter.getInitialState({
  status: "idle",
  error: null,
});

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
        scoresAdapter.upsertMany(state, action.payload);
      })
      .addCase(fetchScores.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default scoresSlice.reducer;

export const { selectAll: selectAllScores, selectById: selectScoreById } =
  scoresAdapter.getSelectors((state) => state.scores);
