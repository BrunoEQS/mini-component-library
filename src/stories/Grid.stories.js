import Grid from "../components/Grid";

export default {
  title: "Grid",
  Component: Grid,
  argTypes: {
    numberOfChildren: { type: "number", defaultValue: 6 },
  },
};

const Template = ({ numberOfChildren, ...args }) => (
  <Grid {...args}>
    {[...Array(numberOfChildren).keys()].map((num) => (
      <div
        style={{
          width: "50px",
          height: "50px",
          backgroundColor: "rebeccapurple",
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "4px",
        }}
      >
        {num + 1}
      </div>
    ))}
  </Grid>
);

export const HorizontalGrid = Template.bind({});
HorizontalGrid.args = {
  numberOfChildren: 6,
  direction: "row",
  gap: 2,
  wrap: false,
};

export const VerticalGrid = Template.bind({});
VerticalGrid.args = {
  numberOfChildren: 6,
  direction: "column",
  gap: 2,
  wrap: false,
};

export const WrappingGrid = Template.bind({});
WrappingGrid.args = {
  numberOfChildren: 24,
  direction: "row",
  gap: 2,
  wrap: true,
};
