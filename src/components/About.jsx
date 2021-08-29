import React, { useEffect } from "react";
import "./About.css";
export default function About({ setProgress }) {
  const darkMode = JSON.parse(localStorage.getItem("darkMode"));
  const textColor = darkMode ? "light" : "";

  useEffect(() => {
    setProgress(100);
  }, [setProgress]);
  return (
    <div
      className={`about-section paddingTB60 ${
        darkMode ? "dark-bg" : "gray-bg"
      }`}
    >
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-7 col-sm-6">
            <div className="about-title clearfix">
              <h1 className={`text-${textColor}`}>
                About <span>React News</span>
              </h1>
              <p className="about-paddingB">
                React News shows you top news headlines of different categories.
              </p>
              <p className={`text-${textColor}`}>
                This website was made with ❤ by{" "}
                <b>
                  <a
                    href="https://srijan-das.web.app/"
                    target="_blank"
                    rel="noreferrer"
                    style={{ textDecoration: "none" }}
                  >
                    Srijan Das
                  </a>
                </b>
              </p>
              <div className="about-icons">
                <ul>
                  <li>
                    <a
                      href="https://github.com/SrijanDas"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i
                        id="social-fb"
                        className="fa fa-github-square fa-3x social"
                      ></i>
                    </a>
                  </li>

                  <li>
                    <a
                      href="mailto:srijandas18.sd@gmail.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i
                        id="social-em"
                        className="fa fa-envelope-square fa-3x social"
                      ></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-5 col-sm-6">
            <div className="about-img">
              <img
                src="https://devitems.com/preview/appmom/img/mobile/2.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
