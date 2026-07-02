import browserManager from "./BrowserManager.js";
import logger from "../utils/logger.js";

class AbstractScraper {
  constructor(name) {
    this.name = name;
  }

  async scrape() {
    let page;

    try {
      logger.info(`[${this.name}] Started`);

     const jobs = await this.extract();

      logger.info(
        `[${this.name}] Found ${jobs.length} jobs`
      );

      return jobs;
    } finally {
      if (page) {
        await page.close();
      }
    }
  }

  async extract() {
    throw new Error("extract() not implemented");
  }
}

export default AbstractScraper;