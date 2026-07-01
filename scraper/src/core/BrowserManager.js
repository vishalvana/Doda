import { chromium } from "playwright";
import env from "../config/env.js";
import logger from "../utils/logger.js";

class BrowserManager {
  constructor() {
    this.browser = null;
  }

  async launch() {
    if (this.browser) {
      return this.browser;
    }

    logger.info("Launching Playwright browser...");

    this.browser = await chromium.launch({
      headless: env.headless,
    });

    return this.browser;
  }

  async newPage() {
    const browser = await this.launch();

    const context = await browser.newContext({
      viewport: {
        width: 1440,
        height: 900,
      },
      userAgent:
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/138.0 Safari/537.36",
    });

    return await context.newPage();
  }

  async close() {
    if (!this.browser) return;

    logger.info("Closing browser...");

    await this.browser.close();
    this.browser = null;
  }
}

export default new BrowserManager();