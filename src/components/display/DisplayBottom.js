import React from "react";

const DisplayBottom = (props) => {
  const { currentValue } = props;
  return (
    <div id="display" className="display-bottom display">
      {currentValue}
    </div>
  );
};

export default DisplayBottom;
