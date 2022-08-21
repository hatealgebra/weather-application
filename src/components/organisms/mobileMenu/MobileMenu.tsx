import React, { Dispatch } from "react";

import Button from "../../atoms/button/Button";
import Link from "../../atoms/link/Link";
import { Logo } from "../../atoms/logo/Logo";
import { StyledHeaderWrapper } from "../header/header.styled";
import { StyledMenuContainer } from "./mobileMenu.styled";

import { AiOutlineClose } from "react-icons/ai";
import { ButtonRow, FlexContainer } from "../../atoms/block/Block";
import AboutApp from "../../particles/AboutApp";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { useTheme } from "styled-components";
import themeDefault from "../../particles/Themes";
import ButtonThemeToggle from "../../atoms/button/ButtonThemeToggle";

function MobileMenu({ showMenu, setShowMenu }: MobileMenuProps) {
  const mobileMenuRef = React.useRef(null);
  const theme = useTheme() as typeof themeDefault;

  React.useEffect(() => {
    if (mobileMenuRef.current) {
      if (showMenu) {
        disableBodyScroll(mobileMenuRef.current);
      } else {
        enableBodyScroll(mobileMenuRef.current);
      }
    }
  }, [showMenu, mobileMenuRef]);
  return (
    <StyledMenuContainer
      data-testid="mobile-menu"
      ref={mobileMenuRef}
      showMenu={showMenu}
    >
      <StyledHeaderWrapper>
        <Logo />
        <FlexContainer>
          <ButtonThemeToggle />
          <Button
            appearance="tertiary"
            containsIcon
            noBorder
            onClick={() => setShowMenu(false)}
          >
            <AiOutlineClose color="black" />
          </Button>
        </FlexContainer>
      </StyledHeaderWrapper>
      <ButtonRow>
        {/* <Link onClick={() => true} isButton>
          About
        </Link> */}
        <Link isButton href="https://pavel-vondra.com">
          Portfolio
        </Link>
        {/* <Link isButton onClick={() => alert("Settings coming soon!")}>
          Settings
        </Link> */}
      </ButtonRow>
      <AboutApp />
    </StyledMenuContainer>
  );
}

export interface MobileMenuProps {
  showMenu: boolean;
  setShowMenu: Dispatch<boolean>;
}

export default MobileMenu;
