import styled from "styled-components";

export const StyledForecastList = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style-type: none;

  @media only screen and (min-width: 600px) {
    max-width: 680px;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
  }
  ${({ theme }) => theme.breakpoint.laptop} {
    max-width: 1200px;
  }
`;
