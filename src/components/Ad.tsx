import styled from "styled-components";
import AD_LINK_WANTED from "../constants/ad";

const handleOpenNewTab = (url: string) => {
  window.open(url, "_blank", "noopener, noreferrer");
};

const Ad = () => {
  return (
    <AdImage
      src={"/assets/images/ad_image.png"}
      alt="광고이미지"
      width={300}
      onClick={() => {
        handleOpenNewTab(AD_LINK_WANTED);
      }}
    />
  );
};

export default Ad;

const AdImage = styled.img`
  cursor: pointer;
`;
