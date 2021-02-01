import React from "react";

const Button = (props) => {
  const { handleClick, className } = props;
  const { btn, id } = props.data;
  const buttonOperation = btn === "x" ? "*" : btn;
  return (
    <div
      id={id}
      className={className}
      onClick={() => handleClick(buttonOperation)}
    >
      <h1>{btn}</h1>
    </div>
  );
};

export default Button;
