import { createStore, applyMiddleware, compose, Store } from "redux";
import thunkMiddleware from "redux-thunk";
import { composedReducers } from "./ReducerRoot";
import axios from "axios";

// For universal ("isomorphic") apps, prefix it with typeof window !== 'undefined' &&
export const isServer = !(
  typeof window !== "undefined" &&
  window.document &&
  window.document.createElement
);

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/v1/",
});

const encapsulatedStore = () => {
  const initialState = isServer
    ? (window as any).INITIAL_STATE
    : (window as any).__PRELOADED_STATE__;

  const enhancers: any = isServer
    ? []
    : [(window as any).__REDUX_DEVTOOLS_EXTENSION__()];

  const middlewareList: any = [
    thunkMiddleware.withExtraArgument(axiosInstance),
  ];

  const composedEnhancers = compose(
    applyMiddleware(...middlewareList),
    ...enhancers
  );

  const store: Store = createStore(
    composedReducers,
    initialState,
    composedEnhancers
  );
  return store;
};

export { encapsulatedStore };
