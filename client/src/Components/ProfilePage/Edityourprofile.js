import React from "react";

function Edityourprofile(model) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const modalBg = document.querySelector(".modal-bg");
    modalBg.classList.toggle("bg-active");
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="editform">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          className="tbox"
          name="username"
          placeholder="Enter your username"
        />
        <br></br>
        <label htmlFor="upname">Name: </label>
        <input
          type="text"
          className="tbox"
          name="upname"
          placeholder="Enter your name"
        />
        <br></br>
        <label htmlFor="upgender">Gender:</label>
        <input type="radio" name="upgender" id="male" value="male" />
        <label htmlFor="male">male</label>
        <input type="radio" name="upgender" id="female" value="female" />
        <label htmlFor="female">female</label>
        <br></br>
        <label htmlFor="upphone">Phone number:</label>
        <input
          type="text"
          className="tbox"
          name="upphone"
          placeholder="Enter your phone number"
        />
        {/* <br></br> */}
        <button type="submit" className="btn_profile" value="save changes">
          save changes
        </button>
        <button type="submit" className="btn_profile" value="save changes">
          Cancel
        </button>
      </form>
    </div>
  );
}

export default Edityourprofile;
