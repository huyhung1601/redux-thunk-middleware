import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import App from "./App";
import postsReducer from "./redux/postsReducer";
import { counterReducer } from "./reducer";
import thunk from "redux-thunk";

// const myLogger = (store) => (next) => (action) => {
//   return next(action);
// };

// const secondMiddleware= (store) => (next) => (action) => {
//   return next(action);
// };

// const capAtTen= (store) => (next) => (action) => {
//   if(store.getState() >=10) {
//     return next({type: 'DECREMENT'})
//   }
//   next(action)
// };
// const myLogger= (store) =>{
//   return next => {
//     return action =>{
//       console.log('midleware ran')
//       return next(action)
//     }
//   }
// }
// const store = createStore(counterReducer, applyMiddleware(myLogger, secondMiddleware, capAtTen,logger));

const store =createStore(postsReducer,applyMiddleware(thunk,logger))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
