import React from "react";
import Sidebar from "../common/Sidebar";
import Footer from "../common/Footer";

function Button() {
  return (
    <div>
      <div id="app">
        <Sidebar />
        <div id="main">
          <div className="page-heading">
            <div className="page-title">
              <div className="row">
                <div className="col-12 col-md-6 order-md-1 order-last">
                  <h3>Button</h3>
                  <p className="text-subtitle text-muted">
                    Use Bootstrap’s custom button styles for actions in forms,
                    dialogs, and more with support for multiple sizes, states,
                    and more.
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
                        Button
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
                      <h4>Basic Buttons</h4>
                    </div>
                    <div className="card-body">
                      <h6>Default</h6>
                      <p className="text-muted">
                        Use the{" "}
                        <code>
                          .btn .btn-{"{"}color{"}"}
                        </code>{" "}
                        classes.
                      </p>
                      <div className="buttons">
                        <a href="#" className="btn btn-primary">
                          Primary
                        </a>
                        <a href="#" className="btn btn-secondary">
                          Secondary
                        </a>
                        <a href="#" className="btn btn-info">
                          Info
                        </a>
                        <a href="#" className="btn btn-warning">
                          Warning
                        </a>
                        <a href="#" className="btn btn-danger">
                          Danger
                        </a>
                        <a href="#" className="btn btn-success">
                          Success
                        </a>
                        <a href="#" className="btn btn-light">
                          Light
                        </a>
                        <a href="#" className="btn btn-dark">
                          Dark
                        </a>
                      </div>
                      <hr />
                      <h6>Rounded</h6>
                      <p>
                        Use a class <code>.rounded-pill</code> with{" "}
                        <code>.btn</code> class to create round button.
                      </p>
                      <div className="buttons">
                        <a href="#" className="btn btn-primary rounded-pill">
                          Primary
                        </a>
                        <a href="#" className="btn btn-secondary rounded-pill">
                          Secondary
                        </a>
                        <a href="#" className="btn btn-info rounded-pill">
                          Info
                        </a>
                        <a href="#" className="btn btn-warning rounded-pill">
                          Warning
                        </a>
                        <a href="#" className="btn btn-danger rounded-pill">
                          Danger
                        </a>
                        <a href="#" className="btn btn-success rounded-pill">
                          Success
                        </a>
                        <a href="#" className="btn btn-light rounded-pill">
                          Light
                        </a>
                        <a href="#" className="btn btn-dark rounded-pill">
                          Dark
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <h4>
                        Buttons <code>.btn-outline</code>
                      </h4>
                    </div>
                    <div className="card-body">
                      <p className="text-muted">
                        Use the{" "}
                        <code>
                          .btn .btn-outline-{"{"}color{"}"}
                        </code>{" "}
                        classes.
                      </p>
                      <div className="buttons">
                        <a href="#" className="btn btn-outline-primary">
                          Primary
                        </a>
                        <a href="#" className="btn btn-outline-secondary">
                          Secondary
                        </a>
                        <a href="#" className="btn btn-outline-info">
                          Info
                        </a>
                        <a href="#" className="btn btn-outline-warning">
                          Warning
                        </a>
                        <a href="#" className="btn btn-outline-danger">
                          Danger
                        </a>
                        <a href="#" className="btn btn-outline-success">
                          Success
                        </a>
                        <a href="#" className="btn btn-outline-light">
                          Light
                        </a>
                        <a href="#" className="btn btn-outline-dark">
                          Dark
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-6 col-lg-6">
                  <div className="card">
                    <div className="card-header">
                      <h4>Button Sizes</h4>
                    </div>
                    <div className="card-body">
                      <p className="text-muted">
                        Use the <code>.btn-lg</code> or <code>.btn-sm</code>{" "}
                        classes.
                      </p>
                      <div className="buttons">
                        <a href="#" className="btn btn-sm btn-warning">
                          Small
                        </a>
                        <a href="#" className="btn btn-danger">
                          Normal
                        </a>
                        <a href="#" className="btn btn-lg btn-dark">
                          Large
                        </a>
                      </div>
                      <div className="buttons">
                        <a href="#" className="btn btn-sm btn-outline-primary">
                          Small
                        </a>
                        <a href="#" className="btn btn-outline-primary">
                          Normal
                        </a>
                        <a href="#" className="btn btn-lg btn-outline-primary">
                          Large
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-6">
                  <div className="card">
                    <div className="card-header">
                      <h4>Button States</h4>
                    </div>
                    <div className="card-body">
                      <p className="text-muted">
                        Use the <code>.disabled</code> or{" "}
                        <code>.btn-progress</code>
                        classes.
                      </p>
                      <div className="buttons">
                        <a href="#" className="btn btn-primary">
                          Normal
                        </a>
                        <a href="#" className="btn disabled btn-primary">
                          Disabled
                        </a>
                        <a
                          href="#"
                          className="btn disabled btn-primary btn-progress"
                        >
                          Progress
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-6 col-lg-6">
                  <div className="card">
                    <div className="card-header">
                      <h4>Icon Button</h4>
                    </div>
                    <div className="card-body">
                      <p className="text-muted">
                        Use the <code>.icon</code> and <code>.icon-left</code>
                        classes.
                      </p>
                      <div className="buttons">
                        <a href="#" className="btn icon icon-left">
                          <i data-feather="user" /> Default
                        </a>
                        <a href="#" className="btn icon icon-left btn-primary">
                          <i data-feather="edit" />
                          Primary
                        </a>
                        <a
                          href="#"
                          className="btn icon icon-left btn-secondary"
                        >
                          <i data-feather="user" />
                          Secondary
                        </a>
                        <a href="#" className="btn icon icon-left btn-info">
                          <i data-feather="info" />
                          Info
                        </a>
                        <a href="#" className="btn icon icon-left btn-warning">
                          <i data-feather="alert-triangle" />
                          Warning
                        </a>
                        <a href="#" className="btn icon icon-left btn-danger">
                          <i data-feather="alert-circle" />
                          Danger
                        </a>
                        <a href="#" className="btn icon icon-left btn-success">
                          <i data-feather="check-circle" />
                          Success
                        </a>
                        <a href="#" className="btn icon icon-left btn-light">
                          <i data-feather="star" />
                          Light
                        </a>
                        <a href="#" className="btn icon icon-left btn-dark">
                          <i data-feather="file" />
                          Dark
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-6">
                  <div className="card">
                    <div className="card-header">
                      <h4>Only Icon Button</h4>
                    </div>
                    <div className="card-body">
                      <p className="text-muted">
                        Use the <code>.icon</code> class.
                      </p>
                      <div className="buttons">
                        <a href="#" className="btn icon btn-primary">
                          <i data-feather="edit" />
                        </a>
                        <a href="#" className="btn icon btn-secondary">
                          <i data-feather="user" />
                        </a>
                        <a href="#" className="btn icon btn-info">
                          <i data-feather="info-circle" />
                        </a>
                        <a href="#" className="btn icon btn-warning">
                          <i data-feather="exclamation-triangle" />
                        </a>
                        <a href="#" className="btn icon btn-danger">
                          <i data-feather="times" />
                        </a>
                        <a href="#" className="btn icon btn-success">
                          <i data-feather="check" />
                        </a>
                        <a href="#" className="btn icon btn-light">
                          <i data-feather="star" />
                        </a>
                        <a href="#" className="btn icon btn-dark">
                          <i data-feather="file" />
                        </a>
                      </div>
                      <p className="text-muted mt-2">Sizes.</p>
                      <div className="buttons">
                        <a href="#" className="btn icon btn-sm btn-warning">
                          <i data-feather="exclamation-triangle" />
                        </a>
                        <a href="#" className="btn icon btn-danger">
                          <i data-feather="times" />
                        </a>
                        <a href="#" className="btn icon btn-lg btn-success">
                          <i data-feather="check" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-6 col-lg-6">
                  <div className="card">
                    <div className="card-header">
                      <h4>Button Group</h4>
                    </div>
                    <div className="card-body">
                      <div
                        className="btn-group mb-3"
                        role="group"
                        aria-label="Basic example"
                      >
                        <button type="button" className="btn btn-secondary">
                          Left
                        </button>
                        <button type="button" className="btn btn-secondary">
                          Middle
                        </button>
                        <button type="button" className="btn btn-secondary">
                          Right
                        </button>
                      </div>
                      <div
                        className="btn-group mb-3"
                        role="group"
                        aria-label="Basic example"
                      >
                        <button type="button" className="btn btn-danger">
                          Left
                        </button>
                        <button type="button" className="btn btn-warning">
                          Middle
                        </button>
                        <button type="button" className="btn btn-success">
                          Right
                        </button>
                      </div>
                      <div
                        className="btn-group mb-3 btn-group-sm"
                        role="group"
                        aria-label="Basic example"
                      >
                        <button type="button" className="btn btn-danger">
                          Left
                        </button>
                        <button type="button" className="btn btn-danger">
                          Middle
                        </button>
                        <button type="button" className="btn btn-danger">
                          Right
                        </button>
                      </div>
                      <div className="clearfix" />
                      <div
                        className="btn-group btn-group-lg"
                        role="group"
                        aria-label="Basic example"
                      >
                        <button type="button" className="btn">
                          Left
                        </button>
                        <button type="button" className="btn btn-primary">
                          Middle
                        </button>
                        <button type="button" className="btn">
                          Right
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-6">
                  <div className="card">
                    <div className="card-header">
                      <h4>Vertical Variation</h4>
                    </div>
                    <div className="card-body">
                      <div
                        className="btn-group-vertical"
                        role="group"
                        aria-label="Basic example"
                      >
                        <button type="button" className="btn btn-secondary">
                          Left
                        </button>
                        <button type="button" className="btn btn-secondary">
                          Middle
                        </button>
                        <button type="button" className="btn btn-secondary">
                          Right
                        </button>
                        <button type="button" className="btn btn-secondary">
                          Justify
                        </button>
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

export default Button;
