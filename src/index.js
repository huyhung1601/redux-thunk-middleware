import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import App from "./App";
import { counterReducer } from "./reducer";

const myLogger = (store) => (next) => (action) => {
  return next(action);
};

const secondMiddleware= (store) => (next) => (action) => {
  return next(action);
};

const capAtTen= (store) => (next) => (action) => {
  if(store.getState() >=10) {
    return next({type: 'DECREMENT'})
  }
  next(action)
};
// const myLogger= (store) =>{
//   return next => {
//     return action =>{
//       console.log('midleware ran')
//       return next(action)
//     }
//   }
// }
const store = createStore(counterReducer, applyMiddleware(myLogger, secondMiddleware, capAtTen));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
