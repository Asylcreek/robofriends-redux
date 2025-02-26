import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import "tachyons";

import App from "./containers/App";
import registerServiceWorker from "./registerServiceWorker";
import { requestRobots, searchRobots } from "./reducers";

import "./index.css";

const logger = createLogger();

const rootReducers = combineReducers({ requestRobots, searchRobots });

const middlewares = [thunkMiddleware];

if (process.env.NODE_ENV !== "production") middlewares.push(logger);

const store = createStore(rootReducers, applyMiddleware(thunkMiddleware));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
