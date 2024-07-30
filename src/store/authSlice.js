/** @format */

import { createSlice } from "@reduxjs/toolkit";

const savedData = localStorage.getItem("user-token");

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: savedData ? true : false,
  },
  reducers: {
    LOGIN: (state, action) => {
      state.isAuthenticated = true;
      const token = action.payload?.data?.res?.token;
      const userType = action.payload?.data?.userType;
      localStorage.setItem("user-token", token);
      localStorage.setItem("user-type", userType);
    },
    LOGOUT: (state) => {
      state.isAuthenticated = false;
      localStorage.clear();
    },
  },
});

export const { LOGIN, LOGOUT } = authSlice.actions;

export const isAuthenticated = (state) => state.auth.isAuthenticated;

export default authSlice.reducer;
