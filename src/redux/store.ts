import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./slices/uiSlice";
import modalReducer from "./slices/modalSlice";


export const store = configureStore({
reducer: {
ui: uiReducer,
modal: modalReducer,
},
});

// Type'lar (TypeScript için)
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;