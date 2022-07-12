import styled from "styled-components";
import { LinkProps } from "./Link";

export const StyledLink = styled.a<LinkProps>`
  color: black;
  text-decoration: underline;
  font-weight: 500;
  font-size: 0.8rem;
  &:hover {
    text-decoration: none;
  }
`;
