import React from "react";
import "./TopBtn.css";

function TopBtn(props) {
  return (
    <div className="top-btn">
      <h2>{props.heading}</h2>
    </div>
  );
}

export default TopBtn;
