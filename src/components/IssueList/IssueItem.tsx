import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { changeDateFormat } from "../../utils/changeDateFormat";

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
      <IssueTitle to={`/issue/${number}`}>{title}</IssueTitle>
      <ItemInfo>
        #{`${number} `} opened on {changeDateFormat(createdAt)} by
        <a>{` ${author}`}</a>
        {` ${comments} `}Comments
      </ItemInfo>
    </ItemContainer>
  );
};
export default IssueItem;

const ItemContainer = styled.li`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid var(--color-gray);
  max-width: 800px;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 10px;

  &:hover {
    background-color: #f6f8fa;
  }
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
