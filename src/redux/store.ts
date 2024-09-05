import { configureStore } from "@reduxjs/toolkit";
import dogsReducer from "../redux/slices/DogsSlice";

//редьюсер для работы с данными о собаках.

export const store = configureStore({
  reducer: {
    dogs: dogsReducer,
  },
});

export type AppRootStateType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
