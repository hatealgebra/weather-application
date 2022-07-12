import styled, { css } from "styled-components";
import { FlexContainer } from "../../atoms/block/Block";

import Caption from "../../atoms/caption/Caption";

export const StyledHeroHeading = styled.div`
  grid-area: hero;
  margin: 0;
  display: flex;
  flex-direction: column;
  width: fit-content;
  ${css`
    ${FlexContainer} {
      width: fit-content;
    }
  `}
`;

export const StyledBigNumber = styled.span<{ tempLength: number }>`
  font-size: 5rem;
  line-height: 4.2rem;
  margin: 2.5px 2px 5px
    ${({ tempLength }) => (tempLength < 10 ? "15px" : "-5px")};
  font-weight: 600;
  color: ${({ theme }) => theme.color.secondary};
`;

export const StyledWeatherText = styled(Caption)`
  margin: 5px 0 0 5px;
  width: fit-content;
  text-align: center;
  padding: 4px 1.2em;
  border-radius: 30px;
  font-weight: 600;
  background-color: ${({ theme }) => theme.color.border};
  color: ${({ theme }) => theme.color.black};
`;

export const StyledFlag = styled.img`
  width: 20px;
  object-fit: contain;
  margin-left: 10px;
`;
