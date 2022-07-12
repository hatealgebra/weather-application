import styled, { css } from "styled-components";
import Caption from "../caption/Caption";

export const ForecastDayInfo = styled.li`
  border: thin solid ${({ theme }) => theme.color.border};
  display: flex;
  justify-content: space-between;
  border-radius: 15px;
  height: auto;
  margin-top: 10px;
  max-width: 310px;
  overflow: hidden;
`;

export const DayContainer = styled.div`
  height: 70px;
  margin: auto 0;
  display: grid;
  grid-template-columns: auto 1fr;
  padding: 5px 2px;

  ${css`
    ${Caption} {
      text-transform: capitalize;
    }
  `}

  .forecast-icon {
    grid-row: 1/3;

    width: 70px;
  }
  .day-name {
    font-size: ${({ theme }) => theme.typography.size.h5 / 16}rem;
    font-weight: 500;
    align-self: flex-end;
  }
`;

export const TemperatureContainer = styled.div`
  background: ${({ theme }) => theme.color.primary};
  width: 90px;
  display: flex;
  place-content: center;
  border-radius: 15px;
  span {
    margin: auto;
    color: whitesmoke;
    font-weight: 600;
    font-size: large;
  }
`;
