import React from "react";
import Footer from "../common/Footer";
import Sidebar from "../common/Sidebar";

function Carousel() {
  return (
    <div>
      <div id="app">
        <Sidebar />
        <div id="main">
          <div className="page-heading">
            <div className="page-title">
              <div className="row">
                <div className="col-12 col-md-6 order-md-1 order-last">
                  <h3>Carousel</h3>
                  <p className="text-subtitle text-muted">
                    {" "}
                    A slideshow component for cycling through elements—images or
                    slides of text—like a carousel.{" "}
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
                        Carousel
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
                      <h4>Slides only</h4>
                      <p>A carousel without slide control</p>
                    </div>
                    <div className="card-body">
                      <div
                        id="carouselExampleSlidesOnly"
                        className="carousel slide"
                        data-bs-ride="carousel"
                      >
                        <div className="carousel-inner">
                          <div className="carousel-item active">
                            <img
                              src="assets/images/samples/building.jpg"
                              className="d-block w-100"
                              alt="..."
                            />
                          </div>
                          <div className="carousel-item">
                            <img
                              src="assets/images/samples/architecture1.jpg"
                              className="d-block w-100"
                              alt="..."
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header">
                      <h4>With Captions</h4>
                      <p>A carousel with captions over the top</p>
                    </div>
                    <div className="card-body">
                      <div
                        id="carouselExampleCaptions"
                        className="carousel slide"
                        data-bs-ride="carousel"
                      >
                        <ol className="carousel-indicators">
                          <li
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to={0}
                            className="active"
                          />
                          <li
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to={1}
                          />
                          <li
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to={2}
                          />
                        </ol>
                        <div className="carousel-inner">
                          <div className="carousel-item active">
                            <img
                              src="assets/images/samples/1.png"
                              className="d-block w-100"
                              alt="..."
                            />
                            <div className="carousel-caption d-none d-md-block">
                              <h5>First slide label</h5>
                              <p>
                                Nulla vitae elit libero, a pharetra augue mollis
                                interdum.
                              </p>
                            </div>
                          </div>
                          <div className="carousel-item">
                            <img
                              src="assets/images/samples/2.png"
                              className="d-block w-100"
                              alt="..."
                            />
                            <div className="carousel-caption d-none d-md-block">
                              <h5>Second slide label</h5>
                              <p>
                                Nulla vitae elit libero, a pharetra augue mollis
                                interdum.
                              </p>
                            </div>
                          </div>
                        </div>
                        <a
                          className="carousel-control-prev"
                          href="#carouselExampleCaptions"
                          role="button"
                          data-bs-slide="prev"
                        >
                          <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                          />
                          <span className="visually-hidden">Previous</span>
                        </a>
                        <a
                          className="carousel-control-next"
                          href="#carouselExampleCaptions"
                          role="button"
                          data-bs-slide="next"
                        >
                          <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"
                          />
                          <span className="visually-hidden">Next</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-header">
                      <h4>With controls</h4>
                      <p>A carousel with previous and next control</p>
                    </div>
                    <div className="card-body">
                      <div
                        id="carouselExampleControls"
                        className="carousel slide"
                        data-ride="carousel"
                      >
                        <div className="carousel-inner">
                          <div className="carousel-item active">
                            <img
                              src="assets/images/samples/banana.jpg"
                              className="d-block w-100"
                              alt="..."
                            />
                          </div>
                          <div className="carousel-item">
                            <img
                              src="assets/images/samples/bg-mountain.jpg"
                              className="d-block w-100"
                              alt="..."
                            />
                          </div>
                        </div>
                        <a
                          className="carousel-control-prev"
                          href="#carouselExampleControls"
                          role="button"
                          data-bs-slide="prev"
                        >
                          <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                          />
                          <span className="visually-hidden">Previous</span>
                        </a>
                        <a
                          className="carousel-control-next"
                          href="#carouselExampleControls"
                          role="button"
                          data-bs-slide="next"
                        >
                          <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"
                          />
                          <span className="visually-hidden">Next</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header">
                      <h4>Crossfade Transition</h4>
                      <p>A carousel crossfade transition</p>
                    </div>
                    <div className="card-body">
                      <div
                        id="carouselExampleFade"
                        className="carousel slide carousel-fade"
                        data-bs-ride="carouselfade"
                      >
                        <ol className="carousel-indicators">
                          <li
                            data-bs-target="#carouselExampleFade"
                            data-bs-slide-to={0}
                            className="active"
                          />
                          <li
                            data-bs-target="#carouselExampleFade"
                            data-bs-slide-to={1}
                          />
                          <li
                            data-bs-target="#carouselExampleFade"
                            data-bs-slide-to={2}
                          />
                        </ol>
                        <div className="carousel-inner">
                          <div className="carousel-item active">
                            <img
                              src="assets/images/samples/1.png"
                              className="d-block w-100"
                              alt="..."
                            />
                            <div className="carousel-caption d-none d-md-block">
                              <h5>First slide label</h5>
                              <p>
                                Nulla vitae elit libero, a pharetra augue mollis
                                interdum.
                              </p>
                            </div>
                          </div>
                          <div className="carousel-item">
                            <img
                              src="assets/images/samples/2.png"
                              className="d-block w-100"
                              alt="..."
                            />
                            <div className="carousel-caption d-none d-md-block">
                              <h5>Second slide label</h5>
                              <p>
                                Nulla vitae elit libero, a pharetra augue mollis
                                interdum.
                              </p>
                            </div>
                          </div>
                          <div className="carousel-item">
                            <img
                              src="assets/images/samples/3.png"
                              className="d-block w-100"
                              alt="..."
                            />
                            <div className="carousel-caption d-none d-md-block">
                              <h5>Third slide label</h5>
                              <p>
                                Nulla vitae elit libero, a pharetra augue mollis
                                interdum.
                              </p>
                            </div>
                          </div>
                        </div>
                        <a
                          className="carousel-control-prev"
                          href="#carouselExampleFade"
                          role="button"
                          data-bs-slide="prev"
                        >
                          <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                          />
                          <span className="visually-hidden">Previous</span>
                        </a>
                        <a
                          className="carousel-control-next"
                          href="#carouselExampleFade"
                          role="button"
                          data-bs-slide="next"
                        >
                          <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"
                          />
                          <span className="visually-hidden">Next</span>
                        </a>
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

export default Carousel;
