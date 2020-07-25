import React from "react";
const ResetButton = (props) => {
  return (
    <button className="btn btn-warning" onClick={props.onReset}>
      {props.label}
    </button>
  );
};

export default ResetButton;
