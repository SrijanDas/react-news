import React from "react";

export default function Spinner() {
  const darkMode = JSON.parse(localStorage.getItem("darkMode"));

  return (
    <div
      className={`container text-center text-${
        darkMode ? "light" : "dark"
      } mt-4`}
    >
      <div className="spinner-border m-5 " role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}
