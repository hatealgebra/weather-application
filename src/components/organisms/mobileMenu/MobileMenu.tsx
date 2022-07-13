import React, { Dispatch } from "react";

import { FaMoon } from "react-icons/fa";

import Button from "../../atoms/button/Button";
import Link from "../../atoms/link/Link";
import { Logo } from "../../atoms/logo/Logo";
import { StyledHeaderWrapper } from "../header/header.styled";
import { StyledMenuContainer } from "./mobileMenu.styled";

import MyCitiesList from "../../molecules/myCitiesList/MyCitiesList";
import { GrClose } from "react-icons/gr";
import { ButtonRow, FlexContainer } from "../../atoms/block/Block";

function MobileMenu({ showMenu, setShowMenu }: MobileMenuProps) {
  return (
    <StyledMenuContainer showMenu={showMenu}>
      <StyledHeaderWrapper>
        <Logo />
        <FlexContainer>
          <Button size="small" appearance="secondary" withIcon={<FaMoon />}>
            With Icon
          </Button>
          <Button
            appearance="tertiary"
            containsIcon
            noBorder
            onClick={() => setShowMenu(false)}
          >
            <GrClose />
          </Button>
        </FlexContainer>
      </StyledHeaderWrapper>
      <ButtonRow>
        <Link isButton>About</Link>
        <Link isButton>Portfolio</Link>
        <Link isButton>Settings</Link>
      </ButtonRow>
      <MyCitiesList />
    </StyledMenuContainer>
  );
}

export interface MobileMenuProps {
  showMenu: boolean;
  setShowMenu: Dispatch<boolean>;
}

export default MobileMenu;
