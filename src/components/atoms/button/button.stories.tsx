import React from "react";
import Button, { ButtonProps } from "./Button";

import { Story } from "@storybook/react";

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  children: "Button",
};
Basic.argTypes = {
  appearance: {
    control: {
      type: "select",
    },
  },
};

export const All = () => (
  <>
    <Button appearance="primary">Button</Button>
    <Button appearance="secondary">Secondary</Button>
    <Button appearance="tertiary">Tertiary </Button>
    <Button appearance="tertiary" noBorder>
      Text like{" "}
    </Button>
  </>
);

export const Sizes = () => (
  <>
    <Button appearance="primary">Medium</Button>
    <Button size="small" appearance="primary">
      Small
    </Button>
  </>
);

export const Loading = () => (
  <>
    <Button appearance="primary" isLoading>
      Button
    </Button>
    <Button appearance="secondary" isLoading>
      Secondary
    </Button>
    <Button appearance="tertiary" isLoading>
      Tertiary
    </Button>
  </>
);

export const Disabled = () => (
  <>
    <Button appearance="primary" isDisabled>
      Button
    </Button>
    <Button appearance="secondary" isDisabled>
      Secondary
    </Button>
    <Button appearance="tertiary" isDisabled>
      Tertiary
    </Button>
  </>
);

export default {
  title: "Atoms/Button",
  component: Button,
};
