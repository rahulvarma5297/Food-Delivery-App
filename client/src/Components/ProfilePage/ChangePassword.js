import React from "react";

function ChangePassword(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const modalBg = document.querySelector(".pass-modal-bg");
    modalBg.classList.toggle("bg-active");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="opass">Old Password: </label>
        <input
          type="password"
          className="tbox"
          name="opass"
          placeholder="Enter your old password"
        />
        <br></br>
        <label htmlFor="npass">New password: </label>
        <input
          type="password"
          className="tbox"
          name="npass"
          placeholder="Enter your new password"
        />
        <br></br>
        <label htmlFor="cnpass">Confirm password: </label>
        <input
          type="password"
          className="tbox"
          name="cnpass"
          placeholder="confirm your new password"
        />
        <br></br>
        <button type="submit" className="btn_profile" value="save changes">
          change password
        </button>
        <button type="submit" className="btn_profile" value="save changes">
          Cancel
        </button>
      </form>
    </div>
  );
}

export default ChangePassword;
