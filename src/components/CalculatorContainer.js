import React from "react";

import { connect } from "react-redux";

import Button from "./buttons/Button";
import DisplayBottom from "./display/DisplayBottom";
import DisplayTop from "./display/DisplayTop";

const CalculatorContainer = (props) => {
  const operationButtons = [
    "ac",
    "/",
    "x",
    "7",
    "8",
    "9",
    "-",
    "4",
    "5",
    "6",
    "+",
    "1",
    "2",
    "3",
    "=",
    "0",
    "."
  ];
  console.log(props.displayValue);
  return (
    <div className="calculator-container">
      <DisplayTop displayValue={props.displayValue} />
      <DisplayBottom displayValue={props.displayValue} />
      {operationButtons.map((btn) => {
        if (btn === "ac") {
          return <Button class="ac-button button" buttonText={btn} />;
        } else if (btn === "0") {
          return <Button class="zero-button button" buttonText={btn} />;
        } else if (btn === "=") {
          return <Button class="equal-button button" buttonText={btn} />;
        } else {
          return <Button class="button" buttonText={btn} />;
        }
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    displayValue: state.display.displayValue
  };
};

export default connect(mapStateToProps)(CalculatorContainer);
