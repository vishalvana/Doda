import AbstractScraper from "../../core/AbstractScraper.js";
import httpClient from "../../core/HttpClient.js";

class LeverScraper extends AbstractScraper {
  constructor(company) {
    super("Lever");
    this.company = company;
  }

  async extract() {
    const url = `https://api.lever.co/v0/postings/${this.company}?mode=json`;

    const jobs = await httpClient.get(url);

    return jobs.map((job) => ({
      title: job.text,
      company: this.company,
      location: job.categories?.location || "",
      salary: "",
      experience: "",
      employmentType: job.categories?.commitment || "",
      description: job.descriptionPlain || "",
      skills: [],
      applyUrl: job.hostedUrl,
      source: "lever",
      postedAt: job.createdAt ? new Date(job.createdAt) : null,
    }));
  }
}

export default LeverScraper;