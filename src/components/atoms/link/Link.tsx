import React from "react";
import { StyledLink } from "./link.styled";
import { StyledButton } from "../button/button.styled";

function Link({
  href,
  isButton,
  children,
  noBorder,
  onClick,
  color,
  newTab,
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
        target={(newTab && "_blank") || "__self"}
      >
        {children}
      </StyledButton>
    );
  }
  return (
    <StyledLink
      color={color}
      href={href}
      target={(newTab && "_blank") || "_self"}
    >
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
  onClick?: CallableFunction;
  newTab?: boolean;
}

export default Link;
