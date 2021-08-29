import React from "react";
import "./About.css";
export default function About() {
  return (
    <div class="about-section paddingTB60 gray-bg">
      <div class="container mt-5">
        <div class="row">
          <div class="col-md-7 col-sm-6">
            <div class="about-title clearfix">
              <h1>
                About <span>React News</span>
              </h1>
              <p class="about-paddingB">
                React News shows you top news headlines of different categories.
              </p>
              <p>
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
              <div class="about-icons">
                <ul>
                  <li>
                    <a
                      href="https://github.com/SrijanDas"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i
                        id="social-fb"
                        class="fa fa-github-square fa-3x social"
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
                        class="fa fa-envelope-square fa-3x social"
                      ></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-md-5 col-sm-6">
            <div class="about-img">
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
