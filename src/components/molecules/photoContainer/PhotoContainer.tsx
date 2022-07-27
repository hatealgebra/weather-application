import React from "react";

import { StyledPhotoWrapper, StyledCoverImage } from "./photoContainer.styled";

function PhotoContainer({ source, className }: PhotoContainerProps) {
  return (
    <StyledPhotoWrapper className={className}>
      <StyledCoverImage src={source} />
    </StyledPhotoWrapper>
  );
}

export interface PhotoContainerProps {
  className?: string;
  source: string;
}

export default PhotoContainer;
