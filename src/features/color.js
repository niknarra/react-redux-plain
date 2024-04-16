import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = "";

export const colorSlice = createSlice({
  name: "color",
  initialState: { value: initialStateValue },
  reducers: {
    changeColor: (state, action) => {
      state.value = action.payload;
    },
    resetColor: (state, action) => {
      state.value = initialStateValue;
    },
  },
});

export const { changeColor, resetColor } = colorSlice.actions;

export default colorSlice.reducer;
