import React from "react";
import Sidebar from "../common/Sidebar";

function Navs() {
  return (
    <div>
      <div id="app">
       <Sidebar />
        <div id="main">
          <div className="page-heading">
            <div className="page-title">
              <div className="row">
                <div className="col-12 col-md-6 order-md-1 order-last">
                  <h3>Navs</h3>
                  <p className="text-subtitle text-muted">
                    Examples for how to use Bootstrap’s included navigation
                    components.
                  </p>
                </div>
                <div className="col-12 col-md-6 order-md-2 order-first">
                  <nav
                    aria-label="breadcrumb"
                    className="breadcrumb-header float-start float-lg-end"
                  >
                    z
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
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Default</h4>
                </div>
                <div className="card-body">
                  <ul className="nav">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        aria-current="page"
                        href="#"
                      >
                        Active
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Link
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Link
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link disabled"
                        href="#"
                        tabIndex={-1}
                        aria-disabled="true"
                      >
                        Disabled
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            <section className="section">
              <div className="row">
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-header">
                      <h5 className="card-title">Horizontal Navs</h5>
                    </div>
                    <div className="card-body">
                      <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                          <a
                            className="nav-link active"
                            id="home-tab"
                            data-bs-toggle="tab"
                            href="#home"
                            role="tab"
                            aria-controls="home"
                            aria-selected="true"
                          >
                            Home
                          </a>
                        </li>
                        <li className="nav-item" role="presentation">
                          <a
                            className="nav-link"
                            id="profile-tab"
                            data-bs-toggle="tab"
                            href="#profile"
                            role="tab"
                            aria-controls="profile"
                            aria-selected="false"
                          >
                            Profile
                          </a>
                        </li>
                        <li className="nav-item" role="presentation">
                          <a
                            className="nav-link"
                            id="contact-tab"
                            data-bs-toggle="tab"
                            href="#contact"
                            role="tab"
                            aria-controls="contact"
                            aria-selected="false"
                          >
                            Contact
                          </a>
                        </li>
                      </ul>
                      <div className="tab-content" id="myTabContent">
                        <div
                          className="tab-pane fade show active"
                          id="home"
                          role="tabpanel"
                          aria-labelledby="home-tab"
                        >
                          <p className="my-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nulla ut nulla neque. Ut hendrerit nulla a
                            euismod pretium. Fusce venenatis sagittis ex
                            efficitur suscipit. In tempor mattis fringilla. Sed
                            id tincidunt orci, et volutpat ligula. Aliquam
                            sollicitudin sagittis ex, a rhoncus nisl feugiat
                            quis. Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Nunc ultricies ligula a tempor
                            vulputate. Suspendisse pretium mollis ultrices.
                          </p>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="profile"
                          role="tabpanel"
                          aria-labelledby="profile-tab"
                        >
                          Integer interdum diam eleifend metus lacinia, quis
                          gravida eros mollis. Fusce non sapien sit amet magna
                          dapibus ultrices. Morbi tincidunt magna ex, eget
                          faucibus sapien bibendum non. Duis a mauris ex. Ut
                          finibus risus sed massa mattis porta. Aliquam sagittis
                          massa et purus efficitur ultricies. Integer pretium
                          dolor at sapien laoreet ultricies. Fusce congue et
                          lorem id convallis. Nulla volutpat tellus nec molestie
                          finibus. In nec odio tincidunt eros finibus
                          ullamcorper. Ut sodales, dui nec posuere finibus, nisl
                          sem aliquam metus, eu accumsan lacus felis at odio.
                          Sed lacus quam, convallis quis condimentum ut,
                          accumsan congue massa. Pellentesque et quam vel massa
                          pretium ullamcorper vitae eu tortor.
                        </div>
                        <div
                          className="tab-pane fade"
                          id="contact"
                          role="tabpanel"
                          aria-labelledby="contact-tab"
                        >
                          <p className="mt-2">
                            Duis ultrices purus non eros fermentum hendrerit.
                            Aenean ornare interdum viverra. Sed ut odio velit.
                            Aenean eu diam dictum nibh rhoncus mattis quis ac
                            risus. Vivamus eu congue ipsum. Maecenas id
                            sollicitudin ex. Cras in ex vestibulum, posuere orci
                            at, sollicitudin purus. Morbi mollis elementum enim,
                            in cursus sem placerat ut.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Javascript Behavior</h4>
                    </div>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-3">
                          <div
                            className="nav flex-column nav-pills"
                            id="v-pills-tab"
                            role="tablist"
                            aria-orientation="vertical"
                          >
                            <a
                              className="nav-link active"
                              id="v-pills-home-tab"
                              data-bs-toggle="pill"
                              href="#v-pills-home"
                              role="tab"
                              aria-controls="v-pills-home"
                              aria-selected="true"
                            >
                              Home
                            </a>
                            <a
                              className="nav-link"
                              id="v-pills-profile-tab"
                              data-bs-toggle="pill"
                              href="#v-pills-profile"
                              role="tab"
                              aria-controls="v-pills-profile"
                              aria-selected="false"
                            >
                              Profile
                            </a>
                            <a
                              className="nav-link"
                              id="v-pills-messages-tab"
                              data-bs-toggle="pill"
                              href="#v-pills-messages"
                              role="tab"
                              aria-controls="v-pills-messages"
                              aria-selected="false"
                            >
                              Messages
                            </a>
                            <a
                              className="nav-link"
                              id="v-pills-settings-tab"
                              data-bs-toggle="pill"
                              href="#v-pills-settings"
                              role="tab"
                              aria-controls="v-pills-settings"
                              aria-selected="false"
                            >
                              Settings
                            </a>
                          </div>
                        </div>
                        <div className="col-9">
                          <div className="tab-content" id="v-pills-tabContent">
                            <div
                              className="tab-pane fade show active"
                              id="v-pills-home"
                              role="tabpanel"
                              aria-labelledby="v-pills-home-tab"
                            >
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Nulla ut nulla neque. Ut hendrerit nulla a
                              euismod pretium. Fusce venenatis sagittis ex
                              efficitur suscipit. In tempor mattis fringilla.
                              Sed id tincidunt orci, et volutpat ligula. Aliquam
                              sollicitudin sagittis ex, a rhoncus nisl feugiat
                              quis. Lorem ipsum dolor sit amet, consectetur
                              adipiscing elit. Nunc ultricies ligula a tempor
                              vulputate. Suspendisse pretium mollis ultrices
                            </div>
                            <div
                              className="tab-pane fade"
                              id="v-pills-profile"
                              role="tabpanel"
                              aria-labelledby="v-pills-profile-tab"
                            >
                              Integer interdum diam eleifend metus lacinia, quis
                              gravida eros mollis. Fusce non sapien sit amet
                              magna dapibus ultrices. Morbi tincidunt magna ex,
                              eget faucibus sapien bibendum non. Duis a mauris
                              ex. Ut finibus risus sed massa mattis porta.
                              Aliquam sagittis massa et purus efficitur
                              ultricies.
                            </div>
                            <div
                              className="tab-pane fade"
                              id="v-pills-messages"
                              role="tabpanel"
                              aria-labelledby="v-pills-messages-tab"
                            >
                              Integer pretium dolor at sapien laoreet ultricies.
                              Fusce congue et lorem id convallis. Nulla volutpat
                              tellus nec molestie finibus. In nec odio tincidunt
                              eros finibus ullamcorper. Ut sodales, dui nec
                              posuere finibus, nisl sem aliquam metus, eu
                              accumsan lacus felis at odio.
                            </div>
                            <div
                              className="tab-pane fade"
                              id="v-pills-settings"
                              role="tabpanel"
                              aria-labelledby="v-pills-settings-tab"
                            >
                              Sed lacus quam, convallis quis condimentum ut,
                              accumsan congue massa. Pellentesque et quam vel
                              massa pretium ullamcorper vitae eu tortor.
                            </div>
                          </div>
                        </div>
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

export default Navs;
