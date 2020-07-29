import {
  errorInstance,
  successInstance,
} from "../../../../../../shared/model/infra/EitherError";
import { APIResult } from "../../../../../../shared/model/infra/APIResult";
import { APIService } from "../../../../../../shared/model/infra/APIService";
import { APIResponse } from "../../../../../../shared/model/infra/IAPIResults";
import { GetCurrentUserDTO } from "../dtos/getCUrrentUserDTO";

export interface IUserService {
  getCurrentUser(payload: {}): Promise<APIResponse<GetCurrentUserDTO>>;
}

class UserService extends APIService implements IUserService {
  constructor({ api }: { api: any }) {
    super({
      api,
    });
  }
  public async getCurrentUser(payload: {}): Promise<any> {
    try {
      const axiosRes = await this.get({ url: "/user/users" });
      return successInstance(APIResult.ok<void>(axiosRes.data.users));
    } catch (err) {
      return errorInstance(
        err.response ? err.response.data.message : "Connection failed"
      );
    }
  }
}

export { UserService };
