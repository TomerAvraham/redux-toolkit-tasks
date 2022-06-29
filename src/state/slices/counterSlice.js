import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 20,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,

  reducers: {
    increment(state, action) {
      state.value++;
    },
    addAmount(state, { payload }) {
      state.value += payload;
    },
  },
});

export const { increment, addAmount } = counterSlice.actions;
export default counterSlice.reducer;
