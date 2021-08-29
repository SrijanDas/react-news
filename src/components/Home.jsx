import React, { useEffect } from "react";

export default function Home({ setProgress }) {
  useEffect(() => {
    setProgress(100);
  }, [setProgress]);
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}
