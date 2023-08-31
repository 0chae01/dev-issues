import { Link } from "react-router-dom";
import { styled } from "styled-components";

const Header = () => {
  return (
    <StyledLink to={"/issues"}>
      <img
        src={"/assets/images/github-mark.png"}
        alt="github-logo"
        width={50}
        height={50}
      />
      <RepoName>facebook / react</RepoName>
    </StyledLink>
  );
};

export default Header;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  width: 100%;
  height: 80px;
  margin: 0 auto;
  border-bottom: 1px solid var(--color-gray);

  display: flex;
  justify-content: center;
  align-items: center;
`;

const RepoName = styled.span`
  font-size: 30px;
  font-weight: 800;
  padding: 0 16px;
`;
