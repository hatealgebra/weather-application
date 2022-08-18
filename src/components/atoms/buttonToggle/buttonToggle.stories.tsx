import React from "react";
import ButtonToggle from "./ButtonToggle";

export const PillToggle = () => {
  const [toggleOn, setToggleOn] = React.useState(false);
  return <ButtonToggle toggleOn={toggleOn} setToggleOn={setToggleOn} />;
};

export default {
  title: "Atoms/Button Toggle",
  component: ButtonToggle,
};
