import React from "react";
import Sidebar from "../common/Sidebar";
import MultipleChoicesSection from "../common/MultipleChoicesSection";

function Select() {
  return (
    <div>
      <div id="app">
        <Sidebar />
        <div id="main">
          <div className="page-heading">
            <div className="page-title">
              <div className="row">
                <div className="col-12 col-md-6 order-md-1 order-last">
                  <h3>Select</h3>
                  <p className="text-subtitle text-muted">
                    Customize the native «select» with custom CSS that changes
                    the element’s initial appearance..
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
                        Select
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
            <section className="bootstrap-select">
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Bootstrap Select</h4>
                    </div>
                    <div className="card-content">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-md-6 mb-4">
                            <h6>Basic Select</h6>
                            <p>
                              Use <code>.form-select</code> class for basic
                              select control.
                            </p>
                            <fieldset className="form-group">
                              <select className="form-select" id="basicSelect">
                                <option>IT</option>
                                <option>Blade Runner</option>
                                <option>Thor Ragnarok</option>
                              </select>
                            </fieldset>
                          </div>
                          <div className="col-md-6 mb-4">
                            <h6>Disabled Select</h6>
                            <p>
                              Use <code>disabled</code> attribute for disabled
                              select control.
                            </p>
                            <fieldset className="form-group">
                              <select
                                className="form-select"
                                disabled="disabled"
                                id="disabledSelect"
                              >
                                <option>Green</option>
                                <option>Red</option>
                                <option>Blue</option>
                              </select>
                            </fieldset>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Bootstrap Select end */}
            {/* Input Group Select start */}
            <section className="input-group-select">
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Input Group Select</h4>
                    </div>
                    <div className="card-content">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-md-6 mb-4">
                            <h6>Basic Select with Input Group</h6>
                            <div className="input-group mb-3">
                              <label
                                className="input-group-text"
                                htmlFor="inputGroupSelect01"
                              >
                                Options
                              </label>
                              <select
                                className="form-select"
                                id="inputGroupSelect01"
                              >
                                <option selected>Choose...</option>
                                <option value={1}>One</option>
                                <option value={2}>Two</option>
                                <option value={3}>Three</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-md-6 mb-4">
                            <h6>Input group append</h6>
                            <div className="input-group mb-3">
                              <select
                                className="form-select"
                                id="inputGroupSelect01"
                              >
                                <option selected>Choose...</option>
                                <option value={1}>One</option>
                                <option value={2}>Two</option>
                                <option value={3}>Three</option>
                              </select>
                              <label
                                className="input-group-text"
                                htmlFor="inputGroupSelect01"
                              >
                                Options
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Bootstrap Select end */}
            {/* Basic choices start */}
            <section className="basic-choices">
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Choices</h4>
                    </div>
                    <div className="card-content">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-md-12">
                            <div className="alert alert-light-primary">
                              <a
                                href="https://choices.org/getting-started/installation"
                                target="_blank"
                              >
                                Click here
                              </a>{" "}
                              for more information
                            </div>
                          </div>
                          <div className="col-md-6 mb-4">
                            <h6>Basic Choices</h6>
                            <p>
                              Use <code>.choices</code> class for basic choices
                              control.
                            </p>
                            <div className="form-group">
                              <select className="choices form-select">
                                <option value="square">Square</option>
                                <option value="rectangle">Rectangle</option>
                                <option value="rombo">Rombo</option>
                                <option value="romboid">Romboid</option>
                                <option value="trapeze">Trapeze</option>
                                <option value="traible">Triangle</option>
                                <option value="polygon">Polygon</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-md-6 mb-4">
                            <h6>Single Select with Label</h6>
                            <p>
                              Use <code>optgroup</code> attribute for basic
                              choices with Label control.
                            </p>
                            <div className="form-group">
                              <select className="choices form-select">
                                <optgroup label="Figures">
                                  <option value="romboid">Romboid</option>
                                  <option value="trapeze">Trapeze</option>
                                  <option value="triangle">Triangle</option>
                                  <option value="polygon">Polygon</option>
                                </optgroup>
                                <optgroup label="Colors">
                                  <option value="red">Red</option>
                                  <option value="green">Green</option>
                                  <option value="blue">Blue</option>
                                  <option value="purple">Purple</option>
                                </optgroup>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Basic choices end */}
            {/* Multiple choices start */}
            {/* <section className="multiple-choices">
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Multiple choices</h4>
                    </div>
                    <div className="card-content">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-md-6 mb-4">
                            <h6>Basic Multiple choices</h6>
                            <p>
                              Use <code>.choices</code> class for basic choices
                              control. Use
                              <code>multiple="multiple"</code>
                              attribute for multiple select box.
                            </p>
                            <div className="form-group">
                              <select
                                className="choices form-select"
                                multiple="multiple"
                              >
                                <option value="square">Square</option>
                                <option value="rectangle" selected>
                                  Rectangle
                                </option>
                                <option value="rombo">Rombo</option>
                                <option value="romboid">Romboid</option>
                                <option value="trapeze">Trapeze</option>
                                <option value="traible" selected>
                                  Triangle
                                </option>
                                <option value="polygon">Polygon</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-md-6 mb-4">
                            <h6>Multiple Select with Label</h6>
                            <p>
                              Use <code>optgroup</code> attribute for multiple
                              select box with Label control.
                            </p>
                            <div className="form-group">
                              <select
                                className="choices form-select"
                                multiple="multiple"
                              >
                                <optgroup label="Figures">
                                  <option value="romboid">Romboid</option>
                                  <option value="trapeze" selected>
                                    Trapeze
                                  </option>
                                  <option value="triangle">Triangle</option>
                                  <option value="polygon">Polygon</option>
                                </optgroup>
                                <optgroup label="Colors">
                                  <option value="red">Red</option>
                                  <option value="green">Green</option>
                                  <option value="blue" selected>
                                    Blue
                                  </option>
                                  <option value="purple">Purple</option>
                                </optgroup>
                              </select>
                            </div>
                          </div>
                          <div className="col-md-6 mb-4">
                            <h6>Multiple Select with Remove Button</h6>
                            <p>
                              Use <code>.multiple-remove</code> attribute for
                              multiple select box with remove button.
                            </p>
                            <div className="form-group">
                              <select
                                className="choices form-select multiple-remove"
                                multiple="multiple"
                              >
                                <optgroup label="Figures">
                                  <option value="romboid">Romboid</option>
                                  <option value="trapeze" selected>
                                    Trapeze
                                  </option>
                                  <option value="triangle">Triangle</option>
                                  <option value="polygon">Polygon</option>
                                </optgroup>
                                <optgroup label="Colors">
                                  <option value="red">Red</option>
                                  <option value="green">Green</option>
                                  <option value="blue" selected>
                                    Blue
                                  </option>
                                  <option value="purple">Purple</option>
                                </optgroup>
                              </select>
                            </div>
                          </div>
                          <div className="col-md-6 mb-4">
                            <h6>choices with Light Background Options</h6>
                            <p>
                              Use{" "}
                              <code>
                                .select-light-{"{"}colorName{"}"}
                              </code>{" "}
                              class for light background to selected Options.
                            </p>
                            <div className="form-group">
                              <select
                                className="choices form-select select-light-danger"
                                multiple="multiple"
                              >
                                <option value="square">Square</option>
                                <option value="rectangle" selected>
                                  Rectangle
                                </option>
                                <option value="rombo">Rombo</option>
                                <option value="romboid">Romboid</option>
                                <option value="trapeze">Trapeze</option>
                                <option value="traible" selected>
                                  Triangle
                                </option>
                                <option value="polygon">Polygon</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section> */}
            <MultipleChoicesSection />
            {/* Multiple choices end */}
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

export default Select;
