import HttpClient from "../plugins/httpClient";
import { ApiGateway } from "../plugins/gateway";

var httpClient = new HttpClient(ApiGateway.Pas);

export default {
  getListClinic(keySearch = "", page = 1, limit = 10) {
    var query = {
      keySearch,
    };
    var headers = {
      page,
      limit,
    };
    return httpClient.get("/App/Clinic/Search", query, headers);
  },
};
