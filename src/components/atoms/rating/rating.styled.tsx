import styled from "styled-components";

import { AiTwotoneStar } from "react-icons/ai";

export const StyledRatingContainer = styled.div`
  display: flex;
  & > * {
    margin-right: 2px;
  }
`;

export const FullStar = styled(AiTwotoneStar)`
  color: ${({ theme }) => theme.color.orange} !important;
`;

export const EmptyStar = styled(AiTwotoneStar)`
  color: grey;
`;
