import React from "react";
import { StyledLink } from "./link.styled";
import { StyledButton } from "../button/button.styled";

function Link({ href, isButton, children, ...props }: LinkProps) {
  if (isButton) {
    return (
      <StyledButton appearance="tertiary" href={href}>
        {children}
      </StyledButton>
    );
  }
  return <StyledLink href={href}>{children}</StyledLink>;
}

export interface LinkProps {
  href?: string;
  isButton?: boolean;
  children: string;
}

export default Link;
