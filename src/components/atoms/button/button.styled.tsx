import styled, { css } from "styled-components";
import { ButtonProps } from "./Button";

export const ButtonText = styled.span`
  display: inline-block;
  vertical-align: middle;
`;

export const LoadingText = styled.span`
  left: 0;
  right: 0;
  position: absolute;
  vertical-align: middle;
  opacity: 0;
`;

const baseStyling = css`
  position: relative;
  text-transform: capitalize;
  height: fit-content;
  width: fit-content;
  transition: 0.05s ease-out;
  text-decoration: none;
  border-radius: 5px;
  margin: 0 5px;
  text-align: center;
  font-size: medium;
  font-weight: 500;
`;

export const StyledButton = styled.button<ButtonProps>`
  ${baseStyling};
  transition: all 0.15s ease;
  background-color: ${({ appearance, theme }) =>
    appearance === "secondary"
      ? theme.color.border
      : appearance === "tertiary"
      ? "transparent"
      : theme.color.primary};
  border: thin solid
    ${({ appearance, theme }) =>
      appearance === "tertiary" ? theme.color.border : "transparent"};
  color: ${({ appearance, theme }) =>
    appearance === "primary" ? "white" : theme.color.black};
  font-size: ${({ size }) => size === "small" && "small"};
  padding: ${({ size }) => (size === "small" ? "10px 20px" : "12px 30px")};
  &:hover {
    box-shadow: ${({ theme, noBorder }) =>
      !noBorder && theme.shadow.border_shadow};
    ${({ isLoading, isDisabled }) =>
      !isLoading && !isDisabled && "filter: brightness(0.95); "};
  }

  ${({ isLoading }) =>
    isLoading &&
    `cursor: progress; opacity: .7; transition: 700ms ease; ${LoadingText} { opacity: 1;} ${ButtonText} { opacity:0;}`}

  ${({ isDisabled }) => isDisabled && `cursor: not-allowed; opacity: .5;`}

  ${({ containsIcon, size, theme }) =>
    containsIcon &&
    `
    background-color: white;
    padding: ${size === "small" ? "7" : "12"}px;
    border-radius: 50%;
    svg {
      display: block;
       margin: 0;
      color: ${theme.color.label};
    }
    
    ${ButtonText} {
      display: block;
    }`}

    ${({ noBorder }) => noBorder && `border: none;`}

    ${({ withIcon, theme }) =>
    withIcon &&
    css`
      span {
        font-weight: 500;
        svg {
          position: relative;
          top: 2px;
          margin-right: 5px;
          color: ${theme.color.secondary};
          stroke-width: 0.3;
        }
      }
    `}
`;
