import styled from "styled-components";
import { LinkProps } from "./Link";

export const StyledLink = styled.a<LinkProps>`
  color: ${({ color, theme }) => color || theme.color.text};
  text-decoration: underline;
  font-weight: 500;
  font-size: ${({ theme }) => theme.typography.size.h5};
  &:hover {
    text-decoration: none;
  }
`;
