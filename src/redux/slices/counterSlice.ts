import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Estado inicial
interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

// Definir el slice
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

// Exportar acciones y reducer
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
