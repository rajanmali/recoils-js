import React from "react";
import { Link } from "react-router-dom";

function NoFoundPage() {
  return (
    <div className="content-container">
      <h2 className="main-title">Error 404</h2>
      <h3 style={{ marginBottom: "5rem" }}>
        Are you sure you should be here? Why don't you head on back home?
      </h3>
      <Link to="/" className="home-link">
        {"<- Go Back Home"}
      </Link>
    </div>
  );
}

export default NoFoundPage;
