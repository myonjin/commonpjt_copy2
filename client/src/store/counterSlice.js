import { createSlice } from "@reduxjs/toolkit"

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    up: (state, action) => {
      state.value = state.value + action.step
    },
  },
});

export default counterSlice;
export const { up } = counterSlice.actions;