import { INCREMENT, DECREMENT } from "./../type/index";

const initialState = {
  value: 0,
};

const counter = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return Object.assign({}, state, {
        value: state.value + action.payload,
      });
    case DECREMENT:
      return Object.assign({}, state, {
        value: state.value - action.payload,
      });

    default:
      return state;
  }
};

export default counter;
