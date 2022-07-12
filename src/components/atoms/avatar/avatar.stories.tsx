import React from "react";

import { Story } from "@storybook/react";

import Avatar, { AvatarProps } from "./Avatar";

const Template: Story<AvatarProps> = (args: AvatarProps) => (
  <Avatar {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  size: "small",
};
Basic.argTypes = {
  size: {
    control: {
      type: "select",
    },
  },
};

export const Sizes = () => (
  <>
    <Avatar size="small" />
    <Avatar size="big" />
  </>
);

export const CustomAvatar = Template.bind({});
CustomAvatar.args = {
  ...Basic.args,
  src: "https://static.jobscan.co/blog/uploads/linkedin-profile-picture.jpg",
};

export default {
  component: Avatar,
  title: "Atoms/Avatar",
};
