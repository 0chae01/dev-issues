import ReactMarkdown from "react-markdown";

const MarkdownRenderer = ({ body }: { body: string }) => {
  return <ReactMarkdown children={body} />;
};

export default MarkdownRenderer;
