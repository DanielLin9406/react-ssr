import { EitherError } from "./EitherError";
import { APIResult } from "./APIResult";

type APIErrorMessage = string;
type APIResponse<T> = EitherError<APIErrorMessage, APIResult<T>>;

export { APIResponse, APIErrorMessage };
