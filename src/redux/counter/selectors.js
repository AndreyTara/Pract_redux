import { useEffect } from "react";

export const selectCounter = (state) => state.counter.counter;
export const selectStep = (state) => state.counter.step;
