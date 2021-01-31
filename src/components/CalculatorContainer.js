import React, { useState } from "react";

import Button from "./buttons/Button";
import DisplayBottom from "./display/DisplayBottom";
import DisplayTop from "./display/DisplayTop";

const CalculatorContainer = () => {
  const [currentValue, setCurrentValue] = useState("0");
  const [equation, setEquation] = useState(null);
  const [result, setResult] = useState(false);

  const handleClick = (btn) => {
    switch (btn) {
      case "=":
        handleEval();
        break;
      case "ac":
        handleClear();
        break;
      case "/":
        handleOperation(btn);
        break;
      case "*":
        handleOperation(btn);
        break;
      case "+":
        handleOperation(btn);
        break;
      case "-":
        handleMinus();
        break;
      case ".":
        handleDecimal();
        break;
      default:
        handleNumber(btn);
        break;
    }
  };

  const handleEval = () => {
    console.log("handleEval");
    if (equation) {
      const modifiedEquation = equation.replace(/--/g, "+");
      try {
        // const evaluation = String(eval(modifiedEquation));
        // I was running into an error with
        // 10.7 / 0.2 (FCC and my phone calc gets 53.5 and I get 53.49999999)
        // I looked into his code and found this evaluation and it seems to work
        // https://codepen.io/freeCodeCamp/pen/wgGVVX?editors=0010
        const evaluation =
          Math.round(1000000000000 * eval(modifiedEquation)) / 1000000000000;
        setCurrentValue(evaluation);
        setEquation(equation + "=" + evaluation);
        setResult(true);
      } catch (error) {
        console.log("handleEval error", error);
      }
    }
  };

  const handleClear = () => {
    console.log("handleClear");
    setCurrentValue("0");
    setEquation(null);
  };

  const handleOperation = (btn) => {
    console.log("handleOperation");
    if (result) {
      setResult(false);
      setEquation(currentValue + btn);
      setCurrentValue(btn);
      return;
    }
    const regex = /\+|-|\/|\*/g;
    if (equation) {
      const lastDigit = equation.slice(-1);
      if (regex.test(lastDigit)) {
        if (lastDigit === "-") {
          if (equation.length > 2) {
            setCurrentValue(btn);
            setEquation(equation.slice(0, -2) + btn);
          } else {
            setCurrentValue(btn);
            setEquation(equation.slice(0, -1) + btn);
          }
        } else {
          setCurrentValue(btn);
          setEquation(equation.slice(0, -1) + btn);
        }
      } else {
        setCurrentValue(btn);
        setEquation(equation + btn);
      }
    }
  };

  const handleMinus = () => {
    console.log("handleMinus");
    if (result) {
      setResult(false);
      setEquation(currentValue + "-");
      setCurrentValue("-");
      return;
    }
    const regex = /^(\+|-|\/|\*)/;
    const digitRegex = /[0-9]/;
    if (equation) {
      const lastDigit = equation.slice(-1);
      if (digitRegex.test(lastDigit) || !regex.test(equation.slice(-2))) {
        setCurrentValue("-");
        setEquation(equation + "-");
      }
    } else {
      setCurrentValue("-");
      setEquation("-");
    }
  };

  const handleDecimal = () => {
    console.log("handleDecimal");
    if (result) {
      setResult(false);
      setEquation("0.");
      setCurrentValue("0.");
      return;
    }
    let regex = /\+|-|\/|\*/g;
    if (!currentValue.includes(".")) {
      if (currentValue === "0" && equation.length === 1) {
        setCurrentValue(currentValue + ".");
        setEquation(currentValue + ".");
      } else if (regex.test(currentValue)) {
        setCurrentValue("0.");
        setEquation(equation + "0.");
      } else {
        setCurrentValue(currentValue + ".");
        setEquation(equation + ".");
      }
    }
  };

  const handleNumber = (btn) => {
    console.log("handleNumber");
    let regex = /\+|-|\/|\*/g;
    if (currentValue === "0") {
      if (equation == null) {
        setCurrentValue(btn);
        setEquation(btn);
      } else {
        setCurrentValue(btn);
        setEquation(equation.slice(0, -1) + btn);
      }
    } else if (regex.test(currentValue)) {
      setCurrentValue(btn);
      setEquation(equation + btn);
    } else {
      if (result) {
        setResult(false);
        setCurrentValue(btn);
        setEquation(btn);
      } else {
        setCurrentValue(currentValue + btn);
        setEquation(equation + btn);
      }
    }
  };

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
      <DisplayTop equation={equation} currentValue={currentValue} />
      <DisplayBottom equation={equation} currentValue={currentValue} />
      {operationButtons.map((btn, idx) => {
        if (btn === "ac") {
          return (
            <Button
              key={idx}
              handleClick={handleClick}
              className="ac-button button"
              buttonText={btn}
            />
          );
        } else if (btn === "0") {
          return (
            <Button
              key={idx}
              handleClick={handleClick}
              className="zero-button button"
              buttonText={btn}
            />
          );
        } else if (btn === "=") {
          return (
            <Button
              key={idx}
              handleClick={handleClick}
              className="equal-button button"
              buttonText={btn}
            />
          );
        } else if (btn === "x" || btn === "/" || btn === "+" || btn === "-") {
          return (
            <Button
              key={idx}
              handleClick={handleClick}
              className="operation-button button"
              buttonText={btn}
            />
          );
        } else {
          return (
            <Button
              key={idx}
              handleClick={handleClick}
              className="button"
              buttonText={btn}
            />
          );
        }
      })}
    </div>
  );
};

export default CalculatorContainer;
