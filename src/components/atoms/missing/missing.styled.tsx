import styled from "styled-components";

export const StyledMissing = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 300px;
  align-items: center;
  padding: 30px 0px;
  margin: 0 auto;
  text-align: center;
`;

export const StyledMissingImg = styled.img`
  display: inline-block;
  max-width: 150px;
`;

export const StyledMissHeading = styled.span`
  margin: 10px 0;
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  text-transform: capitalize;
`;
