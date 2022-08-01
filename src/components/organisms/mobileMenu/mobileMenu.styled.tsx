import React from "react";
import styled from "styled-components";

export const StyledMenuContainer = styled.div<{ showMenu: boolean }>`
  position: absolute;
  height: 100vh;
  width: 100%;
  padding: 10px;
  /* margin: auto; */
  opacity: ${({ showMenu }) => (showMenu ? 1 : 0)};
  visibility: ${({ showMenu }) => (showMenu ? "visible" : "hidden")};
  transition: ease opacity 0.3s, visibility 0.25s;
  background: white;
  box-sizing: border-box;

  & > * {
    margin-bottom: 20px;
  }

  ${({ theme }) => theme.breakpoint.tablet} {
    padding: 20px;
  }
`;
