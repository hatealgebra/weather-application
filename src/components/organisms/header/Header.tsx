import React, { useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi";

import { StyledHeader, StyledHeaderWrapper } from "./header.styled";
import SearchForm from "../../molecules/searchForm/SearchForm";
import Button from "../../atoms/button/Button";
import { Logo } from "../../atoms/logo/Logo";
import MobileMenu from "../mobileMenu/MobileMenu";
import { FlexContainer } from "../../atoms/block/Block";
import { FaMoon } from "react-icons/fa";
import Link from "../../atoms/link/Link";
import AboutModal from "../../molecules/aboutModal/AboutModal";

function Header({ isTouchDevice }: HeaderProps) {
  const [showMenu, setShowMenu] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <StyledHeader>
      <StyledHeaderWrapper>
        <Logo />
        <SearchForm />
        {isTouchDevice ? (
          <Button
            containsIcon
            appearance="tertiary"
            onClick={() => setShowMenu(true)}
            noBorder
          >
            <GiHamburgerMenu data-testid="hamburger-icon" />
          </Button>
        ) : (
          <FlexContainer className="flex-items-align--center">
            <Button
              onClick={() => alert("Still working on.")}
              noBorder
              appearance="tertiary"
              withIcon={<FaMoon />}
            >
              dark mode
            </Button>
            <Button
              onClick={() => setIsOpenModal(true)}
              noBorder
              appearance="tertiary"
            >
              About
            </Button>
            <Link isButton href="https://pavel-vondra.com" noBorder>
              My portfolio
            </Link>
          </FlexContainer>
        )}
      </StyledHeaderWrapper>
      <MobileMenu showMenu={showMenu} setShowMenu={setShowMenu} />
      <AboutModal isOpen={isOpenModal} setIsOpenModal={setIsOpenModal} />
    </StyledHeader>
  );
}

export interface HeaderProps {
  isTouchDevice?: boolean;
}

export default Header;
