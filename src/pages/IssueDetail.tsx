import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import LoadingSpinner from "../components/common/LoadingSpinner";
import MarkdownRenderer from "../components/common/MarkdownRenderer";
import IssueItem from "../components/IssueList/IssueItem";
import IssueDetailController from "../controllers/IssueDetailController";
import NotFound from "./NotFound";

const IssueDetail = () => {
  const params = useParams();
  const issueNumber = Number(params.id);

  const { issueDetail, getIssue } = IssueDetailController();
  const { isLoading, errorStatus, issue } = issueDetail;

  useEffect(() => {
    getIssue(issueNumber);
  }, []);

  if (errorStatus) return <NotFound />;
  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <IssueHeader>
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
          </IssueHeader>
          <IssueBody>
            <MarkdownRenderer body={issue.body} />
          </IssueBody>
        </>
      )}
    </>
  );
};

export default IssueDetail;

const IssueHeader = styled.div`
  box-sizing: border-box;
  max-width: 800px;
  padding: 0 10px;
  margin: 10px auto;
  display: flex;
  align-items: center;

  li {
    margin: 0;
    border: none;
  }
`;

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
  img {
    max-width: 700px;
    display: flex;
    justify-content: center;
    margin: auto;
  }
`;
