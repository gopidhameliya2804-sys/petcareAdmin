import React from "react";
import Sidebar from "../common/Sidebar";
import Footer from "../common/Footer";

function Badge() {
  return (
    <div>
      <div id="app">
        <Sidebar />
        <div id="main">
          <div className="page-heading">
            <div className="page-title">
              <div className="row">
                <div className="col-12 col-md-6 order-md-1 order-last">
                  <h3>Badge</h3>
                  <p className="text-subtitle text-muted">
                    Examples for badges, our small count and labeling component
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
                        Badge
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
            <section className="section">
              <div className="row">
                <div className="col-12 col-md-6 col-lg-6">
                  <div className="card">
                    <div className="card-header">
                      <h4>Variation</h4>
                    </div>
                    <div className="card-body">
                      <div className="badges">
                        <span className="badge bg-primary">Primary</span>
                        <span className="badge bg-secondary">Secondary</span>
                        <span className="badge bg-success">Success</span>
                        <span className="badge bg-danger">Danger</span>
                        <span className="badge bg-warning">Warning</span>
                        <span className="badge bg-info">Info</span>
                        <span className="badge bg-dark">Dark</span>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header">
                      <h4>Light</h4>
                    </div>
                    <div className="card-body">
                      <div className="badges">
                        <span className="badge bg-light-primary">Primary</span>
                        <span className="badge bg-light-secondary">
                          Secondary
                        </span>
                        <span className="badge bg-light-success">Success</span>
                        <span className="badge bg-light-danger">Danger</span>
                        <span className="badge bg-light-warning">Warning</span>
                        <span className="badge bg-light-info">Info</span>
                        <span className="badge bg-light-dark">Dark</span>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header">
                      <h4>Heading</h4>
                    </div>
                    <div className="card-body">
                      <h1>
                        Heading 1{" "}
                        <span className="badge bg-secondary">New</span>
                      </h1>
                      <h2>
                        Heading 2{" "}
                        <span className="badge bg-secondary">New</span>
                      </h2>
                      <h3>
                        Heading 3{" "}
                        <span className="badge bg-secondary">New</span>
                      </h3>
                      <h4>
                        Heading 4{" "}
                        <span className="badge bg-secondary">New</span>
                      </h4>
                      <h5>
                        Heading 5{" "}
                        <span className="badge bg-secondary">New</span>
                      </h5>
                      <h6>
                        Heading 6{" "}
                        <span className="badge bg-secondary">New</span>
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-6">
                  <div className="card">
                    <div className="card-header">
                      <h4>Button</h4>
                    </div>
                    <div className="card-body">
                      <div className="buttons">
                        <div className="section-title mt-0">Simple</div>
                        <button type="button" className="btn btn-primary">
                          Notifications{" "}
                          <span className="badge bg-transparent">4</span>
                        </button>
                        <button type="button" className="btn btn-danger">
                          Notifications{" "}
                          <span className="badge bg-transparent">4</span>
                        </button>
                        <button type="button" className="btn btn-warning">
                          Notifications{" "}
                          <span className="badge bg-transparent">4</span>
                        </button>
                        <button type="button" className="btn btn-success">
                          Notifications{" "}
                          <span className="badge bg-transparent">4</span>
                        </button>
                        <button type="button" className="btn btn-dark">
                          Notifications{" "}
                          <span className="badge bg-transparent">4</span>
                        </button>
                        <div className="section-title">Icons</div>
                        <button
                          type="button"
                          className="btn btn-primary btn-icon icon-left"
                        >
                          <i className="fas fa-plane" /> Notifications{" "}
                          <span className="badge bg-transparent">4</span>
                        </button>
                        <button
                          type="button"
                          className="btn btn-danger btn-icon icon-left"
                        >
                          <i className="fas fa-plane" /> Notifications{" "}
                          <span className="badge bg-transparent">4</span>
                        </button>
                        <button
                          type="button"
                          className="btn btn-warning btn-icon icon-left"
                        >
                          <i className="fas fa-plane" /> Notifications{" "}
                          <span className="badge bg-transparent">4</span>
                        </button>
                        <button
                          type="button"
                          className="btn btn-success btn-icon icon-left"
                        >
                          <i className="fas fa-plane" /> Notifications{" "}
                          <span className="badge bg-transparent">4</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header">
                      <h4>Link</h4>
                    </div>
                    <div className="card-body">
                      <div className="badges">
                        <a href="#" className="badge bg-primary">
                          Primary
                        </a>
                        <a href="#" className="badge bg-secondary">
                          Secondary
                        </a>
                        <a href="#" className="badge bg-success">
                          Success
                        </a>
                        <a href="#" className="badge bg-danger">
                          Danger
                        </a>
                        <a href="#" className="badge bg-warning">
                          Warning
                        </a>
                        <a href="#" className="badge bg-info">
                          Info
                        </a>
                        <a href="#" className="badge bg-light">
                          Light
                        </a>
                        <a href="#" className="badge bg-dark">
                          Dark
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Badge;
