import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchWrapper } from '@/helpers/fetch-wrapper';
import { baseUrl } from '@/store/index';

const name = 'reactions';
const slice = createSlice({
  name,
  initialState: {
    reactions: [],
  },
  reducers: {
    reactionAdded: (state, action) => console.log('reactionAdded'),
    reactionUpdated: (state, action) => console.log('reactionUpdated'),
    reactionDeleted: (state, action) => console.log('reactionDeleted'),
  },
  extraReducers: {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    getAll: () => {
      const { pending, fulfilled, rejected } = getAll();
      return {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        [pending]: (state) => {
          state.reactions = { loading: true };
        },
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        [fulfilled]: (state, action) => {
          state.reactions = action.payload;
        },
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        [rejected]: (state, action) => {
          state.reactions = { error: action.error };
        },
      };
    },
  },
});

// exports

export const { reactionAdded, reactionUpdated, reactionDeleted } =
  slice.actions;
export const reactionsReducer = slice.reducer;

function getAll() {
  return createAsyncThunk(
    `${name}/getAll`,
    async () => await fetchWrapper.get(`${baseUrl}/reactions`),
  );
}
