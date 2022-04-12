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
}) => {
  let scale = 1;
  if (size === "xs") (scale = 0.5), (fontSize = 12);
  if (size === "sm") (scale = 0.75), (fontSize = 14);
  if (size === "md") (scale = 1), (fontSize = 16);
  if (size === "lg") (scale = 1.25), (fontSize = 18);

  const style = {
    backgroundColor,
    color,
    cursor,
    outline,
    padding: `${scale * 0.5}rem ${scale * 1}rem`,
    fontSize: `${fontSize}`,
    borderRadius,
    border,
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
};

export default Button;
