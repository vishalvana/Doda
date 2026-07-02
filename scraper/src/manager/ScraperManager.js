import logger from "../utils/logger.js";

class ScraperManager {
  constructor() {
    this.scrapers = [];
  }

  register(scraper) {
    this.scrapers.push(scraper);
  }

  async run() {
    logger.info(`Running ${this.scrapers.length} scraper(s)`);

    const jobs = [];

    for (const scraper of this.scrapers) {
      try {
        const result = await scraper.scrape();

        jobs.push(...result);
      } catch (err) {
        logger.error(`${scraper.name} failed : ${err.message}`);
      }
    }

    logger.info(`Collected ${jobs.length} jobs`);

    return jobs;
  }
}

export default new ScraperManager();