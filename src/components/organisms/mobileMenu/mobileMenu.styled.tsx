import React from "react";
import styled from "styled-components";

export const StyledMenuContainer = styled.div<{ showMenu: boolean }>`
  box-sizing: border-box;
  position: absolute;
  height: 100vh;
  width: 100%;
  max-width: 900px;
  margin: auto;
  opacity: ${({ showMenu }) => (showMenu ? 1 : 0)};
  visibility: ${({ showMenu }) => (showMenu ? "visible" : "hidden")};
  transition: ease opacity 0.3s, visibility 0.25s;
  background: white;

  & > * {
    margin-bottom: 20px;
  }
`;
