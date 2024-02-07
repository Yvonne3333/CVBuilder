import React, { useState } from "react";
import logo from "../assets/CV_Builder_Logo4x 6.png";
import { Link } from "react-router-dom";
import "./cVBuilder.css";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import academic from "../assets/academics.png";
import application from "../assets/application.png";
import business from "../assets/business.png";
import career from "../assets/career.png";
import management from "../assets/management.png";
import travel from "../assets/travel.png";
import copy from "../assets/copy.png";
import copy1 from "../assets/copy2.png";
import academic1 from "../assets/academic2.png";
import application1 from "../assets/application2.png";
import business1 from "../assets/business2.png";
import career1 from "../assets/career2.png";
import management1 from "../assets/management2.png";
import travel1 from "../assets/travel2.png";

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
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            {DROPDOWN.map((item, index) => (
              <div key={index} className="dropdown">
                <div className="blueicon-container">
                  <img src={item.img} alt="img" />

                  <p>
                    <strong>{item.title}</strong> <br />
                    {item.desc}
                  </p>
                </div>
                <div className="yellowicon-container">
                  <img src={item.img2} alt="img" />
                  <p>
                    <strong>{item.title}</strong> <br />
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}

            {/* yvonne */}
            {/* <div className="dropdown">
              <div className="blueicon-container">
                <img
                  src={application1}
                  alt=""
                  className="blueicon"
                  style={{ height: "30px", margin: "2px 29px" }}
                />
                <p>
                  <strong>Application</strong> <br />
                  Donec proin consequat consectetur adipiscing dolaor a.
                </p>
              </div>
              <div className="yellowicon-container">
                <img
                  src={application}
                  alt=""
                  className="yellowicon"
                  style={{ height: "30px", margin: "-25px -68px" }}
                />
                <p>
                  <strong>Application</strong> <br />
                  Donec proin consequat consectetur adipiscing dolaor a.
                </p>
              </div>
            </div>
            <div className="dropdown">
              <div className="blueicon-container">
                <img
                  src={business1}
                  alt=""
                  className="blueicon"
                  style={{ height: "30px" }}
                />
                <p
                  style={{
                    margin: "-2px 1px 2px 3px",
                  }}
                >
                  <strong>Business</strong> <br />
                  Donec proin consequat consectetur adipiscing dolaor a.
                </p>
              </div>
              <div className="yellowicon-container">
                <img
                  className="yellowicon"
                  src={business}
                  alt=""
                  style={{ height: "30px", margin: "-25px -68px" }}
                />
                <p
                  style={{
                    margin: "-2px 1px 2px 3px",
                  }}
                >
                  <strong>Business</strong> <br />
                  Donec proin consequat consectetur adipiscing dolaor a.
                </p>
              </div>
            </div>

            <div className="dropdown">
              <div className="blueicon-container">
                <img
                  src={copy1}
                  alt=""
                  className="blueicon"
                  style={{ height: "30px", margin: "0px 20px 0px 30px " }}
                />
                <p>
                  <strong>Copy</strong> <br />
                  Aliquel amel mattis nisl fermentum ultrices tempus integer.
                </p>
              </div>{" "}
              <div className="yellowicon-container">
                <img
                  className="yellowicon"
                  src={copy}
                  alt=""
                  style={{ height: "30px", margin: "-25px -48px" }}
                />
                <p>
                  <strong>Copy</strong> <br />
                  Aliquel amel mattis nisl fermentum ultrices tempus integer.
                </p>
              </div>
            </div>

            <div className="dropdown">
              <div className="blueicon-container">
                <img
                  src={travel1}
                  alt=""
                  className="blueicon"
                  style={{ height: "30px", margin: "2px 32px 0px 30px" }}
                />
                <p>
                  <strong>Travel</strong> <br />
                  Ullamcorper consequal aliquam ultricies semper amet
                </p>
              </div>
              <div className="yellowicon-container">
                <img
                  className="yellowicon"
                  src={travel}
                  alt=""
                  style={{ height: "30px", margin: "-27px -60px" }}
                />
                <p>
                  <strong>Travel</strong> <br />
                  Ullamcorper consequal aliquam ultricies semper amet
                </p>
              </div>
            </div>

            <div className="dropdown">
              <div className="blueicon-container">
                <img
                  src={academic1}
                  alt=""
                  className="blueicon"
                  style={{ height: "30px", margin: "2px 13px 0px 30px" }}
                />
                <p>
                  <strong>Application</strong> <br />
                  Donec proin consequat consectetur adipiscing dolaor a.
                </p>
              </div>
              <div className="yellowicon-container">
                <img
                  className="yellowicon"
                  src={academic}
                  alt=""
                  style={{ height: "30px", margin: "-27px -45px" }}
                />
                <p>
                  <strong>Academics</strong> <br />
                  Etiam nisi velit ac integer auctor scelerisque.
                </p>
              </div>
            </div>

            <div className="dropdown">
              <div className="blueicon-container">
                <img
                  src={career1}
                  alt=""
                  className="blueicon"
                  style={{ height: "30px", margin: "2px 40px 0px 30px" }}
                />
                <p>
                  <strong>Application</strong> <br />
                  Donec proin consequat consectetur adipiscing dolaor a.
                </p>
              </div>
              <div className="yellowicon-container">
                <img
                  className="yellowicon"
                  src={career}
                  alt=""
                  style={{ height: "30px", margin: "-36px -62px" }}
                />
                <p>
                  <strong>Career</strong> <br /> Convallis egestas emin morbi
                  sed cursus euismod commodo eu suspendisse.
                </p>
              </div>
            </div>

            <div className="dropdown">
              <div className="blueicon-container">
                <img
                  src={management1}
                  alt=""
                  className="blueicon"
                  style={{ height: "30px", margin: "2px 17px 0px 30px" }}
                />
                <p>
                  <strong>Application</strong> <br />
                  Donec proin consequat consectetur adipiscing dolaor a.
                </p>
              </div>
              <div className="yellowicon-container">
                <img
                  className="yellowicon"
                  src={management}
                  alt=""
                  style={{ height: "30px", margin: "-34px -48px" }}
                />
                <p>
                  <strong>Management</strong> <br /> Tempor sed egestas pretium
                  metus diam metus malesuada risus.
                </p>
              </div>
            </div> */}
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
