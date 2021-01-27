import { StrictMode } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import CalculatorContainer from "./components/CalculatorContainer";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <CalculatorContainer />
  </StrictMode>,
  rootElement
);
