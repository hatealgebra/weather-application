import styled from "styled-components";

export const HeaderStyled = styled.header`
  top: 0;
  z-index: 999;
  background: white;
  width: 100%;
  box-sizing: border-box;
  position: fixed;
  left: 0;
  overflow-y: visible;
`;

export const Content = styled.div`
  position: relative;
  padding-bottom: 1em;

  /* define sections */

  .section {
    &-cityPhoto {
      grid-area: cityPhoto;
    }
    &-today {
      grid-area: today;
    }
    &-weatherStats {
      grid-area: weatherStats;
    }
    &-weatherChart {
      grid-area: weatherChart;
      margin: 0;
    }
    &-forecastList {
      grid-area: forecastList;
    }
    &-popularPlaces {
      grid-area: popularPlaces;
    }
  }

  ${({ theme }) => theme.breakpoint.landscapeTablet} {
    display: grid;
    grid-template-areas: "cityPhoto cityPhoto" "today weatherStats" "weatherChart weatherChart" "forecastList forecastList" "popularPlaces popularPlaces";
    grid-template-columns: 1fr 1fr;
    .section {
      &-weatherStats {
        h2 {
          margin-top: 0px;
        }
      }
      &-weatherChart {
        h2 {
          display: block;
        }
      }
    }
  }

  ${({ theme }) => theme.breakpoint.desktopMedia} {
    display: grid;
    grid-template-columns: 50% 50%;
  }
`;

export const Footer = styled.footer``;
