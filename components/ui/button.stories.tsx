import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";

import { action } from "@storybook/addon-actions";

const meta: Meta<typeof Button> = {
  title: "Component/ui/button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: "select",
      description: "Button variant",
      options: [
        "default",
        "secondary",
        "destructive",
        "outline",
        "link",
        "ghost",
      ],
    },
    size: {
      control: "select",
      description: "Button size",
      options: ["default", "sm", "lg", "icon"],
    },
    disabled: {
      control: "boolean",
    },
    onClick: {
      action: "clicked",
      description: "Function called when the default button is clicked",
    },
    children: {
      action: "text",
      description: "Content to be displayed inside the button",
    },
    className: {
      action: "text",
      description: "Custom Tailwind CSS classes to apply to the button",
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "default",
    size: "default",
    disabled: false,
    onClick: action("default click"),
    children: "Default button",
    className: "",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    size: "default",
    disabled: false,
    onClick: action("Secondary button click"),
    children: "Secondary button",
    className: "",
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    size: "default",
    disabled: false,
    onClick: action("Destructive button click"),
    children: "Destructive button",
    className: "",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    size: "default",
    disabled: false,
    onClick: action("Outline button click"),
    children: "Outline button",
    className: "",
  },
};

export const Link: Story = {
  args: {
    variant: "link",
    size: "default",
    disabled: false,
    onClick: action("Link button click"),
    children: "Link button",
    className: "",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    size: "default",
    disabled: false,
    onClick: action("Ghost button click"),
    children: "Ghost button",
    className: "",
  },
};
