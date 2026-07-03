import logger from "../utils/logger.js";

class AbstractScraper {
  constructor(name) {
    this.name = name;
  }

  async scrape() {
    try {
      logger.info(`[${this.name}] Started`);

      const jobs = await this.extract();

      logger.info(`[${this.name}] Found ${jobs.length} jobs`);

      return jobs;
    } catch (err) {
      logger.error(err);
      throw err;
    }
  }

  async extract() {
    throw new Error("extract() not implemented");
  }
}

export default AbstractScraper;