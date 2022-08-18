import styled from "styled-components";

export const AppContainer = styled.div`
  position: relative;
  margin: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
  width: 100%;
  overflow: visible;
  max-width: 1300px;
`;

export const Section = styled.section<{
  scrollable?: boolean;
  noPadding?: boolean;
}>`
  padding: ${({ noPadding }) =>
    noPadding ? "30px 0px 10px 0px" : "30px 10px 10px 10px"};
  position: relative;
  h2 {
    margin-left: 10px;
  }
  a img {
    margin-right: 10px;
  }
  .section-content {
    margin-top: 1em;
    scroll-behavior: smooth;
    margin: 1rem auto;

    ${({ scrollable }) =>
      scrollable
        ? "margin-left: calc(-50vw + 50%);margin-right: calc(-50vw + 50%);"
        : ""};
  }

  ${({ theme }) => theme.breakpoint.tablet} {
    padding: ${({ noPadding }) =>
      noPadding ? "35px 0px 10px 0px" : "35px 5% 30px 5%"};
    h2 {
      margin-left: ${({ noPadding }) => noPadding && "5%"};
    }
  }
`;

export const FlexContainer = styled.div<{
  column?: boolean;
  between?: boolean;
  m?: any;
  p?: any;
  children: any;
  className?: string;
}>`
  display: flex;
  flex-direction: ${({ column }) => (column ? "column" : "row")};
  margin: ${({ m }) => (m ? m : 0)};
  padding: ${({ p }) => (p ? p : 0)};
  justify-content: ${({ between }) => (between ? "space-between" : "none")};
`;

export const ButtonRow = styled.div`
  margin: 10px 0;
  width: auto;
  display: flex;
  justify-content: space-between;
  a,
  button {
    width: 100%;
    flex: 1;
    max-width: 200px;
  }
`;

export const Box = styled.div<{ m?: any }>`
  margin: ${({ m }) => m || 0};
`;

export const StyledModalWrapper = styled.div`
  overflow: scroll;
  position: fixed;
  display: flex;
  flex-direction: column;
  visibility: hidden;
  top: 0;
  left: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100%;
  opacity: 0;
`;
