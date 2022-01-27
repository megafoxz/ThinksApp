import HttpClient from "../plugins/httpClient";
import { ApiGateway } from "../plugins/gateway";

var httpClient = new HttpClient(ApiGateway.Pas);

export default {
  CallSingleHotline(title) {
    return httpClient.get(`/Twilio/CallSingleHotline/${title}`);
  },
};
