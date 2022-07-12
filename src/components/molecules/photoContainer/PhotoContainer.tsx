import React from "react";

import { StyledPhotoWrapper, StyledCoverImage } from "./photoContainer.styled";

function PhotoContainer({ source }: PhotoContainerProps) {
  return (
    <StyledPhotoWrapper>
      <StyledCoverImage src={source} />
    </StyledPhotoWrapper>
  );
}

export interface PhotoContainerProps {
  source: string;
}

export default PhotoContainer;
