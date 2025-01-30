import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice"; // Importa un slice

export const store = configureStore({
  reducer: {
    counter: counterReducer, // Agrega el slice al store
  },
});

// Tipos de ayuda para TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;