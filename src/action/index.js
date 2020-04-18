export const INCREMENT = "count/INCREMENT";
export const DECREMENT = "count/DECREMENT";

export const increment = () => ({ type: INCREMENT, payload: 2 });
export const decrement = () => ({ type: DECREMENT, payload: 2 });
