export interface IState {
  executeDecisionLogic(): boolean;
  executeStateMagement(): void;
  executeDataFetching<T>(): Promise<T> | undefined;
}
