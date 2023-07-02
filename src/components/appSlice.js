import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = appSlice.actions;

export const selectUser = (state) => state.app.user;

export default appSlice.reducer;
