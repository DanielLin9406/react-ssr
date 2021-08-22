import { userState } from "../../user/model/infra/state-mangment/reducers/userReducers";
import { IUserState } from "../../user/model/infra/state-mangment/state-models/IUserState";

const composedReducers = (state: any = {}, action: any) => {
  return {
    userState: userState(state.userState, action),
  };
};

export { composedReducers };
