import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import { createStore } from "redux";
import Reducer from "./store/Reducer";
import { Provider } from "react-redux";

const store = createStore(Reducer);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  rootElement
);
