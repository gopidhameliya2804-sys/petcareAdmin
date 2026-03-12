import React from "react";
import Sidebar from "../common/Sidebar";

function Radio() {
  return (
    <div>
      <div id="app">
        <Sidebar />
        <div id="main">
          <div className="page-heading">
            <div className="page-title">
              <div className="row">
                <div className="col-12 col-md-6 order-md-1 order-last">
                  <h3>Radio</h3>
                  <p className="text-subtitle text-muted">
                    Choose one from the list with checkbox
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
                        Radio
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
                      <h4 className="card-title">Default Radio</h4>
                    </div>
                    <div className="card-body">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault1"
                        >
                          Default radio
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault2"
                          defaultChecked
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault2"
                        >
                          Default checked radio
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDisabled"
                          id="flexRadioDisabled"
                          disabled
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDisabled"
                        >
                          Disabled radio
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDisabled"
                          id="flexRadioCheckedDisabled"
                          defaultChecked
                          disabled
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioCheckedDisabled"
                        >
                          Disabled checked radio
                        </label>
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
                      <h4 className="card-title">Colors</h4>
                    </div>
                    <div className="card-body">
                      <p>
                        Use class{" "}
                        <code>
                          .form-check-{"{"}color{"}"}
                        </code>{" "}
                        with <code>.form-check</code> to change radio color
                      </p>
                      <div className="form-check form-check-primary">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="Primary"
                          id="Primary"
                          defaultChecked
                        />
                        <label className="form-check-label" htmlFor="Primary">
                          Primary
                        </label>
                      </div>
                      <div className="form-check form-check-secondary">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="Secondary"
                          id="Secondary"
                          defaultChecked
                        />
                        <label className="form-check-label" htmlFor="Secondary">
                          Secondary
                        </label>
                      </div>
                      <div className="form-check form-check-warning">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="Warning"
                          id="Warning"
                          defaultChecked
                        />
                        <label className="form-check-label" htmlFor="Warning">
                          Warning
                        </label>
                      </div>
                      <div className="form-check form-check-danger">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="Danger"
                          id="Danger"
                          defaultChecked
                        />
                        <label className="form-check-label" htmlFor="Danger">
                          Danger
                        </label>
                      </div>
                      <div className="form-check form-check-success">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="Success"
                          id="Success"
                          defaultChecked
                        />
                        <label className="form-check-label" htmlFor="Success">
                          Success
                        </label>
                      </div>
                      <div className="form-check form-check-dark">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="Dark"
                          id="Dark"
                          defaultChecked
                        />
                        <label className="form-check-label" htmlFor="Dark">
                          Dark
                        </label>
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
                      <h4 className="card-title">Switches</h4>
                    </div>
                    <div className="card-body">
                      <p>
                        A switch has the markup of a custom checkbox but uses
                        the
                        <code>.form-switch</code> class to render a toggle
                        switch. Switches also support the disabled attribute.
                      </p>
                      <div className="form-check form-switch">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="flexSwitchCheckDefault"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexSwitchCheckDefault"
                        >
                          Default switch checkbox input
                        </label>
                      </div>
                      <div className="form-check form-switch">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="flexSwitchCheckChecked"
                          defaultChecked
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexSwitchCheckChecked"
                        >
                          Checked switch checkbox input
                        </label>
                      </div>
                      <div className="form-check form-switch">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="flexSwitchCheckDisabled"
                          disabled
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexSwitchCheckDisabled"
                        >
                          Disabled switch checkbox input
                        </label>
                      </div>
                      <div className="form-check form-switch">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="flexSwitchCheckCheckedDisabled"
                          defaultChecked
                          disabled
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexSwitchCheckCheckedDisabled"
                        >
                          Disabled checked switch checkbox input
                        </label>
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
                      <h4 className="card-title">With Buttons</h4>
                    </div>
                    <div className="card-body">
                      <p>
                        A switch has the markup of a custom checkbox but uses
                        the
                        <code>.form-switch</code> class to render a toggle
                        switch. Switches also support the disabled attribute.
                      </p>
                      <input
                        type="radio"
                        className="btn-check"
                        name="options-outlined"
                        id="success-outlined"
                        autoComplete="off"
                        defaultChecked
                      />
                      <label
                        className="btn btn-outline-success"
                        htmlFor="success-outlined"
                      >
                        Checked success radio
                      </label>
                      <input
                        type="radio"
                        className="btn-check"
                        name="options-outlined"
                        id="danger-outlined"
                        autoComplete="off"
                      />
                      <label
                        className="btn btn-outline-danger"
                        htmlFor="danger-outlined"
                      >
                        Danger radio
                      </label>
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

export default Radio;
