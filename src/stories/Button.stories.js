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
  label: "Default",
  color: "#fff",
  fontSize: "16px",
  backgroundColor: "cornflowerblue",
  cursor: "pointer",
  borderRadius: "4px",
  border: "none",
  outline: "none",
  size: "md",
  handleClick: () => {
    alert("Clicked on default button");
  },
};

export const OutlinedButton = Template.bind({});
OutlinedButton.args = {
  label: "Outlined",
  color: "cornflowerblue",
  fontSize: "16px",
  backgroundColor: "transparent",
  cursor: "pointer",
  borderRadius: "4px",
  border: "1px solid cornflowerblue",
  outline: "1px solid cornflowerblue",
  size: "md",
  handleClick: () => {
    alert("Clicked on outlined button");
  },
};

export const GlowingButton = Template.bind({});
GlowingButton.args = {
  label: "Glowing",
  color: "#fff",
  fontSize: "16px",
  backgroundColor: "cornflowerblue",
  cursor: "pointer",
  borderRadius: "4px",
  border: "none",
  outline: "none",
  size: "md",
  boxShadow: "0 2px 25px rgb(100,149,237)",
  handleClick: () => {
    alert("Clicked on glowing button");
  },
};
