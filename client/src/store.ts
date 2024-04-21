import { configureStore } from '@reduxjs/toolkit';

import { traveleroApi } from './slices/apiSlice';
import authReducer from './slices/authSlice';

export const store = configureStore({
  reducer: {
    [traveleroApi.reducerPath]: traveleroApi.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(traveleroApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
