import { IState } from "../../../../../../shared/model/interaction/state-handler/IState";
import { AbstractState } from "../../../../../../shared/model/interaction/state-handler/AState";
import { GetCurrentUserHandler } from "./getCurrentUserHandler";
import { UserService } from "../../../../../user/model/infra/data-fetching/apis/UserServices";
import * as actionCreators from "../getCurrentUserActionCreators";

abstract class AGetCurrentUserState extends AbstractState implements IState {
  protected handler: GetCurrentUserHandler;
  constructor(handler: GetCurrentUserHandler) {
    super();
    this.handler = handler;
  }
}

class GetCurrentUserReadyState extends AGetCurrentUserState {
  public executeDecisionLogic(): boolean {
    return true;
  }
  public executeStateMagement(): void {
    this.handler.dispatch(actionCreators.getCurrentUser());
    this.handler.transitionTo(new GetCurrentUserFetchState(this.handler));
  }
}

class GetCurrentUserFetchState extends AGetCurrentUserState {
  private error: Error | string;
  private eitherError: any;
  constructor(handler: GetCurrentUserHandler) {
    super(handler);
    this.error = "";
    this.eitherError = "";
  }
  public async executeDataFetching(): Promise<any> {
    const userService = new UserService({ api: this.handler.api });
    this.eitherError = await userService.getCurrentUser(this.handler.payload);
    if (this.eitherError.isError()) {
      this.error = this.eitherError.result.error;
    } else {
      this.handler.resPayload = this.eitherError.result.value;
    }
  }
  public executeStateMagement(): void {
    if (this.eitherError.isError()) {
      this.handler.transitionTo(
        new GetCurrentUserFailedState(this.handler, this.error)
      );
    } else {
      this.handler.transitionTo(new GetCurrentUserSucessState(this.handler));
    }
  }
}

class GetCurrentUserSucessState extends AGetCurrentUserState {
  constructor(handler: GetCurrentUserHandler) {
    super(handler);
  }
  public executeStateMagement(): void {
    this.handler.dispatch(
      actionCreators.getCurrentUserSuccess(this.handler.resPayload)
    );
  }
}

class GetCurrentUserFailedState extends AGetCurrentUserState {
  protected error: Error | string;
  constructor(handler: GetCurrentUserHandler, error: Error | string) {
    super(handler);
    this.error = error;
  }
  public executeStateMagement(): void {
    this.handler.dispatch(actionCreators.getCurrentUserFailure(this.error));
  }
}

export {
  GetCurrentUserReadyState,
  GetCurrentUserFetchState,
  GetCurrentUserSucessState,
  GetCurrentUserFailedState,
};
