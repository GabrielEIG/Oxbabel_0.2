import { configureStore } from "@reduxjs/toolkit";
import topicReducer from "./slices/topisSlice"

export const store = configureStore({
  reducer: {
    topic: topicReducer,
  },
});