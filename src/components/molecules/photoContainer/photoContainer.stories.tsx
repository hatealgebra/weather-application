import React from "react";

import { Story } from "@storybook/react";
import PhotoContainer, { PhotoContainerProps } from "./PhotoContainer";

const Template: Story<PhotoContainerProps> = (args) => (
  <PhotoContainer {...args} />
);

const photoURL =
  "https://images.unsplash.com/photo-1537104985612-681e48126f3d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80";

export const CoverPhoto = Template.bind({});
CoverPhoto.args = {
  source: photoURL,
};

export default {
  component: PhotoContainer,
  title: "Molecules/PhotoContainer",
  argTypes: {
    variant: {
      options: ["cover"],
      control: { type: "radio" },
    },
  },
};
