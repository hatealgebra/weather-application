import { Story } from "@storybook/react";
import React from "react";
import Caption from "./Caption";

const Template: Story = (args) => <Caption {...args} />;

export const CaptionText = Template.bind({});
CaptionText.args = {
  children: "This is the caption!",
};

export default {
  component: Caption,
  title: "Atoms/Caption",
};
