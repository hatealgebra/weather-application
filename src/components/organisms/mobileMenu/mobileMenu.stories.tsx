import React from "react";
import { action } from "@storybook/addon-actions";
import MobileMenu from "./MobileMenu";

export const DefaultMobileMenu = () => {
  return (
    <MobileMenu showMenu={true} setShowMenu={action("Menu was closed!")} />
  );
};

export default {
  component: MobileMenu,
  title: "Organisms/Mobile Menu",
};
