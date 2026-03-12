import React from "react";
import Sidebar from "../common/Sidebar";

function Toastify() {
  return (
    <div>
      <div id="app">
        <Sidebar />
        <div id="main">
          <div className="page-heading">
            <div className="page-title">
              <div className="row">
                <div className="col-12 col-md-6 order-md-1 order-last">
                  <h3>Toastify</h3>
                  <p className="text-subtitle text-muted">
                    Better notification messages
                  </p>
                </div>
                <div className="col-12 col-md-6 order-md-2 order-first">
                  <nav
                    aria-label="breadcrumb"
                    className="breadcrumb-header float-start float-lg-end"
                  >
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="index.html">Dashboard</a>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Toastify
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
            <section className="section">
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Types</h4>
                    </div>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-12 col-md-4">
                          <button
                            id="basic"
                            className="btn btn-outline-primary btn-block btn-lg"
                          >
                            Basic Toast
                          </button>
                        </div>
                        <div className="col-12 col-md-4">
                          <button
                            id="background"
                            className="btn btn-outline-primary btn-block btn-lg"
                          >
                            Custom Background
                          </button>
                        </div>
                        <div className="col-12 col-md-4">
                          <button
                            id="close"
                            className="btn btn-outline-primary btn-block btn-lg"
                          >
                            Close Button
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="section">
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Position</h4>
                    </div>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-12 col-md-4">
                          <button
                            id="top-left"
                            className="btn btn-outline-primary btn-block btn-lg"
                          >
                            Top Left
                          </button>
                        </div>
                        <div className="col-12 col-md-4">
                          <button
                            id="top-center"
                            className="btn btn-outline-primary btn-block btn-lg"
                          >
                            Top Center
                          </button>
                        </div>
                        <div className="col-12 col-md-4">
                          <button
                            id="top-right"
                            className="btn btn-outline-primary btn-block btn-lg"
                          >
                            Top Right
                          </button>
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-12 col-md-4">
                          <button
                            id="bottom-left"
                            className="btn btn-outline-primary btn-block btn-lg"
                          >
                            Bottom Left
                          </button>
                        </div>
                        <div className="col-12 col-md-4">
                          <button
                            id="bottom-center"
                            className="btn btn-outline-primary btn-block btn-lg"
                          >
                            Bottom Center
                          </button>
                        </div>
                        <div className="col-12 col-md-4">
                          <button
                            id="bottom-right"
                            className="btn btn-outline-primary btn-block btn-lg"
                          >
                            Bottom Right
                          </button>
                        </div>
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
    </div>
  );
}

export default Toastify;
