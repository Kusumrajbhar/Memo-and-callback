import React, { memo } from "react";

function ChildTwo(props) {
  function changeNumber() {
    props.changeTwoNumber(Math.random());
  }

  console.log("here Two");

  return (
    <div>
      <h1>Child Two: {props.number}</h1>
      <button onClick={changeNumber}>Change second child number</button>
    </div>
  );
}

export default memo(ChildTwo);
