import { Meta, StoryObj } from "@storybook/react";
import { Header } from "./Header";
import { mockNavigation, mockLogo } from "../mockData";

const meta: Meta<typeof Header> = {
  title: "Components/Navigation/Header",
  component: Header,
  parameters: {
    a11y: {
      // Optional: configure the a11y addon parameters for this story
      element: "header",
      config: {},
      options: {},
      manual: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    data: mockNavigation,
    assets: mockLogo,
  },
};
