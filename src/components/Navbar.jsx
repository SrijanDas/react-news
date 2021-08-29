import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar({ darkMode, setDarkMode }) {
  const location = useLocation();
  const [active, setActive] = useState(
    location.pathname.split("/").slice(-1).pop()
  );

  const handleChange = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("darkMode", !darkMode);
  };
  const theme = darkMode ? "dark" : "light";
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
      <nav
        className={`navbar fixed-top navbar-expand-lg navbar-${theme} bg-${theme}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <span
              onClick={() => {
                setActive("");
              }}
              className="navbar-brand mb-0 h1 text-danger"
            >
              ReactNews
            </span>
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
                <li
                  className="nav-item"
                  key={index}
                  onClick={() => {
                    setActive(navlink.toLowerCase());
                  }}
                >
                  <Link
                    className={`nav-link ${
                      active === navlink.toLowerCase() ? "active" : ""
                    }`}
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
                  className={`form-check-label text-${
                    darkMode ? "light" : "secondary"
                  }`}
                  htmlFor="flexSwitchCheckDefault"
                >
                  Dark Mode
                </label>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheckDefault"
                  onChange={handleChange}
                  checked={darkMode}
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
