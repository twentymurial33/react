import React from "react";

function Quotes(props) {
  return (
    <div>
      <p>{props.heading}</p>
      <h3>{props.author}</h3>
    </div>
  );
}

export default Quotes;
