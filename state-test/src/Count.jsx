import React from "react";

const Count = (props) => {
  return (
    <>
      <h1>State Test</h1>
      <p>Make a statlessComponent to show and update count</p>
      <div className="card">
        <button onClick={props.handIncrement}>count is {props.count}</button>
      </div>
      {props.count % 2 === 0 ? <p>even</p> : <p>odd</p>}
    </>
  );
};

export default Count;
