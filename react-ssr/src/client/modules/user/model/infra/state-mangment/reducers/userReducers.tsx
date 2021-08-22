import { initialUserState } from "./initialUserState";
import { IUserAction } from "../../../interaction/getCurrentUser/getCurrentUserActionCreators";
import * as actions from "../../../interaction/getCurrentUser/getCurrentUserActionNames";

const userState = (state = initialUserState, action: IUserAction) => {
  switch (action.type as actions.IGetCurrentUserActionName) {
    case actions.GET_CURRENT_USER:
      return {
        ...state,
      };
    case actions.GET_CURRENT_USER_SUCCESS:
      return {
        ...state,
        user: action.user,
      };
    case actions.GET_CURRENT_USER_FAILURE:
      return {
        ...state,
      };
    default:
  }
  return state;
};

export { userState };
