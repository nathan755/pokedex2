import React from "react";

function DropDown(props) {
  return (
    <div>
      <label>{props.label}</label>

      <select onChange={props.handleChange}>
            {props.children}
      </select>
    </div>
  );
}

export default DropDown;



