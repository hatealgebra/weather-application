// TODO Places container overflow with out padding, netflix like

import styled from "styled-components";

export const StyledPlacesContainer = styled.div`
  display: flex;
  gap: 5px;
  flex-wrap: nowrap;
  overflow-x: auto;
  padding: 0 5% 1% 0;

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  /* Hide scrollbar for other browsers */
  &::-webkit-scrollbar {
    display: none;
  }

  &::after {
    content: "";
    flex: 0 0 0;
  }

  & > div {
    margin-right: 10px;
  }

  & > div:nth-of-type(1) {
    margin-left: 5%;
  }
`;
