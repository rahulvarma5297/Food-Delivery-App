import React from "react";
import "./main.css";
import vid from "./vid-2.mp4";

const Vedio = (props) => {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="home section" id="home">
      <div className="content">
        {props.user && <h3>Welcome {user.username} !</h3>}
        <h3>Best food waiting for your belly</h3>
        <p>One cannot think well, love well, sleep well if one has not dined well.</p>
        <a href="#gallery" className="btn">
          discover more
        </a>
      </div>
      <div className="video-container">
        <video src={vid} loop autoPlay muted></video>
      </div>
    </div>
  );
};

export default Vedio;
