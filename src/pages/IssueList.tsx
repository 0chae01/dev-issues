import { Octokit, App } from "octokit";
import { useEffect, useState } from "react";
import { styled } from "styled-components";
import Ad from "../components/IssueList/Ad";
import IssueItem from "../components/IssueList/IssueItem";
import { issueType } from "../types/issueType";

const getIssueList = async () => {
  const octokit = new Octokit({
    auth: process.env.REACT_APP_OCTOKIT_TOKEN,
  });

  return await octokit.request(
    "GET /repos/{owner}/{repo}/issues?state={state}&sort={sort}&per_page={10}",
    {
      owner: "facebook",
      repo: "react",
      state: "open",
      sort: "comments",
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    }
  );
};

const IssueList = () => {
  const [issues, setIssues] = useState<issueType[]>();

  useEffect(() => {
    getIssueList().then((response) => {
      if (response.status === 200) {
        setIssues(response.data);
      }
    });
  }, []);

  if (!issues) return <div>이슈 목록을 불러오지 못했습니다.</div>;
  return (
    <>
      <Ad />
      <IssueItemContainer>
        {issues.map((issue) => (
          <IssueItem
            key={issue.number}
            number={issue.number}
            title={issue.title}
            author={issue.user.login}
            createdAt={issue.created_at}
            comments={issue.comments}
          />
        ))}
      </IssueItemContainer>
    </>
  );
};

export default IssueList;

const IssueItemContainer = styled.ul`
  padding: 0;
  margin: 0 10px;
`;
