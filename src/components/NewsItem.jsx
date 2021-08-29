import React from "react";
import { format } from "timeago.js";

export default function NewsItem({ article }) {
  const darkMode = JSON.parse(localStorage.getItem("darkMode"));
  const primaryTextColor = darkMode ? "light" : "dark";
  const cardBg = darkMode ? "dark" : "";

  const { source, author, title, description, url, urlToImage, publishedAt } =
    article;
  return (
    <div className="col-4 my-2">
      {source.name ? (
        <div
          style={{
            width: "auto",
            position: "absolute",
            zIndex: 1,
          }}
        >
          <span className="bg-danger px-4 text-light rounded-pill">
            {source.name}
          </span>
        </div>
      ) : (
        ""
      )}

      <div className={`card text-${primaryTextColor} bg-${cardBg} mt-3`}>
        <img
          src={
            urlToImage
              ? urlToImage
              : "https://icdn.digitaltrends.com/image/digitaltrends/graphichighrescropped1.jpg"
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title ? title : ""}</h5>
          <p className="card-text">{description ? description : ""}</p>
          <div className="my-2 text-secondary">
            Published{" "}
            {author ? (
              <>
                by: <b>{author} </b>, {format(publishedAt)}
              </>
            ) : (
              ": " + format(publishedAt)
            )}
          </div>
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className={`mt-2 btn btn-${
              darkMode ? "secondary" : "outline-dark"
            }`}
          >
            View More
          </a>
        </div>
      </div>
    </div>
  );
}
