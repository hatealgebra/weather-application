import React from "react";
import { action } from "@storybook/addon-actions";

import placeDetail from "../../../mocks/json/placeDetail.mock.json";

import Modal, { ModalProps } from "./Modal";
import { Story } from "@storybook/react";

const Template: Story<ModalProps> = (args) => <Modal {...args} />;

export const PlaceModal = Template.bind({});
PlaceModal.args = {
  data: placeDetail,
  active: true,
  setShowModal: () => action("Modal was closed!"),
};

export default {
  component: Modal,
  title: "Organisms/Modal",
};
