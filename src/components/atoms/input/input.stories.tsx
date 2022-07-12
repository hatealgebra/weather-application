import { Story } from "@storybook/react";
import React from "react";
import Input, { InputProps } from "./Input";

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const SearchInput = Template.bind({});
SearchInput.args = {
  placeholder: "Search city",
};

export default {
  component: Input,
  title: "Atoms/Input",
};
