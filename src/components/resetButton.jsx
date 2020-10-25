import React from "react";
const ResetButton = (props) => {
  return (
    <button className="btn btn-warning m-2" onClick={props.onReset}>
      {props.label}
    </button>
  );
};

export default ResetButton;
