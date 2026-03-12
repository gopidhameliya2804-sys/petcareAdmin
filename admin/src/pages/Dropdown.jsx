import React from "react";
import Sidebar from "../common/Sidebar";

function Dropdown() {
  return (
    <div>
      <div id="app">
        <Sidebar />
        <div id="main">
          <div className="page-heading">
            <div className="page-title">
              <div className="row">
                <div className="col-12 col-md-6 order-md-1 order-last">
                  <h3>Dropdown</h3>
                  <p className="text-subtitle text-muted">
                    A carousel without slide control
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
                        Dropdown
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
            <section id="basic-dropdown">
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Basic</h4>
                    </div>
                    <div className="card-content">
                      <div className="card-body">
                        <div className="btn-group mb-1">
                          <div className="dropdown">
                            <button
                              className="btn btn-primary dropdown-toggle me-1"
                              type="button"
                              id="dropdownMenuButton"
                              data-bs-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              Primary
                            </button>
                            <div
                              className="dropdown-menu"
                              aria-labelledby="dropdownMenuButton"
                            >
                              <a className="dropdown-item" href="#">
                                Option 1
                              </a>
                              <a className="dropdown-item" href="#">
                                Option 2
                              </a>
                              <a className="dropdown-item" href="#">
                                Option 3
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="btn-group mb-1">
                          <div className="dropdown">
                            <button
                              className="btn btn-secondary dropdown-toggle me-1"
                              type="button"
                              id="dropdownMenuButtonSec"
                              data-bs-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              Secondary
                            </button>
                            <div
                              className="dropdown-menu"
                              aria-labelledby="dropdownMenuButtonSec"
                            >
                              <a className="dropdown-item" href="#">
                                Option 1
                              </a>
                              <a className="dropdown-item" href="#">
                                Option 2
                              </a>
                              <a className="dropdown-item" href="#">
                                Option 3
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="btn-group mb-1">
                          <div className="dropdown">
                            <button
                              className="btn btn-success dropdown-toggle me-1"
                              type="button"
                              id="dropdownMenuButton2"
                              data-bs-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              Success
                            </button>
                            <div
                              className="dropdown-menu"
                              aria-labelledby="dropdownMenuButton2"
                            >
                              <a className="dropdown-item" href="#">
                                Option 1
                              </a>
                              <a className="dropdown-item" href="#">
                                Option 2
                              </a>
                              <a className="dropdown-item" href="#">
                                Option 3
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="btn-group mb-1">
                          <div className="dropdown">
                            <button
                              className="btn btn-info dropdown-toggle me-1"
                              type="button"
                              id="dropdownMenuButton3"
                              data-bs-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              Info
                            </button>
                            <div
                              className="dropdown-menu"
                              aria-labelledby="dropdownMenuButton3"
                            >
                              <a className="dropdown-item" href="#">
                                Option 1
                              </a>
                              <a className="dropdown-item" href="#">
                                Option 2
                              </a>
                              <a className="dropdown-item" href="#">
                                Option 3
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="btn-group mb-1">
                          <div className="dropdown">
                            <button
                              className="btn btn-danger dropdown-toggle me-1"
                              type="button"
                              id="dropdownMenuButton4"
                              data-bs-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              Danger
                            </button>
                            <div
                              className="dropdown-menu"
                              aria-labelledby="dropdownMenuButton4"
                            >
                              <a className="dropdown-item" href="#">
                                Option 1
                              </a>
                              <a className="dropdown-item" href="#">
                                Option 2
                              </a>
                              <a className="dropdown-item" href="#">
                                Option 3
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="btn-group mb-1">
                          <div className="dropdown">
                            <button
                              className="btn btn-warning dropdown-toggle me-1"
                              type="button"
                              id="dropdownMenuButton5"
                              data-bs-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              Warning
                            </button>
                            <div
                              className="dropdown-menu"
                              aria-labelledby="dropdownMenuButton5"
                            >
                              <a className="dropdown-item" href="#">
                                Option 1
                              </a>
                              <a className="dropdown-item" href="#">
                                Option 2
                              </a>
                              <a className="dropdown-item" href="#">
                                Option 3
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="btn-group mb-1">
                          <div className="dropdown">
                            <button
                              className="btn btn-dark dropdown-toggle"
                              type="button"
                              id="dropdownMenuButton7"
                              data-bs-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              Dark
                            </button>
                            <div
                              className="dropdown-menu"
                              aria-labelledby="dropdownMenuButton7"
                            >
                              <a className="dropdown-item" href="#">
                                Option 1
                              </a>
                              <a className="dropdown-item" href="#">
                                Option 2
                              </a>
                              <a className="dropdown-item" href="#">
                                Option 3
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Basic Dropdown End */}
            {/* Split Button Dropdown Starts */}
            <section id="dropdown-with-split-btn">
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Split Dropdowns</h4>
                    </div>
                    <div className="card-content">
                      <div className="card-body">
                        <p>
                          To create a split button add class{" "}
                          <code>.dropdown-toggle-split</code> with your dropdown
                          toggle class And to add divider between dropdown item
                          use class
                          <code>.doprdown-divider</code>
                        </p>
                        <div className="btn-group dropdown me-1 mb-1">
                          <button type="button" className="btn btn-primary">
                            Primary
                          </button>
                          <button
                            type="button"
                            className="btn btn-primary dropdown-toggle dropdown-toggle-split"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                            data-reference="parent"
                          >
                            <span className="sr-only">Toggle Dropdown</span>
                          </button>
                          <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">
                              Option 1
                            </a>
                            <a className="dropdown-item active" href="#">
                              Option 2
                            </a>
                            <a className="dropdown-item" href="#">
                              Option 3
                            </a>
                            <div className="dropdown-divider" />
                            <a className="dropdown-item" href="#">
                              Separated link
                            </a>
                          </div>
                        </div>
                        <div className="btn-group dropdown me-1 mb-1">
                          <button type="button" className="btn btn-secondary">
                            Secondary
                          </button>
                          <button
                            type="button"
                            className="btn btn-secondary dropdown-toggle dropdown-toggle-split"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                            data-reference="parent"
                          >
                            <span className="sr-only">Toggle Dropdown</span>
                          </button>
                          <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">
                              Option 1
                            </a>
                            <a className="dropdown-item active" href="#">
                              Option 2
                            </a>
                            <a className="dropdown-item" href="#">
                              Option 3
                            </a>
                            <div className="dropdown-divider" />
                            <a className="dropdown-item" href="#">
                              Separated link
                            </a>
                          </div>
                        </div>
                        <div className="btn-group dropdown me-1 mb-1">
                          <button type="button" className="btn btn-success">
                            Success
                          </button>
                          <button
                            type="button"
                            className="btn btn-success dropdown-toggle dropdown-toggle-split"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                            data-reference="parent"
                          >
                            <span className="sr-only">Toggle Dropdown</span>
                          </button>
                          <div className="dropdown-menu">
                            <h6 className="dropdown-header">Header</h6>
                            <a className="dropdown-item" href="#">
                              Option 2
                            </a>
                            <a className="dropdown-item" href="#">
                              Option 3
                            </a>
                            <div className="dropdown-divider" />
                            <a className="dropdown-item" href="#">
                              Separated link
                            </a>
                          </div>
                        </div>
                        <div className="btn-group dropdown me-1 mb-1">
                          <button type="button" className="btn btn-info">
                            Info
                          </button>
                          <button
                            type="button"
                            className="btn btn-info dropdown-toggle dropdown-toggle-split"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                            data-reference="parent"
                          >
                            <span className="sr-only">Toggle Dropdown</span>
                          </button>
                          <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">
                              Option 1
                            </a>
                            <a className="dropdown-item disabled" href="#">
                              Option 2
                            </a>
                            <a className="dropdown-item" href="#">
                              Option 3
                            </a>
                            <div className="dropdown-divider" />
                            <a className="dropdown-item" href="#">
                              Separated link
                            </a>
                          </div>
                        </div>
                        <div className="btn-group dropdown me-1 mb-1">
                          <button type="button" className="btn btn-danger">
                            Danger
                          </button>
                          <button
                            type="button"
                            className="btn btn-danger dropdown-toggle dropdown-toggle-split"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                            data-reference="parent"
                          >
                            <span className="sr-only">Toggle Dropdown</span>
                          </button>
                          <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">
                              Option 1
                            </a>
                            <a className="dropdown-item" href="#">
                              Option 2
                            </a>
                            <a className="dropdown-item" href="#">
                              Option 3
                            </a>
                            <div className="dropdown-divider" />
                            <a className="dropdown-item" href="#">
                              Separated link
                            </a>
                          </div>
                        </div>
                        <div className="btn-group dropdown me-1 mb-1">
                          <button type="button" className="btn btn-warning">
                            Warning
                          </button>
                          <button
                            type="button"
                            className="btn btn-warning dropdown-toggle dropdown-toggle-split"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                            data-reference="parent"
                          >
                            <span className="sr-only">Toggle Dropdown</span>
                          </button>
                          <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">
                              Option 1
                            </a>
                            <a className="dropdown-item" href="#">
                              Option 2
                            </a>
                            <a className="dropdown-item" href="#">
                              Option 3
                            </a>
                            <div className="dropdown-divider" />
                            <a className="dropdown-item" href="#">
                              Separated link
                            </a>
                          </div>
                        </div>
                        <div className="btn-group dropdown me-1 mb-1">
                          <button type="button" className="btn btn-light">
                            Light
                          </button>
                          <button
                            type="button"
                            className="btn btn-light dropdown-toggle dropdown-toggle-split"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                            data-reference="parent"
                          >
                            <span className="sr-only">Toggle Dropdown</span>
                          </button>
                          <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">
                              Option 1
                            </a>
                            <a className="dropdown-item" href="#">
                              Option 2
                            </a>
                            <a className="dropdown-item" href="#">
                              Option 3
                            </a>
                            <div className="dropdown-divider" />
                            <a className="dropdown-item" href="#">
                              Separated link
                            </a>
                          </div>
                        </div>
                        <div className="btn-group dropdown mb-1">
                          <button type="button" className="btn btn-dark">
                            Dark
                          </button>
                          <button
                            type="button"
                            className="btn btn-dark dropdown-toggle dropdown-toggle-split"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                            data-reference="parent"
                          >
                            <span className="sr-only">Toggle Dropdown</span>
                          </button>
                          <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">
                              Option 1
                            </a>
                            <a className="dropdown-item" href="#">
                              Option 2
                            </a>
                            <a className="dropdown-item" href="#">
                              Option 3
                            </a>
                            <div className="dropdown-divider" />
                            <a className="dropdown-item" href="#">
                              Separated link
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Split Button Dropdown Ends */}
            {/* Dropdown with Icon Starts */}
            <section id="dropdown-with-icon">
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">
                        Dropdown with Icons &amp; Emoji
                      </h4>
                    </div>
                    <div className="card-content">
                      <div className="card-body">
                        <p>
                          Use <code>.dropdown-item-emoji</code> within{" "}
                          <code>.dropdown-item</code> for font-size and spacing
                          of emojis.
                        </p>
                        <div className="btn-group mb-1">
                          <div className="dropdown">
                            <button
                              className="btn btn-primary dropdown-toggle me-1"
                              type="button"
                              id="dropdownMenuButtonIcon"
                              data-bs-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <i className="bi bi-error-circle me-50" /> Icon
                              Left
                            </button>
                            <div
                              className="dropdown-menu"
                              aria-labelledby="dropdownMenuButtonIcon"
                            >
                              <a className="dropdown-item" href="#">
                                <i className="bi bi-bar-chart-alt-2 me-50" />
                                Option 1
                              </a>
                              <a className="dropdown-item" href="#">
                                <i className="bi bi-bell me-50" />
                                Option 2
                              </a>
                              <a className="dropdown-item" href="#">
                                <i className="bi bi-time me-50" />
                                Option 3
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="btn-group mb-1">
                          <div className="dropdown icon-right">
                            <button
                              className="btn btn-primary dropdown-toggle me-1"
                              type="button"
                              id="dropdownMenuButtonIconRight"
                              data-bs-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              Icon Right{" "}
                              <i className="bi bi-error-circle ml-50" />
                            </button>
                            <div
                              className="dropdown-menu"
                              aria-labelledby="dropdownMenuButtonIconRight"
                            >
                              <a
                                className="dropdown-item justify-content-between"
                                href="#"
                              >
                                Option 1
                                <i className="bi bi-bar-chart-alt-2 ml-50" />
                              </a>
                              <a
                                className="dropdown-item justify-content-between"
                                href="#"
                              >
                                Option 2
                                <i className="bi bi-bell ml-50" />
                              </a>
                              <a
                                className="dropdown-item justify-content-between"
                                href="#"
                              >
                                Option 3
                                <i className="bi bi-time ml-50" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="btn-group mb-1">
                          <div className="dropdown dropdown-color-icon">
                            <button
                              className="btn btn-primary dropdown-toggle"
                              type="button"
                              id="dropdownMenuButtonEmoji"
                              data-bs-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <span className="me-50">🙂</span>Color Emoji icons
                            </button>
                            <div
                              className="dropdown-menu"
                              aria-labelledby="dropdownMenuButtonEmoji"
                            >
                              <a className="dropdown-item" href="#">
                                <span className="dropdown-item-emoji">😆</span>
                                Option 1
                              </a>
                              <a className="dropdown-item" href="#">
                                <span className="dropdown-item-emoji">😎</span>
                                Option 2{" "}
                              </a>
                              <a className="dropdown-item" href="#">
                                <span className="dropdown-item-emoji">🤩</span>
                                Option 3
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Dropdown with Icon End */}
            {/* Dropdown Direction Starts */}
            <section id="dropdown-directions">
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Directions</h4>
                    </div>
                    <div className="card-content">
                      <div className="card-body">
                        <p>
                          Add <code>.dropdown-menu-end</code> to a{" "}
                          <code>.dropdown-menu</code> to right align the
                          dropdown menu. Trigger dropdown menus at the up /
                          right / left of the elements by adding
                          <code>.dropup | .dropright | .dropleft </code> to the
                          parent element.
                        </p>
                        <div className="direction-dropdown-default mt-1">
                          <div className="btn-group me-1 mb-1">
                            <div className="dropdown">
                              <button
                                type="button"
                                className="btn btn-secondary dropdown-toggle"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                Drop bottom right
                              </button>
                              <div className="dropdown-menu dropdown-menu-end">
                                <a className="dropdown-item active" href="#">
                                  Option 1
                                </a>
                                <a className="dropdown-item" href="#">
                                  Option 2
                                </a>
                                <a className="dropdown-item" href="#">
                                  Option 3
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="btn-group dropup me-1 mb-1">
                            <button
                              type="button"
                              className="btn btn-secondary dropdown-toggle"
                              data-bs-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              Drop up
                            </button>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="#">
                                Option 1
                              </a>
                              <a className="dropdown-item disabled" href="#">
                                Option 2
                              </a>
                              <a className="dropdown-item" href="#">
                                Option 3
                              </a>
                            </div>
                          </div>
                          <div className="btn-group dropend me-1 mb-1">
                            <button
                              type="button"
                              className="btn btn-secondary dropdown-toggle"
                              data-bs-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              Drop right
                            </button>
                            <div className="dropdown-menu">
                              <h6 className="dropdown-header">Header</h6>
                              <a className="dropdown-item" href="#">
                                Option 2
                              </a>
                              <a className="dropdown-item" href="#">
                                Option 3
                              </a>
                            </div>
                          </div>
                          <div className="btn-group dropstart  mb-1">
                            <button
                              type="button"
                              className="btn btn-secondary dropdown-toggle"
                              data-bs-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              Drop left
                            </button>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="#">
                                Option 1
                              </a>
                              <a className="dropdown-item disabled" href="#">
                                Option 2
                              </a>
                              <a className="dropdown-item" href="#">
                                Option 3
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Dropdown Direction End */}
            {/* Dropdown Sizes Starts */}
            <section id="dropdown-sizes">
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Sizes</h4>
                    </div>
                    <div className="card-content">
                      <div className="card-body">
                        <p>
                          Button dropdowns work with buttons of all sizes,
                          including default and split dropdown buttons.
                        </p>
                        <div className="row">
                          <div className="col-md-6 col-sm-12">
                            <div className="btn-group me-1 mb-1">
                              <div className="dropdown">
                                <button
                                  type="button"
                                  className="btn btn-primary btn-lg dropdown-toggle"
                                  data-bs-toggle="dropdown"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                >
                                  Large
                                </button>
                                <div className="dropdown-menu">
                                  <a className="dropdown-item" href="#">
                                    Option 1
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    Option 2
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    Option 3
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="btn-group me-1 mb-1">
                              <div className="dropdown">
                                <button
                                  type="button"
                                  className="btn btn-primary dropdown-toggle"
                                  data-bs-toggle="dropdown"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                >
                                  Default
                                </button>
                                <div className="dropdown-menu">
                                  <a className="dropdown-item" href="#">
                                    Option 1
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    Option 2
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    Option 3
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="btn-group mb-1">
                              <div className="dropdown">
                                <button
                                  type="button"
                                  className="btn btn-primary btn-sm dropdown-toggle"
                                  data-bs-toggle="dropdown"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                >
                                  Small
                                </button>
                                <div className="dropdown-menu">
                                  <a className="dropdown-item" href="#">
                                    Option 1
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    Option 2
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    Option 3
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 col-sm-12">
                            <div className="btn-group dropdown me-1 mb-1">
                              <button
                                type="button"
                                className="btn btn-primary btn-lg"
                              >
                                Large
                              </button>
                              <button
                                type="button"
                                className="btn btn-primary btn-lg dropdown-toggle dropdown-toggle-split"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <span className="sr-only">Toggle Dropdown</span>
                              </button>
                              <div className="dropdown-menu">
                                <a className="dropdown-item" href="#">
                                  Option 1
                                </a>
                                <a className="dropdown-item" href="#">
                                  Option 2
                                </a>
                                <a className="dropdown-item" href="#">
                                  Option 3
                                </a>
                              </div>
                            </div>
                            <div className="btn-group dropdown me-1 mb-1">
                              <button type="button" className="btn btn-primary">
                                Default
                              </button>
                              <button
                                type="button"
                                className="btn btn-primary dropdown-toggle dropdown-toggle-split"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <span className="sr-only">Toggle Dropdown</span>
                              </button>
                              <div className="dropdown-menu">
                                <a className="dropdown-item" href="#">
                                  Option 1
                                </a>
                                <a className="dropdown-item" href="#">
                                  Option 2
                                </a>
                                <a className="dropdown-item" href="#">
                                  Option 3
                                </a>
                              </div>
                            </div>
                            <div className="btn-group dropdown mb-1">
                              <button
                                type="button"
                                className="btn btn-primary btn-sm"
                              >
                                Small
                              </button>
                              <button
                                type="button"
                                className="btn btn-primary btn-sm dropdown-toggle dropdown-toggle-split"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <span className="sr-only">Toggle Dropdown</span>
                              </button>
                              <div className="dropdown-menu">
                                <a className="dropdown-item" href="#">
                                  Option 1
                                </a>
                                <a className="dropdown-item" href="#">
                                  Option 2
                                </a>
                                <a className="dropdown-item" href="#">
                                  Option 3
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Dropdown Sizes Ends */}
            {/* Dropdown options Starts */}
            <section id="dropdown-options">
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Options</h4>
                    </div>
                    <div className="card-content">
                      <div className="card-body">
                        <p>
                          Use <code>data-offset</code> or{" "}
                          <code>data-reference</code> attributes to change the
                          location of the dropdown.
                        </p>
                        <div className="btn-group dropdown me-1 mb-1">
                          <button
                            type="button"
                            className="btn btn-secondary dropdown-toggle"
                            id="dropdownMenuOffset"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                            data-offset="5,20"
                          >
                            Offset
                          </button>
                          <div
                            className="dropdown-menu"
                            aria-labelledby="dropdownMenuOffset"
                          >
                            <a className="dropdown-item" href="#">
                              Action
                            </a>
                            <a className="dropdown-item" href="#">
                              Another action
                            </a>
                            <a className="dropdown-item" href="#">
                              Something else here
                            </a>
                          </div>
                        </div>
                        <div className="btn-group dropdown mb-1">
                          <button type="button" className="btn btn-secondary">
                            Reference
                          </button>
                          <button
                            type="button"
                            className="btn btn-secondary dropdown-toggle dropdown-toggle-split"
                            id="dropdownMenuReference"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                            data-reference="parent"
                          >
                            <span className="sr-only">Toggle Dropdown</span>
                          </button>
                          <div
                            className="dropdown-menu"
                            aria-labelledby="dropdownMenuReference"
                          >
                            <a className="dropdown-item" href="#">
                              Action
                            </a>
                            <a className="dropdown-item" href="#">
                              Another action
                            </a>
                            <a className="dropdown-item" href="#">
                              Something else here
                            </a>
                            <div className="dropdown-divider" />
                            <a className="dropdown-item" href="#">
                              Separated link
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Dropdown options Ends */}
            {/* Dropdown variations Starts */}
            <section id="dropdown-variations">
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Variations</h4>
                    </div>
                    <div className="card-content">
                      <div className="card-body">
                        <p>
                          To create a dropdown with groups you can use{" "}
                          <code>.dropdown-header</code>
                          for the header of groups and for sepration of group
                          you can use <code>.dropdown-divider</code>.
                        </p>
                        <p>
                          To create a dropdown with icons use class
                          <code>.dropdown-icon-wrapper</code> with
                          <code>.dropdown</code>.
                        </p>
                        <div className="btn-group dropup me-1 mb-1">
                          <button
                            className="btn btn-primary dropdown-toggle"
                            type="button"
                            id="dropdownMenuButton902"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            Groups
                          </button>
                          <div
                            className="dropdown-menu"
                            aria-labelledby="dropdownMenuButton902"
                          >
                            <h6 className="dropdown-header">Group 1</h6>
                            <a className="dropdown-item" href="#">
                              Option 1
                            </a>
                            <a className="dropdown-item" href="#">
                              Option 2
                            </a>
                            <div className="dropdown-divider" />
                            <h6 className="dropdown-header">Group 2</h6>
                            <a className="dropdown-item" href="#">
                              Option 1
                            </a>
                            <a className="dropdown-item" href="#">
                              Option 2
                            </a>
                            <div className="dropdown-divider" />
                            <h6 className="dropdown-header">Group 3</h6>
                            <a className="dropdown-item" href="#">
                              Option 1
                            </a>
                            <a className="dropdown-item" href="#">
                              Option 2
                            </a>
                          </div>
                        </div>
                        <div className="btn-group dropup dropdown-icon-wrapper me-1 mb-1">
                          <button type="button" className="btn btn-primary">
                            Icons
                          </button>
                          <button
                            type="button"
                            className="btn btn-primary dropdown-toggle dropdown-toggle-split"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i className="bi bi-wifi dropdown-icon" />
                          </button>
                          <div className="dropdown-menu">
                            <span className="dropdown-item">
                              <i className="bi bi-wifi-off" />
                            </span>
                            <span className="dropdown-item">
                              <i className="bi bis-volume" />
                            </span>
                            <span className="dropdown-item">
                              <i className="bi bis-volume-full" />
                            </span>
                            <span className="dropdown-item">
                              <i className="bi bi-bell" />
                            </span>
                            <span className="dropdown-item">
                              <i className="bi bi-bell-off" />
                            </span>
                            <span className="dropdown-item">
                              <i className="bi bi-phone" />
                            </span>
                          </div>
                        </div>
                        <div className="btn-group dropup mb-1">
                          <button
                            type="button"
                            className="btn btn-primary dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            Form
                          </button>
                          <div className="dropdown-menu">
                            <form className="px-2 py-2">
                              <div className="form-group">
                                <label htmlFor="exampleDropdownFormEmail1">
                                  Email address
                                </label>
                                <input
                                  type="email"
                                  className="form-control"
                                  id="exampleDropdownFormEmail1"
                                  placeholder="email"
                                />
                              </div>
                              <div className="form-group">
                                <label htmlFor="exampleDropdownFormPassword1">
                                  Password
                                </label>
                                <input
                                  type="password"
                                  className="form-control"
                                  id="exampleDropdownFormPassword1"
                                  placeholder="Password"
                                />
                              </div>
                              <div className="form-group">
                                <div className="checkbox">
                                  <input
                                    type="checkbox"
                                    className="checkbox-input"
                                    id="dropdownCheck1"
                                  />
                                  <label htmlFor="dropdownCheck1">
                                    Remember me
                                  </label>
                                </div>
                              </div>
                              <button type="submit" className="btn btn-primary">
                                Sign in
                              </button>
                            </form>
                            <div className="dropdown-divider" />
                            <a className="dropdown-item" href="#">
                              New around here? Sign up
                            </a>
                            <a className="dropdown-item" href="#">
                              Forgot password?
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Dropdown variations Ends */}
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

export default Dropdown;
