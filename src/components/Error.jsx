import React from "react";
import ErrorGif from "../assets/error.gif";

export default function Error() {
  return (
    <div className="container mt-4">
      <img
        src={ErrorGif}
        alt="..."
        className="rounded mx-auto d-block"
        style={{ height: "12rem" }}
      />
      <p className="fs-1 text-center mt-2">Something went wrong! 😟</p>
      <p className="fs-3 text-center">Please try again after sometime</p>
    </div>
  );
}
