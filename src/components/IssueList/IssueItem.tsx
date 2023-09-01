import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { changeDateFormat } from "../../utils/changeDateFormat";
import CommentIcon from "../icons/CommentIcon";

interface issueItemProp {
  number: number;
  title: string;
  author: string;
  createdAt: string;
  comments: number;
}

const IssueItem = ({
  number,
  title,
  author,
  createdAt,
  comments,
}: issueItemProp) => {
  return (
    <ItemContainer>
      <IssueInfo>
        <IssueTitle to={`/issues/${number}`}>{title}</IssueTitle>
        <ItemInfo>
          #{`${number} `} opened on {changeDateFormat(createdAt)} by
          <a>{` ${author}`}</a>
        </ItemInfo>
      </IssueInfo>
      <CommentArea>
        <CommentIcon />
        <span>{comments}</span>
      </CommentArea>
    </ItemContainer>
  );
};
export default IssueItem;

const ItemContainer = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--color-gray);
  max-width: 800px;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 10px;
  flex: 1;

  &:hover {
    background-color: #f6f8fa;
  }
`;

const IssueInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const IssueTitle = styled(Link)`
  color: black;
  font-size: 20px;
  font-weight: 700;
  width: fit-content;
  margin: 0;
  margin-bottom: 10px;
  text-decoration: none;
  word-wrap: break-word;

  &:hover {
    color: var(--color-hover-blue);
  }
`;

const ItemInfo = styled.span`
  color: var(--color-dark-gray);
`;

const CommentArea = styled.div`
  display: flex;
  color: var(--color-dark-gray);

  span {
    padding: 0 4px;
  }
`;
