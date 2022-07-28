import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";

const scoresAdaptor = createEntityAdapter({
  sortComparer: (a, b) => b.score - a.score, // largest scores first
});

const initialState = scoresAdaptor.getInitialState({
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
        scoresAdaptor.upsertMany(state, action.payload)
      })
      .addCase(fetchScores.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default scoresSlice.reducer;

export const { selectAll: selectAllScores, selectById: selectScoreById } =
  scoresAdaptor.getSelectors((state) => state.scores);
