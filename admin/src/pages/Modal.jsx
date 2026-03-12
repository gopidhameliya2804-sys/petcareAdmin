import React from "react";
import Sidebar from "../common/Sidebar";

function Modal() {
  return (
    <div>
      <div id="app">
        <Sidebar />
        <div id="main">
          <div className="page-heading">
            <div className="page-title">
              <div className="row">
                <div className="col-12 col-md-6 order-md-1 order-last">
                  <h3>Modal</h3>
                  <p className="text-subtitle text-muted">
                    Use Bootstrap’s JavaScript modal plugin to add dialogs to
                    your site for lightboxes, user notifications, or completely
                    custom content
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
                        Modal
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
            <section id="basic-modals">
              <div className="row">
                <div className="col-md-6 col-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Basic Modal</h4>
                    </div>
                    <div className="card-body">
                      <p>
                        Toggle a modal via JavaScript by clicking the button
                        above. You can use modal to add dialogs to your site for
                        lightboxes, user notifications, or completely custom
                        content.
                      </p>
                      {/* Button trigger for basic modal */}
                      <button
                        type="button"
                        className="btn btn-outline-primary block"
                        data-bs-toggle="modal"
                        data-bs-target="#default"
                      >
                        Launch Modal
                      </button>
                      {/*Basic Modal */}
                      <div
                        className="modal fade text-left"
                        id="default"
                        tabIndex={-1}
                        role="dialog"
                        aria-labelledby="myModalLabel1"
                        aria-hidden="true"
                      >
                        <div
                          className="modal-dialog modal-dialog-scrollable"
                          role="document"
                        >
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5 className="modal-title" id="myModalLabel1">
                                Basic Modal
                              </h5>
                              <button
                                type="button"
                                className="close rounded-pill"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              >
                                <i data-feather="x" />
                              </button>
                            </div>
                            <div className="modal-body">
                              <p>
                                Bonbon caramels muffin. Chocolate bar oat cake
                                cookie pastry dragée pastry. Carrot cake
                                chocolate tootsie roll chocolate bar candy canes
                                biscuit. Gummies bonbon apple pie fruitcake
                                icing biscuit apple pie jelly-o sweet roll.
                                Toffee sugar plum sugar plum jelly-o jujubes
                                bonbon dessert carrot cake. Cookie dessert tart
                                muffin topping donut icing fruitcake. Sweet roll
                                cotton candy dragée danish Candy canes chocolate
                                bar cookie. Gingerbread apple pie oat cake.
                                Carrot cake fruitcake bear claw. Pastry gummi
                                bears marshmallow jelly-o.
                              </p>
                            </div>
                            <div className="modal-footer">
                              <button
                                type="button"
                                className="btn"
                                data-bs-dismiss="modal"
                              >
                                <i className="bx bx-x d-block d-sm-none" />
                                <span className="d-none d-sm-block">Close</span>
                              </button>
                              <button
                                type="button"
                                className="btn btn-primary ml-1"
                                data-bs-dismiss="modal"
                              >
                                <i className="bx bx-check d-block d-sm-none" />
                                <span className="d-none d-sm-block">
                                  Accept
                                </span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">BorderLess Modal</h4>
                    </div>
                    <div className="card-content">
                      <div className="card-body">
                        <p>
                          Toggle a Boderless via JavaScript by clicking the
                          button above. Use
                          <code>.modal-borderless</code>
                          with <code>.modal</code>for BorderLess modal.
                        </p>
                        {/* Button trigger for BorderLess Modal */}
                        <button
                          type="button"
                          className="btn btn-outline-primary block"
                          data-bs-toggle="modal"
                          data-bs-target="#border-less"
                        >
                          Launch Modal
                        </button>
                        {/*BorderLess Modal Modal */}
                        <div
                          className="modal fade text-left modal-borderless"
                          id="border-less"
                          tabIndex={-1}
                          role="dialog"
                          aria-labelledby="myModalLabel1"
                          aria-hidden="true"
                        >
                          <div
                            className="modal-dialog modal-dialog-scrollable"
                            role="document"
                          >
                            <div className="modal-content">
                              <div className="modal-header">
                                <h5 className="modal-title">Border-Less</h5>
                                <button
                                  type="button"
                                  className="close rounded-pill"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                >
                                  <i data-feather="x" />
                                </button>
                              </div>
                              <div className="modal-body">
                                <p>
                                  Bonbon caramels muffin. Chocolate bar oat cake
                                  cookie pastry dragée pastry. Carrot cake
                                  chocolate tootsie roll chocolate bar candy
                                  canes biscuit. Gummies bonbon apple pie
                                  fruitcake icing biscuit apple pie jelly-o
                                  sweet roll. Toffee sugar plum sugar plum
                                  jelly-o jujubes bonbon dessert carrot cake.
                                  Cookie dessert tart muffin topping donut icing
                                  fruitcake. Sweet roll cotton candy dragée
                                  danish Candy canes chocolate bar cookie.
                                  Gingerbread apple pie oat cake. Carrot cake
                                  fruitcake bear claw. Pastry gummi bears
                                  marshmallow jelly-o.
                                </p>
                              </div>
                              <div className="modal-footer">
                                <button
                                  type="button"
                                  className="btn btn-light-primary"
                                  data-bs-dismiss="modal"
                                >
                                  <i className="bx bx-x d-block d-sm-none" />
                                  <span className="d-none d-sm-block">
                                    Close
                                  </span>
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-primary ml-1"
                                  data-bs-dismiss="modal"
                                >
                                  <i className="bx bx-check d-block d-sm-none" />
                                  <span className="d-none d-sm-block">
                                    Accept
                                  </span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Vertically Centered</h4>
                    </div>
                    <div className="card-content">
                      <div className="card-body">
                        <p>
                          Add <code>.modal-dialog-centered</code> to{" "}
                          <code>.modal-dialog</code> to vertically center the
                          modal.
                        </p>
                        {/* button trigger for  Vertically Centered modal */}
                        <button
                          type="button"
                          className="btn btn-outline-primary block"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModalCenter"
                        >
                          Launch Modal
                        </button>
                        {/* Vertically Centered modal Modal */}
                        <div
                          className="modal fade"
                          id="exampleModalCenter"
                          tabIndex={-1}
                          role="dialog"
                          aria-labelledby="exampleModalCenterTitle"
                          aria-hidden="true"
                        >
                          <div
                            className="modal-dialog modal-dialog-centered modal-dialog-centered modal-dialog-scrollable"
                            role="document"
                          >
                            <div className="modal-content">
                              <div className="modal-header">
                                <h5
                                  className="modal-title"
                                  id="exampleModalCenterTitle"
                                >
                                  Vertically Centered
                                </h5>
                                <button
                                  type="button"
                                  className="close"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                >
                                  <i data-feather="x" />
                                </button>
                              </div>
                              <div className="modal-body">
                                <p>
                                  Croissant jelly-o halvah chocolate sesame
                                  snaps. Brownie caramels candy canes chocolate
                                  cake marshmallow icing lollipop I love.
                                  Gummies macaroon donut caramels biscuit
                                  topping danish.
                                </p>
                              </div>
                              <div className="modal-footer">
                                <button
                                  type="button"
                                  className="btn btn-light-secondary"
                                  data-bs-dismiss="modal"
                                >
                                  <i className="bx bx-x d-block d-sm-none" />
                                  <span className="d-none d-sm-block">
                                    Close
                                  </span>
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-primary ml-1"
                                  data-bs-dismiss="modal"
                                >
                                  <i className="bx bx-check d-block d-sm-none" />
                                  <span className="d-none d-sm-block">
                                    Accept
                                  </span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Disabled Backdrop</h4>
                    </div>
                    <div className="card-content">
                      <div className="card-body">
                        <p>
                          You can disable the backdrop by using{" "}
                          <code>data-bs-backdrop="false"</code>
                        </p>
                        {/* Button trigger for Disabled Backdrop */}
                        <button
                          type="button"
                          className="btn btn-outline-primary block"
                          data-bs-toggle="modal"
                          data-bs-backdrop="false"
                          data-bs-target="#backdrop"
                        >
                          Launch Modal
                        </button>
                        {/*Disabled Backdrop Modal */}
                        <div
                          className="modal fade text-left"
                          id="backdrop"
                          tabIndex={-1}
                          role="dialog"
                          aria-labelledby="myModalLabel4"
                          aria-hidden="true"
                        >
                          <div
                            className="modal-dialog modal-dialog-centered modal-dialog-scrollable"
                            role="document"
                          >
                            <div className="modal-content">
                              <div className="modal-header">
                                <h4 className="modal-title" id="myModalLabel4">
                                  Disabled Backdrop
                                </h4>
                                <button
                                  type="button"
                                  className="close"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                >
                                  <i data-feather="x" />
                                </button>
                              </div>
                              <div className="modal-body">
                                <p>
                                  Candy oat cake topping topping chocolate cake.
                                  Icing pudding jelly beans I love chocolate
                                  carrot cake wafer candy canes. Biscuit
                                  croissant fruitcake bonbon soufflé.
                                </p>
                              </div>
                              <div className="modal-footer">
                                <button
                                  type="button"
                                  className="btn btn-light-secondary"
                                  data-bs-dismiss="modal"
                                >
                                  <i className="bx bx-x d-block d-sm-none" />
                                  <span className="d-none d-sm-block">
                                    Close
                                  </span>
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-primary ml-1"
                                  data-bs-dismiss="modal"
                                >
                                  <i className="bx bx-check d-block d-sm-none" />
                                  <span className="d-none d-sm-block">
                                    Accept
                                  </span>
                                </button>
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
            {/* Basic Modals end */}
            {/* Modal Themes start */}
            <section id="modal-themes">
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Modal Themes</h4>
                    </div>
                    <div className="card-content">
                      <div className="card-body">
                        <p className="mb-1">
                          Use class <code>.bg-*</code> with your{" "}
                          <code>.modal-header</code> to change theme of modal
                        </p>
                        <div className="row">
                          <div className="col-12">
                            <div className="modal-primary me-1 mb-1 d-inline-block">
                              {/* Button trigger for primary themes modal */}
                              <button
                                type="button"
                                className="btn btn-outline-primary"
                                data-bs-toggle="modal"
                                data-bs-target="#primary"
                              >
                                Primary
                              </button>
                              {/*primary theme Modal */}
                              <div
                                className="modal fade text-left"
                                id="primary"
                                tabIndex={-1}
                                role="dialog"
                                aria-labelledby="myModalLabel160"
                                aria-hidden="true"
                              >
                                <div
                                  className="modal-dialog modal-dialog-centered modal-dialog-scrollable"
                                  role="document"
                                >
                                  <div className="modal-content">
                                    <div className="modal-header bg-primary">
                                      <h5
                                        className="modal-title white"
                                        id="myModalLabel160"
                                      >
                                        Primary Modal
                                      </h5>
                                      <button
                                        type="button"
                                        className="close"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                      >
                                        <i data-feather="x" />
                                      </button>
                                    </div>
                                    <div className="modal-body">
                                      Tart lemon drops macaroon oat cake
                                      chocolate toffee chocolate bar icing.
                                      Pudding jelly beans carrot cake pastry
                                      gummies cheesecake lollipop. I love cookie
                                      lollipop cake I love sweet gummi bears
                                      cupcake dessert.
                                    </div>
                                    <div className="modal-footer">
                                      <button
                                        type="button"
                                        className="btn btn-light-secondary"
                                        data-bs-dismiss="modal"
                                      >
                                        <i className="bx bx-x d-block d-sm-none" />
                                        <span className="d-none d-sm-block">
                                          Close
                                        </span>
                                      </button>
                                      <button
                                        type="button"
                                        className="btn btn-primary ml-1"
                                        data-bs-dismiss="modal"
                                      >
                                        <i className="bx bx-check d-block d-sm-none" />
                                        <span className="d-none d-sm-block">
                                          Accept
                                        </span>
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="modal-success me-1 mb-1 d-inline-block">
                              {/* Button trigger for Success theme modal */}
                              <button
                                type="button"
                                className="btn btn-outline-success"
                                data-bs-toggle="modal"
                                data-bs-target="#success"
                              >
                                Success
                              </button>
                              {/*Success theme Modal */}
                              <div
                                className="modal fade text-left"
                                id="success"
                                tabIndex={-1}
                                role="dialog"
                                aria-labelledby="myModalLabel110"
                                aria-hidden="true"
                              >
                                <div
                                  className="modal-dialog modal-dialog-centered modal-dialog-scrollable"
                                  role="document"
                                >
                                  <div className="modal-content">
                                    <div className="modal-header bg-success">
                                      <h5
                                        className="modal-title white"
                                        id="myModalLabel110"
                                      >
                                        Success Modal
                                      </h5>
                                      <button
                                        type="button"
                                        className="close"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                      >
                                        <i data-feather="x" />
                                      </button>
                                    </div>
                                    <div className="modal-body">
                                      Tart lemon drops macaroon oat cake
                                      chocolate toffee chocolate bar icing.
                                      Pudding jelly beans carrot cake pastry
                                      gummies cheesecake lollipop. I love cookie
                                      lollipop cake I love sweet gummi bears
                                      cupcake dessert.
                                    </div>
                                    <div className="modal-footer">
                                      <button
                                        type="button"
                                        className="btn btn-light-secondary"
                                        data-bs-dismiss="modal"
                                      >
                                        <i className="bx bx-x d-block d-sm-none" />
                                        <span className="d-none d-sm-block">
                                          Close
                                        </span>
                                      </button>
                                      <button
                                        type="button"
                                        className="btn btn-success ml-1"
                                        data-bs-dismiss="modal"
                                      >
                                        <i className="bx bx-check d-block d-sm-none" />
                                        <span className="d-none d-sm-block">
                                          Accept
                                        </span>
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="modal-danger me-1 mb-1 d-inline-block">
                              {/* Button trigger for danger theme modal */}
                              <button
                                type="button"
                                className="btn btn-outline-danger"
                                data-bs-toggle="modal"
                                data-bs-target="#danger"
                              >
                                Danger
                              </button>
                              {/*Danger theme Modal */}
                              <div
                                className="modal fade text-left"
                                id="danger"
                                tabIndex={-1}
                                role="dialog"
                                aria-labelledby="myModalLabel120"
                                aria-hidden="true"
                              >
                                <div
                                  className="modal-dialog modal-dialog-centered modal-dialog-scrollable"
                                  role="document"
                                >
                                  <div className="modal-content">
                                    <div className="modal-header bg-danger">
                                      <h5
                                        className="modal-title white"
                                        id="myModalLabel120"
                                      >
                                        Danger Modal
                                      </h5>
                                      <button
                                        type="button"
                                        className="close"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                      >
                                        <i data-feather="x" />
                                      </button>
                                    </div>
                                    <div className="modal-body">
                                      Tart lemon drops macaroon oat cake
                                      chocolate toffee chocolate bar icing.
                                      Pudding jelly beans carrot cake pastry
                                      gummies cheesecake lollipop. I love cookie
                                      lollipop cake I love sweet gummi bears
                                      cupcake dessert.
                                    </div>
                                    <div className="modal-footer">
                                      <button
                                        type="button"
                                        className="btn btn-light-secondary"
                                        data-bs-dismiss="modal"
                                      >
                                        <i className="bx bx-x d-block d-sm-none" />
                                        <span className="d-none d-sm-block">
                                          Close
                                        </span>
                                      </button>
                                      <button
                                        type="button"
                                        className="btn btn-danger ml-1"
                                        data-bs-dismiss="modal"
                                      >
                                        <i className="bx bx-check d-block d-sm-none" />
                                        <span className="d-none d-sm-block">
                                          Accept
                                        </span>
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="modal-info me-1 mb-1 d-inline-block">
                              {/* Button trigger for info theme modal */}
                              <button
                                type="button"
                                className="btn btn-outline-info"
                                data-bs-toggle="modal"
                                data-bs-target="#info"
                              >
                                Info
                              </button>
                              {/*info theme Modal */}
                              <div
                                className="modal fade text-left"
                                id="info"
                                tabIndex={-1}
                                role="dialog"
                                aria-labelledby="myModalLabel130"
                                aria-hidden="true"
                              >
                                <div
                                  className="modal-dialog modal-dialog-centered modal-dialog-scrollable"
                                  role="document"
                                >
                                  <div className="modal-content">
                                    <div className="modal-header bg-info">
                                      <h5
                                        className="modal-title white"
                                        id="myModalLabel130"
                                      >
                                        Info Modal
                                      </h5>
                                      <button
                                        type="button"
                                        className="close"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                      >
                                        <i data-feather="x" />
                                      </button>
                                    </div>
                                    <div className="modal-body">
                                      Tart lemon drops macaroon oat cake
                                      chocolate toffee chocolate bar icing.
                                      Pudding jelly beans carrot cake pastry
                                      gummies cheesecake lollipop. I love cookie
                                      lollipop cake I love sweet gummi bears
                                      cupcake dessert.
                                    </div>
                                    <div className="modal-footer">
                                      <button
                                        type="button"
                                        className="btn btn-light-secondary"
                                        data-bs-dismiss="modal"
                                      >
                                        <i className="bx bx-x d-block d-sm-none" />
                                        <span className="d-none d-sm-block">
                                          Close
                                        </span>
                                      </button>
                                      <button
                                        type="button"
                                        className="btn btn-info ml-1"
                                        data-bs-dismiss="modal"
                                      >
                                        <i className="bx bx-check d-block d-sm-none" />
                                        <span className="d-none d-sm-block">
                                          Accept
                                        </span>
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="modal-warning me-1 mb-1 d-inline-block">
                              {/* Button trigger for warning theme modal */}
                              <button
                                type="button"
                                className="btn btn-outline-warning"
                                data-bs-toggle="modal"
                                data-bs-target="#warning"
                              >
                                Warning
                              </button>
                              {/*warning theme Modal */}
                              <div
                                className="modal fade text-left"
                                id="warning"
                                tabIndex={-1}
                                role="dialog"
                                aria-labelledby="myModalLabel140"
                                aria-hidden="true"
                              >
                                <div
                                  className="modal-dialog modal-dialog-centered modal-dialog-scrollable"
                                  role="document"
                                >
                                  <div className="modal-content">
                                    <div className="modal-header bg-warning">
                                      <h5
                                        className="modal-title white"
                                        id="myModalLabel140"
                                      >
                                        Warning Modal
                                      </h5>
                                      <button
                                        type="button"
                                        className="close"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                      >
                                        <i data-feather="x" />
                                      </button>
                                    </div>
                                    <div className="modal-body">
                                      Tart lemon drops macaroon oat cake
                                      chocolate toffee chocolate bar icing.
                                      Pudding jelly beans carrot cake pastry
                                      gummies cheesecake lollipop. I love cookie
                                      lollipop cake I love sweet gummi bears
                                      cupcake dessert.
                                    </div>
                                    <div className="modal-footer">
                                      <button
                                        type="button"
                                        className="btn btn-light-secondary"
                                        data-bs-dismiss="modal"
                                      >
                                        <i className="bx bx-x d-block d-sm-none" />
                                        <span className="d-none d-sm-block">
                                          Close
                                        </span>
                                      </button>
                                      <button
                                        type="button"
                                        className="btn btn-warning ml-1"
                                        data-bs-dismiss="modal"
                                      >
                                        <i className="bx bx-check d-block d-sm-none" />
                                        <span className="d-none d-sm-block">
                                          Accept
                                        </span>
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="modal-dark me-1 mb-1 d-inline-block">
                              {/* Button trigger for dark modal */}
                              <button
                                type="button"
                                className="btn btn-outline-dark"
                                data-bs-toggle="modal"
                                data-bs-target="#dark"
                              >
                                Dark
                              </button>
                              {/*Dark theme Modal */}
                              <div
                                className="modal fade text-left"
                                id="dark"
                                tabIndex={-1}
                                role="dialog"
                                aria-labelledby="myModalLabel150"
                                aria-hidden="true"
                              >
                                <div
                                  className="modal-dialog modal-dialog-centered modal-dialog-scrollable"
                                  role="document"
                                >
                                  <div className="modal-content">
                                    <div className="modal-header bg-dark white">
                                      <span
                                        className="modal-title"
                                        id="myModalLabel150"
                                      >
                                        Dark Modal
                                      </span>
                                      <button
                                        type="button"
                                        className="close"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                      >
                                        <i data-feather="x" />
                                      </button>
                                    </div>
                                    <div className="modal-body">
                                      Tart lemon drops macaroon oat cake
                                      chocolate toffee chocolate bar icing.
                                      Pudding jelly beans carrot cake pastry
                                      gummies cheesecake lollipop. I love cookie
                                      lollipop cake I love sweet gummi bears
                                      cupcake dessert.
                                    </div>
                                    <div className="modal-footer">
                                      <button
                                        type="button"
                                        className="btn btn-light-secondary"
                                        data-bs-dismiss="modal"
                                      >
                                        <i className="bx bx-x d-block d-sm-none" />
                                        <span className="d-none d-sm-block">
                                          Close
                                        </span>
                                      </button>
                                      <button
                                        type="button"
                                        className="btn btn-dark ml-1"
                                        data-bs-dismiss="modal"
                                      >
                                        <i className="bx bx-check d-block d-sm-none" />
                                        <span className="d-none d-sm-block">
                                          Accept
                                        </span>
                                      </button>
                                    </div>
                                  </div>
                                </div>
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
            {/* Modal Themes end */}
            {/* Modal Sizes start */}
            <section id="modal-sizes">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Modal Sizes</h4>
                </div>
                <div className="card-content">
                  <div className="card-body">
                    <p>
                      Add class{" "}
                      <code>
                        .modal-{"{"}sm|lg|xl|full{"}"}
                      </code>{" "}
                      with <code>.modal-dialog</code> to create a modal with
                      different size.
                    </p>
                    <div className="row">
                      <div className="col-12">
                        {/*Modal sm size */}
                        <div className="me-1 mb-1 d-inline-block">
                          {/* Button trigger for small size modal modal */}
                          <button
                            type="button"
                            className="btn btn-outline-warning"
                            data-bs-toggle="modal"
                            data-bs-target="#small"
                          >
                            Small Modal
                          </button>
                          {/*small size modal */}
                          <div
                            className="modal fade text-left"
                            id="small"
                            tabIndex={-1}
                            role="dialog"
                            aria-labelledby="myModalLabel19"
                            aria-hidden="true"
                          >
                            <div
                              className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-sm"
                              role="document"
                            >
                              <div className="modal-content">
                                <div className="modal-header">
                                  <h4
                                    className="modal-title"
                                    id="myModalLabel19"
                                  >
                                    Small Modal
                                  </h4>
                                  <button
                                    type="button"
                                    className="close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                  >
                                    <i data-feather="x" />
                                  </button>
                                </div>
                                <div className="modal-body">
                                  Biscuit chocolate cake gummies. Lollipop I
                                  love macaroon bear claw caramels. I love
                                  marshmallow tiramisu I love fruitcake I love
                                  gummi bears. Carrot cake topping liquorice.
                                  Pudding caramels liquorice sweet I love. Donut
                                  powder cupcake ice cream tootsie roll jelly.
                                </div>
                                <div className="modal-footer">
                                  <button
                                    type="button"
                                    className="btn btn-light-secondary btn-sm"
                                    data-bs-dismiss="modal"
                                  >
                                    <i className="bx bx-x d-block d-sm-none" />
                                    <span className="d-sm-block d-none">
                                      Close
                                    </span>
                                  </button>
                                  <button
                                    type="button"
                                    className="btn btn-primary ml-1 btn-sm"
                                    data-bs-dismiss="modal"
                                  >
                                    <i className="bx bx-check d-block d-sm-none" />
                                    <span className="d-sm-block d-none">
                                      Accept
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/*Modal default md size */}
                        <div className="me-1 mb-1 d-inline-block">
                          {/* Button trigger for default modal */}
                          <button
                            type="button"
                            className="btn btn-outline-warning"
                            data-bs-toggle="modal"
                            data-bs-target="#defaultSize"
                          >
                            Default Modal
                          </button>
                          {/*Default size Modal */}
                          <div
                            className="modal fade text-left"
                            id="defaultSize"
                            tabIndex={-1}
                            role="dialog"
                            aria-labelledby="myModalLabel18"
                            aria-hidden="true"
                          >
                            <div
                              className="modal-dialog modal-dialog-centered modal-dialog-scrollable"
                              role="document"
                            >
                              <div className="modal-content">
                                <div className="modal-header">
                                  <h4
                                    className="modal-title"
                                    id="myModalLabel18"
                                  >
                                    Default Modal
                                  </h4>
                                  <button
                                    type="button"
                                    className="close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                  >
                                    <i data-feather="x" />
                                  </button>
                                </div>
                                <div className="modal-body">
                                  I love candy candy cake powder I love icing
                                  ice cream pastry. Biscuit lemon drops sesame
                                  snaps. Topping biscuit croissant gummi bears
                                  jelly beans cake cake bear claw muffin. Lemon
                                  drops oat cake pastry bear claw liquorice
                                  lemon drops.
                                </div>
                                <div className="modal-footer">
                                  <button
                                    type="button"
                                    className="btn btn-light-secondary"
                                    data-bs-dismiss="modal"
                                  >
                                    <i className="bx bx-x d-block d-sm-none" />
                                    <span className="d-none d-sm-block">
                                      Close
                                    </span>
                                  </button>
                                  <button
                                    type="button"
                                    className="btn btn-primary ml-1"
                                    data-bs-dismiss="modal"
                                  >
                                    <i className="bx bx-check d-block d-sm-none" />
                                    <span className="d-none d-sm-block">
                                      Accept
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/*Modal lg size */}
                        <div className="me-1 mb-1 d-inline-block">
                          {/* Button trigger for large size modal */}
                          <button
                            type="button"
                            className="btn btn-outline-warning"
                            data-bs-toggle="modal"
                            data-bs-target="#large"
                          >
                            Large Modal
                          </button>
                          {/*large size Modal */}
                          <div
                            className="modal fade text-left"
                            id="large"
                            tabIndex={-1}
                            role="dialog"
                            aria-labelledby="myModalLabel17"
                            aria-hidden="true"
                          >
                            <div
                              className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg"
                              role="document"
                            >
                              <div className="modal-content">
                                <div className="modal-header">
                                  <h4
                                    className="modal-title"
                                    id="myModalLabel17"
                                  >
                                    Large Modal
                                  </h4>
                                  <button
                                    type="button"
                                    className="close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                  >
                                    <i data-feather="x" />
                                  </button>
                                </div>
                                <div className="modal-body">
                                  I love tart cookie cupcake. I love chupa chups
                                  biscuit. I love marshmallow apple pie wafer
                                  liquorice. Marshmallow cotton candy chocolate.
                                  Apple pie muffin tart. Marshmallow halvah pie
                                  marzipan lemon drops jujubes. Macaroon sugar
                                  plum cake icing toffee.
                                </div>
                                <div className="modal-footer">
                                  <button
                                    type="button"
                                    className="btn btn-light-secondary"
                                    data-bs-dismiss="modal"
                                  >
                                    <i className="bx bx-x d-block d-sm-none" />
                                    <span className="d-none d-sm-block">
                                      Close
                                    </span>
                                  </button>
                                  <button
                                    type="button"
                                    className="btn btn-primary ml-1"
                                    data-bs-dismiss="modal"
                                  >
                                    <i className="bx bx-check d-block d-sm-none" />
                                    <span className="d-none d-sm-block">
                                      Accept
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/*Modal Xl size */}
                        <div className="me-1 mb-1 d-inline-block">
                          {/* Button trigger for Extra Large  modal */}
                          <button
                            type="button"
                            className="btn btn-outline-warning"
                            data-bs-toggle="modal"
                            data-bs-target="#xlarge"
                          >
                            Extra Large Modal
                          </button>
                          {/*Extra Large Modal */}
                          <div
                            className="modal fade text-left w-100"
                            id="xlarge"
                            tabIndex={-1}
                            role="dialog"
                            aria-labelledby="myModalLabel16"
                            aria-hidden="true"
                          >
                            <div
                              className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl"
                              role="document"
                            >
                              <div className="modal-content">
                                <div className="modal-header">
                                  <h4
                                    className="modal-title"
                                    id="myModalLabel16"
                                  >
                                    Extra Large Modal
                                  </h4>
                                  <button
                                    type="button"
                                    className="close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                  >
                                    <i data-feather="x" />
                                  </button>
                                </div>
                                <div className="modal-body">
                                  Cake cupcake sugar plum. Sesame snaps pudding
                                  cupcake candy canes icing cheesecake. Sweet
                                  roll pudding lollipop apple pie gummies
                                  dragée. Chocolate bar cookie caramels I love
                                  lollipop ice cream tiramisu lollipop sweet.
                                </div>
                                <div className="modal-footer">
                                  <button
                                    type="button"
                                    className="btn btn-light-secondary"
                                    data-bs-dismiss="modal"
                                  >
                                    <i className="bx bx-x d-block d-sm-none" />
                                    <span className="d-none d-sm-block">
                                      Close
                                    </span>
                                  </button>
                                  <button
                                    type="button"
                                    className="btn btn-primary ml-1"
                                    data-bs-dismiss="modal"
                                  >
                                    <i className="bx bx-check d-block d-sm-none" />
                                    <span className="d-none d-sm-block">
                                      Accept
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/*Modal full size */}
                        <div className="me-1 mb-1 d-inline-block">
                          {/* Button trigger for full size modal */}
                          <button
                            type="button"
                            className="btn btn-outline-warning"
                            data-bs-toggle="modal"
                            data-bs-target="#full-scrn"
                          >
                            Full Screen Modal
                          </button>
                          {/* full size modal*/}
                          <div
                            className="modal fade text-left w-100"
                            id="full-scrn"
                            tabIndex={-1}
                            role="dialog"
                            aria-labelledby="myModalLabel20"
                            aria-hidden="true"
                          >
                            <div
                              className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-full"
                              role="document"
                            >
                              <div className="modal-content">
                                <div className="modal-header">
                                  <h4
                                    className="modal-title"
                                    id="myModalLabel20"
                                  >
                                    Full Screen Modal
                                  </h4>
                                  <button
                                    type="button"
                                    className="close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                  >
                                    <i data-feather="x" />
                                  </button>
                                </div>
                                <div className="modal-body">
                                  Cake cupcake sugar plum. Sesame snaps pudding
                                  cupcake candy canes icing cheesecake. Sweet
                                  roll pudding lollipop apple pie gummies
                                  dragée. Chocolate bar cookie caramels I love
                                  lollipop ice cream tiramisu lollipop sweet.
                                </div>
                                <div className="modal-footer">
                                  <button
                                    type="button"
                                    className="btn btn-light-secondary"
                                    data-bs-dismiss="modal"
                                  >
                                    <i className="bx bx-x d-block d-sm-none" />
                                    <span className="d-none d-sm-block">
                                      Close
                                    </span>
                                  </button>
                                  <button
                                    type="button"
                                    className="btn btn-primary ml-1"
                                    data-bs-dismiss="modal"
                                  >
                                    <i className="bx bx-check d-block d-sm-none" />
                                    <span className="d-none d-sm-block">
                                      Accept
                                    </span>
                                  </button>
                                </div>
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
            {/* Modal Sizes end */}
            {/* Form and scrolling Components start */}
            <section id="form-and-scrolling-components">
              <div className="row">
                <div className="col-md-6 col-12">
                  <div className="card">
                    <div className="card-content">
                      <div className="card-body">
                        <div className="form-group">
                          <h4 className="card-title">Modal with Login Form</h4>
                          <p> Created Simple Login Form.</p>
                          {/* Button trigger for login form modal */}
                          <button
                            type="button"
                            className="btn btn-outline-success"
                            data-bs-toggle="modal"
                            data-bs-target="#inlineForm"
                          >
                            Launch Modal
                          </button>
                          {/*login form Modal */}
                          <div
                            className="modal fade text-left"
                            id="inlineForm"
                            tabIndex={-1}
                            role="dialog"
                            aria-labelledby="myModalLabel33"
                            aria-hidden="true"
                          >
                            <div
                              className="modal-dialog modal-dialog-centered modal-dialog-scrollable"
                              role="document"
                            >
                              <div className="modal-content">
                                <div className="modal-header">
                                  <h4
                                    className="modal-title"
                                    id="myModalLabel33"
                                  >
                                    Login Form{" "}
                                  </h4>
                                  <button
                                    type="button"
                                    className="close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                  >
                                    <i data-feather="x" />
                                  </button>
                                </div>
                                <form action="#">
                                  <div className="modal-body">
                                    <label>Email: </label>
                                    <div className="form-group">
                                      <input
                                        type="text"
                                        placeholder="Email Address"
                                        className="form-control"
                                      />
                                    </div>
                                    <label>Password: </label>
                                    <div className="form-group">
                                      <input
                                        type="password"
                                        placeholder="Password"
                                        className="form-control"
                                      />
                                    </div>
                                  </div>
                                  <div className="modal-footer">
                                    <button
                                      type="button"
                                      className="btn btn-light-secondary"
                                      data-bs-dismiss="modal"
                                    >
                                      <i className="bx bx-x d-block d-sm-none" />
                                      <span className="d-none d-sm-block">
                                        Close
                                      </span>
                                    </button>
                                    <button
                                      type="button"
                                      className="btn btn-primary ml-1"
                                      data-bs-dismiss="modal"
                                    >
                                      <i className="bx bx-check d-block d-sm-none" />
                                      <span className="d-none d-sm-block">
                                        login
                                      </span>
                                    </button>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Scrolling long Content</h4>
                    </div>
                    <div className="card-content">
                      <div className="card-body">
                        <p>
                          If your content is longer you the page will
                          autmatically adopt a scrollbar
                        </p>
                        {/* Button trigger for scrollbar modal */}
                        <button
                          type="button"
                          className="btn btn-outline-success"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModalLong"
                        >
                          Launch demo modal
                        </button>
                        {/*scrollbar Modal */}
                        <div
                          className="modal fade"
                          id="exampleModalLong"
                          tabIndex={-1}
                          role="dialog"
                          aria-labelledby="exampleModalLongTitle"
                          aria-hidden="true"
                        >
                          <div className="modal-dialog" role="document">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h5
                                  className="modal-title"
                                  id="exampleModalLongTitle"
                                >
                                  Scrolling Modal
                                </h5>
                                <button
                                  type="button"
                                  className="close"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                >
                                  <i data-feather="x" />
                                </button>
                              </div>
                              <div className="modal-body">
                                <p>
                                  Biscuit powder jelly beans. Lollipop candy
                                  canes croissant icing chocolate cake. Cake
                                  fruitcake powder pudding pastry.
                                </p>
                                <p>
                                  Tootsie roll oat cake I love bear claw I love
                                  caramels caramels halvah chocolate bar. Cotton
                                  candy gummi bears pudding pie apple pie
                                  cookie. Cheesecake jujubes lemon drops danish
                                  dessert I love caramels powder.
                                </p>
                                <p>
                                  Chocolate cake icing tiramisu liquorice toffee
                                  donut sweet roll cake. Cupcake dessert icing
                                  dragée dessert. Liquorice jujubes cake tart
                                  pie donut. Cotton candy candy canes lollipop
                                  liquorice chocolate marzipan muffin pie
                                  liquorice.
                                </p>
                                <p>
                                  Powder cookie jelly beans sugar plum ice
                                  cream. Candy canes I love powder sugar plum
                                  tiramisu. Liquorice pudding chocolate cake
                                  cupcake topping biscuit. Lemon drops apple pie
                                  sesame snaps tootsie roll carrot cake soufflé
                                  halvah. Biscuit powder jelly beans. Lollipop
                                  candy canes croissant icing chocolate cake.
                                  Cake fruitcake powder pudding pastry.
                                </p>
                                <p>
                                  Tootsie roll oat cake I love bear claw I love
                                  caramels caramels halvah chocolate bar. Cotton
                                  candy gummi bears pudding pie apple pie
                                  cookie. Cheesecake jujubes lemon drops danish
                                  dessert I love caramels powder
                                </p>
                                <p>
                                  Chocolate cake icing tiramisu liquorice toffee
                                  donut sweet roll cake. Cupcake dessert icing
                                  dragée dessert. Liquorice jujubes cake tart
                                  pie donut. Cotton candy candy canes lollipop
                                  liquorice chocolate marzipan muffin pie
                                  liquorice.
                                </p>
                                <p>
                                  Powder cookie jelly beans sugar plum ice
                                  cream. Candy canes I love powder sugar plum
                                  tiramisu. Liquorice pudding chocolate cake
                                  cupcake topping biscuit. Lemon drops apple pie
                                  sesame snaps tootsie roll carrot cake soufflé
                                  halvah. Biscuit powder jelly beans. Lollipop
                                  candy canes croissant icing chocolate cake.
                                  Cake fruitcake powder pudding pastry.
                                </p>
                                <p>
                                  Tootsie roll oat cake I love bear claw I love
                                  caramels caramels halvah chocolate bar. Cotton
                                  candy gummi bears pudding pie apple pie
                                  cookie. Cheesecake jujubes lemon drops danish
                                  dessert I love caramels powder.
                                </p>
                                <p>
                                  Chocolate cake icing tiramisu liquorice toffee
                                  donut sweet roll cake. Cupcake dessert icing
                                  dragée dessert. Liquorice jujubes cake tart
                                  pie donut. Cotton candy candy canes lollipop
                                  liquorice chocolate marzipan muffin pie
                                  liquorice.
                                </p>
                                <p>
                                  Powder cookie jelly beans sugar plum ice
                                  cream. Candy canes I love powder sugar plum
                                  tiramisu. Liquorice pudding chocolate cake
                                  cupcake topping biscuit. Lemon drops apple pie
                                  sesame snaps tootsie roll carrot cake soufflé
                                  halvah. Biscuit powder jelly beans. Lollipop
                                  candy canes croissant icing chocolate cake.
                                  Cake fruitcake powder pudding pastry.
                                </p>
                                <p>
                                  Tootsie roll oat cake I love bear claw I love
                                  caramels caramels halvah chocolate bar. Cotton
                                  candy gummi bears pudding pie apple pie
                                  cookie. Cheesecake jujubes lemon drops danish
                                  dessert I love caramels powder.
                                </p>
                                <p>
                                  Chocolate cake icing tiramisu liquorice toffee
                                  donut sweet roll cake. Cupcake dessert icing
                                  dragée dessert. Liquorice jujubes cake tart
                                  pie donut. Cotton candy candy canes lollipop
                                  liquorice chocolate marzipan muffin pie
                                  liquorice.
                                </p>
                                <p>
                                  Powder cookie jelly beans sugar plum ice
                                  cream. Candy canes I love powder sugar plum
                                  tiramisu. Liquorice pudding chocolate cake
                                  cupcake topping biscuit. Lemon drops apple pie
                                  sesame snaps tootsie roll carrot cake soufflé
                                  halvah.
                                </p>
                              </div>
                              <div className="modal-footer">
                                <button
                                  type="button"
                                  className="btn btn-light-secondary"
                                  data-bs-dismiss="modal"
                                >
                                  <i className="bx bx-x d-block d-sm-none" />
                                  <span className="d-none d-sm-block">
                                    Close
                                  </span>
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-primary ml-1"
                                  data-bs-dismiss="modal"
                                >
                                  <i className="bx bx-check d-block d-sm-none" />
                                  <span className="d-none d-sm-block">
                                    Accept
                                  </span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">
                        Scrolling long Content Inside Modal
                      </h4>
                    </div>
                    <div className="card-content">
                      <div className="card-body">
                        <p>
                          You can also create a scrollable modal that allows
                          scroll the modal body by adding
                          <code>.modal-dialog-scrollable</code> to{" "}
                          <code>.modal-dialog</code>.
                        </p>
                        {/* Button trigger for scrolling content modal */}
                        <button
                          type="button"
                          className="btn btn-outline-success"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModalScrollable"
                        >
                          Launch demo modal
                        </button>
                        {/*scrolling content Modal */}
                        <div
                          className="modal fade"
                          id="exampleModalScrollable"
                          tabIndex={-1}
                          role="dialog"
                          aria-labelledby="exampleModalScrollableTitle"
                          aria-hidden="true"
                        >
                          <div
                            className="modal-dialog modal-dialog-scrollable"
                            role="document"
                          >
                            <div className="modal-content">
                              <div className="modal-header">
                                <h5
                                  className="modal-title"
                                  id="exampleModalScrollableTitle"
                                >
                                  Scrolling long Content
                                </h5>
                                <button
                                  type="button"
                                  className="close"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                >
                                  <i data-feather="x" />
                                </button>
                              </div>
                              <div className="modal-body">
                                <p>
                                  Biscuit powder jelly beans. Lollipop candy
                                  canes croissant icing chocolate cake. Cake
                                  fruitcake powder pudding pastry
                                </p>
                                <p>
                                  Tootsie roll oat cake I love bear claw I love
                                  caramels caramels halvah chocolate bar. Cotton
                                  candy gummi bears pudding pie apple pie
                                  cookie. Cheesecake jujubes lemon drops danish
                                  dessert I love caramels powder
                                </p>
                                <p>
                                  Chocolate cake icing tiramisu liquorice toffee
                                  donut sweet roll cake. Cupcake dessert icing
                                  dragée dessert. Liquorice jujubes cake tart
                                  pie donut. Cotton candy candy canes lollipop
                                  liquorice chocolate marzipan muffin pie
                                  liquorice.
                                </p>
                                <p>
                                  Powder cookie jelly beans sugar plum ice
                                  cream. Candy canes I love powder sugar plum
                                  tiramisu. Liquorice pudding chocolate cake
                                  cupcake topping biscuit. Lemon drops apple pie
                                  sesame snaps tootsie roll carrot cake soufflé
                                  halvah. Biscuit powder jelly beans. Lollipop
                                  candy canes croissant icing chocolate cake.
                                  Cake fruitcake powder pudding pastry.
                                </p>
                                <p>
                                  Tootsie roll oat cake I love bear claw I love
                                  caramels caramels halvah chocolate bar. Cotton
                                  candy gummi bears pudding pie apple pie
                                  cookie. Cheesecake jujubes lemon drops danish
                                  dessert I love caramels powder.
                                </p>
                                <p>
                                  dragée dessert. Liquorice jujubes cake tart
                                  pie donut. Cotton candy candy canes lollipop
                                  liquorice chocolate marzipan muffin pie
                                  liquorice.
                                </p>
                                <p>
                                  Powder cookie jelly beans sugar plum ice
                                  cream. Candy canes I love powder sugar plum
                                  tiramisu. Liquorice pudding chocolate cake
                                  cupcake topping biscuit. Lemon drops apple pie
                                  sesame snaps tootsie roll carrot cake soufflé
                                  halvah.Biscuit powder jelly beans. Lollipop
                                  candy canes croissant icing chocolate cake.
                                  Cake fruitcake powder pudding pastry.
                                </p>
                                <p>
                                  Tootsie roll oat cake I love bear claw I love
                                  caramels caramels halvah chocolate bar. Cotton
                                  candy gummi bears pudding pie apple pie
                                  cookie. Cheesecake jujubes lemon drops danish
                                  dessert I love caramels powder.
                                </p>
                                <p>
                                  Chocolate cake icing tiramisu liquorice toffee
                                  donut sweet roll cake. Cupcake dessert icing
                                  dragée dessert. Liquorice jujubes cake tart
                                  pie donut. Cotton candy candy canes lollipop
                                  liquorice chocolate marzipan muffin pie
                                  liquorice.
                                </p>
                                <p>
                                  Powder cookie jelly beans sugar plum ice
                                  cream. Candy canes I love powder sugar plum
                                  tiramisu. Liquorice pudding chocolate cake
                                  cupcake topping biscuit. Lemon drops apple pie
                                  sesame snaps tootsie roll carrot cake soufflé
                                  halvah. Biscuit powder jelly beans. Lollipop
                                  candy canes croissant icing chocolate cake.
                                  Cake fruitcake powder pudding pastry.
                                </p>
                                <p>
                                  Tootsie roll oat cake I love bear claw I love
                                  caramels caramels halvah chocolate bar. Cotton
                                  candy gummi bears pudding pie apple pie
                                  cookie. Cheesecake jujubes lemon drops danish
                                  dessert I love caramels powder.
                                </p>
                                <p>
                                  Chocolate cake icing tiramisu liquorice toffee
                                  donut sweet roll cake. Cupcake dessert icing
                                  dragée dessert. Liquorice jujubes cake tart
                                  pie donut. Cotton candy candy canes lollipop
                                  liquorice chocolate marzipan muffin pie
                                  liquorice.
                                </p>
                                <p>
                                  Powder cookie jelly beans sugar plum ice
                                  cream. Candy canes I love powder sugar plum
                                  tiramisu. Liquorice pudding chocolate cake
                                  cupcake topping biscuit. Lemon drops apple pie
                                  sesame snaps tootsie roll carrot cake soufflé
                                  halvah.
                                </p>
                              </div>
                              <div className="modal-footer">
                                <button
                                  type="button"
                                  className="btn btn-light-secondary"
                                  data-bs-dismiss="modal"
                                >
                                  <i className="bx bx-x d-block d-sm-none" />
                                  <span className="d-none d-sm-block">
                                    Close
                                  </span>
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-primary ml-1"
                                  data-bs-dismiss="modal"
                                >
                                  <i className="bx bx-check d-block d-sm-none" />
                                  <span className="d-none d-sm-block">
                                    Accept
                                  </span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Disabled Animation</h4>
                    </div>
                    <div className="card-content">
                      <div className="card-body">
                        <p>
                          For modals that simply appear rather than fade in to
                          view, remove the
                          <code>.fade</code>
                          class from your modal markup.
                        </p>
                        {/* Button trigger for disabled animation modal */}
                        <button
                          type="button"
                          className="btn btn-outline-success"
                          data-bs-toggle="modal"
                          data-bs-target="#animation"
                        >
                          Launch demo modal
                        </button>
                        {/* disabled animation Modal */}
                        <div
                          className="modal text-left"
                          id="animation"
                          tabIndex={-1}
                          role="dialog"
                          aria-labelledby="myModalLabel6"
                          aria-hidden="true"
                        >
                          <div
                            className="modal-dialog modal-dialog-centered modal-dialog-scrollable"
                            role="document"
                          >
                            <div className="modal-content">
                              <div className="modal-header">
                                <h4 className="modal-title" id="myModalLabel6">
                                  Disabled Animation
                                </h4>
                                <button
                                  type="button"
                                  className="close"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                >
                                  <i data-feather="x" />
                                </button>
                              </div>
                              <div className="modal-body">
                                <p>
                                  Chocolate bar jelly dragée cupcake chocolate
                                  bar I love donut liquorice. Powder I love
                                  marzipan donut candy canes jelly-o. Dragée
                                  liquorice apple pie candy biscuit danish lemon
                                  drops sugar plum.
                                </p>
                                <div
                                  className="alert bg-rgba-success"
                                  role="alert"
                                >
                                  <span className="text-bold-600">
                                    Well done!
                                  </span>
                                  You successfully read this important alert
                                  message.
                                </div>
                              </div>
                              <div className="modal-footer">
                                <button
                                  type="button"
                                  className="btn btn-light-secondary"
                                  data-bs-dismiss="modal"
                                >
                                  <i className="bx bx-x d-block d-sm-none" />
                                  <span className="d-none d-sm-block">
                                    Close
                                  </span>
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-primary ml-1"
                                  data-bs-dismiss="modal"
                                >
                                  <i className="bx bx-check d-block d-sm-none" />
                                  <span className="d-none d-sm-block">
                                    Accept
                                  </span>
                                </button>
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
            {/* Form and scrolling Components end */}
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

export default Modal;
