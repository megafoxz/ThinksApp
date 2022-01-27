import HttpClient from "../plugins/httpClient";
import { ApiGateway } from "../plugins/gateway";

const httpClient = ApiGateway.Authen + "/Authentication/Login";

export default {
  login(userName, password) {
    var body = JSON.stringify({
      userName: userName,
      password: password,
    });

    return HttpClient.post(httpClient, {}, body);
  },
};
