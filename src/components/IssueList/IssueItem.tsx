import { styled } from "styled-components";

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
      <IssueTitle>{title}</IssueTitle>
      <ItemInfo>
        #{`${number} `} opened on {createdAt} by
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
  border-bottom: 1px solid gray;
  padding: 10px;
  max-width: 800px;
  margin: 0 auto;
  box-sizing: border-box;
`;

const IssueTitle = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin: 0;
  margin-bottom: 10px;
`;

const ItemInfo = styled.span`
  color: gray;
`;
