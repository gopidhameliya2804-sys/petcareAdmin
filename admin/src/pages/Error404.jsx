import React from "react";
import { Link } from "react-router-dom";

function Error404() {
  return (
    <div>
      <div id="error">
        <div className="error-page container">
          <div className="col-md-8 col-12 offset-md-2">
            <img
              className="img-error"
              src="assets/images/samples/error-404.png"
              alt="Not Found"
            />
            <div className="text-center">
              <h1 className="error-title">NOT FOUND</h1>
              <p className="fs-5 text-gray-600">
                The page you are looking not found.
              </p>
              <Link
                to="/"
                className="btn btn-lg btn-outline-primary mt-3"
              >
                Go Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Error404;
