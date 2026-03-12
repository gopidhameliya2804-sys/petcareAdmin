import React from "react";
import Sidebar from "../common/Sidebar";

function Checkbox() {
  return (
    <div>
      <div id="app">
        <Sidebar />
        <div id="main">
          <div className="page-heading">
            <div className="page-title">
              <div className="row">
                <div className="col-12 col-md-6 order-md-1 order-last">
                  <h3>Checkbox</h3>
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
                        Checkbox
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
            <section id="basic-checkbox">
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Basic Checkboxes</h4>
                    </div>
                    <div className="card-content">
                      <div className="card-body">
                        <ul className="list-unstyled mb-0">
                          <li className="d-inline-block me-2 mb-1">
                            <div className="form-check">
                              <div className="checkbox">
                                <input
                                  type="checkbox"
                                  id="checkbox1"
                                  className="form-check-input"
                                  defaultChecked
                                />
                                <label htmlFor="checkbox1">Touch me!</label>
                              </div>
                            </div>
                          </li>
                          <li className="d-inline-block me-2 mb-1">
                            <div className="form-check">
                              <div className="checkbox">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  id="checkbox2"
                                />
                                <label htmlFor="checkbox2">Touch me!</label>
                              </div>
                            </div>
                          </li>
                          <li className="d-inline-block me-2 mb-1">
                            <div className="form-check">
                              <div className="checkbox">
                                <input
                                  type="checkbox"
                                  id="checkbox3"
                                  className="form-check-input"
                                  disabled
                                  defaultChecked
                                />
                                <label htmlFor="checkbox3">
                                  Disabled Checked Checkbox
                                </label>
                              </div>
                            </div>
                          </li>
                          <li className="d-inline-block mb-1">
                            <div className="form-check">
                              <div className="checkbox">
                                <input
                                  type="checkbox"
                                  id="checkbox4"
                                  className="form-check-input"
                                  disabled
                                />
                                <label htmlFor="checkbox4">
                                  Disabled Unchecked Checkbox
                                </label>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Basic Checkbox end */}
            {/* Custom Checkbox Colored start */}
            <section id="custom-checkbox-colored">
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Custom Colored Checkboxes</h4>
                    </div>
                    <div className="card-content">
                      <div className="card-body">
                        <p>
                          To change the color of the Custom CheckBoxes, use the
                          <code>
                            .bg-{"{"}colorName{"}"}
                          </code>{" "}
                          with
                          <code>.form-check-input</code> class.
                        </p>
                        <ul className="list-unstyled mb-0">
                          <li className="d-inline-block me-2 mb-1">
                            <div className="form-check">
                              <div className="custom-control custom-checkbox">
                                <input
                                  type="checkbox"
                                  className="form-check-input form-check-primary"
                                  defaultChecked
                                  name="customCheck"
                                  id="customColorCheck1"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="customColorCheck1"
                                >
                                  Primary
                                </label>
                              </div>
                            </div>
                          </li>
                          <li className="d-inline-block me-2 mb-1">
                            <div className="form-check">
                              <div className="custom-control custom-checkbox">
                                <input
                                  type="checkbox"
                                  className="form-check-input form-check-secondary"
                                  defaultChecked
                                  name="customCheck"
                                  id="customColorCheck2"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="customColorCheck2"
                                >
                                  Secondary
                                </label>
                              </div>
                            </div>
                          </li>
                          <li className="d-inline-block me-2 mb-1">
                            <div className="form-check">
                              <div className="custom-control custom-checkbox">
                                <input
                                  type="checkbox"
                                  className="form-check-input form-check-success"
                                  defaultChecked
                                  name="customCheck"
                                  id="customColorCheck3"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="customColorCheck3"
                                >
                                  Success
                                </label>
                              </div>
                            </div>
                          </li>
                          <li className="d-inline-block me-2 mb-1">
                            <div className="form-check">
                              <div className="custom-control custom-checkbox">
                                <input
                                  type="checkbox"
                                  className="form-check-input form-check-danger"
                                  defaultChecked
                                  name="customCheck"
                                  id="customColorCheck4"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="customColorCheck4"
                                >
                                  Danger
                                </label>
                              </div>
                            </div>
                          </li>
                          <li className="d-inline-block me-2 mb-1">
                            <div className="form-check">
                              <div className="custom-control custom-checkbox">
                                <input
                                  type="checkbox"
                                  className="form-check-input form-check-info"
                                  defaultChecked
                                  name="customCheck"
                                  id="customColorCheck5"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="customColorCheck5"
                                >
                                  Info
                                </label>
                              </div>
                            </div>
                          </li>
                          <li className="d-inline-block mb-1">
                            <div className="form-check">
                              <div className="custom-control custom-checkbox">
                                <input
                                  type="checkbox"
                                  className="form-check-input form-check-warning"
                                  defaultChecked
                                  name="customCheck"
                                  id="customColorCheck6"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="customColorCheck6"
                                >
                                  Warning
                                </label>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Custom Checkbox end */}
            {/* Checkbox Glow start */}
            <section id="checkbox-glow">
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Checkboxes Glow</h4>
                    </div>
                    <div className="card-content">
                      <div className="card-body">
                        <p>
                          Use class <code>.form-check-glow</code> class with
                          <code>
                            .form-check-input.form-check-{"{"}colorName{"}"}
                          </code>
                          for glow effect to Checkboxes. Glow shadow color will
                          be changed according to Colored Checkboxes.
                        </p>
                        <ul className="list-unstyled mb-0">
                          <li className="d-inline-block me-2 mb-1">
                            <div className="form-check">
                              <div className="custom-control custom-checkbox">
                                <input
                                  type="checkbox"
                                  className="form-check-input form-check-primary form-check-glow"
                                  defaultChecked
                                  name="customCheck"
                                  id="customColorCheck1"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="customColorCheck1"
                                >
                                  Primary
                                </label>
                              </div>
                            </div>
                          </li>
                          <li className="d-inline-block me-2 mb-1">
                            <div className="form-check">
                              <div className="custom-control custom-checkbox">
                                <input
                                  type="checkbox"
                                  className="form-check-input form-check-secondary form-check-glow"
                                  defaultChecked
                                  name="customCheck"
                                  id="customColorCheck2"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="customColorCheck2"
                                >
                                  Secondary
                                </label>
                              </div>
                            </div>
                          </li>
                          <li className="d-inline-block me-2 mb-1">
                            <div className="form-check">
                              <div className="custom-control custom-checkbox">
                                <input
                                  type="checkbox"
                                  className="form-check-input form-check-success form-check-glow"
                                  defaultChecked
                                  name="customCheck"
                                  id="customColorCheck3"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="customColorCheck3"
                                >
                                  Success
                                </label>
                              </div>
                            </div>
                          </li>
                          <li className="d-inline-block me-2 mb-1">
                            <div className="form-check">
                              <div className="custom-control custom-checkbox">
                                <input
                                  type="checkbox"
                                  className="form-check-input form-check-danger form-check-glow"
                                  defaultChecked
                                  name="customCheck"
                                  id="customColorCheck4"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="customColorCheck4"
                                >
                                  Danger
                                </label>
                              </div>
                            </div>
                          </li>
                          <li className="d-inline-block me-2 mb-1">
                            <div className="form-check">
                              <div className="custom-control custom-checkbox">
                                <input
                                  type="checkbox"
                                  className="form-check-input form-check-info form-check-glow"
                                  defaultChecked
                                  name="customCheck"
                                  id="customColorCheck5"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="customColorCheck5"
                                >
                                  Info
                                </label>
                              </div>
                            </div>
                          </li>
                          <li className="d-inline-block mb-1">
                            <div className="form-check">
                              <div className="custom-control custom-checkbox">
                                <input
                                  type="checkbox"
                                  className="form-check-input form-check-warning form-check-glow"
                                  defaultChecked
                                  name="customCheck"
                                  id="customColorCheck6"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="customColorCheck6"
                                >
                                  Warning
                                </label>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Checkbox Glow end */}
            {/* Checkbox Sizes start */}
            <section id="checkbox-sizes">
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Checkboxes Sizes</h4>
                    </div>
                    <div className="card-content">
                      <div className="card-body">
                        <p>
                          To add a checkBox with different sizes, we have the
                          <code>.form-check-sm</code> class for small
                          Checkboxes. Add it alongwith <code>.form-check</code>{" "}
                          class.
                        </p>
                        <ul className="list-unstyled mb-0">
                          <li className="d-inline-block mb-1 me-2">
                            <div className="form-check form-check-sm">
                              <div className="custom-control custom-checkbox">
                                <input
                                  type="checkbox"
                                  className="form-check-input form-check-primary form-check-glow"
                                  defaultChecked
                                  name="customCheck"
                                  id="customColorCheck6"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="customColorCheck6"
                                >
                                  Small
                                </label>
                              </div>
                            </div>
                          </li>
                          <li className="d-inline-block mb-1 me-2">
                            <div className="form-check">
                              <input
                                type="checkbox"
                                className="form-check-input form-check-primary form-check-glow"
                                defaultChecked
                                name="customCheck"
                                id="customColorCheck6"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="customColorCheck6"
                              >
                                Default
                              </label>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Checkbox Sizes end */}
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

export default Checkbox;
