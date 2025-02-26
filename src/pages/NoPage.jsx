import React from "react";

function NoPage() {
  return (
    <div
      className="container-sm bg-danger position-absolute text-center h-50 rounded-5 shadow-lg"
      style={{ top: "50%", left: "50%", transform: "translate(-50%,-50%)" }}
    >
      <h1
        className="text-light position-absolute"
        style={{ top: "50%", left: "50%", transform: "translate(-50%,-50%)" ,fontSize:'4.5rem'}}
      >
        404 - Page Not Found
      </h1>
    </div>
  );
}

export default NoPage;
