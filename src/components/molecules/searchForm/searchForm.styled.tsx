import styled from "styled-components";

export const StyledWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 90%;
  margin: 0 0.11em;
  max-width: 500px;
`;

export const StyledForm = styled.form.attrs((props) => ({
  role: "search-form",
}))`
  position: absolute;
  width: 95%;
  top: 0px;
  left: 5%;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadow.search_shadow};
  transition: ease-in 0.1s;
  font-size: large;
  font-weight: 300;
  color: ${({ theme }) => theme.color.black};
`;

export const StyledSearchInput = styled.div`
  height: 50px;
  display: flex;
  height: auto;
  flex-direction: row;
  align-items: center;
`;
export const StyledAutocompleteWrapper = styled.ul.attrs<{ show?: boolean }>(
  (props) => ({
    "data-testid": "autocomplete-container",
  })
)<{ show?: boolean }>`
  top: 1px;
  z-index: 98;
  position: relative;
  max-height: ${(props) => (props.show ? "500px" : "0px")};
  transition: ease-in 0.4s;
  border-top: thin solid rgba(0, 0, 0, 0.09);
  overflow: auto;
  background: white;

  .resultsSpan {
    background: white;
    margin-left: 2px;
    font-weight: 600;
    color: ${({ theme }) => theme.color.label};
    opacity: 0.6;
  }
`;
