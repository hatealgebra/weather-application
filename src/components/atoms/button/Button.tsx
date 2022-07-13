import React from "react";

import { StyledButton, ButtonText, LoadingText } from "./button.styled";

const Button = ({
  appearance = "primary",
  children,
  onClick,
  containsIcon,
  withIcon,
  isLink = false,
  size = "medium",
  isLoading,
  isDisabled,
  noBorder,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton
      appearance={appearance}
      as={isLink ? "a" : "button"}
      onClick={onClick}
      size={size}
      containsIcon={containsIcon}
      withIcon={withIcon}
      isLoading={isLoading}
      isDisabled={isDisabled}
      noBorder={noBorder}
      className={props.className}
    >
      <ButtonText>
        {withIcon && withIcon}
        {children}
      </ButtonText>
      {isLoading && <LoadingText>Loading...</LoadingText>}
    </StyledButton>
  );
};

export interface ButtonProps {
  appearance: "primary" | "secondary" | "tertiary";
  children?: any;
  containsIcon?: boolean;
  isLink?: boolean;
  withIcon?: React.ReactElement;
  onClick?: () => void;
  size?: "small" | "medium";
  isLoading?: boolean;
  isDisabled?: boolean;
  noBorder?: boolean;
  className?: string;
  href?: string;
}

export default Button;
