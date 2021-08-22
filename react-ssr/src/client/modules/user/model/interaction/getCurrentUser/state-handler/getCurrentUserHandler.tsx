import { GetCurrentUserReadyState } from "./getCurrentUserState";
import { IState } from "../../../../../model/interaction/state-handler/IState";

export class GetCurrentUserHandler {
  private state: IState;
  public dispatch: any;
  public getState: any;
  public api: any;
  public payload: any;
  public resPayload: any;
  constructor({
    dispatch,
    getState,
    api,
    payload,
  }: {
    dispatch: any;
    getState: any;
    api: any;
    payload: any;
  }) {
    this.state = new GetCurrentUserReadyState(this);
    this.dispatch = dispatch;
    this.getState = getState;
    this.api = api;
    this.payload = payload;
    this.transitionTo(this.state);
  }
  public transitionTo(state: IState): void {
    this.state = state;
  }
  public runCommandInReadyState(): void {
    this.state.executeDecisionLogic();
    this.state.executeStateMagement();
  }
  public async runCommandInFetchState(): Promise<any> {
    await this.state.executeDataFetching();
    this.state.executeStateMagement();
  }
  public runCommandInResultState(): void {
    this.state.executeStateMagement();
  }
}
