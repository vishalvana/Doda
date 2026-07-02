import AbstractScraper from "../../core/AbstractScraper.js";

class GreenhouseScraper extends AbstractScraper {

    constructor(url) {

        super("Greenhouse");

        this.url = url;

    }

    async extract(page) {
  await page.goto(this.url, {
    waitUntil: "networkidle",
  });

  console.log(await page.content());

  return [];
}

}

export default GreenhouseScraper;