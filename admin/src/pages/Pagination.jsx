import React from "react";
import Sidebar from "../common/Sidebar";

function Pagination() {
  return (
    <div>
      <div id="app">
        <Sidebar />
        <div id="main">
          <header className="mb-3">
            <a href="#" className="burger-btn d-block d-xl-none">
              <i className="bi bi-justify fs-3" />
            </a>
          </header>
          <div className="page-heading">
            <div className="page-title">
              <div className="row">
                <div className="col-12 col-md-6 order-md-1 order-last">
                  <h3>Pagination</h3>
                  <p className="text-subtitle text-muted">
                    Examples for showing pagination to indicate a series of
                    related content exists across multiple pages.
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
                        Navs
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
            <section className="section">
              <div className="row">
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-header">
                      <h4>Basic Pagination</h4>
                    </div>
                    <div className="card-body">
                      <p>Pagination with active item</p>
                      <nav aria-label="Page navigation example">
                        <ul className="pagination pagination-primary">
                          <li className="page-item">
                            <a className="page-link" href="#">
                              Prev
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              1
                            </a>
                          </li>
                          <li className="page-item active">
                            <a className="page-link" href="#">
                              2
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              3
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              Next
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-header">
                      <h4>Pagination with Icon</h4>
                    </div>
                    <div className="card-body">
                      <p>Change prev and next button into icon</p>
                      <nav aria-label="Page navigation example">
                        <ul className="pagination pagination-primary">
                          <li className="page-item">
                            <a className="page-link" href="#">
                              <span aria-hidden="true">
                                <i className="bi bi-chevron-left" />
                              </span>
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              1
                            </a>
                          </li>
                          <li className="page-item active">
                            <a className="page-link" href="#">
                              2
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              3
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              <span aria-hidden="true">
                                <i className="bi bi-chevron-right" />
                              </span>
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="section">
              <div className="row">
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-header">
                      <h4>Pagination Color </h4>
                    </div>
                    <div className="card-body">
                      <p>
                        To add pagination with different color option, use class
                        <code>
                          .pagination-{"{"}colorName{"}"}
                        </code>
                        with <code>.pagination</code> class.
                      </p>
                      <nav aria-label="Page navigation example">
                        <ul className="pagination pagination-danger">
                          <li className="page-item">
                            <a className="page-link" href="#">
                              <span aria-hidden="true">
                                <i className="bi bi-chevron-left" />
                              </span>
                            </a>
                          </li>
                          <li className="page-item active">
                            <a className="page-link" href="#">
                              1
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              2
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              3
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              <span aria-hidden="true">
                                <i className="bi bi-chevron-right" />
                              </span>
                            </a>
                          </li>
                        </ul>
                      </nav>
                      <nav aria-label="Page navigation example">
                        <ul className="pagination pagination-dark">
                          <li className="page-item">
                            <a className="page-link" href="#">
                              <span aria-hidden="true">
                                <i className="bi bi-chevron-left" />
                              </span>
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              1
                            </a>
                          </li>
                          <li className="page-item active">
                            <a className="page-link" href="#">
                              2
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              3
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              <span aria-hidden="true">
                                <i className="bi bi-chevron-right" />
                              </span>
                            </a>
                          </li>
                        </ul>
                      </nav>
                      <nav aria-label="Page navigation example">
                        <ul className="pagination pagination-success">
                          <li className="page-item">
                            <a className="page-link" href="#">
                              <span aria-hidden="true">
                                <i className="bi bi-chevron-left" />
                              </span>
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              1
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              2
                            </a>
                          </li>
                          <li className="page-item active">
                            <a className="page-link" href="#">
                              3
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              <span aria-hidden="true">
                                <i className="bi bi-chevron-right" />
                              </span>
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-header">
                      <h4>Pagination Size</h4>
                    </div>
                    <div className="card-body">
                      <p>
                        Fancy larger or smaller pagination? Add{" "}
                        <code>.pagination-lg</code> or
                        <code>.pagination-sm</code> for additional sizes.
                      </p>
                      <nav aria-label="Page navigation example">
                        <ul className="pagination pagination-primary pagination-sm">
                          <li className="page-item">
                            <a className="page-link" href="#">
                              <span aria-hidden="true">
                                <i className="bi bi-chevron-left" />
                              </span>
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              1
                            </a>
                          </li>
                          <li className="page-item active">
                            <a className="page-link" href="#">
                              2
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              3
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              <span aria-hidden="true">
                                <i className="bi bi-chevron-right" />
                              </span>
                            </a>
                          </li>
                        </ul>
                      </nav>
                      <nav aria-label="Page navigation example">
                        <ul className="pagination pagination-primary">
                          <li className="page-item">
                            <a className="page-link" href="#">
                              <span aria-hidden="true">
                                <i className="bi bi-chevron-left" />
                              </span>
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              1
                            </a>
                          </li>
                          <li className="page-item active">
                            <a className="page-link" href="#">
                              2
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              3
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              <span aria-hidden="true">
                                <i className="bi bi-chevron-right" />
                              </span>
                            </a>
                          </li>
                        </ul>
                      </nav>
                      <nav aria-label="Page navigation example">
                        <ul className="pagination pagination-primary pagination-lg">
                          <li className="page-item">
                            <a className="page-link" href="#">
                              <span aria-hidden="true">
                                <i className="bi bi-chevron-left" />
                              </span>
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              1
                            </a>
                          </li>
                          <li className="page-item active">
                            <a className="page-link" href="#">
                              2
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              3
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              <span aria-hidden="true">
                                <i className="bi bi-chevron-right" />
                              </span>
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="section">
              <div className="card">
                <div className="card-header">
                  <h4>Alignment</h4>
                </div>
                <div className="card-body">
                  <p>
                    Change the alignment of pagination components with flexbox
                    utilities.
                  </p>
                  <nav aria-label="Page navigation example">
                    <ul className="pagination pagination-primary">
                      <li className="page-item disabled">
                        <a
                          className="page-link"
                          href="#"
                          tabIndex={-1}
                          aria-disabled="true"
                        >
                          Previous
                        </a>
                      </li>
                      <li className="page-item active">
                        <a className="page-link" href="#">
                          1
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          2
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          3
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          Next
                        </a>
                      </li>
                    </ul>
                  </nav>
                  <nav aria-label="Page navigation example">
                    <ul className="pagination pagination-primary  justify-content-center">
                      <li className="page-item disabled">
                        <a
                          className="page-link"
                          href="#"
                          tabIndex={-1}
                          aria-disabled="true"
                        >
                          Previous
                        </a>
                      </li>
                      <li className="page-item active">
                        <a className="page-link" href="#">
                          1
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          2
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          3
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          Next
                        </a>
                      </li>
                    </ul>
                  </nav>
                  <nav aria-label="Page navigation example">
                    <ul className="pagination pagination-primary  justify-content-end">
                      <li className="page-item disabled">
                        <a
                          className="page-link"
                          href="#"
                          tabIndex={-1}
                          aria-disabled="true"
                        >
                          Previous
                        </a>
                      </li>
                      <li className="page-item active">
                        <a className="page-link" href="#">
                          1
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          2
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          3
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          Next
                        </a>
                      </li>
                    </ul>
                  </nav>
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

export default Pagination;
