import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";

const gamesAdapter = createEntityAdapter();

const initialState = gamesAdapter.getInitialState({
  status: "idle",
  error: null,
});

export const fetchGames = createAsyncThunk("games/fetchGames", async () => {
  const response = await fetch(`/api/games/`);
  return response.json();
});

export const fetchGameById = createAsyncThunk(
  "games/fetchGameById",
  async (gameId) => {
    const response = await fetch(`/api/games/${gameId}`);
    return response.json();
  }
);

export const addNewGame = createAsyncThunk(
  "games/addNewGame",
  // the payload creator receives the partial `{cubes}` object
  async ({ token, cubes }) => {
    const response = await fetch(`/api/games`, {
      method: "POST",
      headers: {
        "X-CSRF-TOKEN": token,
      },
    });
    return response.json();
  }
);

const gamesSlice = createSlice({
  name: "games",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchGames.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchGames.fulfilled, (state, action) => {
        state.status = "succeeded";
        gamesAdapter.upsertMany(state, action.payload);
      })
      .addCase(fetchGames.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addNewGame.fulfilled, gamesAdapter.addOne)
      .addCase(fetchGameById.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchGameById.fulfilled, (state, action) => {
        state.status = "succeeded";
        gamesAdapter.addOne(state, action.payload);
      })
      .addCase(fetchGameById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default gamesSlice.reducer;

export const { selectAll: selectAllGames, selectById: selectGameById } =
  gamesAdapter.getSelectors((state) => state.games);
