import styled from "styled-components";

export const StyledPhotoWrapper = styled.div`
  position: relative;
  height: 58vh;
  width: 100%;
  max-height: 1000px;
`;

export const StyledCoverImage = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
  object-fit: cover;
  filter: brightness(1);
  z-index: -1;
`;
