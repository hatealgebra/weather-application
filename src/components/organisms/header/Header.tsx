import React, { useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi";

import { StyledHeader, StyledHeaderWrapper } from "./header.styled";
import SearchForm from "../../molecules/searchForm/SearchForm";
import Button from "../../atoms/button/Button";
import { Logo } from "../../atoms/logo/Logo";
import MobileMenu from "../mobileMenu/MobileMenu";

function Header({ variant }: HeaderProps) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <StyledHeader>
      <StyledHeaderWrapper>
        <Logo />
        <SearchForm />
        <Button
          containsIcon
          appearance="tertiary"
          onClick={() => setShowMenu(true)}
          noBorder
        >
          <GiHamburgerMenu />
        </Button>
      </StyledHeaderWrapper>
      <MobileMenu showMenu={showMenu} setShowMenu={setShowMenu} />
    </StyledHeader>
  );
}

export interface HeaderProps {
  variant?: string;
}

export default Header;
