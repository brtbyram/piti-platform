import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UIState {
  theme: "light" | "dark";
  language: "tr" | "en";
}

const initialState: UIState = {
  theme: "light",
  language: "tr",
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
    setLanguage: (state, action: PayloadAction<"tr" | "en">) => {
      state.language = action.payload;
    },
  },
});

export const { toggleTheme, setLanguage } = uiSlice.actions;
export default uiSlice.reducer;