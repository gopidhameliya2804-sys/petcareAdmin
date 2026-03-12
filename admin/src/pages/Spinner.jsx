import React from "react";
import Sidebar from "../common/Sidebar";

function Spinner() {
  return (
    <div id="app">
      <Sidebar />
      <div id="main">
        <div className="page-heading">
          <div className="page-title">
            <div className="row">
              <div className="col-12 col-md-6 order-md-1 order-last">
                <h3>Spinner</h3>
                <p className="text-subtitle text-muted">
                  Indicate the loading state of a component or page with
                  Bootstrap spinners, built entirely with HTML, CSS, and no
                  JavaScript.
                </p>
              </div>
              <div className="col-12 col-md-6 order-md-2 order-first">
                <nav
                  aria-label="breadcrumb"
                  className="breadcrumb-header float-start float-lg-end"
                >
                  z
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="index.html">Dashboard</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Progress
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
          <section className="section">
            <div className="row">
              <div className="col-md-6 col-12">
                <div className="card">
                  <div className="card-header">
                    <h5>Basic Spinners</h5>
                  </div>
                  <div className="card-body">
                    <div className="spinner-border text-primary" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                    <div
                      className="spinner-border text-secondary"
                      role="status"
                    >
                      <span className="visually-hidden">Loading...</span>
                    </div>
                    <div className="spinner-border text-success" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                    <div className="spinner-border text-danger" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                    <div className="spinner-border text-warning" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                    <div className="spinner-border text-info" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                    <div className="spinner-border text-light" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                    <div className="spinner-border text-dark" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <h5>Sizing</h5>
                  </div>
                  <div className="card-body">
                    <div>
                      <div
                        className="spinner-border spinner-border-sm"
                        role="status"
                      >
                        <span className="visually-hidden">Loading...</span>
                      </div>
                      <div
                        className="spinner-grow spinner-grow-sm"
                        role="status"
                      >
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    </div>
                    <div className="mt-2">
                      <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div>
                      <div className="spinner-grow" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    </div>
                    <div className="mt-2">
                      <div
                        className="spinner-border"
                        style={{ width: "3rem", height: "3rem" }}
                        role="status"
                      >
                        <span className="visually-hidden">Loading...</span>
                      </div>
                      <div
                        className="spinner-grow"
                        style={{ width: "3rem", height: "3rem" }}
                        role="status"
                      >
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <h5>Custom Loader</h5>
                  </div>
                  <div className="card-body">
                    <img
                      src="assets/vendors/svg-loaders/audio.svg"
                      className="me-4"
                      style={{ width: "3rem" }}
                      alt="audio"
                    />
                    <img
                      src="assets/vendors/svg-loaders/ball-triangle.svg"
                      className="me-4"
                      style={{ width: "3rem" }}
                      alt="audio"
                    />
                    <img
                      src="assets/vendors/svg-loaders/circles.svg"
                      className="me-4"
                      style={{ width: "3rem" }}
                      alt="audio"
                    />
                    <img
                      src="assets/vendors/svg-loaders/grid.svg"
                      className="me-4"
                      style={{ width: "3rem" }}
                      alt="audio"
                    />
                    <img
                      src="assets/vendors/svg-loaders/hearts.svg"
                      className="me-4"
                      style={{ width: "3rem" }}
                      alt="audio"
                    />
                    <img
                      src="assets/vendors/svg-loaders/oval.svg"
                      className="me-4"
                      style={{ width: "3rem" }}
                      alt="audio"
                    />
                    <img
                      src="assets/vendors/svg-loaders/puff.svg"
                      className="me-4"
                      style={{ width: "3rem" }}
                      alt="audio"
                    />
                    <img
                      src="assets/vendors/svg-loaders/rings.svg"
                      className="me-4"
                      style={{ width: "3rem" }}
                      alt="audio"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-12">
                <div className="card">
                  <div className="card-header">
                    <h5>Spinner Growing</h5>
                  </div>
                  <div className="card-body">
                    <div className="spinner-grow text-primary" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                    <div className="spinner-grow text-secondary" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                    <div className="spinner-grow text-success" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                    <div className="spinner-grow text-danger" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                    <div className="spinner-grow text-warning" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                    <div className="spinner-grow text-info" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                    <div className="spinner-grow text-light" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                    <div className="spinner-grow text-dark" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <h5>Spinner-in-button</h5>
                  </div>
                  <div className="card-body">
                    <div className="mb-2">
                      <button
                        className="btn btn-primary"
                        type="button"
                        disabled
                      >
                        <span
                          className="spinner-border spinner-border-sm"
                          role="status"
                          aria-hidden="true"
                        />
                        <span className="visually-hidden">Loading...</span>
                      </button>
                      <button
                        className="btn btn-primary"
                        type="button"
                        disabled
                      >
                        <span
                          className="spinner-border spinner-border-sm"
                          role="status"
                          aria-hidden="true"
                        />
                        Loading...
                      </button>
                    </div>
                    <div className="mb-2">
                      <button
                        className="btn btn-secondary"
                        type="button"
                        disabled
                      >
                        <span
                          className="spinner-grow spinner-grow-sm"
                          role="status"
                          aria-hidden="true"
                        />
                        <span className="visually-hidden">Loading...</span>
                      </button>
                      <button
                        className="btn btn-secondary"
                        type="button"
                        disabled
                      >
                        <span
                          className="spinner-grow spinner-grow-sm"
                          role="status"
                          aria-hidden="true"
                        />
                        Processing...
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <footer>
          <div className="footer clearfix mb-0 text-muted">
            <div className="float-start">
              <p>2021 © Mazer</p>
            </div>
            <div className="float-end">
              <p>
                Crafted with{" "}
                <span className="text-danger">
                  <i className="bi bi-heart" />
                </span>{" "}
                by <a href="http://ahmadsaugi.com">A. Saugi</a>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Spinner;
