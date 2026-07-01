import BaseScraper from "../../core/BaseScraper.js";

class ExampleScraper extends BaseScraper {
  constructor() {
    super("Example");
  }

  async fetch(page) {
    await page.goto("https://example.com");

    return page;
  }

  async parse(page) {
    return [
      {
        title: await page.title(),
      },
    ];
  }

  async normalize(jobs) {
    return jobs;
  }
}

export default ExampleScraper;