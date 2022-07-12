import { Story } from "@storybook/react";
import React from "react";
import Review, { ReviewProps } from "./Review";

const Template: Story<ReviewProps> = (args) => <Review {...args} />;

export const GoogleReview = Template.bind({});
GoogleReview.args = {
  photo:
    "https://www.terrainhopperusa.com/wp-content/uploads/2019/01/avatar-man.png",
  username: "Frank Vogel",
  rating: 4,
  text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas quia architecto quaerat ab quos, quod minima voluptates, id explicabo molestias voluptatem debitis fugit qui assumenda, eum omnis vitae exercitationem similique.",
  submitted: "10.11.1994",
};

export default {
  component: Review,
  title: "Molecules/Review",
};
