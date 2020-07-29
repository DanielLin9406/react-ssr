import { userProfile } from "../../../modules/user/model/infra/state-mangment/reducers/userReducers";
import { IUserState } from "../../../modules/user/model/infra/state-mangment/state-models/IUserState";

const composedReducers = (state: any = {}, action: any) => {
  return {
    userProfile: userProfile(state.userProfile, action),
  };
};

export { composedReducers };
