import logger from "./utils/logger.js";
import RemoteOKScraper from "./scrapers/remoteok/RemoteOKScraper.js";
import jobApiAdapter from "./adapters/JobApiAdapters.js";

async function main() {
  logger.info("DODA Scraper Started");

  const scraper = new RemoteOKScraper();

  const jobs = await scraper.scrape();

  await jobApiAdapter.saveJobs(jobs);

  logger.info("Scraping completed successfully.");
}

main().catch((err) => {
  logger.error(err);
});