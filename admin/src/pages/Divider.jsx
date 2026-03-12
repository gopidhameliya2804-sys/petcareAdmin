import React from "react";
import Sidebar from "../common/Sidebar";

function Divider() {
  return (
    <div>
      <div id="app">
        <Sidebar />
        <div id="main">
          <div className="page-heading">
            <div className="page-title">
              <div className="row">
                <div className="col-12 col-md-6 order-md-1 order-last">
                  <h3>Divider</h3>
                  <p className="text-subtitle text-muted">A Component</p>
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
                        Divider
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
                      <h4 className="card-title">Default</h4>
                    </div>
                    <div className="card-body">
                      <p>
                        You can use default divider with <code>&lt;hr&gt;</code>
                        <code />
                      </p>
                      <hr />
                      <p />
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Provident nostrum numquam reprehenderit facilis. Dolor
                        blanditiis commodi voluptate esse voluptatum aut natus,
                        distinctio at, officiis ipsam molestiae doloribus
                        ratione corrupti dolorum.
                      </p>
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
                      <h4 className="card-title">Divider with Text</h4>
                    </div>
                    <div className="card-body">
                      <p>
                        Use <code>.divider-text</code> and wrapped by{" "}
                        <code>.divider</code> to create a divider text
                      </p>
                      <div className="divider">
                        <div className="divider-text">Hello there!</div>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Provident nostrum numquam reprehenderit facilis. Dolor
                        blanditiis commodi voluptate esse voluptatum aut natus,
                        distinctio at, officiis ipsam molestiae doloribus
                        ratione corrupti dolorum.
                      </p>
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
                      <h4 className="card-title">Divider Position</h4>
                    </div>
                    <div className="card-body">
                      <p>
                        Use{" "}
                        <code>
                          .divider-{"{"}left|left-center|right-center|right{"}"}
                        </code>{" "}
                        and with
                        <code>.divider</code> to change the text position
                      </p>
                      <div className="divider divider-left">
                        <div className="divider-text">Left</div>
                      </div>
                      <div className="divider divider-left-center">
                        <div className="divider-text">Left Center</div>
                      </div>
                      <div className="divider">
                        <div className="divider-text">Center</div>
                      </div>
                      <div className="divider divider-right-center">
                        <div className="divider-text">Right Center</div>
                      </div>
                      <div className="divider divider-right">
                        <div className="divider-text">Right</div>
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

export default Divider;
