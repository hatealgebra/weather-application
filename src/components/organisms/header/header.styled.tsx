import styled from "styled-components";

export const StyledHeader = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-items: stretch;
`;

export const StyledHeaderWrapper = styled.div<{ border?: boolean }>`
  background: white;
  position: relative;
  width: 100%;
  height: 60px;
  top: 0px;
  padding: 0.5em 0.1em;
  margin: auto;
  box-sizing: border-box;
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1200px;
  position: relative;
  transition: ease 0.2s;
  box-shadow: ${({ border }) =>
    border ? ({ theme }) => theme.shadow.big_shadow : ""};
`;
