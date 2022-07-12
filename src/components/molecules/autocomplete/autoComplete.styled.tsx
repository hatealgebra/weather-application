import styled from "styled-components";

export const StyledAutoComplete = styled.ul.attrs((props) => ({
  "data-testid": "autocomplete-container",
}))`
  top: 1px;
  z-index: 98;
  position: relative;
  max-height: ${({ isActive }: { isActive?: boolean }) =>
    isActive ? "500px" : "0px"};
  transition: ease-in 0.4s;
  border-top: thin solid rgba(0, 0, 0, 0.09);
  overflow: auto;
  background: white;
  border-radius: inherit;
`;
