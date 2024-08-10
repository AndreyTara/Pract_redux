import { createAction, createSlice } from "@reduxjs/toolkit";

import initialContacts from "../../assets/contacts.json";

const initialState = {
  counter: 0,
  step: 1,
  counters: initialContacts,
};

const slice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.counter += state.step;
    },
    decrement: (state, action) => {
      state.counter -= state.step;
    },
    reset: (state, action) => {
      return initialState;
    },
    changeStep: (state, action) => {
      state.step = action.payload;
    },
  },
});

export const counterReducer = slice.reducer;
export const { increment, decrement, reset, changeStep } = slice.actions;
