import dotenv from "dotenv";
dotenv.config();
const env = {
    nodeEnv: process.env.NODE_ENV || "development",
    port: Number(process.env.PORT) || 5001,
    serverUrl: process.env.SERVER_URL,
    apiKey: process.env.API_KEY,
    headless: process.env.HEADLESS === "true",
    requestTimeout: Number(process.env.REQUEST_TIMEOUT) || 30000,
    logLevel: process.env.LOG_LEVEL || "info"

};

export default env;