import React from "react";
import { Link } from "react-router-dom";

function Error403() {
  return (
    <div>
      <div id="error">
        <div className="error-page container">
          <div className="col-md-8 col-12 offset-md-2">
            <img
              className="img-error"
              src="assets/images/samples/error-403.png"
              alt="Not Found"
            />
            <div className="text-center">
              <h1 className="error-title">Forbidden</h1>
              <p className="fs-5 text-gray-600">
                You are unauthorized to see this page.
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

export default Error403;
