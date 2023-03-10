import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchWrapper } from '@/helpers/fetch-wrapper';
import { baseUrl } from '@/store/index';

const name = 'investments';
const slice = createSlice({
  name,
  initialState: {
    investments: [],
  },
  reducers: {
    investmentAdded: (state, action) => console.log('investmentAdded'),
    investmentUpdated: (state, action) => console.log('investmentUpdated'),
    investmentDeleted: (state, action) => console.log('investmentDeleted'),
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
          state.investments = { loading: true };
        },
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        [fulfilled]: (state, action) => {
          state.investments = action.payload;
        },
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        [rejected]: (state, action) => {
          state.investments = { error: action.error };
        },
      };
    },
  },
});

// exports

export const { investmentAdded, investmentUpdated, investmentDeleted } =
  slice.actions;
export const investmentsReducer = slice.reducer;

function getAll() {
  return createAsyncThunk(
    `${name}/getAll`,
    async () => await fetchWrapper.get(`${baseUrl}/investments`),
  );
}
