import logger from "../utils/logger.js";
import jobApiAdapter from "../adapters/JobApiAdapters.js";

import RemoteOKScraper from "../scrapers/remoteok/RemoteOKScraper.js";

class ScraperManager {

    constructor() {
        this.scrapers = [
            new RemoteOKScraper(),
        ];
    }

    async run() {

        logger.info("====================================");
        logger.info("Starting DODA Scraper Manager");
        logger.info("====================================");

        let totalFetched = 0;

        for (const scraper of this.scrapers) {

            try {

                logger.info(`Running ${scraper.name}...`);

                const jobs = await scraper.scrape();

                totalFetched += jobs.length;

                await jobApiAdapter.saveJobs(jobs);

                logger.info(`${scraper.name} completed.`);

            } catch (err) {

                logger.error(`${scraper.name} failed.`);
                logger.error(err.message);

            }

        }

        logger.info("====================================");
        logger.info(`Total Jobs Fetched : ${totalFetched}`);
        logger.info("====================================");

    }

}

export default new ScraperManager();