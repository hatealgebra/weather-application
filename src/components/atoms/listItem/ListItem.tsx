import React, { ReactNode } from "react";
import {
  StyledCenter,
  StyledItemWrapper,
  StyledLeft,
  StyledRight,
  StyledListItem,
} from "./listItem.styled";

function ListItem({
  onClick,
  left,
  children,
  right,
  isDisabled,
  isLoading,
}: ListItemProps) {
  if (isLoading) {
    return (
      <StyledListItem isLoading>
        <StyledItemWrapper>
          {left && <StyledLeft>Left</StyledLeft>}
          <StyledCenter>Loading center</StyledCenter>
          {right && <StyledRight>Right loading</StyledRight>}
        </StyledItemWrapper>
      </StyledListItem>
    );
  }
  return (
    <StyledListItem isDisabled={isDisabled} onClick={onClick}>
      <StyledItemWrapper>
        {left && <StyledLeft>{left}</StyledLeft>}
        <StyledCenter>{children}</StyledCenter>
        {right && <StyledRight>{right}</StyledRight>}
      </StyledItemWrapper>
    </StyledListItem>
  );
}

export interface ListItemProps {
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  left?: ReactNode;
  children: ReactNode;
  right?: ReactNode;
  isDisabled?: boolean;
  isLoading?: boolean;
}

export default ListItem;
