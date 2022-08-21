import styled from "styled-components";

export const StyledMenuContainer = styled.div<{ showMenu: boolean; ref: any }>`
  position: absolute;
  height: 100vh;
  width: 100%;
  padding: 10px;
  /* margin: auto; */
  opacity: ${({ showMenu }) => (showMenu ? 1 : 0)};
  visibility: ${({ showMenu }) => (showMenu ? "visible" : "hidden")};
  transition: ease opacity 0.3s, visibility 0.25s;
  background: ${({ theme }) => theme.color.body};
  box-sizing: border-box;
  overflow-y: scroll;
  z-index: 99;

  & > p {
    margin-bottom: 20px;
  }
`;
