import React from "react";

function Buttons({ btn1, btn2 }) {
  return (
    <div>
      <div className="btn-grp">
        <button className="btn btn1">{btn1}</button>
        <button className="btn btn2">{btn2}</button>
      </div>
    </div>
  );
}

export default Buttons;
