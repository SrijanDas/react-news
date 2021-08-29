import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const navlinks = [
    "General",
    "Business",
    "Entertainment",
    "Health",
    "Science",
    "Sports",
    "Technology",
  ];
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <span class="navbar-brand mb-0 h1">ReactNews</span>
          </Link>
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
              {navlinks.map((navlink, index) => (
                <li className="nav-item" key={index}>
                  <Link
                    className="nav-link"
                    to={`/news/${navlink.toLowerCase()}`}
                  >
                    {navlink}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="d-flex align-items-center">
              <div className="form-check form-switch">
                <label
                  className="form-check-label"
                  htmlFor="flexSwitchCheckDefault"
                >
                  Dark Mode
                </label>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheckDefault"
                />
              </div>
              <div className="nav-item">
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
