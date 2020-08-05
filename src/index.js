import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { createStore } from "redux";

// state of store
const initialState = {
  count: 0,
  color: "",
  textColor: "",
};

const store = createStore(
  countReducer,

  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function countReducer(state = initialState, action) {
  if (state.count > 10) {
    state.textColor = "red";
  } else state.textColor = "";

  switch (action.type) {
    case "INCREMENT":
      state.count = state.count + 1;
      break;
    case "DECREMENT":
      if (state.count > 0) {
        state.count = state.count - 1;
      }
      break;
    case "RESET":
      return initialState;
    case "CHANGECOLOR":
      state.color = action.payload;

    default:
      return state;
  }

  return { ...state };
}
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

/*
  {color , count}


  { color }
*/
