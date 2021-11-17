import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const reducer = (state = { count: 0, name: "Alex" }, action) => {
  switch (action.type) {
    case "counter/increment":
      return { ...state, count: state.count + action.payload };
    case "counter/decrement":
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
};

const store = createStore(reducer, composeWithDevTools());

export default store;
