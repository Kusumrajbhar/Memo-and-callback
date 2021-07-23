import React, { memo } from "react";

function ChildOne(props) {
  function changeNumber() {
    props.changeNumber(Math.random());
  }

  console.log("here One");

  return (
    <div>
      <h1>Child One: {props.number}</h1>
      <button onClick={changeNumber}>Change child number</button>
    </div>
  );
}

export default memo(ChildOne);
