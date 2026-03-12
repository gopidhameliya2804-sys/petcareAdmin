import React from "react";
import { Link } from "react-router-dom";

function VerticalColumn() {
  return (
    <div>
      <nav className="navbar navbar-light">
        <div className="container d-block">
          <Link to="/">
            <i className="bi bi-chevron-left" />
          </Link>
          <Link className="navbar-brand ms-4" to="">
            <img src="assets/images/logo/logo.png" />
          </Link>
        </div>
      </nav>
      <div className="container">
        <div className="card mt-5">
          <div className="card-header">
            <h4 className="card-title">Single Layout</h4>
          </div>
          <div className="card-body">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              nemo quasi labore expedita? Veritatis at maxime id voluptates
              excepturi molestiae possimus blanditiis dicta consequuntur maiores
              suscipit, eveniet neque obcaecati doloribus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VerticalColumn;
