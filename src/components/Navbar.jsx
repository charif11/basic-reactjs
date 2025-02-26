import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav class="navbar navbar-dark bg-dark navbar-expand-lg navbar-light bg-light sticky-top">
        <div class="container-fluid">
          <NavLink className="navbar-brand" to="/">
          <img src="./logo.png" alt="" width="30" height="30" class="position-absolute"
          />
          <span style={{marginLeft:'2.25rem'}}>Basic ReactJS</span>
          </NavLink>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav nav-pills me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <NavLink to='/' className="nav-link ps-2">
                  Home
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink className="nav-link ps-2" to="/ref">
                  Ref
                </NavLink>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle ps-2"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <NavLink className="dropdown-item" to="/state">
                      State
                    </NavLink>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/form">
                      Form
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
