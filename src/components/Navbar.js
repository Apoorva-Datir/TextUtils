import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";
export default function Navbar(props) {
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {props.title}
            {/* props.title so we can change it anytime in App.js and since its a js thingy add curly braces */}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link" href="/about">
                  About
                </a> */}
              </li>
            </ul>
            <div className={`form-check form-switch text-${props.mode==='light'? 'dark' : 'light'}`}>
              <input
                className="form-check-input"
                type="checkbox"
                id="flexSwitchCheckDefault"
                onClick = {props.toggleMode}
              />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                Enable {props.mode==='light'?'dark' : 'light'} mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
// this is to check if we are correcty sending the type of props i.e.idhar agar string likha and udhar number bhej diya
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

//if you forget to pass props in the App.js file then this will keep a default value
Navbar.defaultProps = {
  title: "Set title",
};
