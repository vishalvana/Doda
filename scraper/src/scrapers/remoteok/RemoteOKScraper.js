import AbstractScraper from "../../core/AbstractScraper.js";
import httpClient from "../../core/HttpClient.js";

class RemoteOKScraper extends AbstractScraper {
  constructor() {
    super("RemoteOK");
  }

  async extract() {
    const jobs = await httpClient.get("https://remoteok.com/api");

    // First element is metadata
    jobs.shift();

    return jobs.map((job) => ({
      title: job.position || "",
      company: job.company || "",
      location: job.location || "Remote",
      salary: job.salary_min && job.salary_max
        ? `$${job.salary_min} - $${job.salary_max}`
        : "",
      experience: "",
      employmentType: "",
      description: job.description || "",
      skills: job.tags || [],
      applyUrl: job.url,
      source: "remoteok",
      postedAt: job.date ? new Date(job.date) : null,
    }));
  }
}

export default RemoteOKScraper;