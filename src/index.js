import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import "./index.css";
import App from "./App";
import FlatsReducer from "./reducers/FlatsReducer";

const reducers = combineReducers({
  flats: FlatsReducer,
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={createStore(reducers)}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
