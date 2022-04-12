import React from "react";
import PropTypes from "prop-types";

const Button = ({
  label,
  backgroundColor,
  color,
  cursor,
  outline,
  size,
  handleClick,
  fontSize,
  borderRadius,
  border,
  boxShadow
}) => {
  /*
   * Set the button scale and font size
   */
  let scale = 1;
  switch (size) {
    case "xs":
      (scale = 0.5), (size = 12);
      break;
    case "sm":
      (scale = 0.75), (fontSize = 14);
      break;
    case "md":
      (scale = 1), (fontSize = 16);
      break;
    case "lg":
      (scale = 1.25), (fontSize = 18);
      break;
    default:
      (scale = 1), (fontSize = 16);
      break;
  }

  const style = {
    backgroundColor,
    color,
    cursor,
    outline,
    padding: `${scale * 0.5}rem ${scale * 1}rem`,
    fontSize: `${fontSize}`,
    borderRadius,
    border,
    boxShadow
  };

  return (
    <button onClick={handleClick} style={style}>
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  cursor: PropTypes.oneOf([
    "auto",
    "pointer",
    "help",
    "wait",
    "crosshair",
    "not-allowed",
    "zoom-in",
    "grab",
  ]),
  outline: PropTypes.string,
  border: PropTypes.string,
  borderRadius: PropTypes.number,
  fontSize: PropTypes.string,
  size: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
  handleClick: PropTypes.func,
  boxShadow: PropTypes.string
};

export default Button;
