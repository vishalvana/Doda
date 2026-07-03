import logger from "./utils/logger.js";
import scraperManager from "./manager/ScraperManager.js";

async function main() {

    logger.info("DODA Scraper Started");

    await scraperManager.run();

    logger.info("All scrapers finished.");

}

main().catch((err) => {
    logger.error(err);
});