import styled from "styled-components";

export const StyledStat = styled.li`
  margin-bottom: 10px;
  box-sizing: border-box;
  flex: 50%;
  display: grid;
  align-items: flex-end;
  grid-template-columns: auto 1fr;
  padding: 0px 5px;
  width: fit-content;
  svg {
    font-size: 25px;
    color: ${({ theme }) => theme.color.primary};
    grid-row: 1/3;
    margin-right: 10px;
  }
  span,
  p {
    grid-column: 2/3;
  }
  span {
    flex: 1;
  }
  p {
    font-weight: 600;
  }
`;
