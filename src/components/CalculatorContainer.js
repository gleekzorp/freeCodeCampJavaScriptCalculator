import React from "react";
import Button from "./buttons/Button";
import DisplayBottom from "./display/DisplayBottom";
import DisplayTop from "./display/DisplayTop";

const CalculatorContainer = () => {
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
  return (
    <div className="calculator-container">
      <DisplayTop />
      <DisplayBottom />
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

export default CalculatorContainer;
