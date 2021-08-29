import React from "react";

export default function Spinner() {
  return (
    <div className="container text-center mt-4">
      <div className="spinner-border m-5 " role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}
