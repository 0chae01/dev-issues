import { Octokit } from "octokit";

export const getIssueList = async (page: number) => {
  const octokit = new Octokit({
    auth: process.env.REACT_APP_GIT_TOKEN,
  });

  return await octokit.request(
    "GET /repos/{owner}/{repo}/issues?state={state}&sort={sort}&per_page={30}",
    {
      owner: "facebook",
      repo: "react",
      state: "open",
      sort: "comments",
      page: page,
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    }
  );
};

export const getIssueItem = async (issueNumber: number) => {
  const octokit = new Octokit({
    auth: process.env.REACT_APP_GIT_TOKEN,
  });

  const response = await octokit.request(
    "GET /repos/{owner}/{repo}/issues/{issue_number}",
    {
      owner: "facebook",
      repo: "react",
      issue_number: issueNumber,
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    }
  );
  return response;
};
