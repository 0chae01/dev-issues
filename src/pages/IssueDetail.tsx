import { useParams } from "react-router-dom";

const IssueDetail = () => {
  const params = useParams();
  const issueNumber = params.id;

  return <div>{issueNumber}</div>;
};

export default IssueDetail;
