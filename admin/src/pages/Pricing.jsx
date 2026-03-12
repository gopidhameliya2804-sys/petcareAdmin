import React from "react";
import Sidebar from "../common/Sidebar";

function Pricing() {
  return (
    <div>
      <div id="app">
        <Sidebar />
        <div id="main">
          <div className="page-heading">
            <div className="page-title">
              <div className="row">
                <div className="col-12 col-md-6 order-md-1 order-last">
                  <h3>Pricing</h3>
                  <p className="text-subtitle text-muted">
                    For user to check they list
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
                        Pricing
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
            <section className="section">
              <div className="row">
                <div className="col-12 col-md-8 offset-md-2">
                  <div className="pricing">
                    <div className="row align-items-center">
                      <div className="col-md-4 px-0">
                        <div className="card">
                          <div className="card-header text-center">
                            <h4 className="card-title">Basic</h4>
                            <p className="text-center">
                              A standart features you can get
                            </p>
                          </div>
                          <h1 className="price">$100</h1>
                          <ul>
                            <li>
                              <i className="bi bi-check-circle" />
                              Lorem ipsum dolor sit amet
                            </li>
                            <li>
                              <i className="bi bi-check-circle" />
                              Lorem ipsum dolor sit{" "}
                            </li>
                            <li>
                              <i className="bi bi-check-circle" />
                              Lorem ipsum dolor amet
                            </li>
                            <li>
                              <i className="bi bi-check-circle" />
                              Lorem ipsum dolor sit amet
                            </li>
                            <li>
                              <i className="bi bi-check-circle" />
                              Lorem ipsum sit amet
                            </li>
                            <li>
                              <i className="bi bi-check-circle" />
                              Lorem dolor sit amet
                            </li>
                          </ul>
                          <div className="card-footer">
                            <button className="btn btn-primary btn-block">
                              Order Now
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 px-0">
                        <div className="card card-highlighted">
                          <div className="card-header text-center">
                            <h4 className="card-title">Enterpreneur</h4>
                            <p />
                          </div>
                          <h1 className="price text-white">$150</h1>
                          <ul>
                            <li>
                              <i className="bi bi-check-circle" />
                              Lorem ipsum kolor sit amet
                            </li>
                            <li>
                              <i className="bi bi-check-circle" />
                              Lorem ipsum dolor sit amet
                            </li>
                            <li>
                              <i className="bi bi-check-circle" />
                              Lorem ipsum kolor sit amet
                            </li>
                            <li>
                              <i className="bi bi-check-circle" />
                              Lorem ipsum dolor sit amet
                            </li>
                            <li>
                              <i className="bi bi-check-circle" />
                              Lorem ipsum kolor sit amet
                            </li>
                            <li>
                              <i className="bi bi-check-circle" />
                              Lorem ipsum dolor sit amet
                            </li>
                            <li>
                              <i className="bi bi-check-circle" />
                              Lorem ipsum kolor sit amet
                            </li>
                            <li>
                              <i className="bi bi-check-circle" />
                              Lorem ipsum dolor sit amet
                            </li>
                            <li>
                              <i className="bi bi-check-circle" />
                              Lorem ipsum kolor sit amet
                            </li>
                          </ul>
                          <div className="card-footer">
                            <button className="btn btn-outline-white btn-block">
                              Order Now
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 px-0">
                        <div className="card">
                          <div className="card-header text-center">
                            <h4 className="card-title">Professional</h4>
                            <p className="text-center">
                              A higher features you will need
                            </p>
                          </div>
                          <h1 className="price">$100</h1>
                          <ul>
                            <li>
                              <i className="bi bi-check-circle" />
                              Lorem ipsum dolor sit amet
                            </li>
                            <li>
                              <i className="bi bi-check-circle" />
                              Lorem ipsum dolor sit{" "}
                            </li>
                            <li>
                              <i className="bi bi-check-circle" />
                              Lorem ipsum dolor amet
                            </li>
                            <li>
                              <i className="bi bi-check-circle" />
                              Lorem ipsum dolor sit amet
                            </li>
                            <li>
                              <i className="bi bi-check-circle" />
                              Lorem ipsum sit amet
                            </li>
                            <li>
                              <i className="bi bi-check-circle" />
                              Lorem dolor sit amet
                            </li>
                          </ul>
                          <div className="card-footer">
                            <button className="btn btn-primary btn-block">
                              Order Now
                            </button>
                          </div>
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

export default Pricing;
