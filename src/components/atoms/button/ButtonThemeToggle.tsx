import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import ThemeToggleContext from "../../../context/ThemeContext";
import { toggleThemes } from "../../../helpers/helpers";
import Button from "./Button";

const ButtonThemeToggle = () => {
  const { themeState, dispatchThemeState } =
    React.useContext(ThemeToggleContext);
  return (
    <Button
      onClick={() => dispatchThemeState(toggleThemes(themeState))}
      noBorder
      appearance="tertiary"
      withIcon={themeState === "DEFAULT" ? <FaMoon /> : <FaSun color="gold" />}
    >
      {themeState === "DEFAULT" ? "Dark mode" : "Light mode"}
    </Button>
  );
};

export default ButtonThemeToggle;
