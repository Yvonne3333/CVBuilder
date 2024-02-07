import React from "react";
import "../components/cVBuilder.css";
import logo2 from "../assets/logo2.png";
const JoinUsPage = () => {
  return (
    <div className="joinUs-Page">
      <div className="cornerimage">
        <img
          src={logo2}
          alt="logo 2"
          className="joinusImg"
          style={{ height: "90px", margin: "2px 0px 0px 246px" }}
        />
        <p>
          <strong>Join million of members who</strong>
        </p>
      </div>
      <div className="container-card">
        <div>
          <h5
            style={{
              fontSize: "27px",
              color: "#1D2545",
              padding: "30px 10px 2px 10px",
            }}
          >
            Join Cvbuilder Today
          </h5>
          <p style={{ fontSize: "20px", padding: "2px 10px 30px 10px" }}>
            First, a little information about you.
          </p>
        </div>

        <div className="formDetails" style={{ padding: "10px 60px" }}>
          <div className="forms">
            <label htmlFor="username">First Name</label> <br />
            <input
              type="text"
              id="username"
              className="underline-input"
              placeholder="First Name"
              required
              style={{ width: "45%" }}
            />
          </div>

          <div className="forms" style={{ margin: "-60px 0px 14px 260px" }}>
            <label htmlFor="username">Last Name</label>
            <br />
            <input
              type="text"
              id="username"
              className="underline-input"
              placeholder="Last Name"
              required
              style={{ width: "100%" }}
            />
          </div>

          <div className="forms">
            <label htmlFor="username">Email Address</label>
            <br />
            <input
              type="email"
              id="username"
              className="underline-input"
              placeholder="Email Address"
              required
            />
          </div>

          <div className="forms">
            <label htmlFor="username">Phone Number</label>
            <br />
            <input
              type="number"
              id="username"
              className="underline-input"
              placeholder="Phone Number"
              required
            />
          </div>

          <div className="forms">
            <label htmlFor="username">Set Password</label>
            <br />
            <input
              type="text"
              id="username"
              className="underline-input"
              placeholder="Set Password"
              required
            />
          </div>
        </div>
        <a href="/" className="continue-btn">
          Continue
        </a>
      </div>
    </div>
  );
};

export default JoinUsPage;
