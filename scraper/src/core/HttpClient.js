import axios from "axios";
import env from "../config/env.js";
import logger from "../utils/logger.js";

class HttpClient {
  constructor() {
    this.client = axios.create({
      timeout: env.requestTimeout,
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/138.0 Safari/537.36",
        Accept: "application/json, text/html",
      },
    });
  }

  async get(url, config = {}) {
    try {
      logger.debug(`GET ${url}`);

      const response = await this.client.get(url, config);

      return response.data;
    } catch (error) {
      logger.error(`GET ${url} failed`);

      throw error;
    }
  }

  async post(url, data = {}, config = {}) {
    try {
      logger.debug(`POST ${url}`);

      const response = await this.client.post(url, data, config);

      return response.data;
    } catch (error) {
      logger.error(`POST ${url} failed`);

      throw error;
    }
  }
}

export default new HttpClient();