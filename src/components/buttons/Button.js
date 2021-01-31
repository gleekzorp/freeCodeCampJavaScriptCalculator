import React from "react";

const Button = (props) => {
  const { handleClick, buttonText, className } = props;
  const buttonOperation = buttonText === "x" ? "*" : buttonText;
  return (
    <div className={className} onClick={() => handleClick(buttonOperation)}>
      <h1>{buttonText}</h1>
    </div>
  );
};

export default Button;
