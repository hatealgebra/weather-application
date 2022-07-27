import React from "react";
import { StyledLink } from "./link.styled";
import { StyledButton } from "../button/button.styled";

function Link({
  href,
  isButton,
  children,
  noBorder,
  color,
  ...props
}: LinkProps) {
  if (isButton) {
    return (
      <StyledButton
        as={"a"}
        color={color}
        appearance="tertiary"
        href={href}
        noBorder={noBorder}
      >
        {children}
      </StyledButton>
    );
  }
  return (
    <StyledLink color={color} href={href}>
      {children}
    </StyledLink>
  );
}

export interface LinkProps {
  href?: string;
  isButton?: boolean;
  children: string;
  color?: string;
  noBorder?: boolean;
}

export default Link;
