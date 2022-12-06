import React from "react";
import { Link } from "react-router-dom";
import Header from "../Navbar/Header";
import ChangePassword from "./ChangePassword";
import "./clientprofile.css";
import img from "../Img/pic3.png";
import Edityourprofile from "./Edityourprofile";
import Tabledata from "./Tabledata";

function edit_form() {
  const modalBg = document.querySelector(".modal-bg");
  modalBg.classList.toggle("bg-active");
}

function change_pass() {
  const modalBg = document.querySelector(".pass-modal-bg");
  modalBg.classList.toggle("bg-active");
}

const navItems = [
  {
    title: "Home",
    path: "/index",
  },
];
function Profile() {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div>
      <Header user={true} navItems={navItems} />
      <h1 className="h1">Profile</h1>
      <br></br>
      <div className="profile">
        <div className="_left">
          <div className="_img">
            <img src={img} alt="profile_img" />
            <div className="img_content">
              <i className="bi bi-trash fa-3x"></i>
              <i className="bi bi-upload fa-3x"></i>
            </div>
          </div>
          <button className="btn_profile" onClick={edit_form}>
            edit profile
          </button>
        </div>
        <div className="_right">
          <table>
            <Tabledata heading={"Name:"} data={user.username} />
            <Tabledata heading={"Username:"} data={user.username} />
            <Tabledata heading={"Gender:"} data={"male"} />
            <Tabledata heading={"Phone Number:"} data={"7685261234"} />
            <Tabledata heading={"Email:"} data={user.email} />
          </table>
          <div className="btns">
            <button className="btn_profile" onClick={change_pass}>
              change password
            </button>
            <br></br>
            <Link to="/" className="btn_profile">
              Logout
            </Link>
          </div>
        </div>
      </div>
      <div className="modal-bg">
        <div className="edit-form">
          <h2>edit your profile</h2>
          <Edityourprofile username="User" />
          <span onClick={edit_form}>x</span>
        </div>
      </div>
      <div className="pass-modal-bg">
        <div className="edit-form">
          <h2>Change your password</h2>
          <ChangePassword username="User" />
          <span onClick={change_pass}>x</span>
        </div>
      </div>
    </div>
  );
}

export default Profile;
