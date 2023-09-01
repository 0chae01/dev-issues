import React, { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { styled } from "styled-components";
import LoadingSpinner from "../components/common/LoadingSpinner";
import Ad from "../components/IssueList/Ad";
import IssueItem from "../components/IssueList/IssueItem";
import { IssuesController } from "../controllers/IssueListController";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";
import { issuesStateAtom } from "../stores/atom";
import NotFound from "./NotFound";

const IssueList = () => {
  const issuesState = useRecoilValue(issuesStateAtom);
  const { isLoading, errorStatus, moreData, issues } = issuesState;
  const isRefetchNeeded = !issues.length;

  const { getIssues, getNextPage } = IssuesController();

  useEffect(() => {
    isRefetchNeeded && getIssues(1);
  }, []);

  const getNextPageRef = useInfiniteScroll(getNextPage);

  if (errorStatus) return <NotFound />;

  return (
    <IssueItemContainer>
      {issues.length > 0 ? (
        issues.map((issue, idx) => {
          const showAd = (idx + 1) % 4 === 0;
          return (
            <React.Fragment key={issue.number}>
              <IssueItem
                number={issue.number}
                title={issue.title}
                author={issue.user.login}
                createdAt={issue.created_at}
                comments={issue.comments}
              />
              {showAd && <Ad />}
            </React.Fragment>
          );
        })
      ) : (
        <LoadingSpinner />
      )}
      {isLoading && !isRefetchNeeded && <LoadingSpinner />}
      {moreData && <div ref={getNextPageRef} />}
    </IssueItemContainer>
  );
};

export default IssueList;

const IssueItemContainer = styled.ul`
  padding: 0;
  margin: 10px;
`;
