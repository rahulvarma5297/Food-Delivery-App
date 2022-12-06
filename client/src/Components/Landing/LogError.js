import React from 'react';
import "./LogError.css";

const LogAlert = (props) => {
  return (
    <div className="log-alert">
      <p>{props.msg}</p>
      <span onClick={props.onClick}>X </span>
    </div>
  )
}

export default LogAlert;
