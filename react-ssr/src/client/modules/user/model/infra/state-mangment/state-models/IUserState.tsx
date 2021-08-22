import { IUser } from "./IUser";

export interface IUserState {
  user: IUser | [];

  error: string;
}
