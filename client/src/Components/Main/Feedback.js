import React from "react";
import "./main.css";
import { useState } from "react";

const Feedback = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [fdbk, setFdbk] = useState("");

  // Not Refreshing Page
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`The Name Entered is: ${name}`);
    alert(`The Email Entered is: ${email}`);
    alert(`The FeedBack Entered is: ${fdbk}`);

    const feedback_data = {
      name: name,
      email: email,
      fdbk: fdbk,
    };
    // console.log(feedback_data);
    
    setName("");
    setEmail("");
    setFdbk("");
  };

  return (
    <>
      <div className="fd_bk" id="">
        <span>Give Feedback</span>
        <div className="shortdesc2">
          <p>Please share your valuable feedback to us</p>
        </div>
      </div>

      <div className="feed_box">
        <div className="feed">
          <form onSubmit={handleSubmit}>
            <label>
              Your Name
              <br />
              <input
                type="text"
                name=""
                value={name}
                className="fname"
                onChange={(x) => setName(x.target.value)}
                required="required"
              />
              <br />
            </label>
            <label>
              Email
              <br />
              <input
                type="email"
                value={email}
                name="mail"
                onChange={(x) => setEmail(x.target.value)}
                required="required"
              />
              <br />
            </label>

            <label>
              FeedBack
              <br />
              <textarea
                value={fdbk}
                onChange={(x) => setFdbk(x.target.value)}
                name="addtional"
              ></textarea>
              <br />
            </label>
            <button type="submit" id="fsubmit" style={{ fontSize: "20px" }}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Feedback;
