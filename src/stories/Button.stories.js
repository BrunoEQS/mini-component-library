import Button from "../components/Button";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    handleClick: {
      action: "handleClick",
    },
  },
};

const Template = (args) => <Button {...args} />;

export const DefaultButton = Template.bind({});
DefaultButton.args = {
  label: "Click",
  color: "#fff",
  fontSize: "16px",
  backgroundColor: "cornflowerblue",
  cursor: "pointer",
  borderRadius: "4px",
  border: "none",
  outline: "none",
  size: "md",
};

export const OutlinedButton = Template.bind({});
OutlinedButton.args = {
  label: "Click",
  color: "cornflowerblue",
  fontSize: "16px",
  backgroundColor: "transparent",
  cursor: "pointer",
  borderRadius: "4px",
  border: "1px solid cornflowerblue",
  outline: "1px solid cornflowerblue",
  size: "md",
};
