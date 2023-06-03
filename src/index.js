import React from "react";
import ReactDOM from "react-dom/client";
import "../src/index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

// import { createStore } from "redux";
import { Provider } from "react-redux";

import { store } from "./redux/store/store";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
