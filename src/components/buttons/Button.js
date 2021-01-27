import React from "react";
import { useDispatch } from "react-redux";
import { clearDisplay } from "../../redux/action";

const Button = (props) => {
  const dispatch = useDispatch();
  return (
    <div className={props.class} onClick={() => dispatch(clearDisplay())}>
      <h1>{props.buttonText}</h1>
    </div>
  );
};

export default Button;
