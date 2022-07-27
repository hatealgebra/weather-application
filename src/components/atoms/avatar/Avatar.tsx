import React from "react";
import styled from "styled-components";

import avatarGeneric from "../../../assets/images/avatar-generic.png";

const SIZES = {
  SMALL: "small",
  BIG: "big",
};

const StyledAvatar = styled.img<{ size: "small" | "big" }>`
  height: ${({ size }) => (size === SIZES.BIG ? "70px" : "50px")};
  width: ${({ size }) => (size === SIZES.BIG ? "70px" : "50px")};
  object-fit: cover;
  border-radius: 50%;
  border: thin solid ${({ theme }) => theme.color.border};
  align-self: center;
  cursor: ${({ onClick }) => (onClick ? "pointer" : "arrow")};
`;

function Avatar({ size, onClick, src, className }: AvatarProps) {
  return (
    <StyledAvatar
      className={className || "avatar"}
      src={src === undefined ? avatarGeneric : src}
      size={size || "small"}
      onClick={onClick}
    />
  );
}

export interface AvatarProps {
  size: "small" | "big";
  onClick?: () => void;
  src?: string;
  className?: string;
}

export default Avatar;
