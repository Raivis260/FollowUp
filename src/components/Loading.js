import React from "react";

function Loading() {
  return (
    <div className="loading text-center">
      <h3>Laukiama nuorodos...</h3>
      <div className="spinner-grow " role="status">
        <span className="sr-only">Prašome palaukti...</span>
      </div>
    </div>
  );
}

export default Loading;
