import styled from "styled-components";

export const StyledInput = styled.input`
  outline: none;
  height: auto;
  width: 100%;

  border: none;
  padding: 5px 0px;
  font-size: medium;
  font-weight: 300;
  color: ${({ theme }) => theme.color.black};
  font-family: "Poppins", sans-serif;
  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    font-weight: 500;
    color: ${({ theme }) => theme.color.input}; /* Firefox */
  }
  :-ms-input-placeholder {
    font-weight: 500;
    color: ${({ theme }) => theme.color.input};
  }

  ::-ms-input-placeholder {
    font-weight: 500;
    color: ${({ theme }) => theme.color.input};
  }
`;
