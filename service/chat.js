import { twilio } from "twilio";
import Setting from "../plugins/setting";

const AccessToken = twilio.jwt.AccessToken;
const ChatGrant = AccessToken.ChatGrant;

export default {
  TokenGenerator(identity) {
    const appName = "TwilioChat";

    // Create a "grant" which enables a client to use Chat as a given user
    const chatGrant = new ChatGrant({
      serviceSid: process.env.TWILIO_CHAT_SERVICE_SID,
    });

    // Create an access token which we will sign and return to the client,
    // containing the grant we just created
    const token = new AccessToken(
      Setting.TWILIO_ACCOUNT_SID,
      Setting.TWILIO_AUTH_TOKEN,
      process.env.TWILIO_API_SECRET
    );

    token.addGrant(chatGrant);
    token.identity = identity;

    return token;
  },
};
