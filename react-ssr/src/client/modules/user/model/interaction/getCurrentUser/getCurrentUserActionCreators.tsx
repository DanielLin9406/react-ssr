import * as actions from "./getCurrentUserActionNames";

export type IUserAction = {
  [key: string]: actions.IGetCurrentUserActionName | any;
};

function getCurrentUser(): IUserAction {
  return {
    type: actions.GET_CURRENT_USER,
  };
}
function getCurrentUserSuccess(user: any): IUserAction {
  console.log(user);
  return {
    type: actions.GET_CURRENT_USER_SUCCESS,
    user,
  };
}
function getCurrentUserFailure(error: Error | string): IUserAction {
  return {
    type: actions.GET_CURRENT_USER_FAILURE,
    error,
  };
}

export { getCurrentUser, getCurrentUserSuccess, getCurrentUserFailure };
