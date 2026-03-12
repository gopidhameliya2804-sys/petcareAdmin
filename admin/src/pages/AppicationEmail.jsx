import React from 'react'
import Sidebar from '../common/Sidebar'

function AppicationEmail() {
  return (
    <div id="app">
      <Sidebar />
      <div id="main">
        <div className="page-heading email-application">
          <div className="page-title">
            <div className="row">
              <div className="col-12 col-md-6 order-md-1 order-last">
                <h3>Email Application</h3>
                <p className="text-subtitle text-muted">
                  An application for user to check email inbox
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
                    <li className="breadcrumb-item active" aria-current="page">
                      Email Application
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
          <section className="section content-area-wrapper">
            <div className="sidebar-left">
              <div className="sidebar">
                <div className="sidebar-content email-app-sidebar d-flex">
                  {/* sidebar close icon */}
                  <span className="sidebar-close-icon">
                    <i className="bx bx-x" />
                  </span>
                  {/* sidebar close icon */}
                  <div className="email-app-menu">
                    <div className="form-group form-group-compose">
                      {/* compose button  */}
                      <button
                        type="button"
                        className="btn btn-primary btn-block my-4 compose-btn"
                      >
                        <i className="bx bx-plus" />
                        Compose
                      </button>
                    </div>
                    <div className="sidebar-menu-list ps">
                      {/* sidebar menu  */}
                      <div className="list-group list-group-messages">
                        <a
                          href="#"
                          className="list-group-item pt-0 active"
                          id="inbox-menu"
                        >
                          <div className="fonticon-wrap d-inline me-3">
                            <svg
                              className="bi"
                              width="1.5em"
                              height="1.5em"
                              fill="currentColor"
                            >
                              <use xlinkHref="assets/vendors/bootstrap-icons/bootstrap-icons.svg#envelope" />
                            </svg>
                          </div>
                          Inbox
                          <span className="badge badge-light-primary badge-pill badge-round float-right mt-50">
                            5
                          </span>
                        </a>
                        <a href="#" className="list-group-item">
                          <div className="fonticon-wrap d-inline me-3">
                            <svg
                              className="bi"
                              width="1.5em"
                              height="1.5em"
                              fill="currentColor"
                            >
                              <use xlinkHref="assets/vendors/bootstrap-icons/bootstrap-icons.svg#archive" />
                            </svg>
                          </div>
                          Sent
                        </a>
                        <a href="#" className="list-group-item">
                          <div className="fonticon-wrap d-inline me-3">
                            <svg
                              className="bi"
                              width="1.5em"
                              height="1.5em"
                              fill="currentColor"
                            >
                              <use xlinkHref="assets/vendors/bootstrap-icons/bootstrap-icons.svg#pencil" />
                            </svg>
                          </div>{" "}
                          Draft
                        </a>
                        <a href="#" className="list-group-item">
                          <div className="fonticon-wrap d-inline me-3">
                            <svg
                              className="bi"
                              width="1.5em"
                              height="1.5em"
                              fill="currentColor"
                            >
                              <use xlinkHref="assets/vendors/bootstrap-icons/bootstrap-icons.svg#star" />
                            </svg>
                          </div>
                          Starred
                        </a>
                        <a href="#" className="list-group-item">
                          <div className="fonticon-wrap d-inline me-3">
                            <svg
                              className="bi"
                              width="1.5em"
                              height="1.5em"
                              fill="currentColor"
                            >
                              <use xlinkHref="assets/vendors/bootstrap-icons/bootstrap-icons.svg#info-circle" />
                            </svg>
                          </div>
                          Spam
                          <span className="badge badge-light-danger badge-pill badge-round float-right mt-50">
                            3
                          </span>
                        </a>
                        <a href="#" className="list-group-item">
                          <div className="fonticon-wrap d-inline me-3">
                            <svg
                              className="bi"
                              width="1.5em"
                              height="1.5em"
                              fill="currentColor"
                            >
                              <use xlinkHref="assets/vendors/bootstrap-icons/bootstrap-icons.svg#trash" />
                            </svg>
                          </div>
                          Trash
                        </a>
                      </div>
                      {/* sidebar menu  end*/}
                      {/* sidebar label start */}
                      <label className="sidebar-label">Labels</label>
                      <div className="list-group list-group-labels">
                        <a
                          href="#"
                          className="list-group-item d-flex justify-content-between align-items-center"
                        >
                          Product
                          <span className="bullet bullet-success bullet-sm" />
                        </a>
                        <a
                          href="#"
                          className="list-group-item d-flex justify-content-between align-items-center"
                        >
                          Work
                          <span className="bullet bullet-primary bullet-sm" />
                        </a>
                        <a
                          href="#"
                          className="list-group-item d-flex justify-content-between align-items-center"
                        >
                          Misc
                          <span className="bullet bullet-warning bullet-sm" />
                        </a>
                        <a
                          href="#"
                          className="list-group-item d-flex justify-content-between align-items-center"
                        >
                          Family
                          <span className="bullet bullet-danger bullet-sm" />
                        </a>
                        <a
                          href="#"
                          className="list-group-item d-flex justify-content-between align-items-center"
                        >
                          Design
                          <span className="bullet bullet-info bullet-sm" />
                        </a>
                      </div>
                      {/* sidebar label end */}
                      <div
                        className="ps__rail-x"
                        style={{ left: 0, bottom: 0 }}
                      >
                        <div
                          className="ps__thumb-x"
                          tabIndex={0}
                          style={{ left: 0, width: 0 }}
                        />
                      </div>
                      <div className="ps__rail-y" style={{ top: 0, right: 0 }}>
                        <div
                          className="ps__thumb-y"
                          tabIndex={0}
                          style={{ top: 0, height: 0 }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* User new mail right area */}
                <div className="compose-new-mail-sidebar ps">
                  <div className="card shadow-none quill-wrapper p-0">
                    <div className="card-header">
                      <h3 className="card-title" id="emailCompose">
                        New Message
                      </h3>
                      <button type="button" className="close close-icon">
                        <i className="bx bx-x" />
                      </button>
                    </div>
                    {/* form start */}
                    <form action="#" id="compose-form">
                      <div className="card-content">
                        <div className="card-body pt-0">
                          <div className="form-group pb-50">
                            <label htmlFor="emailfrom">from</label>
                            <input
                              type="text"
                              id="emailfrom"
                              className="form-control"
                              placeholder="user@example.com"
                              disabled
                            />
                          </div>
                          <div className="form-label-group">
                            <input
                              type="email"
                              id="emailTo"
                              className="form-control"
                              placeholder="To"
                              required
                            />
                            <label htmlFor="emailTo">To</label>
                          </div>
                          <div className="form-label-group">
                            <input
                              type="text"
                              id="emailSubject"
                              className="form-control"
                              placeholder="Subject"
                            />
                            <label htmlFor="emailSubject">Subject</label>
                          </div>
                          <div className="form-label-group">
                            <input
                              type="text"
                              id="emailCC"
                              className="form-control"
                              placeholder="CC"
                            />
                            <label htmlFor="emailCC">CC</label>
                          </div>
                          <div className="form-label-group">
                            <input
                              type="text"
                              id="emailBCC"
                              className="form-control"
                              placeholder="BCC"
                            />
                            <label htmlFor="emailBCC">BCC</label>
                          </div>
                          {/* Compose mail Quill editor */}
                          <div className="snow-container border rounded p-50">
                            <div className="compose-editor mx-75 ql-container ql-snow">
                              <div
                                className="ql-editor ql-blank"
                                data-gramm="false"
                                data-placeholder="Type something....."
                                contentEditable="true"
                              >
                                <p>
                                  <br />
                                </p>
                              </div>
                              <div
                                className="ql-clipboard"
                                tabIndex={-1}
                                contentEditable="true"
                              />
                              <div className="ql-tooltip ql-hidden">
                                <a
                                  className="ql-preview"
                                  target="_blank"
                                  href="about:blank"
                                />
                                <input
                                  type="text"
                                  data-formula="e=mc^2"
                                  data-link="https://quilljs.com"
                                  data-video="Embed URL"
                                />
                                <a className="ql-action" />
                                <a className="ql-remove" />
                              </div>
                            </div>
                            <div className="d-flex justify-content-end">
                              <div className="compose-quill-toolbar pb-0 ql-toolbar ql-snow">
                                <span className="ql-formats mr-0">
                                  <button className="ql-bold" type="button">
                                    <svg viewBox="0 0 18 18">
                                      <path
                                        className="ql-stroke"
                                        d="M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z"
                                      ></path>
                                      <path
                                        className="ql-stroke"
                                        d="M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z"
                                      ></path>
                                    </svg>
                                  </button>
                                  <button className="ql-italic" type="button">
                                    <svg viewBox="0 0 18 18">
                                      <line
                                        className="ql-stroke"
                                        x1={7}
                                        x2={13}
                                        y1={4}
                                        y2={4}
                                      />
                                      <line
                                        className="ql-stroke"
                                        x1={5}
                                        x2={11}
                                        y1={14}
                                        y2={14}
                                      ></line>
                                      <line
                                        className="ql-stroke"
                                        x1={8}
                                        x2={10}
                                        y1={14}
                                        y2={4}
                                      ></line>
                                    </svg>
                                  </button>
                                  <button
                                    className="ql-underline"
                                    type="button"
                                  >
                                    <svg viewBox="0 0 18 18">
                                      <path
                                        className="ql-stroke"
                                        d="M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3"
                                      ></path>
                                      <rect
                                        className="ql-fill"
                                        height={1}
                                        rx="0.5"
                                        ry="0.5"
                                        width={12}
                                        x={3}
                                        y={15}
                                      />
                                    </svg>
                                  </button>
                                  <button className="ql-link" type="button">
                                    <svg viewBox="0 0 18 18">
                                      <line
                                        className="ql-stroke"
                                        x1={7}
                                        x2={11}
                                        y1={7}
                                        y2={11}
                                      ></line>
                                      <path
                                        className="ql-even ql-stroke"
                                        d="M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z"
                                      ></path>
                                      <path
                                        className="ql-even ql-stroke"
                                        d="M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z"
                                      ></path>
                                    </svg>
                                  </button>
                                  <button className="ql-image" type="button">
                                    <svg viewBox="0 0 18 18">
                                      <rect
                                        className="ql-stroke"
                                        height={10}
                                        width={12}
                                        x={3}
                                        y={4}
                                      ></rect>
                                      <circle
                                        className="ql-fill"
                                        cx={6}
                                        cy={7}
                                        r={1}
                                      />
                                      <polyline
                                        className="ql-even ql-fill"
                                        points="5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12"
                                      ></polyline>
                                    </svg>
                                  </button>
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="form-group mt-2">
                            <div className="custom-file">
                              <input
                                type="file"
                                className="custom-file-input"
                                id="emailAttach"
                              />
                              <label
                                className="custom-file-label"
                                htmlFor="emailAttach"
                              >
                                Attach File
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card-footer d-flex justify-content-end pt-0">
                        <button
                          type="reset"
                          className="btn btn-light-secondary cancel-btn mr-1"
                        >
                          <i className="bx bx-x me-3" />
                          <span className="d-sm-inline d-none">Cancel</span>
                        </button>
                        <button
                          type="submit"
                          className="btn-send btn btn-primary"
                        >
                          <i className="bx bx-send me-3" />{" "}
                          <span className="d-sm-inline d-none">Send</span>
                        </button>
                      </div>
                    </form>
                    {/* form start end*/}
                  </div>
                  <div className="ps__rail-x" style={{ left: 0, bottom: 0 }}>
                    <div
                      className="ps__thumb-x"
                      tabIndex={0}
                      style={{ left: 0, width: 0 }}
                    />
                  </div>
                  <div className="ps__rail-y" style={{ top: 0, right: 0 }}>
                    <div
                      className="ps__thumb-y"
                      tabIndex={0}
                      style={{ top: 0, height: 0 }}
                    />
                  </div>
                </div>
                {/*/ User Chat profile right area */}
              </div>
            </div>
            <div className="content-right">
              <div className="content-overlay" />
              <div className="content-wrapper">
                <div className="content-header row"></div>
                <div className="content-body">
                  {/* email app overlay */}
                  <div className="app-content-overlay" />
                  <div className="email-app-area">
                    {/* Email list Area */}
                    <div className="email-app-list-wrapper">
                      <div className="email-app-list">
                        <div className="email-action">
                          {/* action left start here */}
                          <div className="action-left d-flex align-items-center">
                            {/* select All checkbox */}
                            <div className="checkbox checkbox-shadow checkbox-sm selectAll me-3">
                              <input
                                type="checkbox"
                                id="checkboxsmall"
                                className="form-check-input"
                              />
                              <label htmlFor="checkboxsmall" />
                            </div>
                            {/* delete unread dropdown */}
                            <ul className="list-inline m-0 d-flex">
                              <li className="list-inline-item mail-delete">
                                <button
                                  type="button"
                                  className="btn btn-icon action-icon"
                                  data-toggle="tooltip"
                                >
                                  <span className="fonticon-wrap">
                                    <svg
                                      className="bi"
                                      width="1.5em"
                                      height="1.5em"
                                      fill="currentColor"
                                    >
                                      <use xlinkHref="assets/vendors/bootstrap-icons/bootstrap-icons.svg#trash" />
                                    </svg>
                                  </span>
                                </button>
                              </li>
                              <li className="list-inline-item mail-unread">
                                <button
                                  type="button"
                                  className="btn btn-icon action-icon"
                                >
                                  <span className="fonticon-wrap d-inline">
                                    <svg
                                      className="bi"
                                      width="1.5em"
                                      height="1.5em"
                                      fill="currentColor"
                                    >
                                      <use xlinkHref="assets/vendors/bootstrap-icons/bootstrap-icons.svg#envelope" />
                                    </svg>
                                  </span>
                                </button>
                              </li>
                              <li className="list-inline-item">
                                <div className="dropdown">
                                  <button
                                    type="button"
                                    className="dropdown-toggle btn btn-icon action-icon"
                                    id="folder"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                  >
                                    <span className="fonticon-wrap">
                                      <svg
                                        className="bi"
                                        width="1.5em"
                                        height="1.5em"
                                        fill="currentColor"
                                      >
                                        <use xlinkHref="assets/vendors/bootstrap-icons/bootstrap-icons.svg#folder" />
                                      </svg>
                                    </span>
                                  </button>
                                  <div
                                    className="dropdown-menu dropdown-menu-right"
                                    aria-labelledby="folder"
                                  >
                                    <a className="dropdown-item" href="#">
                                      <i className="bx bx-edit" />
                                      Draft
                                    </a>
                                    <a className="dropdown-item" href="#">
                                      <i className="bx bx-info-circle" />
                                      Spam
                                    </a>
                                    <a className="dropdown-item" href="#">
                                      <i className="bx bx-trash" />
                                      Trash
                                    </a>
                                  </div>
                                </div>
                              </li>
                              <li className="list-inline-item">
                                <div className="dropdown">
                                  <button
                                    type="button"
                                    className="btn btn-icon dropdown-toggle action-icon"
                                    id="tag"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                  >
                                    <span className="fonticon-wrap">
                                      <svg
                                        className="bi"
                                        width="1.5em"
                                        height="1.5em"
                                        fill="currentColor"
                                      >
                                        <use xlinkHref="assets/vendors/bootstrap-icons/bootstrap-icons.svg#tag" />
                                      </svg>
                                    </span>
                                  </button>
                                  <div
                                    className="dropdown-menu dropdown-menu-right"
                                    aria-labelledby="tag"
                                  >
                                    <a
                                      href="#"
                                      className="dropdown-item align-items-center"
                                    >
                                      <span className="bullet bullet-success bullet-sm" />
                                      <span>Product</span>
                                    </a>
                                    <a
                                      href="#"
                                      className="dropdown-item align-items-center"
                                    >
                                      <span className="bullet bullet-primary bullet-sm" />
                                      <span>Work</span>
                                    </a>
                                    <a
                                      href="#"
                                      className="dropdown-item align-items-center"
                                    >
                                      <span className="bullet bullet-warning bullet-sm" />
                                      <span>Misc</span>
                                    </a>
                                    <a
                                      href="#"
                                      className="dropdown-item align-items-center"
                                    >
                                      <span className="bullet bullet-danger bullet-sm" />
                                      <span>Family</span>
                                    </a>
                                    <a
                                      href="#"
                                      className="dropdown-item align-items-center"
                                    >
                                      <span className="bullet bullet-info bullet-sm" />
                                      <span> Design</span>
                                    </a>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                          {/* action left end here */}
                          {/* action right start here */}
                          <div className="action-right d-flex flex-grow-1 align-items-center justify-content-around">
                            {/* search bar  */}
                            <div className="email-fixed-search flex-grow-1">
                              <div className="sidebar-toggle d-block d-lg-none">
                                <i className="bx bx-menu" />
                              </div>
                              <div className="form-group position-relative  mb-0 has-icon-left">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Search email.."
                                />
                                <div className="form-control-icon">
                                  <svg
                                    className="bi"
                                    width="1.5em"
                                    height="1.5em"
                                    fill="currentColor"
                                  >
                                    <use xlinkHref="assets/vendors/bootstrap-icons/bootstrap-icons.svg#search" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                            {/* pagination and page count */}
                            <span className="d-none d-sm-block">
                              1-10 of 653
                            </span>
                            <button className="btn btn-icon email-pagination-prev d-none d-sm-block">
                              <svg
                                className="bi"
                                width="1.5em"
                                height="1.5em"
                                fill="currentColor"
                              >
                                <use xlinkHref="assets/vendors/bootstrap-icons/bootstrap-icons.svg#chevron-left" />
                              </svg>
                            </button>
                            <button className="btn btn-icon email-pagination-next d-none d-sm-block">
                              <svg
                                className="bi"
                                width="1.5em"
                                height="1.5em"
                                fill="currentColor"
                              >
                                <use xlinkHref="assets/vendors/bootstrap-icons/bootstrap-icons.svg#chevron-right" />
                              </svg>
                            </button>
                          </div>
                        </div>
                        {/* / action right */}
                        {/* email user list start */}
                        <div className="email-user-list list-group ps ps--active-y">
                          <ul className="users-list-wrapper media-list">
                            <li className="media mail-read">
                              <div className="user-action">
                                <div className="checkbox-con me-3">
                                  <div className="checkbox checkbox-shadow checkbox-sm">
                                    <input
                                      type="checkbox"
                                      id="checkboxsmall1"
                                      className="form-check-input"
                                    />
                                    <label htmlFor="checkboxsmall1" />
                                  </div>
                                </div>
                                <span className="favorite text-warning">
                                  <svg
                                    className="bi"
                                    width="1.5em"
                                    height="1.5em"
                                    fill="currentColor"
                                  >
                                    <use xlinkHref="assets/vendors/bootstrap-icons/bootstrap-icons.svg#star-fill" />
                                  </svg>
                                </span>
                              </div>
                              <div className="pr-50">
                                <div className="avatar">
                                  <img
                                    src="assets/images/faces/1.jpg"
                                    alt="avtar img holder"
                                  />
                                </div>
                              </div>
                              <div className="media-body">
                                <div className="user-details">
                                  <div className="mail-items">
                                    <span className="list-group-item-text text-truncate">
                                      Open source project public release 👍
                                    </span>
                                  </div>
                                  <div className="mail-meta-item">
                                    <span className="float-right">
                                      <span className="mail-date">4:14 AM</span>
                                    </span>
                                  </div>
                                </div>
                                <div className="mail-message">
                                  <p className="list-group-item-text truncate mb-0">
                                    Hey John, bah kivu decrete epanorthotic
                                    unnotched Argyroneta nonius veratrine
                                    preimaginary
                                  </p>
                                  <div className="mail-meta-item">
                                    <span className="float-right">
                                      <span className="bullet bullet-success bullet-sm" />
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="media mail-read">
                              <div className="user-action">
                                <div className="checkbox-con me-3">
                                  <div className="checkbox checkbox-shadow checkbox-sm">
                                    <input
                                      type="checkbox"
                                      id="checkboxsmall2"
                                      className="form-check-input"
                                    />
                                    <label htmlFor="checkboxsmall2" />
                                  </div>
                                </div>
                                <span className="favorite">
                                  <svg
                                    className="bi"
                                    width="1.5em"
                                    height="1.5em"
                                    fill="currentColor"
                                  >
                                    <use xlinkHref="assets/vendors/bootstrap-icons/bootstrap-icons.svg#star" />
                                  </svg>
                                </span>
                              </div>
                              <div className="pr-50">
                                <div className="avatar">
                                  <img
                                    className="rounded-circle"
                                    src="assets/images/faces/3.jpg"
                                    alt="Generic placeholder image"
                                  />
                                </div>
                              </div>
                              <div className="media-body">
                                <div className="user-details">
                                  <div className="mail-items">
                                    <span className="list-group-item-text text-truncate">
                                      Ecommerce website Paypal integration 😃
                                    </span>
                                  </div>
                                  <div className="mail-meta-item">
                                    <span className="float-right">
                                      <span className="mail-date">2:15 AM</span>
                                    </span>
                                  </div>
                                </div>
                                <div className="mail-message">
                                  <p className="list-group-item-text mb-0 truncate">
                                    We will start the new application
                                    development soon once this will be
                                    completed.
                                  </p>
                                  <div className="mail-meta-item">
                                    <span className="float-right">
                                      <span className="bullet bullet-danger bullet-sm" />
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="media">
                              <div className="user-action">
                                <div className="checkbox-con me-3">
                                  <div className="checkbox checkbox-shadow checkbox-sm">
                                    <input
                                      type="checkbox"
                                      id="checkboxsmall3"
                                      className="form-check-input"
                                    />
                                    <label htmlFor="checkboxsmall3" />
                                  </div>
                                </div>
                                <span className="favorite">
                                  <svg
                                    className="bi"
                                    width="1.5em"
                                    height="1.5em"
                                    fill="currentColor"
                                  >
                                    <use xlinkHref="assets/vendors/bootstrap-icons/bootstrap-icons.svg#star" />
                                  </svg>
                                </span>
                              </div>
                              <div className="pr-50">
                                <div className="avatar">
                                  <img
                                    className="rounded-circle"
                                    src="assets/images/faces/7.jpg"
                                    alt="Generic placeholder image"
                                  />
                                </div>
                              </div>
                              <div className="media-body">
                                <div className="user-details">
                                  <div className="mail-items">
                                    <span className="list-group-item-text text-truncate">
                                      How To Set Intentions That Energize You
                                    </span>
                                  </div>
                                  <div className="mail-meta-item">
                                    <span className="float-right">
                                      <span className="mail-date">2:15 AM</span>
                                    </span>
                                  </div>
                                </div>
                                <div className="mail-message">
                                  <p className="list-group-item-text mb-0 truncate">
                                    I will provide you more details after this
                                    Saturday. Hope that will be fine for you..
                                  </p>
                                  <div className="mail-meta-item">
                                    <span className="float-right d-flex align-items-center">
                                      <i className="bx bx-paperclip me-3" />
                                      <span className="bullet bullet-success bullet-sm" />
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="media">
                              <div className="user-action">
                                <div className="checkbox-con me-3">
                                  <div className="checkbox checkbox-shadow checkbox-sm">
                                    <input
                                      type="checkbox"
                                      id="checkboxsmall4"
                                      className="form-check-input"
                                    />
                                    <label htmlFor="checkboxsmall4" />
                                  </div>
                                </div>
                                <span className="favorite">
                                  <svg
                                    className="bi"
                                    width="1.5em"
                                    height="1.5em"
                                    fill="currentColor"
                                  >
                                    <use xlinkHref="assets/vendors/bootstrap-icons/bootstrap-icons.svg#star" />
                                  </svg>
                                </span>
                              </div>
                              <div className="pr-50">
                                <div className="avatar">
                                  <img
                                    className="rounded-circle"
                                    src="assets/images/faces/5.jpg"
                                    alt="Generic placeholder image"
                                  />
                                </div>
                              </div>
                              <div className="media-body">
                                <div className="user-details">
                                  <div className="mail-items">
                                    <span className="list-group-item-text text-truncate">
                                      Harness The Power Of Words In Your Life
                                    </span>
                                  </div>
                                  <div className="mail-meta-item">
                                    <span className="float-right">
                                      <span className="mail-date">
                                        Yesterday
                                      </span>
                                    </span>
                                  </div>
                                </div>
                                <div className="mail-message">
                                  <p className="list-group-item-text text-truncate mb-0">
                                    When the equation, first to ability the
                                    forwards, the a but travelling, outlines
                                    sentinels bad expand to goodness....
                                  </p>
                                  <div className="mail-meta-item">
                                    <span className="float-right d-flex align-items-center">
                                      <i className="bx bx-paperclip me-3" />
                                      <span className="bullet bullet-warning bullet-sm" />
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="media mail-read">
                              <div className="user-action">
                                <div className="checkbox-con me-3">
                                  <div className="checkbox checkbox-shadow checkbox-sm">
                                    <input
                                      type="checkbox"
                                      id="checkboxsmall5"
                                      className="form-check-input"
                                    />
                                    <label htmlFor="checkboxsmall5" />
                                  </div>
                                </div>
                                <span className="favorite">
                                  <svg
                                    className="bi"
                                    width="1.5em"
                                    height="1.5em"
                                    fill="currentColor"
                                  >
                                    <use xlinkHref="assets/vendors/bootstrap-icons/bootstrap-icons.svg#star" />
                                  </svg>
                                </span>
                              </div>
                              <div className="pr-50">
                                <div className="avatar">
                                  <img
                                    className="rounded-circle"
                                    src="assets/images/faces/3.jpg"
                                    alt="Generic placeholder image"
                                  />
                                </div>
                              </div>
                              <div className="media-body">
                                <div className="user-details">
                                  <div className="mail-items">
                                    <span className="list-group-item-text text-truncate mb-0">
                                      Helen Keller A Teller And A Seller
                                    </span>
                                  </div>
                                  <div className="mail-meta-item">
                                    <span className="float-right">
                                      <span className="mail-date">15 July</span>
                                    </span>
                                  </div>
                                </div>
                                <div className="mail-message">
                                  <p className="list-group-item-text mb-0 truncate">
                                    Thanks for your feedback ! Here's a new
                                    layout for a new Modern Admin theme.
                                  </p>
                                  <div className="mail-meta-item">
                                    <span className="float-right d-flex align-items-center">
                                      <i className="bx bx-paperclip me-3" />
                                      <span className="bullet bullet-warning bullet-sm" />
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="media mail-read">
                              <div className="user-action">
                                <div className="checkbox-con me-3">
                                  <div className="checkbox checkbox-shadow checkbox-sm">
                                    <input
                                      type="checkbox"
                                      id="checkboxsmall6"
                                      className="form-check-input"
                                    />
                                    <label htmlFor="checkboxsmall6" />
                                  </div>
                                </div>
                                <span className="favorite text-warning">
                                  <svg
                                    className="bi"
                                    width="1.5em"
                                    height="1.5em"
                                    fill="currentColor"
                                  >
                                    <use xlinkHref="assets/vendors/bootstrap-icons/bootstrap-icons.svg#star-fill" />
                                  </svg>
                                </span>
                              </div>
                              <div className="pr-50">
                                <div className="avatar">
                                  <img
                                    className="rounded-circle"
                                    src="assets/images/faces/8.jpg"
                                    alt="Generic placeholder image"
                                  />
                                </div>
                              </div>
                              <div className="media-body">
                                <div className="user-details">
                                  <div className="mail-items">
                                    <span className="list-group-item-text text-truncate mb-0">
                                      Use Your Reset Button To Change Your
                                      Vibration 🎉
                                    </span>
                                  </div>
                                  <div className="mail-meta-item">
                                    <span className="float-right">
                                      <span className="mail-date">
                                        12-07-2019
                                      </span>
                                    </span>
                                  </div>
                                </div>
                                <div className="mail-message">
                                  <p className="list-group-item-text mb-0 truncate">
                                    Hey John, bah kivu decrete epanorthotic
                                    unnotched Argyroneta nonius veratrine
                                    preimaginary.
                                  </p>
                                  <div className="mail-meta-item">
                                    <span className="float-right">
                                      <span className="bullet bullet-info bullet-sm" />
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="media">
                              <div className="user-action">
                                <div className="checkbox-con me-3">
                                  <div className="checkbox checkbox-shadow checkbox-sm">
                                    <input
                                      type="checkbox"
                                      id="checkboxsmall7"
                                      className="form-check-input"
                                    />
                                    <label htmlFor="checkboxsmall7" />
                                  </div>
                                </div>
                                <span className="favorite text-warning">
                                  <svg
                                    className="bi"
                                    width="1.5em"
                                    height="1.5em"
                                    fill="currentColor"
                                  >
                                    <use xlinkHref="assets/vendors/bootstrap-icons/bootstrap-icons.svg#star-fill" />
                                  </svg>
                                </span>
                              </div>
                              <div className="pr-50">
                                <div className="avatar">
                                  <img
                                    className="rounded-circle"
                                    src="assets/images/faces/5.jpg"
                                    alt="Generic placeholder image"
                                  />
                                </div>
                              </div>
                              <div className="media-body">
                                <div className="user-details">
                                  <div className="mail-items">
                                    <span className="list-group-item-text text-truncate mb-0">
                                      Harness The Power Of Words In Your Life
                                    </span>
                                  </div>
                                  <div className="mail-meta-item">
                                    <span className="float-right">
                                      <span className="mail-date">
                                        03-29-2019
                                      </span>
                                    </span>
                                  </div>
                                </div>
                                <div className="mail-message">
                                  <p className="list-group-item-text mb-0 truncate">
                                    Hope your like it, or feel free to comment,
                                    feedback or rebound !
                                  </p>
                                  <div className="mail-meta-item">
                                    <span className="float-right">
                                      <span className="bullet bullet-success bullet-sm" />
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="media mail-read">
                              <div className="user-action">
                                <div className="checkbox-con me-3">
                                  <div className="checkbox checkbox-shadow checkbox-sm">
                                    <input
                                      type="checkbox"
                                      id="checkboxsmall8"
                                      className="form-check-input"
                                    />
                                    <label htmlFor="checkboxsmall8" />
                                  </div>
                                </div>
                                <span className="favorite">
                                  <svg
                                    className="bi"
                                    width="1.5em"
                                    height="1.5em"
                                    fill="currentColor"
                                  >
                                    <use xlinkHref="assets/vendors/bootstrap-icons/bootstrap-icons.svg#star" />
                                  </svg>
                                </span>
                              </div>
                              <div className="pr-50">
                                <div className="avatar">
                                  <img
                                    className="rounded-circle"
                                    src="assets/images/faces/8.jpg"
                                    alt="Generic placeholder image"
                                  />
                                </div>
                              </div>
                              <div className="media-body">
                                <div className="user-details">
                                  <div className="mail-items">
                                    <span className="list-group-item-text text-truncate mb-0">
                                      Hypnosis 12 Steps To Acquire Mind Power
                                    </span>
                                  </div>
                                  <div className="mail-meta-item">
                                    <span className="float-right">
                                      <span className="mail-date">19 Jun</span>
                                    </span>
                                  </div>
                                </div>
                                <div className="mail-message">
                                  <p className="list-group-item-text mb-0 truncate">
                                    Monstrous with geared from far and these,
                                    morals, phase rome; Class. Called get amidst
                                    of geared from next...
                                  </p>
                                  <div className="mail-meta-item">
                                    <span className="float-right">
                                      <span className="bullet bullet-danger bullet-sm" />
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="media mail-read">
                              <div className="user-action">
                                <div className="checkbox-con me-3">
                                  <div className="checkbox checkbox-shadow checkbox-sm">
                                    <input
                                      type="checkbox"
                                      id="checkboxsmall9"
                                      className="form-check-input"
                                    />
                                    <label htmlFor="checkboxsmall9" />
                                  </div>
                                </div>
                                <span className="favorite">
                                  <svg
                                    className="bi"
                                    width="1.5em"
                                    height="1.5em"
                                    fill="currentColor"
                                  >
                                    <use xlinkHref="assets/vendors/bootstrap-icons/bootstrap-icons.svg#star" />
                                  </svg>
                                </span>
                              </div>
                              <div className="pr-50">
                                <div className="avatar">
                                  <img
                                    className="rounded-circle"
                                    src="assets/images/faces/6.jpg"
                                    alt="Generic placeholder image"
                                  />
                                </div>
                              </div>
                              <div className="media-body">
                                <div className="user-details">
                                  <div className="mail-items">
                                    <span className="list-group-item-text text-truncate mb-0">
                                      How To Stop Living Your Life On Autopilot
                                    </span>
                                  </div>
                                  <div className="mail-meta-item">
                                    <span className="float-right">
                                      <span className="mail-date">2 Jun</span>
                                    </span>
                                  </div>
                                </div>
                                <div className="mail-message">
                                  <p className="list-group-item-text mb-0 truncate">
                                    Thanks for your feedback ! Here's a new
                                    layout for a new Modern Admin theme.
                                  </p>
                                  <div className="mail-meta-item">
                                    <span className="float-right">
                                      <span className="bullet bullet-info bullet-sm" />
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="media">
                              <div className="user-action">
                                <div className="checkbox-con me-3">
                                  <div className="checkbox checkbox-shadow checkbox-sm">
                                    <input
                                      type="checkbox"
                                      id="checkboxsmall10"
                                      className="form-check-input"
                                    />
                                    <label htmlFor="checkboxsmall10" />
                                  </div>
                                </div>
                                <span className="favorite">
                                  <svg
                                    className="bi"
                                    width="1.5em"
                                    height="1.5em"
                                    fill="currentColor"
                                  >
                                    <use xlinkHref="assets/vendors/bootstrap-icons/bootstrap-icons.svg#star" />
                                  </svg>
                                </span>
                              </div>
                              <div className="pr-50">
                                <div className="avatar">
                                  <img
                                    className="rounded-circle"
                                    src="assets/images/faces/5.jpg"
                                    alt="Generic placeholder image"
                                  />
                                </div>
                              </div>
                              <div className="media-body">
                                <div className="user-details">
                                  <div className="mail-items">
                                    <span className="list-group-item-text text-truncate mb-0">
                                      Invest a few hours contributing to the
                                      software you use and love. 🍕
                                    </span>
                                  </div>
                                  <div className="mail-meta-item">
                                    <span className="float-right">
                                      <span className="mail-date">29 May</span>
                                    </span>
                                  </div>
                                </div>
                                <div className="mail-message">
                                  <p className="list-group-item-text mb-0 truncate">
                                    Hope your like it, or feel free to comment,
                                    feedback or rebound !
                                  </p>
                                  <div className="mail-meta-item">
                                    <span className="float-right">
                                      <span className="bullet bullet-info bullet-sm" />
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="media">
                              <div className="user-action">
                                <div className="checkbox-con me-3">
                                  <div className="checkbox checkbox-shadow checkbox-sm">
                                    <input
                                      type="checkbox"
                                      id="checkboxsmall11"
                                      className="form-check-input"
                                    />
                                    <label htmlFor="checkboxsmall11" />
                                  </div>
                                </div>
                                <span className="favorite">
                                  <svg
                                    className="bi"
                                    width="1.5em"
                                    height="1.5em"
                                    fill="currentColor"
                                  >
                                    <use xlinkHref="assets/vendors/bootstrap-icons/bootstrap-icons.svg#star" />
                                  </svg>
                                </span>
                              </div>
                              <div className="pr-50">
                                <div className="avatar">
                                  <img
                                    className="rounded-circle"
                                    src="assets/images/faces/1.jpg"
                                    alt="Generic placeholder image"
                                  />
                                </div>
                              </div>
                              <div className="media-body">
                                <div className="user-details">
                                  <div className="mail-items">
                                    <span className="list-group-item-text text-truncate mb-0">
                                      Harness The Power Of Words In Your Life
                                    </span>
                                  </div>
                                  <div className="mail-meta-item">
                                    <span className="float-right">
                                      <span className="mail-date">17 May</span>
                                    </span>
                                  </div>
                                </div>
                                <div className="mail-message">
                                  <p className="list-group-item-text mb-0 truncate">
                                    Hope your like it, or feel free to comment,
                                    feedback or rebound !.
                                  </p>
                                  <div className="mail-meta-item">
                                    <span className="float-right">
                                      <span className="bullet bullet-warning bullet-sm" />
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="media mail-read">
                              <div className="user-action">
                                <div className="checkbox-con me-3">
                                  <div className="checkbox checkbox-shadow checkbox-sm">
                                    <input
                                      type="checkbox"
                                      id="checkboxsmall12"
                                      className="form-check-input"
                                    />
                                    <label htmlFor="checkboxsmall12" />
                                  </div>
                                </div>
                                <span className="favorite">
                                  <svg
                                    className="bi"
                                    width="1.5em"
                                    height="1.5em"
                                    fill="currentColor"
                                  >
                                    <use xlinkHref="assets/vendors/bootstrap-icons/bootstrap-icons.svg#star" />
                                  </svg>
                                </span>
                              </div>
                              <div className="pr-50">
                                <div className="avatar">
                                  <img
                                    className="rounded-circle"
                                    src="assets/images/faces/3.jpg"
                                    alt="Generic placeholder image"
                                  />
                                </div>
                              </div>
                              <div className="media-body">
                                <div className="user-details">
                                  <div className="mail-items">
                                    <span className="list-group-item-text text-truncate mb-0">
                                      {" "}
                                      Know Yourself Your Inner Power{" "}
                                    </span>
                                  </div>
                                  <div className="mail-meta-item">
                                    <span className="float-right">
                                      <span className="mail-date">21 Mar</span>
                                    </span>
                                  </div>
                                </div>
                                <div className="mail-message">
                                  <p className="list-group-item-text mb-0 truncate">
                                    Hope your like it, or feel free to comment,
                                    feedback or rebound !
                                  </p>
                                  <div className="mail-meta-item">
                                    <span className="float-right">
                                      <span className="bullet bullet-warning bullet-sm" />
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                          {/* email user list end */}
                          {/* no result when nothing to show on list */}
                          <div className="no-results">
                            <i className="bx bx-error-circle font-large-2" />
                            <h5>No Items Found</h5>
                          </div>
                          <div
                            className="ps__rail-x"
                            style={{ left: 0, bottom: 0 }}
                          >
                            <div
                              className="ps__thumb-x"
                              tabIndex={0}
                              style={{ left: 0, width: 0 }}
                            />
                          </div>
                          <div
                            className="ps__rail-y"
                            style={{ top: 0, height: 733, right: 0 }}
                          >
                            <div
                              className="ps__thumb-y"
                              tabIndex={0}
                              style={{ top: 0, height: 567 }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*/ Email list Area */}
                    {/* Detailed Email View */}
                    <div className="email-app-details">
                      {/* email detail view header */}
                      <div className="email-detail-header">
                        <div className="email-header-left d-flex align-items-center mb-1">
                          <span className="go-back me-3">
                            <span className="fonticon-wrap d-inline">
                              <i className="fas fa-chevron-left" />
                            </span>
                          </span>
                          <h5 className="email-detail-title font-weight-normal mb-0">
                            Advertising Internet Online
                            <span className="badge badge-light-danger badge-pill ms-1">
                              PRODUCT
                            </span>
                          </h5>
                        </div>
                        <div className="email-header-right mb-1 ml-2 pl-1">
                          <ul className="list-inline m-0">
                            <li className="list-inline-item">
                              <button className="btn btn-icon action-icon">
                                <span className="fonticon-wrap">
                                  <i className="fas fa-trash" />
                                </span>
                              </button>
                            </li>
                            <li className="list-inline-item">
                              <button className="btn btn-icon action-icon">
                                <span className="fonticon-wrap">
                                  <svg
                                    className="bi"
                                    width="1.5em"
                                    height="1.5em"
                                    fill="currentColor"
                                  >
                                    <use xlinkHref="assets/vendors/bootstrap-icons/bootstrap-icons.svg#envelope" />
                                  </svg>
                                </span>
                              </button>
                            </li>
                            <li className="list-inline-item">
                              <div className="dropdown">
                                <button
                                  className="btn btn-icon dropdown-toggle action-icon"
                                  id="open-mail-menu"
                                  data-toggle="dropdown"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                >
                                  <span className="fonticon-wrap">
                                    <i className="fas fa-folder" />
                                  </span>
                                </button>
                                <div
                                  className="dropdown-menu dropdown-menu-right"
                                  aria-labelledby="open-mail-menu"
                                >
                                  <a className="dropdown-item" href="#">
                                    <i className="bx bx-edit" />
                                    Draft
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    <i className="bx bx-info-circle" />
                                    Spam
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    <i className="bx bx-trash" />
                                    Trash
                                  </a>
                                </div>
                              </div>
                            </li>
                            <li className="list-inline-item">
                              <div className="dropdown">
                                <button
                                  className="btn btn-icon dropdown-toggle action-icon"
                                  id="open-mail-tag"
                                  data-toggle="dropdown"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                >
                                  <span className="fonticon-wrap">
                                    <i className="fas fa-tag" />
                                  </span>
                                </button>
                                <div
                                  className="dropdown-menu dropdown-menu-right"
                                  aria-labelledby="open-mail-tag"
                                >
                                  <a
                                    href="#"
                                    className="dropdown-item align-items-center"
                                  >
                                    <span className="bullet bullet-success bullet-sm" />
                                    Product
                                  </a>
                                  <a
                                    href="#"
                                    className="dropdown-item align-items-center"
                                  >
                                    <span className="bullet bullet-primary bullet-sm" />
                                    Work
                                  </a>
                                  <a
                                    href="#"
                                    className="dropdown-item align-items-center"
                                  >
                                    <span className="bullet bullet-warning bullet-sm" />
                                    Misc
                                  </a>
                                  <a
                                    href="#"
                                    className="dropdown-item align-items-center"
                                  >
                                    <span className="bullet bullet-danger bullet-sm" />
                                    Family
                                  </a>
                                  <a
                                    href="#"
                                    className="dropdown-item align-items-center"
                                  >
                                    <span className="bullet bullet-info bullet-sm" />
                                    Design
                                  </a>
                                </div>
                              </div>
                            </li>
                            <li className="list-inline-item">
                              <span className="no-of-list d-none d-sm-block ms-1">
                                1-10 of 653
                              </span>
                            </li>
                            <li className="list-inline-item">
                              <button className="btn btn-icon email-pagination-prev action-icon">
                                <i className="bx bx-chevron-left" />
                              </button>
                            </li>
                            <li className="list-inline-item">
                              <button className="btn btn-icon email-pagination-next action-icon">
                                <i className="bx bx-chevron-right" />
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/* email detail view header end*/}
                      <div className="email-scroll-area ps ps--active-y">
                        {/* email details  */}
                        <div className="row">
                          <div className="col-12">
                            <div className="collapsible email-detail-head">
                              <div
                                className="card collapse-header"
                                role="tablist"
                              >
                                <div
                                  id="headingCollapse5"
                                  className="card-header d-flex justify-content-between align-items-center"
                                  data-toggle="collapse"
                                  role="tab"
                                  data-target="#collapse5"
                                  aria-expanded="false"
                                  aria-controls="collapse5"
                                >
                                  <div className="collapse-title media">
                                    <div className="pr-1">
                                      <div className="avatar mr-75">
                                        <img
                                          src="assets/images/faces/18.jpg"
                                          alt="avtar img holder"
                                          width={30}
                                          height={30}
                                        />
                                      </div>
                                    </div>
                                    <div className="media-body mt-25">
                                      <span className="text-primary">
                                        Elnora Reese
                                      </span>
                                      <span className="d-sm-inline d-none">
                                        &lt;elnora@gmail.com&gt;
                                      </span>
                                      <small className="text-muted d-block">
                                        to Lois Jimenez
                                      </small>
                                    </div>
                                  </div>
                                  <div className="information d-sm-flex d-none align-items-center">
                                    <small className="text-muted me-3">
                                      15 Jul 2019, 10:30
                                    </small>
                                    <span className="favorite">
                                      <i className="bx bx-star me-3" />
                                    </span>
                                    <div className="dropdown">
                                      <a
                                        href="#"
                                        className="dropdown-toggle"
                                        id="fisrt-open-submenu"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                      >
                                        <i className="bx bx-dots-vertical-rounded mr-0" />
                                      </a>
                                      <div
                                        className="dropdown-menu dropdown-menu-right"
                                        aria-labelledby="fisrt-open-submenu"
                                      >
                                        <a
                                          href="#"
                                          className="dropdown-item mail-reply"
                                        >
                                          <i className="bx bx-share" />
                                          Reply
                                        </a>
                                        <a href="#" className="dropdown-item">
                                          <i className="bx bx-redo" />
                                          Forward
                                        </a>
                                        <a href="#" className="dropdown-item">
                                          <i className="bx bx-info-circle" />
                                          Report Spam
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  id="collapse5"
                                  role="tabpanel"
                                  aria-labelledby="headingCollapse5"
                                  className="collapse"
                                >
                                  <div className="card-content">
                                    <div className="card-body py-1">
                                      <p className="text-bold-500">
                                        Greetings!
                                      </p>
                                      <p>
                                        Lorem Ipsum is simply dummy text of the
                                        printing and typesetting industry. Lorem
                                        Ipsum has been the industry's standard
                                        dummy text ever since the 1500s, when an
                                        unknown printer took a galley of type
                                        and scrambled it to make a type specimen
                                        book.
                                      </p>
                                      <p>
                                        It has survived not only five centuries,
                                        but also the leap into electronic
                                        typesetting, remaining essentially
                                        unchanged.
                                      </p>
                                      <p className="mb-0">Sincerely yours,</p>
                                      <p className="text-bold-500">
                                        Envato Design Team
                                      </p>
                                    </div>
                                    <div className="card-footer pt-0 border-top">
                                      <label className="sidebar-label">
                                        Attached Files
                                      </label>
                                      <ul className="list-unstyled mb-0">
                                        <li className="cursor-pointer pb-25">
                                          <img
                                            src="../../../app-assets/images/icon/psd.png"
                                            alt="psd.png"
                                            height={30}
                                          />
                                          <small className="text-muted ms-1 attchement-text">
                                            uikit-design.psd
                                          </small>
                                        </li>
                                        <li className="cursor-pointer">
                                          <img
                                            src="../../../app-assets/images/icon/sketch.png"
                                            alt="sketch.png"
                                            height={30}
                                          />
                                          <small className="text-muted ms-1 attchement-text">
                                            uikit-design.sketch
                                          </small>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="card collapse-header"
                                role="tablist"
                              >
                                <div
                                  id="headingCollapse6"
                                  className="card-header d-flex justify-content-between align-items-center"
                                  data-toggle="collapse"
                                  role="tab"
                                  data-target="#collapse6"
                                  aria-expanded="false"
                                  aria-controls="collapse6"
                                >
                                  <div className="collapse-title media">
                                    <div className="pr-1">
                                      <div className="avatar mr-75">
                                        <img
                                          src="assets/images/faces/19.jpg"
                                          alt="avtar img holder"
                                          width={30}
                                          height={30}
                                        />
                                      </div>
                                    </div>
                                    <div className="media-body mt-25">
                                      <span className="text-primary">
                                        Lois Jimenez{" "}
                                      </span>
                                      <span className="d-sm-inline d-none">
                                        &lt;lois_jim@gmail.com&gt;
                                      </span>
                                      <small className="text-muted d-block">
                                        to Elnora Reese
                                      </small>
                                    </div>
                                  </div>
                                  <div className="information d-sm-flex d-none align-items-center">
                                    <i className="bx bx-paperclip me-3" />
                                    <small className="text-muted me-3">
                                      10 Jul 2019, 10:30
                                    </small>
                                    <span className="favorite">
                                      <i className="bx bx-star me-3" />
                                    </span>
                                    <div className="dropdown">
                                      <a
                                        href="#"
                                        className="dropdown-toggle"
                                        id="second-open-submenu"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                      >
                                        <i className="bx bx-dots-vertical-rounded mr-0" />
                                      </a>
                                      <div
                                        className="dropdown-menu dropdown-menu-right"
                                        aria-labelledby="second-open-submenu"
                                      >
                                        <a
                                          href="#"
                                          className="dropdown-item mail-reply"
                                        >
                                          <i className="bx bx-share" />
                                          Reply
                                        </a>
                                        <a href="#" className="dropdown-item">
                                          <i className="bx bx-redo" />
                                          Forward
                                        </a>
                                        <a href="#" className="dropdown-item">
                                          <i className="bx bx-info-circle" />
                                          Report Spam
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  id="collapse6"
                                  role="tabpanel"
                                  aria-labelledby="headingCollapse7"
                                  className="collapse"
                                >
                                  <div className="card-content">
                                    <div className="card-body py-1">
                                      <p className="text-bold-500">
                                        Greetings!
                                      </p>
                                      <p>
                                        Successful businesses have many things
                                        in common, today we’ll look at the big
                                        ‘R’of recognition and how a digital
                                        advertising network may help.
                                        Recognition can be illustrated by two
                                        individuals entering a crowded room at a
                                        party. Both walk to the far side of the
                                        room, one of them slips through the
                                        crowd easily and unnoticed as they reach
                                        the far side.
                                      </p>
                                      <p>
                                        Gummies sweet tart marzipan lemon drops
                                        donut pie. Chocolate cake gingerbread
                                        jujubes gingerbread chocolate cake tart
                                        bear claw apple pie jelly-o. Gummies
                                        biscuit brownie marshmallow oat cake
                                        tootsie roll bear claw topping. Oat cake
                                        sesame snaps icing cupcake wafer
                                        tiramisu jelly-o sugar plum carrot cake
                                      </p>
                                      <p className="mb-0">Sincerely yours,</p>
                                      <p className="text-bold-500">
                                        Envato Design Team
                                      </p>
                                    </div>
                                    <div className="card-footer pt-0 border-top">
                                      <label className="sidebar-label">
                                        Attached Files
                                      </label>
                                      <ul className="list-unstyled mb-0">
                                        <li className="cursor-pointer pb-25">
                                          <img
                                            src="../../../app-assets/images/icon/psd.png"
                                            alt="psd.png"
                                            height={30}
                                          />
                                          <small className="text-muted ms-1 attchement-text">
                                            uikit-design.psd
                                          </small>
                                        </li>
                                        <li className="cursor-pointer">
                                          <img
                                            src="../../../app-assets/images/icon/sketch.png"
                                            alt="sketch.png"
                                            height={30}
                                          />
                                          <small className="text-muted ms-1 attchement-text">
                                            uikit-design.sketch
                                          </small>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="card collapse-header open"
                                role="tablist"
                              >
                                <div
                                  id="headingCollapse7"
                                  className="card-header d-flex justify-content-between align-items-center"
                                  data-toggle="collapse"
                                  role="tab"
                                  data-target="#collapse7"
                                  aria-expanded="false"
                                  aria-controls="collapse7"
                                >
                                  <div className="collapse-title media">
                                    <div className="pr-1">
                                      <div className="avatar mr-75">
                                        <img
                                          src="assets/images/faces/18.jpg"
                                          alt="avtar img holder"
                                          width={30}
                                          height={30}
                                        />
                                      </div>
                                    </div>
                                    <div className="media-body mt-25">
                                      <span className="text-primary">
                                        Elnora Reese
                                      </span>
                                      <span className="d-sm-inline d-none">
                                        &lt;elnora@gmail.com&gt;
                                      </span>
                                      <small className="text-muted d-block">
                                        to Lois Jimenez
                                      </small>
                                    </div>
                                  </div>
                                  <div className="information d-sm-flex d-none align-items-center">
                                    <small className="text-muted me-3">
                                      05 Jul 2019, 10:30
                                    </small>
                                    <span className="favorite text-warning">
                                      <svg
                                        className="bi"
                                        width="1.5em"
                                        height="1.5em"
                                        fill="currentColor"
                                      >
                                        <use xlinkHref="assets/vendors/bootstrap-icons/bootstrap-icons.svg#star-fill" />
                                      </svg>
                                    </span>
                                    <div className="dropdown">
                                      <a
                                        href="#"
                                        className="dropdown-toggle"
                                        id="third-open-menu"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                      >
                                        <i className="bx bx-dots-vertical-rounded mr-0" />
                                      </a>
                                      <div
                                        className="dropdown-menu dropdown-menu-right"
                                        aria-labelledby="second-open-submenu"
                                      >
                                        <a
                                          href="#"
                                          className="dropdown-item mail-reply"
                                        >
                                          <i className="bx bx-share" />
                                          Reply
                                        </a>
                                        <a href="#" className="dropdown-item">
                                          <i className="bx bx-redo" />
                                          Forward
                                        </a>
                                        <a href="#" className="dropdown-item">
                                          <i className="bx bx-info-circle" />
                                          Report Spam
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  id="collapse7"
                                  role="tabpanel"
                                  aria-labelledby="headingCollapse7"
                                  className="collapse show"
                                >
                                  <div className="card-content">
                                    <div className="card-body py-1">
                                      <p className="text-bold-500">
                                        Greetings!
                                      </p>
                                      <p>
                                        It is a long established fact that a
                                        reader will be distracted by the
                                        readable content of a page when looking
                                        at its layout.The point of using Lorem
                                        Ipsum is that it has a more-or-less
                                        normal distribution of letters, as
                                        opposed to using 'Content here, content
                                        here',making it look like readable
                                        English.
                                      </p>
                                      <p>
                                        There are many variations of passages of
                                        Lorem Ipsum available, but the majority
                                        have suffered alteration in some form,
                                        by injected humour, or randomised words
                                        which don't look even slightly
                                        believable.
                                      </p>
                                      <p className="mb-0">Sincerely yours,</p>
                                      <p className="text-bold-500">
                                        Envato Design Team
                                      </p>
                                    </div>
                                    <div className="card-footer pt-0 border-top">
                                      <label className="sidebar-label">
                                        Attached Files
                                      </label>
                                      <ul className="list-unstyled mb-0">
                                        <li className="cursor-pointer pb-25">
                                          <img
                                            src="../../../app-assets/images/icon/psd.png"
                                            alt="psd.png"
                                            height={30}
                                          />
                                          <small className="text-muted ms-1 attchement-text">
                                            uikit-design.psd
                                          </small>
                                        </li>
                                        <li className="cursor-pointer">
                                          <img
                                            src="../../../app-assets/images/icon/sketch.png"
                                            alt="sketch.png"
                                            height={30}
                                          />
                                          <small className="text-muted ms-1 attchement-text">
                                            uikit-design.sketch
                                          </small>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* email details  end*/}
                        <div className="row px-2 mb-4">
                          {/* quill editor for reply message */}
                          <div className="col-12 px-0">
                            <div className="card shadow-none border rounded">
                              <div className="card-body quill-wrapper">
                                <span>Reply to Lois Jimenez</span>
                                <div
                                  className="snow-container"
                                  id="detail-view-quill"
                                >
                                  <div className="detail-view-editor ql-container ql-snow">
                                    <div
                                      className="ql-editor ql-blank"
                                      data-gramm="false"
                                      data-placeholder="Type something....."
                                      contentEditable="true"
                                    >
                                      <p>
                                        <br />
                                      </p>
                                    </div>
                                    <div
                                      className="ql-clipboard"
                                      tabIndex={-1}
                                      contentEditable="true"
                                    ></div>
                                    <div className="ql-tooltip ql-hidden">
                                      <a
                                        className="ql-preview"
                                        target="_blank"
                                        href="about:blank"
                                      />
                                      <input
                                        type="text"
                                        data-formula="e=mc^2"
                                        data-link="https://quilljs.com"
                                        data-video="Embed URL"
                                      />
                                      <a className="ql-action" />
                                      <a className="ql-remove" />
                                    </div>
                                  </div>
                                  <div className="d-flex justify-content-end">
                                    <div className="detail-quill-toolbar ql-toolbar ql-snow">
                                      <span className="ql-formats me-3">
                                        <button
                                          className="ql-bold"
                                          type="button"
                                        >
                                          <svg viewBox="0 0 18 18">
                                            <path
                                              className="ql-stroke"
                                              d="M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z"
                                            ></path>
                                            <path
                                              className="ql-stroke"
                                              d="M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z"
                                            ></path>
                                          </svg>
                                        </button>
                                        <button
                                          className="ql-italic"
                                          type="button"
                                        >
                                          <svg viewBox="0 0 18 18">
                                            <line
                                              className="ql-stroke"
                                              x1={7}
                                              x2={13}
                                              y1={4}
                                              y2={4}
                                            />
                                            <line
                                              className="ql-stroke"
                                              x1={5}
                                              x2={11}
                                              y1={14}
                                              y2={14}
                                            />
                                            <line
                                              className="ql-stroke"
                                              x1={8}
                                              x2={10}
                                              y1={14}
                                              y2={4}
                                            />
                                          </svg>
                                        </button>
                                        <button
                                          className="ql-underline"
                                          type="button"
                                        >
                                          <svg viewBox="0 0 18 18">
                                            <path
                                              className="ql-stroke"
                                              d="M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3"
                                            ></path>
                                            <rect
                                              className="ql-fill"
                                              height={1}
                                              rx="0.5"
                                              ry="0.5"
                                              width={12}
                                              x={3}
                                              y={15}
                                            />
                                          </svg>
                                        </button>
                                        <button
                                          className="ql-link"
                                          type="button"
                                        >
                                          <svg viewBox="0 0 18 18">
                                            <line
                                              className="ql-stroke"
                                              x1={7}
                                              x2={11}
                                              y1={7}
                                              y2={11}
                                            />
                                            <path
                                              className="ql-even ql-stroke"
                                              d="M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z"
                                            ></path>
                                            <path
                                              className="ql-even ql-stroke"
                                              d="M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z"
                                            ></path>
                                          </svg>
                                        </button>
                                        <button
                                          className="ql-image"
                                          type="button"
                                        >
                                          <svg viewBox="0 0 18 18">
                                            <rect
                                              className="ql-stroke"
                                              height={10}
                                              width={12}
                                              x={3}
                                              y={4}
                                            />
                                            <circle
                                              className="ql-fill"
                                              cx={6}
                                              cy={7}
                                              r={1}
                                            ></circle>
                                            <polyline
                                              className="ql-even ql-fill"
                                              points="5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12"
                                            ></polyline>
                                          </svg>
                                        </button>
                                      </span>
                                    </div>
                                    <button className="btn btn-primary send-btn">
                                      <i className="bx bx-send me-3" />
                                      <span className="d-none d-sm-inline">
                                        {" "}
                                        Send
                                      </span>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="ps__rail-x"
                          style={{ left: 0, bottom: 0 }}
                        >
                          <div
                            className="ps__thumb-x"
                            tabIndex={0}
                            style={{ left: 0, width: 0 }}
                          />
                        </div>
                        <div
                          className="ps__rail-y"
                          style={{ top: 0, height: 736, right: 0 }}
                        >
                          <div
                            className="ps__thumb-y"
                            tabIndex={0}
                            style={{ top: 0, height: 626 }}
                          />
                        </div>
                      </div>
                    </div>
                    {/*/ Detailed Email View */}
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
  )
}

export default AppicationEmail
