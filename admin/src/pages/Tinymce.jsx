import React from "react";
import Sidebar from "../common/Sidebar";

function Tinymce() {
  return (
    <div>
      <div id="app">
        <Sidebar />
        <div id="main">
          <div className="page-heading">
            <div className="page-title">
              <div className="row">
                <div className="col-12 col-md-6 order-md-1 order-last">
                  <h3>TinyMCE </h3>
                  <p className="text-subtitle text-muted">
                    Super simple WYSIWYG editor. But you must include jQuery
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
                        TinyMCE
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
                      <h4 className="card-title">Default Editor</h4>
                    </div>
                    <div className="card-body">
                      <textarea
                        name
                        id="default"
                        cols={30}
                        rows={10}
                        defaultValue={""}
                      />
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
                      <h4 className="card-title">Code Toolbar</h4>
                    </div>
                    <div className="card-body">
                      <textarea
                        id="dark"
                        cols={30}
                        rows={10}
                        defaultValue={""}
                      />
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

export default Tinymce;
