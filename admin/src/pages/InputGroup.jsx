import React from "react";
import Sidebar from "../common/Sidebar";

function InputGroup() {
  return (
    <div>
      <div id="app">
       <Sidebar />
        <div id="main">
          <div className="page-heading">
            <div className="page-title">
              <div className="row">
                <div className="col-12 col-md-6 order-md-1 order-last">
                  <h3>Input Group</h3>
                  <p className="text-subtitle text-muted">
                    A group for input to display information in before or after
                    input
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
                        Input Group
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
            <section id="basic-input-groups">
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Basic Input Groups</h4>
                    </div>
                    <div className="card-content">
                      <div className="card-body">
                        <p>
                          Add span with <code>.input-group-text</code> class{" "}
                          <b>before</b>
                          <code>&lt;input&gt;</code>
                          for input-group-prepend and add span with{" "}
                          <code>.input-group-text</code>
                          class
                          <b>after</b>
                          <code>&lt;input&gt;</code> for input-group-append.
                        </p>
                        <div className="row">
                          <div className="col-lg-4 mb-1">
                            <div className="input-group mb-3">
                              <span
                                className="input-group-text"
                                id="basic-addon1"
                              >
                                @
                              </span>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Addon to left"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                              />
                            </div>
                          </div>
                          <div className="col-lg-4 mb-1">
                            <div className="input-group mb-3">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Addon to right"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                              />
                              <span
                                className="input-group-text"
                                id="basic-addon2"
                              >
                                @example.com
                              </span>
                            </div>
                          </div>
                          <div className="col-lg-4 mb-1">
                            <div className="input-group mb-3">
                              <span className="input-group-text">$</span>
                              <input
                                type="text"
                                className="form-control"
                                aria-label="Amount (to the nearest dollar)"
                                placeholder="Addon on both side"
                              />
                              <span className="input-group-text">.00</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Basic Inputs Groups end */}
            {/* Multiple Inputs start */}
            <section id="multiple-inputs">
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Multiple Inputs</h4>
                    </div>
                    <div className="card-content">
                      <div className="card-body">
                        <p>
                          While multiple <code>&lt;input&gt;</code>s are
                          supported visually, validation styles are only
                          available for input groups with a single{" "}
                          <code>&lt;input&gt;</code>.
                        </p>
                        <div className="row">
                          <div className="col-12">
                            <fieldset>
                              <div className="input-group">
                                <div className="input-group-prepend">
                                  <span className="input-group-text">
                                    First and last name
                                  </span>
                                </div>
                                <input
                                  type="text"
                                  aria-label="First name"
                                  className="form-control"
                                  placeholder="First Name"
                                />
                                <input
                                  type="text"
                                  aria-label="Last name"
                                  className="form-control"
                                  placeholder="Last Name"
                                />
                              </div>
                            </fieldset>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Multiple Inputs end */}
            {/* Multiple addons start */}
            <section id="multiple-addons">
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Multiple Addons</h4>
                    </div>
                    <div className="card-content">
                      <div className="card-body">
                        <p>
                          Multiple add-ons are supported and can be mixed with
                          checkbox and radio input versions.
                        </p>
                        <div className="row">
                          <div className="col-sm-6 mb-1">
                            <div className="input-group mb-3">
                              <span className="input-group-text">$</span>
                              <span className="input-group-text">0.00</span>
                              <input
                                type="text"
                                className="form-control"
                                aria-label="Dollar amount (with dot and two decimal places)"
                              />
                            </div>
                          </div>
                          <div className="col-sm-6 mb-1">
                            <div className="input-group">
                              <input
                                type="text"
                                className="form-control"
                                aria-label="Dollar amount (with dot and two decimal places)"
                              />
                              <span className="input-group-text">$</span>
                              <span className="input-group-text">0.00</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Multiple addons end */}
            {/* Inputs Group Checkbox and Radio Buttons end */}
            <section id="input-group-checkbox-radio">
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">
                        Input Groups with Checkboxes and Radios
                      </h4>
                    </div>
                    <div className="card-content">
                      <div className="card-body">
                        <p>
                          Input Groups can use with checkboxes and radio buttons
                          also. For it add code for
                          <code>.checkbox</code> class and <code>.radio</code>{" "}
                          class respectively.
                        </p>
                        <div className="row">
                          <div className="col-sm-6 mb-1">
                            <div className="input-group mb-3">
                              <div className="input-group-text">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  defaultValue
                                  aria-label="Checkbox for following text input"
                                />
                              </div>
                              <input
                                type="text"
                                className="form-control"
                                aria-label="Text input with checkbox"
                              />
                            </div>
                          </div>
                          <div className="col-sm-6 mb-1">
                            <div className="input-group">
                              <div className="input-group-text">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  defaultValue
                                  aria-label="Radio button for following text input"
                                />
                              </div>
                              <input
                                type="text"
                                className="form-control"
                                aria-label="Text input with radio button"
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
            {/* Inputs Group Checkbox and Radio Buttons end */}
            {/* Inputs Group Sizes */}
            <section id="input-group-size">
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">
                        Input Groups with different sizes
                      </h4>
                    </div>
                    <div className="card-content">
                      <div className="card-body">
                        <p>
                          Add{" "}
                          <code>
                            .input-group-{"{"}lg/sm{"}"}
                          </code>{" "}
                          class to <code>.input-group</code> for Large/Small
                          addon/prepend.
                        </p>
                        <div className="row">
                          <div className="col-sm-4 mb-1">
                            <div className="input-group input-group-sm mb-3">
                              <span
                                className="input-group-text"
                                id="inputGroup-sizing-sm"
                              >
                                Small
                              </span>
                              <input
                                type="text"
                                className="form-control"
                                aria-label="Sizing example input"
                                aria-describedby="inputGroup-sizing-sm"
                              />
                            </div>
                          </div>
                          <div className="col-sm-4 mb-1">
                            <div className="input-group mb-3">
                              <span
                                className="input-group-text"
                                id="inputGroup-sizing-default"
                              >
                                Default
                              </span>
                              <input
                                type="text"
                                className="form-control"
                                aria-label="Sizing example input"
                                aria-describedby="inputGroup-sizing-default"
                              />
                            </div>
                          </div>
                          <div className="col-sm-4 mb-1">
                            <div className="input-group input-group-lg">
                              <span
                                className="input-group-text"
                                id="inputGroup-sizing-lg"
                              >
                                Large
                              </span>
                              <input
                                type="text"
                                className="form-control"
                                aria-label="Sizing example input"
                                aria-describedby="inputGroup-sizing-lg"
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
            {/* Inputs Group Sizes end */}
            {/* Inputs Group with Buttons */}
            <section id="input-group-buttons">
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Input Groups with Buttons</h4>
                    </div>
                    <div className="card-content">
                      <div className="card-body">
                        <p>
                          Add <code>&lt;button&gt;</code> before or after
                          <code>&lt;input&gt;</code> tag
                        </p>
                        <div className="row">
                          <div className="col-md-6 mb-1">
                            <div className="input-group mb-3">
                              <button
                                className="btn btn-primary"
                                type="button"
                                id="button-addon1"
                              >
                                Button
                              </button>
                              <input
                                type="text"
                                className="form-control"
                                placeholder
                                aria-label="Example text with button addon"
                                aria-describedby="button-addon1"
                              />
                            </div>
                          </div>
                          <div className="col-md-6 mb-1">
                            <div className="input-group mb-3">
                              <span
                                className="input-group-text"
                                id="basic-addon1"
                              >
                                <i className="bi bi-search" />
                              </span>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Recipient's username"
                                aria-label="Recipient's username"
                                aria-describedby="button-addon2"
                              />
                              <button
                                className="btn btn-outline-secondary"
                                type="button"
                                id="button-addon2"
                              >
                                Button
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Inputs Group with Buttons end */}
            {/* Inputs Group with Dropdown */}
            <section id="input-group-dropdown">
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Input Groups with Dropdown</h4>
                    </div>
                    <div className="card-content">
                      <div className="card-body">
                        <p>
                          Add <code>&lt;button&gt;</code> with{" "}
                          <code>.dropdown-toggle</code> class and add
                          dropdown-menu after it to get input group with
                          dropdown.
                        </p>
                        <div className="row">
                          <div className="col-md-6 mb-1">
                            <div className="input-group mb-3">
                              <button
                                className="btn btn-primary dropdown-toggle"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                Dropdown
                              </button>
                              <ul className="dropdown-menu">
                                <li>
                                  <a className="dropdown-item" href="#">
                                    Action
                                  </a>
                                </li>
                                <li>
                                  <a className="dropdown-item" href="#">
                                    Another action
                                  </a>
                                </li>
                                <li>
                                  <a className="dropdown-item" href="#">
                                    Something else here
                                  </a>
                                </li>
                                <li>
                                  <hr className="dropdown-divider" />
                                </li>
                                <li>
                                  <a className="dropdown-item" href="#">
                                    Separated link
                                  </a>
                                </li>
                              </ul>
                              <input
                                type="text"
                                className="form-control"
                                aria-label="Text input with dropdown button"
                              />
                            </div>
                          </div>
                          <div className="col-md-6 mb-1">
                            <div className="input-group">
                              <button
                                className="btn btn-outline-secondary dropdown-toggle"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                Dropdown
                              </button>
                              <ul className="dropdown-menu">
                                <li>
                                  <a className="dropdown-item" href="#">
                                    Action before
                                  </a>
                                </li>
                                <li>
                                  <a className="dropdown-item" href="#">
                                    Another action before
                                  </a>
                                </li>
                                <li>
                                  <a className="dropdown-item" href="#">
                                    Something else here
                                  </a>
                                </li>
                                <li>
                                  <hr className="dropdown-divider" />
                                </li>
                                <li>
                                  <a className="dropdown-item" href="#">
                                    Separated link
                                  </a>
                                </li>
                              </ul>
                              <input
                                type="text"
                                className="form-control"
                                aria-label="Text input with 2 dropdown buttons"
                              />
                              <button
                                className="btn btn-outline-secondary dropdown-toggle"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                Dropdown
                              </button>
                              <ul className="dropdown-menu dropdown-menu-end">
                                <li>
                                  <a className="dropdown-item" href="#">
                                    Action
                                  </a>
                                </li>
                                <li>
                                  <a className="dropdown-item" href="#">
                                    Another action
                                  </a>
                                </li>
                                <li>
                                  <a className="dropdown-item" href="#">
                                    Something else here
                                  </a>
                                </li>
                                <li>
                                  <hr className="dropdown-divider" />
                                </li>
                                <li>
                                  <a className="dropdown-item" href="#">
                                    Separated link
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Inputs Group with Dropdown end */}
            {/* Custom file input start */}
            <section id="custom-file-input">
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Custom file input</h4>
                    </div>
                    <div className="card-content">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-md-6 mb-1">
                            <div className="input-group mb-3">
                              <div className="input-group mb-3">
                                <label
                                  className="input-group-text"
                                  htmlFor="inputGroupFile01"
                                >
                                  <i className="bi bi-upload" />
                                </label>
                                <input
                                  type="file"
                                  className="form-control"
                                  id="inputGroupFile01"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 mb-1">
                            <fieldset>
                              <div className="input-group">
                                <input
                                  type="file"
                                  className="form-control"
                                  id="inputGroupFile04"
                                  aria-describedby="inputGroupFileAddon04"
                                  aria-label="Upload"
                                />
                                <button
                                  className="btn btn-primary"
                                  type="button"
                                  id="inputGroupFileAddon04"
                                >
                                  Upload
                                </button>
                              </div>
                            </fieldset>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Custom file input end */}
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

export default InputGroup;
