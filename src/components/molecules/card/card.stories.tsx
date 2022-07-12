import React from "react";

import Card, { CardProps } from "./Card";
import { action } from "@storybook/addon-actions";
import { Story } from "@storybook/react";

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const PlaceCard = Template.bind({});
PlaceCard.args = {
  place_id: "1jkj3k2j32k",
  name: "Charles Bridge",
  photo: "",
  types: ["tourist", "historic", "opera"],
  rating: 4.4,
  vicinity: "6, Resslova 300, Praha 2",
  setShowModal: action("Modal is loading"),
  cityDispatch: action("Modal was loaded"),
};

export default {
  component: Card,
  title: "Molecules/Card",
};
