import { IState } from "./IState";

export abstract class AbstractState implements IState {
  public executeDecisionLogic(): boolean {
    return true;
  }
  public executeStateMagement(): void {}
  public executeDataFetching(): Promise<any> {
    return Promise.resolve();
  }
}
