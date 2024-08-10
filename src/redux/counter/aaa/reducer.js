import { reset } from "./actions";
// import { INCREMENT, DECREMENT, RESET, CHANGE_STEP } from "./constants";
import { createReducer } from "@reduxjs/toolkit";
import { increment, decrement, reset, decrement } from "./actions";
const initialState = {
  counter: 0,
  step: 1,
};

export const counterReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(increment, (state, action) => {
      state.counter += state.step;
    })
    .addCase(decrement, (state, action) => {
      state.counter -= state.step;
    })
    .addCase(reset, (state, action) => {
      //  state.counter: 0; state.step: 1; et setera value
      return initialState;
    })
    .addCase(changeStep, (state, action) => {
      state.step = action.payload;
    });
});

// const counterReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case increment.type:
//       return {
//         ...state,
//         counter: state.counter + state.step,
//       };
//     case decrement.type:
//       return {
//         ...state,
//         counter: state.counter - state.step,
//       };
//     case reset.type:
//       return {
//         ...state,
//         counter: 0,
//         step: 1,
//       };
//     case changeStep.type:
//       return {
//         ...state,
//         counter: 0,
//         step: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// export default counterReducer;
