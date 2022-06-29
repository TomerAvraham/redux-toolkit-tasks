import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "John",
  username: "",
  token: "",
  isAuth: true,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    changeName(state, action) {
      state.name = action.payload;
    },
  },
});

export const { changeName } = userSlice.actions;
export default userSlice.reducer;
