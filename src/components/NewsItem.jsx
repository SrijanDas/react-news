import React from "react";
import { format } from "timeago.js";

export default function NewsItem({ article }) {
  const { source, author, title, description, url, urlToImage, publishedAt } =
    article;
  return (
    <div className="col-4 my-2">
      <div className="card mt-3">
        <div className="card-header text-white bg-primary">
          {source.name ? source.name : "Source: unknown"}
        </div>
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
          <p className="card-text">{description ? description : "..."}</p>
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            View More
          </a>
        </div>
        <div className="card-footer text-muted">
          {author ? (
            <>
              Published by: <b>{author} </b> <br />
            </>
          ) : (
            <>Published: </>
          )}
          {format(publishedAt)}
        </div>
      </div>
    </div>
  );
}
