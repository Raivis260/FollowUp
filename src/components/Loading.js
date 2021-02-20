import React from "react";

function Loading() {
  return (
    <div className="loading text-center">
      <h3>Waiting for input...</h3>
      <div className="spinner-grow " role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}

export default Loading;
