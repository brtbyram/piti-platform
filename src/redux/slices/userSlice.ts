import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
id: string;
name: string;
email: string;
avatarUrl: string | null;
bio: string | null;
location: string | null;
website: string | null;
}

const initialState: UserState = {
  id: "",
  name: "",
  email: "",
  avatarUrl: null,
  bio: null,
  location: null,
  website: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      return { ...state, ...action.payload };
    },
    clearUser: () => initialState,
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
