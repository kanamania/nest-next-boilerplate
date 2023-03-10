import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchWrapper, history } from '@/helpers/fetch-wrapper';

// create slice

const name = 'auth';
const initialState = createInitialState();
const reducers = createReducers();
const extraActions = createExtraActions();
const extraReducers = createExtraReducers();
const slice = createSlice({ name, initialState, reducers, extraReducers });

// exports

export const authActions = { ...slice.actions, ...extraActions };
export const authReducer = slice.reducer;

// implementation

function createInitialState() {
  const auth = JSON.parse(localStorage.getItem('auth') ?? '{}');
  return {
    // initialize state from local storage to enable user to stay logged in
    user: auth ? auth.user : null,
    token: auth ? auth.token : null,
    error: null,
  };
}

function createReducers() {
  return {
    logout,
  };

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  function logout(state) {
    state.user = null;
    localStorage.removeItem('auth');
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    history.navigate('/login');
  }
}

function createExtraActions() {
  const baseUrl = `${process.env.REACT_APP_API_URL}/users`;

  return {
    login: login(),
  };

  function login() {
    return createAsyncThunk(
      `${name}/login`,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      async ({ username, password }) =>
        await fetchWrapper.post(`${baseUrl}/authenticate`, {
          username,
          password,
        }),
    );
  }
}

function createExtraReducers() {
  return {
    ...login(),
  };

  function login() {
    const { pending, fulfilled, rejected } = extraActions.login;
    return {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      [pending]: (state) => {
        state.error = null;
      },
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      [fulfilled]: (state, action) => {
        const user = action.payload;

        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('user', JSON.stringify(user));
        state.user = user;

        // get return url from location state or default to home page
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const { from } = history.location.state || { from: { pathname: '/' } };
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        history.navigate(from);
      },
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      [rejected]: (state, action) => {
        state.error = action.error;
      },
    };
  }
}
