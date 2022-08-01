import { Story } from "@storybook/react";
import React from "react";
import Header, { HeaderProps } from "./Header";

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const MobileHeader = Template.bind({});
MobileHeader.args = {
  isTouchDevice: true,
};

export default {
  component: Header,
  title: "Organisms/Header",
};
