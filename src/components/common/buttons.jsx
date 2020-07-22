import React from "react";

const MyButton = (props) => {
  let classes = props.classes;
  if (!props.type) classes += "-o";
  return (
    <i
      onClick={props.onClick}
      className={classes}
      style={{ cursor: "pointer" }}
    ></i>
  );
};

export default MyButton;
