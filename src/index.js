import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import "./index.css";
import App from "./components/App";
import FlatsReducer from "./reducers/FlatsReducer";
import SelectedFlatReducer from "./reducers/SelectedFlatReducer";

const reducers = combineReducers({
  flats: FlatsReducer,
  selectedFlat: SelectedFlatReducer,
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={createStore(reducers)}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
