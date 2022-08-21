import React, { useState } from "react";
import { action } from "@storybook/addon-actions";
import { FaMapMarkerAlt } from "react-icons/fa";
import { AiFillMinusCircle } from "react-icons/ai";
import Button from "../button/Button";
import Caption from "../caption/Caption";
import ListItem, { ListItemProps } from "./ListItem";
import ButtonToggle from "../buttonToggle/ButtonToggle";
import theme from "../../particles/Themes";
import { Story } from "@storybook/react";

const Template: Story<ListItemProps> = (args) => <ListItem {...args} />;

export const BasicItem = Template.bind({});
BasicItem.args = {
  left: <FaMapMarkerAlt title="left-icon" color={theme.color.primary} />,
  children: "Center",
  right: "Right",
};

export const DisabledItem = Template.bind({});
DisabledItem.args = {
  ...BasicItem.args,
  isDisabled: true,
};

export const LoadingItem = () => <ListItem isLoading>Item</ListItem>;

export const AutocompleteItem = () => (
  <ListItem
    onClick={() => "hey"}
    left={
      <FaMapMarkerAlt
        data-testid="leftIconMarker"
        color={theme.color.primary}
      />
    }
  >
    Prague,{<Caption>Czech Republic</Caption>}
  </ListItem>
);

export const MyCityItem = () => {
  const [selected, setSelected] = useState(false);
  return (
    <ListItem
      left={
        <img
          alt="belgium flag"
          src="https://www.countryflags.io/be/shiny/32.png"
        />
      }
      right={
        <>
          <ButtonToggle toggleOn={selected} setToggleOn={setSelected} />
          <Button
            appearance="primary"
            containsIcon
            noBorder
            onClick={action("City was removed from the favourites.")}
          >
            {<AiFillMinusCircle color={theme.color.warning} fontSize="20px" />}
          </Button>
        </>
      }
    >
      Brussel
    </ListItem>
  );
};

export default {
  component: ListItem,
  title: "Atoms/ListItem",
  decorators: [
    (storyFn: Story) => (
      // 👇️ ts-nocheck ignores all ts errors in the file
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      <div style={{ maxWidth: 500, border: "1px solid #ddd" }}>{storyFn()}</div>
    ),
  ],
};
