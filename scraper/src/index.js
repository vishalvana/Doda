import browserManager from "./core/BrowserManager.js";
import ExampleScraper from "./scrapers/example/ExampleScraper.js";

async function start() {
  const scraper = new ExampleScraper();

  const jobs = await scraper.scrape();

  console.log(jobs);

  await browserManager.close();
}

start();