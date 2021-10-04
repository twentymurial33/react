import React from "react";

function Button(props) {
  return (
    <div>
      <button>{props.onClick}</button>
    </div>
  );
}

export default Button;
