import { Octokit } from "octokit";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import MarkdownRenderer from "../components/common/MarkdownRenderer";
import IssueItem from "../components/IssueList/IssueItem";
import { issueDetailType } from "../types/issueType";

const getIssueItem = async (issueNumber: number) => {
  const octokit = new Octokit({
    auth: process.env.REACT_APP_OCTOKIT_TOKEN,
  });

  return await octokit.request(
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
};

const IssueDetail = () => {
  const params = useParams();
  const issueNumber = params.id;

  const [issue, setIssue] = useState<issueDetailType>();

  useEffect(() => {
    getIssueItem(Number(issueNumber))
      .then((response) => {
        return response.data as issueDetailType;
      })
      .then((data) => setIssue(data))
      .catch((err) => console.error(err));
  }, []);

  if (issue === undefined) return <div>에러</div>;
  return (
    <div>
      <img
        src={issue.user.avatar_url}
        alt={issue.user.login}
        width={80}
        style={{ borderRadius: 50 }}
      />
      <IssueItem
        number={issue.number}
        title={issue.title}
        author={issue.user.login}
        createdAt={issue.created_at}
        comments={issue.comments}
      />
      <IssueBody>
        <MarkdownRenderer body={issue.body} />
      </IssueBody>
    </div>
  );
};

export default IssueDetail;

const IssueBody = styled.article`
  max-width: 800px;
  padding: 10px 20px;
  margin: 0 auto;
  box-sizing: border-box;
  border: 1px solid var(--color-gray);

  code {
    background-color: var(--color-light-gray);
    border-radius: 4px;
    padding: 4px;
    font-size: small;
    font-family: "Fira Code", "Fira Mono", Menlo, Consolas, "DejaVu Sans Mono",
      monospace;
  }

  pre {
    background-color: var(--color-light-gray);
    padding: 8px;
    border-radius: 4px;
  }
  pre code {
    background-color: var(--color-light-gray);
    line-height: 2;
    direction: rtl;
    white-space: break-spaces;
  }
`;
