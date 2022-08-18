import React, { Dispatch } from "react";

import { FaMoon } from "react-icons/fa";

import Button from "../../atoms/button/Button";
import Link from "../../atoms/link/Link";
import { Logo } from "../../atoms/logo/Logo";
import { StyledHeaderWrapper } from "../header/header.styled";
import { StyledMenuContainer } from "./mobileMenu.styled";

import { GrClose } from "react-icons/gr";
import { ButtonRow, FlexContainer } from "../../atoms/block/Block";
import AboutApp from "../../particles/AboutApp";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

function MobileMenu({ showMenu, setShowMenu }: MobileMenuProps) {
  const mobileMenuRef = React.useRef(null);

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
          <Button
            onClick={() => alert("Night mode is coming soon!")}
            size="small"
            appearance="secondary"
            withIcon={<FaMoon />}
          >
            Switch mode
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

// TODO settings button? Layout of buttons?
// TODO Write test
