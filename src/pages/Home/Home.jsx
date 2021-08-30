import React, { useEffect } from "react";
import "./Home.css";
export default function Home({ setProgress }) {
  const darkMode = JSON.parse(localStorage.getItem("darkMode"));

  useEffect(() => {
    setProgress(100);
  }, [setProgress]);
  return (
    <div className={`home ${darkMode ? "homeDark" : "homeLight"}`}>
      <div className="container">
        <h1>Home</h1>
      </div>
    </div>
  );
}
