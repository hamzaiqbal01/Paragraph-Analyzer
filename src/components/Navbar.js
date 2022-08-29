import React from "react";
import { Link } from "react-router-dom";
import navCss from "./Navbar.css";

export default function Navbar(props) {
  return (
    //
    <header id="header">
      <nav className="navbar navbar-expand-lg  border-0">
        <div className="container-fluid navContainer">
          <Link className="navbar-brand" to="/">
            <img
              src={require("../images/logo.png")}
              className="logoImg ms-3"
              alt="logo"
            />
          </Link>
          <button
            className="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <img src={require("../images/menu_100px.png")} alt="" width={26} />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0  mx-auto text-center col-md-6">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/about">
                  About us
                </Link>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Theme
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <div
                      className="themeMenu"
                      onClick={() => {
                        props.changeBackground("blueTheme");
                      }}
                    >
                      <div className="menuImgContainer  p-2  mx-2 border"></div>{" "}
                      Blue Moon
                    </div>
                  </li>
                  <li>
                    <div
                      className="themeMenu"
                      onClick={() => {
                        props.changeBackground("summerGarden");
                      }}
                    >
                      <div className="menuImgContainer menuImgContainer2 p-2 mx-2 border"></div>{" "}
                      Summer Garden
                    </div>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                </ul>
              </li>
            </ul>
            <div className="icons-group  ">
              <a
                href="https://www.facebook.com/profile.php?id=100023672195736"
                target="blank"
              >
                <img src={require("../images/fcebook2.png")} alt="facebook" />
              </a>
              <a href="https://www.instagram.com/hamzaiqbal_66/" target="blank">
                <img src={require("../images/insta.png")} alt="insta" />
              </a>
              <a
                href="https://www.linkedin.com/in/hamza-iqbal-8444a01b5/"
                target="blank"
              >
                <img
                  src={require("../images/linkedin_96px.png")}
                  alt="linkdin"
                />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
// Navbar.propTypes = {
//   title: PropTypes.string.isRequired,
//   aboutText: PropTypes.string.isRequired,
// };

// // default props

// Navbar.defaultProps = {
//   title: "set title",
//   aboutText: "about text",
// };
