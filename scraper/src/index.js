import logger from "./utils/logger.js";
import RemoteOKScraper from "./scrapers/remoteok/RemoteOKScraper.js";

async function main() {
  logger.info("DODA Scraper Started");

  const scraper = new RemoteOKScraper();

  const jobs = await scraper.scrape();

  console.log(jobs.slice(0, 5));
}

main().catch(console.error);