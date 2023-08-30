import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const MarkdownRenderer = ({ body }: { body: string }) => {
  return <ReactMarkdown children={body} remarkPlugins={[remarkGfm]} />;
};

export default MarkdownRenderer;
