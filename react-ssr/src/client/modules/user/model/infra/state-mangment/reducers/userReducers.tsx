import { initialUserState } from "./initialUserState";
import { IGetCurrentUserActionName } from "../../../interaction/getCurrentUser/getCurrentUserActionNames";
import { IUserAction } from "../../../interaction/getCurrentUser/getCurrentUserActionCreators";
import * as actions from "../../../interaction/getCurrentUser/getCurrentUserActionNames";

const userProfile = (state = initialUserState, action: IUserAction) => {
  switch (action.type as IGetCurrentUserActionName) {
    case actions.GET_CURRENT_USER:
      return {
        ...state,
      };
    case actions.GET_CURRENT_USER_SUCCESS:
      return {
        ...state,
        users: action.user,
      };
    case actions.GET_CURRENT_USER_FAILURE:
      return {
        ...state,
      };
    default:
  }
  return state;
};

export { userProfile };
