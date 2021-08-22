export abstract class APIService {
  protected axiosInstance: any;
  constructor({ api }: { api: any }) {
    this.axiosInstance = api;
    this.enableInterceptors();
  }
  private enableInterceptors(): void {
    this.axiosInstance.interceptors.response.use(
      this.getSuccessResponseHandler(),
      this.getErrorResponseHandler()
    );
  }
  private getSuccessResponseHandler() {
    return (response: any) => {
      return response;
    };
  }
  private getErrorResponseHandler() {
    return (error: any) => {
      return Promise.reject({ ...error });
    };
  }
  protected get({
    url,
    params,
    headers,
  }: {
    url: string;
    params?: {};
    headers?: {};
  }) {
    const payload = { headers, ...params };
    return this.axiosInstance.get(url, { payload });
  }
  protected post({
    url,
    data,
    params,
    headers,
  }: {
    url: string;
    data: any;
    params?: {};
    headers?: {};
  }) {
    const payload = { headers, data, ...params };
    return this.axiosInstance.post(url, { payload });
  }
  protected put({
    url,
    id,
    data,
    params,
    headers,
  }: {
    url: string;
    id: string;
    data: {};
    params?: {};
    headers?: {};
  }) {
    const payload = { headers, data, ...params };
    return this.axiosInstance.put(`${url}/${id}`, { payload });
  }
  protected delete({
    url,
    id,
    params,
    headers,
  }: {
    url: string;
    id: string;
    params?: {};
    headers?: {};
  }) {
    const payload = { headers, ...params };
    return this.axiosInstance.put(`${url}/${id}`, { payload });
  }
}
