import Setting from "../plugins/setting";

const accountSid = Setting.TWILIO_ACCOUNT_SID;

const authToken = Setting.TWILIO_AUTH_TOKEN;

const client = require("twilio")(accountSid, authToken);
