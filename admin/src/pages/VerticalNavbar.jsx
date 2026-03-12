import React from "react";
import Sidebar from "../common/Sidebar";

function VerticalNavbar() {
  return (
    <div>
      <div id="app">
        <Sidebar />
        <div id="main" className="layout-navbar">
          <header className="mb-3">
            <nav className="navbar navbar-expand navbar-light ">
              <div className="container-fluid">
                <a href="#" className="burger-btn d-block">
                  <i className="bi bi-justify fs-3" />
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item dropdown me-1">
                      <a
                        className="nav-link active dropdown-toggle"
                        href="#"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="bi bi-envelope bi-sub fs-4 text-gray-600" />
                      </a>
                      <ul
                        className="dropdown-menu dropdown-menu-end"
                        aria-labelledby="dropdownMenuButton"
                      >
                        <li>
                          <h6 className="dropdown-header">Mail</h6>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            No new mail
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item dropdown me-3">
                      <a
                        className="nav-link active dropdown-toggle"
                        href="#"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="bi bi-bell bi-sub fs-4 text-gray-600" />
                      </a>
                      <ul
                        className="dropdown-menu dropdown-menu-end"
                        aria-labelledby="dropdownMenuButton"
                      >
                        <li>
                          <h6 className="dropdown-header">Notifications</h6>
                        </li>
                        <li>
                          <a className="dropdown-item">
                            No notification available
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <div className="dropdown">
                    <a href="#" data-bs-toggle="dropdown" aria-expanded="false">
                      <div className="user-menu d-flex">
                        <div className="user-name text-end me-3">
                          <h6 className="mb-0 text-gray-600">John Ducky</h6>
                          <p className="mb-0 text-sm text-gray-600">
                            Administrator
                          </p>
                        </div>
                        <div className="user-img d-flex align-items-center">
                          <div className="avatar avatar-md">
                            <img src="assets/images/faces/1.jpg" />
                          </div>
                        </div>
                      </div>
                    </a>
                    <ul
                      className="dropdown-menu dropdown-menu-end"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <li>
                        <h6 className="dropdown-header">Hello, John!</h6>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <i className="icon-mid bi bi-person me-2" /> My
                          Profile
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <i className="icon-mid bi bi-gear me-2" />
                          Settings
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <i className="icon-mid bi bi-wallet me-2" />
                          Wallet
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <i className="icon-mid bi bi-box-arrow-left me-2" />{" "}
                          Logout
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </nav>
          </header>
          <div id="main-content">
            <div className="page-heading">
              <div className="page-title">
                <div className="row">
                  <div className="col-12 col-md-6 order-md-1 order-last">
                    <h3>Vertical Layout with Navbar</h3>
                    <p className="text-subtitle text-muted">
                      Navbar will appear in top of the page.
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
                          Layout Vertical Navbar
                        </li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>
              <section className="section">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Example Content</h4>
                  </div>
                  <div className="card-body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consectetur quas omnis laudantium tempore exercitationem,
                    expedita aspernatur sed officia asperiores unde tempora
                    maxime odio reprehenderit distinctio incidunt! Vel
                    aspernatur dicta consequatur!
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
                      <i className="bi bi-heart-fill icon-mid" />
                    </span>
                    by <a href="https://ahmadsaugi.com">Saugi</a>
                  </p>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VerticalNavbar;
