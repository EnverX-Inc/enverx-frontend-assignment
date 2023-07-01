import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    themeMode: localStorage.getItem("theme") || "light",
  },
  reducers: {
    handleThemeChange: (state, action) => {
      const newThemeMode = state.themeMode === "light" ? "dark" : "light";
      localStorage.setItem("theme", newThemeMode);
      return { themeMode: newThemeMode };
    },
  },
});

export const { handleThemeChange } = themeSlice.actions;

export default themeSlice.reducer;
