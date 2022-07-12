import styled, { css } from "styled-components";
import { inlineGlow } from "../../particles/animation";
import { ListItemProps } from "./ListItem";

const itemStyling = css`
  line-height: 1.7;
  padding: 0.3em 0.5em;
`;

export const StyledListItem = styled.li<ListItemProps>`
  list-style-type: none;
  ${itemStyling};

  ${({ onClick }) =>
    onClick &&
    css`
      cursor: pointer;
      &:hover {
        background: #eff1f3;
      }
    `}

  ${({ isDisabled }) =>
    isDisabled && `cursor: not-allowed !important; opacity: .4;`}

    ${({ isLoading }) =>
    isLoading &&
    css`
      ${StyledLeft}, ${StyledCenter}, ${StyledRight} {
        ${inlineGlow}
      }
      ${StyledCenter} {
        width: 70%;
      }
    `}
`;

export const StyledLeft = styled.span`
  flex: 0 1 auto;
  & > * {
    vertical-align: middle;
  }
`;

export const StyledCenter = styled.span`
  display: inline-block !important;
  flex: 0 1 auto;
  margin-right: auto;
  font-weight: 500;
  font-size: ${({ theme }) => theme.typography.size.h5 / 16 + "rem"};
`;

export const StyledRight = styled.span`
  flex: 0 1 auto;
  align-items: center;
`;

export const StyledItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > span:nth-of-type(2) {
    display: flex;
    margin-left: 10px;
  }
`;
