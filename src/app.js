import React from "react";
import CalculatorContainer from "./components/CalculatorContainer";

const App = () => {
  return (
    <div className="app">
      <CalculatorContainer />
      <footer>
        <div className="designed-by">
          Designed By{" "}
          <a
            href="https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-javascript-calculator"
            target="_blank"
            rel="noreferrer"
          >
            freeCodeCamp
          </a>
        </div>
        <div className="coded-by">
          Coded By{" "}
          <a
            href="https://github.com/gleekzorp"
            target="_blank"
            rel="noreferrer"
          >
            Daniel Floyd
          </a>
        </div>
      </footer>
    </div>
  );
};

export default App;
