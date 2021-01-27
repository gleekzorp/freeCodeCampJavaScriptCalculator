import React from "react";

const Button = (props) => {
  return (
    <div className={props.class}>
      <h1>{props.buttonText}</h1>
    </div>
  );
};

export default Button;
