import React from "react";
import Sidebar from "../common/Sidebar";

function TodoList() {
  return (
    <div>
      <div id="app">
        <Sidebar />
        <div id="main">
          <div className="page-heading">
            <div className="page-title">
              <div className="row">
                <div className="col-12 col-md-6 order-md-1 order-last">
                  <h3>Todo List</h3>
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
                        Todo List
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
            {/* Task App Widget Starts */}
            <section className="tasks">
              <div className="row">
                <div className="col-lg-7">
                  <div className="card widget-todo">
                    <div className="card-header border-bottom d-flex justify-content-between align-items-center">
                      <h4 className="card-title d-flex">
                        <i className="bx bx-check font-medium-5 pl-25 pr-75" />
                        Tasks
                      </h4>
                      <ul className="list-inline d-flex mb-0">
                        <li className="d-flex align-items-center">
                          <i className="bx bx-check-circle font-medium-3 me-50" />
                          <div className="dropdown">
                            <div
                              className="dropdown-toggle me-1"
                              role="button"
                              id="dropdownMenuButton"
                              data-bs-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              All Task
                            </div>
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
                        </li>
                        <li className="d-flex align-items-center">
                          <i className="bx bx-sort me-50 font-medium-3" />
                          <div className="dropdown">
                            <div
                              className="dropdown-toggle"
                              role="button"
                              id="dropdownMenuButton2"
                              data-bs-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              All Task
                            </div>
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
                        </li>
                      </ul>
                    </div>
                    <div className="card-body px-0 py-1">
                      <ul
                        className="widget-todo-list-wrapper"
                        id="widget-todo-list"
                      >
                        <li className="widget-todo-item">
                          <div className="widget-todo-title-wrapper d-flex justify-content-between align-items-center mb-50">
                            <div className="widget-todo-title-area d-flex align-items-center">
                              <i data-feather="list" className="cursor-move" />
                              <div className="checkbox checkbox-shadow">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  id="checkbox1"
                                />
                                <label htmlFor="checkbox1" />
                              </div>
                              <span className="widget-todo-title ml-50">
                                Add SCSS and JS files if required
                              </span>
                            </div>
                            <div className="widget-todo-item-action d-flex align-items-center">
                              <div className="badge badge-pill badge-light-success me-1">
                                frontend
                              </div>
                              <div className="avatar bg-warning">
                                <img
                                  src="assets/images/faces/1.jpg"
                                  alt
                                  srcSet
                                />
                              </div>
                              <i className="bx bx-dots-vertical-rounded font-medium-3 cursor-pointer" />
                            </div>
                          </div>
                        </li>
                        <li className="widget-todo-item">
                          <div className="widget-todo-title-wrapper d-flex justify-content-between align-items-center mb-50">
                            <div className="widget-todo-title-area d-flex align-items-center">
                              <i data-feather="list" className="cursor-move" />
                              <div className="checkbox checkbox-shadow">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  id="checkbox2"
                                />
                                <label htmlFor="checkbox2" />
                              </div>
                              <span className="widget-todo-title ml-50">
                                Check all the changes that you did, before you
                                commit
                              </span>
                            </div>
                            <div className="widget-todo-item-action d-flex align-items-center">
                              <div className="badge badge-pill badge-light-danger me-1">
                                backend
                              </div>
                              <div className="avatar bg-warning">
                                <img
                                  src="assets/images/faces/2.jpg"
                                  alt
                                  srcSet
                                />
                              </div>
                              <i className="bx bx-dots-vertical-rounded font-medium-3 cursor-pointer" />
                            </div>
                          </div>
                        </li>
                        <li className="widget-todo-item completed">
                          <div className="widget-todo-title-wrapper d-flex justify-content-between align-items-center mb-50">
                            <div className="widget-todo-title-area d-flex align-items-center">
                              <i data-feather="list" className="cursor-move" />
                              <div className="checkbox checkbox-shadow">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  id="checkbox3"
                                  defaultChecked
                                />
                                <label htmlFor="checkbox3" />
                              </div>
                              <span className="widget-todo-title ml-50">
                                Dribble, Behance, UpLabs &amp; Pinterest Post
                              </span>
                            </div>
                            <div className="widget-todo-item-action d-flex align-items-center">
                              <div className="badge badge-pill badge-light-primary me-1">
                                UI/UX
                              </div>
                              <div className="avatar bg-rgba-primary m-0 me-50">
                                <img
                                  src="assets/images/faces/3.jpg"
                                  alt
                                  srcSet
                                />
                              </div>
                              <i className="bx bx-dots-vertical-rounded font-medium-3 cursor-pointer" />
                            </div>
                          </div>
                        </li>
                        <li className="widget-todo-item">
                          <div className="widget-todo-title-wrapper d-flex justify-content-between align-items-center mb-50">
                            <div className="widget-todo-title-area d-flex align-items-center">
                              <i data-feather="list" className="cursor-move" />
                              <div className="checkbox checkbox-shadow">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  id="checkbox4"
                                />
                                <label htmlFor="checkbox4" />
                              </div>
                              <span className="widget-todo-title ml-50">
                                Fresh Design Web &amp; Responsive Miracle
                              </span>
                            </div>
                            <div className="widget-todo-item-action d-flex align-items-center">
                              <div className="badge badge-pill badge-light-info me-1">
                                Design
                              </div>
                              <div className="avatar bg-warning">
                                <img
                                  src="assets/images/faces/4.jpg"
                                  alt
                                  srcSet
                                />
                              </div>
                              <i className="bx bx-dots-vertical-rounded font-medium-3 cursor-pointer" />
                            </div>
                          </div>
                        </li>
                        <li className="widget-todo-item">
                          <div className="widget-todo-title-wrapper d-flex justify-content-between align-items-center mb-50">
                            <div className="widget-todo-title-area d-flex align-items-center">
                              <i data-feather="list" className="cursor-move" />
                              <div className="checkbox checkbox-shadow">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  id="checkbox5"
                                />
                                <label htmlFor="checkbox5" />
                              </div>
                              <span className="widget-todo-title ml-50">
                                Add Calendar page and source and credit page in
                                documentation
                              </span>
                            </div>
                            <div className="widget-todo-item-action d-flex align-items-center">
                              <div className="badge badge-pill badge-light-warning me-1">
                                Javascript
                              </div>
                              <div className="avatar bg-warning">
                                <img
                                  src="assets/images/faces/5.jpg"
                                  alt
                                  srcSet
                                />
                              </div>
                              <i className="bx bx-dots-vertical-rounded font-medium-3 cursor-pointer" />
                            </div>
                          </div>
                        </li>
                        <li className="widget-todo-item">
                          <div className="widget-todo-title-wrapper d-flex justify-content-between align-items-center mb-50">
                            <div className="widget-todo-title-area d-flex align-items-center">
                              <i data-feather="list" className="cursor-move" />
                              <div className="checkbox checkbox-shadow">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  id="checkbox6"
                                />
                                <label htmlFor="checkbox6" />
                              </div>
                              <span className="widget-todo-title ml-50">
                                Add Angular Starter-kit
                              </span>
                            </div>
                            <div className="widget-todo-item-action d-flex align-items-center">
                              <div className="badge badge-pill badge-light-primary me-1">
                                UI/UX
                              </div>
                              <div className="avatar bg-warning">
                                <img
                                  src="assets/images/faces/1.jpg"
                                  alt
                                  srcSet
                                />
                              </div>
                              <i className="bx bx-dots-vertical-rounded font-medium-3 cursor-pointer" />
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="card widget-todo">
                    <div className="card-header border-bottom d-flex justify-content-between align-items-center">
                      <h4 className="card-title d-flex">
                        <i className="bx bx-check font-medium-5 pl-25 pr-75" />
                        Progress
                      </h4>
                    </div>
                    <div className="card-body px-0 py-1">
                      <table className="table table-borderless">
                        <tbody>
                          <tr>
                            <td className="col-3">UI Design</td>
                            <td className="col-6">
                              <div className="progress progress-info">
                                <div
                                  className="progress-bar"
                                  role="progressbar"
                                  style={{ width: "60%" }}
                                  aria-valuenow={0}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                />
                              </div>
                            </td>
                            <td className="col-3 text-center">60%</td>
                          </tr>
                          <tr>
                            <td className="col-3">VueJS</td>
                            <td className="col-6">
                              <div className="progress progress-success">
                                <div
                                  className="progress-bar"
                                  role="progressbar"
                                  style={{ width: "35%" }}
                                  aria-valuenow={0}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                />
                              </div>
                            </td>
                            <td className="col-3 text-center">30%</td>
                          </tr>
                          <tr>
                            <td className="col-3">Laravel</td>
                            <td className="col-6">
                              <div className="progress progress-danger">
                                <div
                                  className="progress-bar"
                                  role="progressbar"
                                  style={{ width: "50%" }}
                                  aria-valuenow={0}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                />
                              </div>
                            </td>
                            <td className="col-3 text-center">50%</td>
                          </tr>
                          <tr>
                            <td className="col-3">ReactJS</td>
                            <td className="col-6">
                              <div className="progress progress-primary">
                                <div
                                  className="progress-bar"
                                  role="progressbar"
                                  style={{ width: "80%" }}
                                  aria-valuenow={0}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                />
                              </div>
                            </td>
                            <td className="col-3 text-center">80%</td>
                          </tr>
                          <tr>
                            <td className="col-3">Go</td>
                            <td className="col-6">
                              <div className="progress progress-secondary">
                                <div
                                  className="progress-bar"
                                  role="progressbar"
                                  style={{ width: "65%" }}
                                  aria-valuenow={0}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                />
                              </div>
                            </td>
                            <td className="col-3 text-center">65%</td>
                          </tr>
                        </tbody>
                      </table>
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

export default TodoList;
