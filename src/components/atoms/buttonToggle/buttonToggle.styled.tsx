import styled from "styled-components";

export const StyledToggleButton = styled.button<{ status: boolean }>`
  position: relative;
  width: 40px;
  padding: 3px;
  background-color: ${({ theme }) => theme.color.border};
  border: none;
  border-radius: 50px;
  transition: all 0.3s ease-in-out;

  .toggle-circle {
    left: ${({ status }) => (status ? "15px" : "0px")};
    position: relative;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${({ status, theme }) =>
      status ? theme.color.primary : "white"};
    transition: all 0.3s ease-in-out;
  }
`;
