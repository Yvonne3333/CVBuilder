import React, { useState } from "react";
import logo from "../assets/CV_Builder_Logo4x 6.png";
import { Link } from "react-router-dom";
import "./cVBuilder.css";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

import { DROPDOWN } from "../constants/index";

const Nav = () => {
  const [click, setClick] = useState(false);
  const [id, setId] = useState("");

  const handleShowModal = (id) => {
    setId(id);
    setClick((prev) => !prev);
  };

  return (
    <div
      className="NavItems"
      style={{
        width: "100%",
        zIndex: "50",
        top: "0",
        position: "fixed",
        backgroundColor: "white",
      }}
    >
      <nav className="navbar" style={{ position: "relative", width: "100%" }}>
        <div className="navbar-container">
          <Link to="/">
            <img src={logo} alt="logo" className="navbar-logo" />
          </Link>
        </div>

        <div className="list-items">
          <li onClick={() => handleShowModal("1")} className="nav-item">
            <Link
              to="/"
              className="nav-links"
              style={{ textDecoration: "none" }}
            >
              Services
            </Link>
            {click && id === "1" ? (
              <RiArrowDropUpLine size={28} />
            ) : (
              <RiArrowDropDownLine size={28} />
            )}
          </li>

          <li
            style={{ position: "relative" }}
            onClick={() => handleShowModal("2")}
            className="nav-item"
          >
            <Link
              to="/"
              className="nav-links"
              style={{ textDecoration: "none" }}
            >
              About Us
            </Link>
            {click && id === "2" ? (
              <RiArrowDropUpLine size={28} />
            ) : (
              <RiArrowDropDownLine size={28} />
            )}
          </li>

          <li className="nav-item">
            <Link
              to="/Help"
              className="nav-links"
              style={{ textDecoration: "none" }}
            >
              Help
            </Link>
          </li>

          <div className="joinUs">
            <Link to="/Joinus">Join us</Link>
          </div>
        </div>

        {click && id === "1" && (
          <div
            style={{
              position: "absolute",
              top: "68px",
              backgroundColor: "pink",
              width: "100%",
              height: "60vh",
              zIndex: 10,
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gridAutoRows: "1fr",
              gap: "20px",
              padding: "20px"
              
            }}
          >
            {DROPDOWN.map((item, index) => (
              <div key={index} className="dropdown">
                <div className="blueicon-container">
                  <img src={item.img} alt="img" className="img1" />

                  <p>
                    <strong>{item.title}</strong> <br />
                    {item.desc}
                  </p>
                </div>
                <div className="yellowicon-container">
                  <img src={item.img2} alt="img" className="img2" />
                  <p>
                    <strong>{item.title}</strong> <br />
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
        {click && id === "2" && (
          <div
            style={{
              position: "absolute",
              top: "68px",
              backgroundColor: "pink",
              height: "100px",
              width: "100%",
              zIndex: "10",
            }}
          >
            About
          </div>
        )}
      </nav>
    </div>
  );
};

export default Nav;
