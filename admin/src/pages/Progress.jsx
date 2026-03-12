import React from "react";
import Sidebar from "../common/Sidebar";

function Progress() {
  return (
    <div>
      <div id="app">
        <Sidebar />
        <div id="main">
          <div className="page-heading">
            <div className="page-title">
              <div className="row">
                <div className="col-12 col-md-6 order-md-1 order-last">
                  <h3>Progress</h3>
                  <p className="text-subtitle text-muted">
                    Examples for how to use Bootstrap’s included navigation
                    components.
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
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Progress
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
            {/* Default Progress Start  */}
            <section className="section">
              <div className="card">
                <div className="card-header">
                  <h4>Default</h4>
                </div>
                <div className="card-body">
                  <p>
                    Use class{" "}
                    <code>
                      .progress-bar-{"{"}color-name{"}"}
                    </code>{" "}
                    to add different colors to progressbar.
                  </p>
                  <div className="progress progress-primary  mb-3">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "35%" }}
                      aria-valuenow={0}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  <div className="progress progress-secondary  mb-3">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "25%" }}
                      aria-valuenow={25}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  <div className="progress progress-warning  mb-3">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "50%" }}
                      aria-valuenow={50}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  <div className="progress progress-danger  mb-3">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "40%" }}
                      aria-valuenow={75}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  <div className="progress progress-dark  mb-3">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "75%" }}
                      aria-valuenow={100}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  <div className="progress progress-info  mb-3">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "88%" }}
                      aria-valuenow={100}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
              </div>
            </section>
            {/* Default Progress End  */}
            {/* Progress Label Start  */}
            <section className="section">
              <div className="card">
                <div className="card-header">
                  <h4>Progress Label</h4>
                </div>
                <div className="card-body">
                  <p>
                    Use class{" "}
                    <code>
                      .progress-bar-{"{"}color-name{"}"}
                    </code>{" "}
                    to add different colors to progressbar.
                  </p>
                  <div className="progress progress-primary  mb-4">
                    <div
                      className="progress-bar progress-label"
                      role="progressbar"
                      style={{ width: "35%" }}
                      aria-valuenow={35}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  <div className="progress progress-secondary  mb-4">
                    <div
                      className="progress-bar progress-label"
                      role="progressbar"
                      style={{ width: "25%" }}
                      aria-valuenow={25}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  <div className="progress progress-warning  mb-4">
                    <div
                      className="progress-bar progress-label"
                      role="progressbar"
                      style={{ width: "50%" }}
                      aria-valuenow={50}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  <div className="progress progress-danger  mb-4">
                    <div
                      className="progress-bar progress-label"
                      role="progressbar"
                      style={{ width: "40%" }}
                      aria-valuenow={40}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  <div className="progress progress-dark  mb-4">
                    <div
                      className="progress-bar progress-label"
                      role="progressbar"
                      style={{ width: "75%" }}
                      aria-valuenow={75}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  <div className="progress progress-info  mb-4">
                    <div
                      className="progress-bar progress-label"
                      role="progressbar"
                      style={{ width: "88%" }}
                      aria-valuenow={88}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
              </div>
            </section>
            {/* Progress Label End  */}
            {/* Progress Label Start  */}
            <section className="section">
              <div className="card">
                <div className="card-header">
                  <h4>Progress Striped</h4>
                </div>
                <div className="card-body">
                  <p>
                    Add <code>.progress-bar-striped</code> to any{" "}
                    <code>.progress-bar</code> to apply a stripe via CSS
                    gradient over the progress bar’s background color.
                  </p>
                  <div className="progress progress-primary  mb-4">
                    <div
                      className="progress-bar progress-bar-striped"
                      role="progressbar"
                      style={{ width: "35%" }}
                      aria-valuenow={35}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  <div className="progress progress-secondary  mb-4">
                    <div
                      className="progress-bar progress-bar-striped"
                      role="progressbar"
                      style={{ width: "25%" }}
                      aria-valuenow={25}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  <div className="progress progress-warning  mb-4">
                    <div
                      className="progress-bar progress-bar-striped"
                      role="progressbar"
                      style={{ width: "50%" }}
                      aria-valuenow={50}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  <div className="progress progress-danger  mb-4">
                    <div
                      className="progress-bar progress-bar-striped"
                      role="progressbar"
                      style={{ width: "40%" }}
                      aria-valuenow={40}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  <div className="progress progress-dark  mb-4">
                    <div
                      className="progress-bar progress-bar-striped"
                      role="progressbar"
                      style={{ width: "75%" }}
                      aria-valuenow={75}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  <div className="progress progress-info  mb-4">
                    <div
                      className="progress-bar progress-bar-striped"
                      role="progressbar"
                      style={{ width: "88%" }}
                      aria-valuenow={88}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
              </div>
            </section>
            {/* Progress Label End  */}
            {/* Progress Sizes Start  */}
            <section className="section">
              <div className="card">
                <div className="card-header">
                  <h4>Progress Sizes</h4>
                </div>
                <div className="card-body">
                  <p>
                    For Default progress, No size class needed. you can use
                    class <code>.progress-sm</code>
                    or
                    <code>.progress-lg</code> with <code>.progress</code> to
                    change size of your progress bar.
                  </p>
                  <div className="progress progress-success progress-sm  mb-4">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "35%" }}
                      aria-valuenow={35}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  <div className="progress progress-primary mb-4">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "25%" }}
                      aria-valuenow={25}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  <div className="progress progress-warning progress-lg  mb-4">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "25%" }}
                      aria-valuenow={25}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
              </div>
            </section>
            {/* Progress Label End  */}
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

export default Progress;
