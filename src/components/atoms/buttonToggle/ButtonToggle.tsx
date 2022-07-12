import { bool, func } from "prop-types";
import React, { Dispatch, SetStateAction } from "react";
import { StyledToggleButton } from "./buttonToggle.styled";

function ButtonToggle({ toggleOn, setToggleOn }: ButtonToggleProps) {
  return (
    <StyledToggleButton
      onClick={() => setToggleOn((prevState) => !prevState)}
      status={toggleOn || false}
    >
      <div className="toggle-circle" data-testid="toggle-btn"></div>
    </StyledToggleButton>
  );
}

interface ButtonToggleProps {
  toggleOn: boolean;
  setToggleOn: Dispatch<SetStateAction<boolean>>;
}

export default ButtonToggle;
