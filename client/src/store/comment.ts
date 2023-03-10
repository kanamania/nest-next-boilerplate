import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchWrapper } from '@/helpers/fetch-wrapper';
import { baseUrl } from '@/store/index';

const name = 'comments';
const slice = createSlice({
  name,
  initialState: {
    comments: [],
  },
  reducers: {
    commentAdded: (state, action) => console.log('commentAdded'),
    commentUpdated: (state, action) => console.log('commentUpdated'),
    commentDeleted: (state, action) => console.log('commentDeleted'),
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
          state.comments = { loading: true };
        },
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        [fulfilled]: (state, action) => {
          state.comments = action.payload;
        },
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        [rejected]: (state, action) => {
          state.comments = { error: action.error };
        },
      };
    },
  },
});

// exports

export const { commentAdded, commentUpdated, commentDeleted } = slice.actions;
export const commentsReducer = slice.reducer;

function getAll() {
  return createAsyncThunk(
    `${name}/getAll`,
    async () => await fetchWrapper.get(`${baseUrl}/comments`),
  );
}
