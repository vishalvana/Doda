import httpClient from "../core/HttpClient.js";
import env from "../config/env.js";
import logger from "../utils/logger.js";

class JobApiAdapter {
  constructor() {
    this.batchSize = 100;
    this.concurrentRequests = 5;
  }

  async saveJobs(jobs) {
    if (!jobs || jobs.length === 0) {
      logger.warn("No jobs to save.");
      return;
    }

    const batches = [];

    // Split jobs into batches
    for (let i = 0; i < jobs.length; i += this.batchSize) {
      batches.push(jobs.slice(i, i + this.batchSize));
    }

    logger.info(
      `Uploading ${jobs.length} jobs in ${batches.length} batches...`
    );

    let uploadedBatches = 0;

    // Upload batches concurrently
    for (
      let i = 0;
      i < batches.length;
      i += this.concurrentRequests
    ) {
      const currentChunk = batches.slice(
        i,
        i + this.concurrentRequests
      );

      await Promise.all(
        currentChunk.map(async (batch) => {
          await httpClient.post(
            `${env.serverUrl}/jobs/bulk`,
            batch
          );

          uploadedBatches++;

          logger.info(
            `Uploaded batch ${uploadedBatches}/${batches.length}`
          );
        })
      );
    }

    logger.info(
      `Successfully uploaded ${jobs.length} jobs.`
    );
  }
}

export default new JobApiAdapter();