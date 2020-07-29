import { GetCurrentUserHandler } from "../interaction/getCurrentUser/state-handler/getCurrentUserHandler";

const getCurrentUser = () => {
  const payload = {};
  return async (dispatch: any, getState?: any, api?: any) => {
    const getCurrentUserHandler = new GetCurrentUserHandler({
      dispatch,
      getState,
      api,
      payload,
    });
    getCurrentUserHandler.runCommandInReadyState();
    await getCurrentUserHandler.runCommandInFetchState();
    getCurrentUserHandler.runCommandInResultState();
  };
};

export { getCurrentUser };
