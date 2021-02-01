import React from "react";

const Button = (props) => {
  const { handleClick, className } = props;
  const { btn, id } = props.data;
  const buttonOperation = btn === "x" ? "*" : btn;
  return (
    <button
      id={id}
      className={className}
      onClick={() => handleClick(buttonOperation)}
    >
      {btn}
    </button>
  );
};

export default Button;
