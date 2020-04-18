import { INCREMENT, DECREMENT } from "./../type/index";

export const increment = () => ({ type: INCREMENT, payload: 2 });
export const decrement = () => ({ type: DECREMENT, payload: 2 });
