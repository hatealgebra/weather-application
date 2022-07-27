import styled from "styled-components";
import { Section } from "../../atoms/block/Block";

export const StyledTodayContainer = styled(Section)`
  width: 100%;
  display: flex;
  margin-bottom: 40px;
  padding: 20px 20px 0px 20px;

  button {
    justify-self: flex-end;
  }

  ${({ theme }) => theme.breakpoint.tabet}) {
    gap: 10px;
  }

  ${({ theme }) => theme.breakpoint.landscapeTablet}) {
    padding: 35px 5% 10px 5%;
  }
`;

// TODO Places container overflow with out padding, netflix like

export const StyledPlacesContainer = styled.div`
  display: flex;
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
`;
