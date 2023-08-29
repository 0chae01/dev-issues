import styled from "styled-components";
import AD_LINK_WANTED from "../../constants/ad";

const handleOpenNewTab = (url: string) => {
  window.open(url, "_blank", "noopener, noreferrer");
};

const Ad = () => {
  return (
    <AdContainer
      onClick={() => {
        handleOpenNewTab(AD_LINK_WANTED);
      }}
    >
      <img src={"/assets/images/ad_image.png"} alt="광고이미지" width={200} />
    </AdContainer>
  );
};

export default Ad;

const AdContainer = styled.div`
  max-width: 800px;
  text-align: center;
  padding: 20px 0;
  margin: 4px auto;
  cursor: pointer;
  border: 1px solid lightgray;
`;
