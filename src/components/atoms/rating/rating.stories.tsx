import { Meta, Story } from "@storybook/react";
import React from "react";
import Rating, { RatingProps } from "./Rating";

const Template: Story<RatingProps> = (args) => <Rating {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  rating: 3,
  variant: "star",
};

export const StarRating = () => (
  <Rating color="black" variant="star" rating={4} />
);
export const FigureRating = () => (
  <Rating color="black" variant="figure" rating={3000} />
);

export default {
  component: Rating,
  title: "Atoms/Rating",
} as Meta;
