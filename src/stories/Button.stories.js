import Button from "../components/Button";

export default {
  title: "Button",
  component: Button,
};

export const ReusableButton = () => (
  <Button
    label="Click"
    color="#fff"
    fontSize="16px"
    backgroundColor="cornflowerblue"
    cursor="pointer"
    borderRadius="4px"
    border="none"
    size="md"
  />
);
