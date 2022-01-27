import HttpClient from "../plugins/httpClient";
import { ApiGateway } from "../plugins/gateway";

const httpClient = new HttpClient(ApiGateway.Hr);

export default {
  getPersonalProfile() {
    return httpClient.get(`/Brand/User/Get`);
  },
  getAllUserBaseOnClinic() {
    return httpClient.get(`/Brand/User/Get/All`);
  },
};
