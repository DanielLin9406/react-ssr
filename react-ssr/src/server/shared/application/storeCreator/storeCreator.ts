import { createStore, applyMiddleware, compose, Store } from "redux";
import thunkMiddleware from "redux-thunk";
import { composedReducers } from "../../../../client/shared/model/infra/ReducerRoot";
import axios from "axios";

const storeCreator = (req: any) => {
  const enhancers: any = [];
  const axiosInstance = axios.create({
    baseURL: "http://react-ssr-api.herokuapp.com",
    headers: { cookie: req.get("cookie") || "" },
  });

  const middlewareList = [thunkMiddleware.withExtraArgument(axiosInstance)];

  const composedEnhancers = compose(
    applyMiddleware(...middlewareList),
    ...enhancers
  );
  const store = createStore(composedReducers, {} as any, composedEnhancers);
  return store;
};

export { storeCreator };
