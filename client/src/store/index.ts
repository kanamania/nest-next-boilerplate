import { configureStore } from '@reduxjs/toolkit';

import { authReducer } from './auth';
import { commentsReducer } from './comment';

export * from './auth';
export * from './comment';

export const baseUrl = `${process.env.REACT_APP_API_URL}`;

export const store = configureStore({
  reducer: {
    auth: authReducer,
    comments: commentsReducer,
  },
});
