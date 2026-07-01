import browserManager from "./BrowserManager.js";
import logger from "../utils/logger.js";

class BaseScraper {
  constructor(name) {
    this.name = name;
  }

  async scrape() {
    let page;

    try {
      logger.info(`[${this.name}] Starting scraper`);

      page = await browserManager.newPage();

      const rawData = await this.fetch(page);

      const parsedData = await this.parse(rawData);

      const jobs = await this.normalize(parsedData);

      logger.info(
        `[${this.name}] Scraped ${jobs.length} jobs`
      );

      return jobs;
    } catch (error) {
      logger.error(`[${this.name}] ${error.message}`);

      throw error;
    } finally {
      if (page) {
        await page.close();
      }
    }
  }

  async fetch() {
    throw new Error("fetch() not implemented.");
  }

  async parse() {
    throw new Error("parse() not implemented.");
  }

  async normalize() {
    throw new Error("normalize() not implemented.");
  }
}

export default BaseScraper;