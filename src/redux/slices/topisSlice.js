import { createSlice } from "@reduxjs/toolkit";

const topicSlice = createSlice({
  name: "topic",
  initialState: {
    currentTopic: null,
  },
  reducers: {
    setcurrentTopic: (state, action) => {
      state.currentTopic = action.payload.topicId;
      console.log(state)
    },   
  },
});

export const {
    setcurrentTopic,
} = topicSlice.actions;

export const currentTopic = (state) => state.briefcase.currentTopic;


export default topicSlice.reducer;
