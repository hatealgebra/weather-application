import React, { useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi";

import { StyledHeader, StyledHeaderWrapper } from "./header.styled";
import SearchForm from "../../molecules/searchForm/SearchForm";
import Button from "../../atoms/button/Button";
import { Logo } from "../../atoms/logo/Logo";
import MobileMenu from "../mobileMenu/MobileMenu";
import { FlexContainer } from "../../atoms/block/Block";
import Link from "../../atoms/link/Link";
import AboutModal from "../../molecules/aboutModal/AboutModal";
import ButtonThemeToggle from "../../atoms/button/ButtonThemeToggle";

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
            appearance="tertiary"
            onClick={() => setShowMenu(true)}
            noBorder
          >
            <GiHamburgerMenu data-testid="hamburger-icon" />
          </Button>
        ) : (
          <FlexContainer className="flex-items-align--center">
            <ButtonThemeToggle />
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

// TODO: Make logo link to portoflio
