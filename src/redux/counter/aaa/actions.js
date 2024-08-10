// import { CHANGE_STEP, INCREMENT, DECREMENT, RESET } from "./constants";
import { createAction } from "@reduxjs/toolkit";

// export const increment = () => {
//   return { type: INCREMENT };
// };
// export const decrement = () => {
//   return { type: DECREMENT };
// };
// export const reset = () => {
//   return { type: RESET };
// };
// export const changeStep = (step) => {
//   return { type: CHANGE_STEP, payload: step };
// };

export const increment = createAction("increment");
export const decrement = createAction("decrement");
export const reset = createAction("reset");
export const changeStep = createAction("changeStep");

// console.log(increment());
// console.log(increment(123));

// console.log(changeStep(444));
