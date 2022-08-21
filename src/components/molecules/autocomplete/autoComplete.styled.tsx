import styled from "styled-components";

export const StyledAutoComplete = styled.ul.attrs((props) => ({
  "data-testid": "autocomplete-container",
}))`
  z-index: 98;
  position: relative;
  max-height: ${({ isActive }: { isActive?: boolean }) =>
    isActive ? "500px" : "0px"};
  transition: ease-in 0.4s;
  border-top: thin solid rgba(0, 0, 0, 0.09);
  overflow: auto;
  background: white;
  color: #2d3748;
  border-radius: inherit;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  box-shadow: ${({ theme }) => theme.shadow.border_shadow};
`;
