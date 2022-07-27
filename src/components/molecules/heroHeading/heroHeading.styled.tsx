import styled from "styled-components";

import Caption from "../../atoms/caption/Caption";

export const StyledHeroHeading = styled.div`
  grid-area: hero;
  margin: 0;
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: auto 1fr;
  column-gap: 10px;
  row-gap: 5px;
  height: fit-content;
  .hero-heading {
    &__city-info {
      margin: auto;
    }
  }
  h1 {
    align-self: flex-end;
  }

  ${({ theme }) => theme.breakpoint.tablet} {
    h1 {
      font-size: 5em;
    }
  }
`;

export const StyledBigNumber = styled.span<{ tempLength: number }>`
  font-size: 5.5em;
  line-height: auto;
  font-weight: 600;
  color: ${({ theme }) => theme.color.secondary};

  ${({ theme }) => theme.breakpoint.tablet} {
    margin: auto 0;
    font-size: 7em;
  }
  ${({ theme }) => theme.breakpoint.laptop} {
    font-size: 8em;
  }
`;

export const StyledWeatherText = styled(Caption)`
  position: relative;
  width: fit-content;
  height: fit-content;
  text-align: center;
  padding: 4px 1.2em;
  border-radius: 30px;
  font-weight: 600;
  background-color: ${({ theme }) => theme.color.border};
  color: ${({ theme }) => theme.color.black};

  ${({ theme }) => theme.breakpoint.tablet} {
    font-size: 1.1em;
  }
`;

export const StyledFlag = styled.img`
  height: 15px;
  margin-right: 10px;
`;
