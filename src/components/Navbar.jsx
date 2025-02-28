import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg navbar-light bg-light sticky-top">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <img
              src="../logo.png"
              alt=""
              width="30"
              height="30"
              className="position-absolute"
            />
            <span style={{ marginLeft: "2.25rem" }}>Basic ReactJS</span>
          </NavLink>
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
            <ul className="navbar-nav nav-pills me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" className="nav-link ps-2">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link ps-2" to="/ref?keyword=React&page=5">
                  Ref
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link ps-2" to="/state">
                  State
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle ps-2"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Form
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <NavLink className="dropdown-item" to="/form" end>
                      Form
                    </NavLink>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/form/checkbox-radio-switch">
                      Checkbox,Radio,Switch
                    </NavLink>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/form/select-file">
                      Select File
                    </NavLink>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/form/form-validation">
                      Form Validation
                    </NavLink>
                  </li>
                </ul>
              </li>
            </ul>
            <NavLink to="/login" className="btn btn-outline-success">
              Login
            </NavLink>
            <NavLink to="/register" className="btn btn-success ms-2">
              Register
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
}
