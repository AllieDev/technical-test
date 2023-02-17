import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  loading: boolean;
}

const initialState: CounterState = {
  loading: true,
};

export const counterSlice = createSlice({
  name: "slice",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLoading } = counterSlice.actions;

export default counterSlice.reducer;
