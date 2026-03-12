import React from "react";
import Sidebar from "../common/Sidebar";
import Footer from "../common/Footer";

function Input() {
  return (
    <div>
      <div id="app">
        <Sidebar />
        <div id="main">
          <div className="page-heading">
            <div className="page-title">
              <div className="row">
                <div className="col-12 col-md-6 order-md-1 order-last">
                  <h3>Input</h3>
                  <p className="text-subtitle text-muted">
                    Give textual form controls like input upgrade with custom
                    styles, sizing, focus states, and more.
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
                        Input
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
            <section className="section">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Basic Inputs</h4>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="basicInput">Basic Input</label>
                        <input
                          type="text"
                          className="form-control"
                          id="basicInput"
                          placeholder="Enter email"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="helpInputTop">
                          Input text with help
                        </label>
                        <small className="text-muted">
                          eg.<i>someone@example.com</i>
                        </small>
                        <input
                          type="text"
                          className="form-control"
                          id="helpInputTop"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="helperText">With Helper Text</label>
                        <input
                          type="text"
                          id="helperText"
                          className="form-control"
                          placeholder="Name"
                        />
                        <p>
                          <small className="text-muted">
                            Find helper text here for given textbox.
                          </small>
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="disabledInput">Disabled Input</label>
                        <input
                          type="text"
                          className="form-control"
                          id="disabledInput"
                          placeholder="Disabled Text"
                          disabled
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="disabledInput">Readonly Input</label>
                        <input
                          type="text"
                          className="form-control"
                          id="readonlyInput"
                          readOnly="readonly"
                          defaultValue="You can't update me :P"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="disabledInput">Static Text</label>
                        <p className="form-control-static" id="staticInput">
                          email@mazer.com
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Input Style start */}
            <section id="input-style">
              <div className="row">
                <div className="col-md-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Input Styles</h4>
                    </div>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-12">
                          <p>
                            To set rounded border to input box, use{" "}
                            <code>.round</code> class and to set square border
                            to input box, use <code>.sqaure</code> class
                            alongwith
                            <code>.form-control</code> class.
                          </p>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-group">
                            <label htmlFor="roundText">Rounded Input</label>
                            <input
                              type="text"
                              id="roundText"
                              className="form-control round"
                              placeholder="Rounded Input"
                            />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-group">
                            <label htmlFor="squareText">Square Input</label>
                            <input
                              type="text"
                              id="squareText"
                              className="form-control square"
                              placeholder="Square Input"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Input Style end */}
            {/* Horizontal Input start */}
            <section id="horizontal-input">
              <div className="row">
                <div className="col-md-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Horizontal Input</h4>
                    </div>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-12">
                          <p>
                            To make label in center of form-control, use{" "}
                            <code>.col-form-label</code>
                            class with
                            <code>&lt;label&gt;</code> element. This is default
                            bootstrap class.
                          </p>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group row align-items-center">
                            <div className="col-lg-2 col-3">
                              <label className="col-form-label">
                                First Name
                              </label>
                            </div>
                            <div className="col-lg-10 col-9">
                              <input
                                type="text"
                                id="first-name"
                                className="form-control"
                                name="fname"
                                placeholder="First Name"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group row align-items-center">
                            <div className="col-lg-2 col-3">
                              <label className="col-form-label">
                                Last Name
                              </label>
                            </div>
                            <div className="col-lg-10 col-9">
                              <input
                                type="text"
                                id="last-name"
                                className="form-control"
                                name="fname"
                                placeholder="Last Name"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Horizontal Input end */}
            {/* Basic File Browser start */}
            <section id="input-file-browser">
              <div className="row">
                <div className="col-md-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">File Input</h4>
                    </div>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-lg-6 col-md-12">
                          <div className="mb-3">
                            <label htmlFor="formFile" className="form-label">
                              Default file input example
                            </label>
                            <input
                              className="form-control"
                              type="file"
                              id="formFile"
                            />
                          </div>
                          <div className="mb-3">
                            <label
                              htmlFor="formFileMultiple"
                              className="form-label"
                            >
                              Multiple files input example
                            </label>
                            <input
                              className="form-control"
                              type="file"
                              id="formFileMultiple"
                              multiple
                            />
                          </div>
                          <div className="mb-3">
                            <label
                              htmlFor="formFileDisabled"
                              className="form-label"
                            >
                              Disabled file input example
                            </label>
                            <input
                              className="form-control"
                              type="file"
                              id="formFileDisabled"
                              disabled
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                          <div className="mb-3">
                            <label htmlFor="formFileSm" className="form-label">
                              Small file input example
                            </label>
                            <input
                              className="form-control form-control-sm"
                              id="formFileSm"
                              type="file"
                            />
                          </div>
                          <div>
                            <label htmlFor="formFileLg" className="form-label">
                              Large file input example
                            </label>
                            <input
                              className="form-control form-control-lg"
                              id="formFileLg"
                              type="file"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Basic File Browser end */}
            {/* Input with Icons start */}
            <section id="input-with-icons">
              <div className="row match-height">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Input with Icons</h4>
                    </div>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-12">
                          <p>
                            For Input Box with icon use{" "}
                            <code>.position-relative</code> class with
                            <code>.form-group</code> and use class{" "}
                            <code>.has-icon-left</code> or
                            <code>.has-icon-right</code> class for icon on left
                            side.
                          </p>
                        </div>
                        <div className="col-sm-6">
                          <h6>Left Icon</h6>
                          <div className="form-group position-relative has-icon-left">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Input with icon left"
                            />
                            <div className="form-control-icon">
                              <i className="bi bi-person" />
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <h6>Right Icon</h6>
                          <div className="form-group position-relative has-icon-right">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Icon Right, Default Input"
                            />
                            <div className="form-control-icon">
                              <i className="bi bi-bookmarks" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Input with Icons end */}
            {/* Input Sizing start */}
            <section id="input-sizing">
              <div className="row match-height">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Control Sizing Option</h4>
                    </div>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-12">
                          <p>
                            For different sizes of Input, Use classes like
                            <code>.form-control-lg</code> &amp;
                            <code>.form-control-sm</code> for Large, Small input
                            box.
                          </p>
                        </div>
                        <div className="col-sm-4">
                          <h6>Large</h6>
                          <input
                            className="form-control form-control-lg"
                            type="text"
                            placeholder="Large Input"
                          />
                        </div>
                        <div className="col-sm-4">
                          <h6>Default</h6>
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Default Input"
                          />
                        </div>
                        <div className="col-sm-4">
                          <h6>Small</h6>
                          <input
                            className="form-control form-control-sm"
                            type="text"
                            placeholder="Small Input"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Input Sizing end */}
            {/* validations start */}
            <section id="input-validation">
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Input Validation States</h4>
                    </div>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-12">
                          <p>
                            You can indicate invalid and valid form fields with
                            <code>.is-invalid</code> and
                            <code>.is-valid</code>. Note that{" "}
                            <code>.invalid-feedback</code> is also supported
                            with these classes.
                          </p>
                        </div>
                        <div className="col-sm-6">
                          <label htmlFor="valid-state">Valid State</label>
                          <input
                            type="text"
                            className="form-control is-valid"
                            id="valid-state"
                            placeholder="Valid"
                            defaultValue="Valid"
                            required
                          />
                          <div className="valid-feedback">
                            <i className="bx bx-radio-circle" />
                            This is valid state.
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <label htmlFor="invalid-state">Invalid State</label>
                          <input
                            type="text"
                            className="form-control is-invalid"
                            id="invalid-state"
                            placeholder="Invalid"
                            defaultValue="Invalid"
                            required
                          />
                          <div className="invalid-feedback">
                            <i className="bx bx-radio-circle" />
                            This is invalid state.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* validations end */}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Input;
