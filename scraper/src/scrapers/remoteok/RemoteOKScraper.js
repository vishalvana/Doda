import sanitizeHtml from "sanitize-html";
import AbstractScraper from "../../core/AbstractScraper.js";
import httpClient from "../../core/HttpClient.js";

class RemoteOKScraper extends AbstractScraper {
  constructor() {
    super("RemoteOK");
  }

  async extract() {
    const response = await httpClient.get("https://remoteok.com/api");

    // First element is metadata
    response.shift();

    // Remove articles and invalid entries
    const jobs = response.filter(
      (job) =>
        job.position &&
        job.company &&
        job.url
    );

    return jobs.map((job) => ({
      title: job.position,

      company: job.company,

      location: job.location || "Remote",

      salary:
        job.salary_min && job.salary_max
          ? `$${job.salary_min} - $${job.salary_max}`
          : "",

      experience: "",

      employmentType: "",

      description: sanitizeHtml(job.description || "", {
        allowedTags: [],
        allowedAttributes: {},
      }),

      skills: job.tags || [],

      applyUrl: job.url,

      source: "remoteok",

      postedAt: job.date ? new Date(job.date) : null,
    }));
  }
}

export default RemoteOKScraper;