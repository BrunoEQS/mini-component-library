import React from "react";
import PropTypes from "prop-types";

const Grid = ({ children, gap, direction, wrap }) => {
  const style = {
    display: "flex",
    gap: `${gap * 0.25}rem`,
    flexWrap: wrap ? "wrap" : "nowrap",
    flexDirection: direction,
  };

  return <div style={style}>{children}</div>;
};

Grid.propTypes = {
  gap: PropTypes.number,
  direction: PropTypes.oneOf(["row", "column"]),
  wrap: PropTypes.bool,
};

export default Grid;
