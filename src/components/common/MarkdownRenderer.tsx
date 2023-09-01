import MarkdownPreview from "@uiw/react-markdown-preview";
import { styled } from "styled-components";

const MarkdownRenderer = ({ source }: { source: string }) => {
  return (
    <BodyContainerStyled>
      <MarkdownPreview source={source} />
    </BodyContainerStyled>
  );
};

export default MarkdownRenderer;

const BodyContainerStyled = styled.div`
  padding: 30px 20px;
  ol,
  ul {
    list-style: inherit;
  }
`;
