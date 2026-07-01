import httpClient from "../core/HttpClient.js";
import env from "../config/env.js";
import logger from "../utils/logger.js";

class JobApiAdapter {

  async save(job) {

    const url = `${env.serverUrl}/jobs`;

    try {

      await httpClient.post(url, job);

      logger.info(`Saved : ${job.title}`);

    } catch (error) {

      logger.error(`Failed to save ${job.title}`);

      throw error;

    }

  }

}

export default new JobApiAdapter();