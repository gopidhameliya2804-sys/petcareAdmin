import React, { useState, useEffect } from "react";
import feather from "feather-icons";
import { Link } from "react-router-dom";
import CheckToken from "../utils/CheckToken";
import Logout from "../utils/Logout";
import api from "../utils/Axios.config";

function Sidebar() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [openMenus, setOpenMenus] = useState([]);
  const [token, setToken] = useState("");
  const [admin, setAdmin] = useState({});

  async function FetchAdmin() {
    try {
      let response = await api.get("/admin/dashboard");
      setAdmin(response.data.user);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    FetchAdmin();
  }, []);

  const adminDetails = {
    name: admin.name,
  };

  useEffect(() => {
    let token = CheckToken();
    setToken(token);
  }, []);
  // console.log(token);

  useEffect(() => {
    feather.replace();
  }, [isSidebarOpen, openMenus]);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const toggleSubMenu = (menuName) => {
    setOpenMenus((prev) =>
      prev.includes(menuName)
        ? prev.filter((item) => item !== menuName)
        : [...prev, menuName],
    );
  };

  const stop = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  // console.log(admin);
  return (
    <div id="sidebar" className={isSidebarOpen ? "active" : ""}>
      <div className="sidebar-wrapper active">
        {/* Header */}
        <div className="sidebar-header">
          <div className="d-flex justify-content-between">
            <div className="logo">
              <a href="/">
                <img src="/assets/images/logo/logo.png" alt="Logo" />
              </a>
            </div>
            <div className="toggler">
              <button
                onClick={toggleSidebar}
                className="sidebar-hide d-xl-none d-block"
              >
                <i className="bi bi-x"></i>
              </button>
            </div>
            <div>
              <h6>Welcome , {adminDetails.name}</h6>
            </div>
          </div>
        </div>

        {/* Menu */}
        <div className="sidebar-menu">
          <ul className="menu">
            <li className="sidebar-title">Menu</li>

            {/* Dashboard */}
            <li className="sidebar-item active">
              <Link to="/" className="sidebar-link">
                <i className="bi bi-speedometer2"></i>
                <span>Dashboard</span>
              </Link>
            </li>

            {/* Users */}
            <li className="sidebar-item">
              <Link to="/manage-users" className="sidebar-link">
                <i className="bi bi-people-fill"></i>
                <span>Manage Users</span>
              </Link>
            </li>

            {/* Service Categories */}
            <li className="sidebar-item">
              <Link to="/manage-servicecategories" className="sidebar-link">
                <i className="bi bi-grid-fill"></i>
                <span>Manage Service Categories</span>
              </Link>
            </li>

            {/* Services */}
            <li className="sidebar-item">
              <Link to="/manage-services" className="sidebar-link">
                <i className="bi bi-tools"></i>
                <span>Manage Services</span>
              </Link>
            </li>

            {/* Pet Categories */}
            <li className="sidebar-item">
              <Link to="/manage-petcategory" className="sidebar-link">
                <i className="bi bi-tags-fill"></i>
                <span>Manage Pet Categories</span>
              </Link>
            </li>

            {/* Pets */}
            <li className="sidebar-item">
              <Link to="/manage-pet" className="sidebar-link">
                <i className="bi bi-heart-fill"></i>
                <span>Manage Pets</span>
              </Link>
            </li>

            {/* Booking */}
            <li className="sidebar-item">
              <Link to="/manage-booking" className="sidebar-link">
                <i className="bi bi-calendar-check"></i>
                <span>Manage Bookings</span>
              </Link>
            </li>

            {/* Booking History */}
            <li className="sidebar-item">
              <Link to="/booking-history" className="sidebar-link">
                <i className="bi bi-clock-history"></i>
                <span>Booking History</span>
              </Link>
            </li>

            {/* Pet Adoption */}
            <li className="sidebar-item">
              <Link to="/manage-petAdoption" className="sidebar-link">
                <i className="bi bi-hexagon-fill"></i>
                <span>Manage Pet Adoption</span>
              </Link>
            </li>

            {/* Adoption Inquiry */}
            <li className="sidebar-item">
              <Link to="/manage-adoptioninquiry" className="sidebar-link">
                <i className="bi bi-chat-left-text-fill"></i>
                <span>Manage Adoption Inquiry</span>
              </Link>
            </li>

            {/* Feedback */}
            <li className="sidebar-item">
              <Link to="/manage-feedback" className="sidebar-link">
                <i className="bi bi-chat-square-text-fill"></i>
                <span>Manage Feedback</span>
              </Link>
            </li>

            {/* Inquiry */}
            <li className="sidebar-item">
              <Link to="/manage-inquiry" className="sidebar-link">
                <i className="bi bi-envelope-fill"></i>
                <span>Manage Inquiry</span>
              </Link>
            </li>

            {/* Reviews */}
            <li className="sidebar-item">
              <Link to="/manage-review" className="sidebar-link">
                <i className="bi bi-star-fill"></i>
                <span>Manage Reviews</span>
              </Link>
            </li>
            {/* COMPONENTS */}
            {/* <li
              className={`sidebar-item has-sub ${
                openMenus.includes("components") ? "active" : ""
              }`}
            >
              <a
                href="#"
                onClick={(e) => {
                  stop(e);
                  toggleSubMenu("components");
                }}
                className="sidebar-link"
              >
                <i className="bi bi-stack"></i>
                <span>Components</span>
              </a>

              <ul
                className={`submenu ${
                  openMenus.includes("components") ? "active" : ""
                }`}
                onClick={(e) => e.stopPropagation()}
              >
                <li className="submenu-item">
                  <Link to="/alert">Alert</Link>
                </li>
                <li className="submenu-item">
                  <Link to="/badge">Badge</Link>
                </li>
                <li className="submenu-item">
                  <Link to="/breadcrumb">Breadcrumb</Link>
                </li>
                <li className="submenu-item">
                  <Link to="/button">Button</Link>
                </li>
                <li className="submenu-item">
                  <Link to="/card">Card</Link>
                </li>
                <li className="submenu-item">
                  <Link to="/carousel">Carousel</Link>
                </li>
                <li className="submenu-item">
                  <Link to="/dropdown">Dropdown</Link>
                </li>
                <li className="submenu-item">
                  <Link to="/list-group">List Group</Link>
                </li>
                <li className="submenu-item">
                  <Link to="/modal">Modal</Link>
                </li>
                <li className="submenu-item">
                  <Link to="/navs">Navs</Link>
                </li>
                <li className="submenu-item">
                  <Link to="/pagination">Pagination</Link>
                </li>
                <li className="submenu-item">
                  <Link to="/progress">Progress</Link>
                </li>
                <li className="submenu-item">
                  <Link to="/spinner">Spinner</Link>
                </li>
                <li className="submenu-item">
                  <Link to="/tooltip">Tooltip</Link>
                </li>
              </ul>
            </li> */}

            {/* EXTRA COMPONENTS */}
            {/* <li
              className={`sidebar-item has-sub ${
                openMenus.includes("extraComponents") ? "active" : ""
              }`}
            >
              <a
                href="#"
                onClick={(e) => {
                  stop(e);
                  toggleSubMenu("extraComponents");
                }}
                className="sidebar-link"
              >
                <i className="bi bi-collection-fill" />
                <span>Extra Components</span>
              </a>

              <ul
                className={`submenu ${
                  openMenus.includes("extraComponents") ? "active" : ""
                }`}
                onClick={(e) => e.stopPropagation()}
              >
                <li className="submenu-item">
                  <Link to="/avatar">Avatar</Link>
                </li>
                <li className="submenu-item">
                  <Link to="/sweetalert">Sweet Alert</Link>
                </li>
                <li className="submenu-item">
                  <Link to="/toastify">Toastify</Link>
                </li>
                <li className="submenu-item">
                  <Link to="/rating">Rating</Link>
                </li>
                <li className="submenu-item">
                  <Link to="/divider">Divider</Link>
                </li>
              </ul>
            </li> */}

            {/* LAYOUTS */}
            {/* <li
              className={`sidebar-item has-sub ${
                openMenus.includes("layouts") ? "active" : ""
              }`}
            >
              <a
                href="#"
                onClick={(e) => {
                  stop(e);
                  toggleSubMenu("layouts");
                }}
                className="sidebar-link"
              >
                <i className="bi bi-grid-1x2-fill" />
                <span>Layouts</span>
              </a>

              <ul
                className={`submenu ${
                  openMenus.includes("layouts") ? "active" : ""
                }`}
                onClick={(e) => e.stopPropagation()}
              >
                <li className="submenu-item">
                  <Link to="/layout-default">Default Layout</Link>
                </li>
                <li className="submenu-item">
                  <Link to="/vertical-column">1 Column</Link>
                </li>
                <li className="submenu-item">
                  <Link to="/vertical-navbar">Vertical with Navbar</Link>
                </li>
                <li className="submenu-item">
                  <Link to="/horizontal">Horizontal Menu</Link>
                </li>
              </ul>
            </li>

            <li className="sidebar-title">Forms &amp; Tables</li> */}

            {/* FORM ELEMENTS */}
            {/* <li
              className={`sidebar-item has-sub ${
                openMenus.includes("formelements") ? "active" : ""
              }`}
            >
              <a
                href="#"
                onClick={(e) => {
                  stop(e);
                  toggleSubMenu("formelements");
                }}
                className="sidebar-link"
              >
                <i className="bi bi-hexagon-fill" />
                <span>Form Elements</span>
              </a>

              <ul
                className={`submenu ${
                  openMenus.includes("formelements") ? "active" : ""
                }`}
                onClick={(e) => e.stopPropagation()}
              >
                <li className="submenu-item">
                  <Link to="/input">Input</Link>
                </li>
                <li className="submenu-item">
                  <Link to="/input-group">Input Group</Link>
                </li>
                <li className="submenu-item">
                  <Link to="/select">Select</Link>
                </li>
                <li className="submenu-item">
                  <Link to="/radio">Radio</Link>
                </li>
                <li className="submenu-item">
                  <Link to="/checkbox">Checkbox</Link>
                </li>
                <li className="submenu-item">
                  <Link to="/textarea">Textarea</Link>
                </li>
              </ul>
            </li>

            <li class="sidebar-item  ">
              <Link to="/form-layout" class="sidebar-link">
                <i class="bi bi-file-earmark-medical-fill"></i>
                <span>Form Layout</span>
              </Link>
            </li> */}

            {/* FORM EDITOR */}
            {/* <li
              className={`sidebar-item has-sub ${
                openMenus.includes("formeditor") ? "active" : ""
              }`}
            >
              <a
                href="#"
                onClick={(e) => {
                  stop(e);
                  toggleSubMenu("formeditor");
                }}
                className="sidebar-link"
              >
                <i className="bi bi-pen-fill" />
                <span>Form Editor</span>
              </a>

              <ul
                className={`submenu ${
                  openMenus.includes("formeditor") ? "active" : ""
                }`}
                onClick={(e) => e.stopPropagation()}
              >
                <li className="submenu-item">
                  <Link to="/quill">Quill</Link>
                </li>
                <li className="submenu-item">
                  <Link to="/ckeditor">CKEditor</Link>
                </li>
                <li className="submenu-item">
                  <Link to="/summernote">Summernote</Link>
                </li>
                <li className="submenu-item">
                  <Link to="/tinymce">TinyMCE</Link>
                </li>
              </ul>
            </li>

            <div>
              <li className="sidebar-item  ">
                <Link to="/table" className="sidebar-link">
                  <i className="bi bi-grid-1x2-fill" />
                  <span>Table</span>
                </Link>
              </li>
              <li className="sidebar-item  ">
                <Link to="/datatable" className="sidebar-link">
                  <i className="bi bi-file-earmark-spreadsheet-fill" />
                  <span>Datatable</span>
                </Link>
              </li>
              <li className="sidebar-title">Extra UI</li>
            </div> */}

            {/* WIDGETS */}
            {/* <li
              className={`sidebar-item has-sub ${
                openMenus.includes("widgets") ? "active" : ""
              }`}
            >
              <a
                href="#"
                onClick={(e) => {
                  stop(e);
                  toggleSubMenu("widgets");
                }}
                className="sidebar-link"
              >
                <i className="bi bi-pentagon-fill" />
                <span>Widgets</span>
              </a>

              <ul
                className={`submenu ${
                  openMenus.includes("widgets") ? "active" : ""
                }`}
                onClick={(e) => e.stopPropagation()}
              >
                <li className="submenu-item">
                  <Link to="/chatbox">Chatbox</Link>
                </li>
                <li className="submenu-item">
                  <Link to="/pricing">Pricing</Link>
                </li>
                <li className="submenu-item">
                  <Link to="/todolist">To-do List</Link>
                </li>
              </ul>
            </li> */}

            {/* ICONS */}
            {/* <li
              className={`sidebar-item has-sub ${
                openMenus.includes("icons") ? "active" : ""
              }`}
            >
              <a
                href="#"
                onClick={(e) => {
                  stop(e);
                  toggleSubMenu("icons");
                }}
                className="sidebar-link"
              >
                <i className="bi bi-pentagon-fill" />
                <span>Icons</span>
              </a>

              <ul
                className={`submenu ${
                  openMenus.includes("icons") ? "active" : ""
                }`}
                onClick={(e) => e.stopPropagation()}
              >
                <li className="submenu-item">
                  <Link to="/bootstrap-icons">Bootstrap Icons</Link>
                </li>
                <li className="submenu-item">
                  <Link to="/fontawesome">Fontawesome</Link>
                </li>
                <li className="submenu-item">
                  <Link to="/dripicons">Dripicons</Link>
                </li>
              </ul>
            </li> */}

            {/* CHARTS */}
            {/* <li
              className={`sidebar-item has-sub ${
                openMenus.includes("charts") ? "active" : ""
              }`}
            >
              <a
                href="#"
                onClick={(e) => {
                  stop(e);
                  toggleSubMenu("charts");
                }}
                className="sidebar-link"
              >
                <i className="bi bi-pentagon-fill" />
                <span>Charts</span>
              </a>

              <ul
                className={`submenu ${
                  openMenus.includes("charts") ? "active" : ""
                }`}
                onClick={(e) => e.stopPropagation()}
              >
                <li className="submenu-item">
                  <Link to="/chartjs">ChartJS</Link>
                </li>
                <li className="submenu-item">
                  <Link to="/apexcharts">Apexcharts</Link>
                </li>
              </ul>
            </li>

            <li className="sidebar-item  ">
              <Link to="/file-uploader" className="sidebar-link">
                <i className="bi bi-cloud-arrow-up-fill" />
                <span>File Uploader</span>
              </Link>
            </li> */}

            {/* MAPS */}
            {/* <li
              className={`sidebar-item has-sub ${
                openMenus.includes("maps") ? "active" : ""
              }`}
            >
              <a
                href="#"
                onClick={(e) => {
                  stop(e);
                  toggleSubMenu("maps");
                }}
                className="sidebar-link"
              >
                <i className="bi bi-pentagon-fill" />
                <span>Maps</span>
              </a>

              <ul
                className={`submenu ${
                  openMenus.includes("maps") ? "active" : ""
                }`}
                onClick={(e) => e.stopPropagation()}
              >
                <li className="submenu-item">
                  <Link to="/google-map">Google Map</Link>
                </li>
                <li className="submenu-item">
                  <Link to="/jsvectormap">JS Vector Map</Link>
                </li>
              </ul>
            </li> */}

            {/* AUTH */}

            <div>
              <li className="sidebar-title">Pages</li>
              <li className="sidebar-item  ">
                <Link to="/application-email" className="sidebar-link">
                  <i className="bi bi-envelope-fill" />
                  <span>Email Application</span>
                </Link>
              </li>
              <li className="sidebar-item  ">
                <Link to="/application-chat" className="sidebar-link">
                  <i className="bi bi-chat-dots-fill" />
                  <span>Chat Application</span>
                </Link>
              </li>
              <li className="sidebar-item  ">
                <Link to="/gallery" className="sidebar-link">
                  <i className="bi bi-image-fill" />
                  <span>Photo Gallery</span>
                </Link>
              </li>
              <li className="sidebar-item  ">
                <Link to="/checkout" className="sidebar-link">
                  <i className="bi bi-basket-fill" />
                  <span>Checkout Page</span>
                </Link>
              </li>
            </div>

            {/* <li
              className={`sidebar-item has-sub ${
                openMenus.includes("authentication") ? "active" : ""
              }`}
            >
              <a
                href="#"
                onClick={(e) => {
                  stop(e);
                  toggleSubMenu("authentication");
                }}
                className="sidebar-link"
              >
                <i className="bi bi-pentagon-fill" />
                <span>Authentication</span>
              </a>

              <ul
                className={`submenu ${
                  openMenus.includes("authentication") ? "active" : ""
                }`}
                onClick={(e) => e.stopPropagation()}
              >
                <li className="submenu-item">
                  <Link to="/login">Login</Link>
                </li>
                <li className="submenu-item">
                  <Link to="/register">Register</Link>
                </li>
                <li className="submenu-item">
                  <a href="auth-forgot-password.html">Forgot Password</a>
                </li>
              </ul>
            </li> */}

            {/* ERRORS */}
            {/* <li
              className={`sidebar-item has-sub ${
                openMenus.includes("errors") ? "active" : ""
              }`}
            >
              <a
                href="#"
                onClick={(e) => {
                  stop(e);
                  toggleSubMenu("errors");
                }}
                className="sidebar-link"
              >
                <i className="bi bi-pentagon-fill" />
                <span>Errors</span>
              </a>

              <ul
                className={`submenu ${
                  openMenus.includes("errors") ? "active" : ""
                }`}
                onClick={(e) => e.stopPropagation()}
              >
                <li className="submenu-item">
                  <Link to="/error-403">403</Link>
                </li>
                <li className="submenu-item">
                  <Link to="/error-404">404</Link>
                </li>
                <li className="submenu-item">
                  <Link to="/error-500">500</Link>
                </li>
              </ul>
            </li>

            <li className="sidebar-title">Raise Support</li>

            <li className="sidebar-item">
              <a
                href="https://zuramai.github.io/mazer/docs"
                className="sidebar-link"
              >
                <i className="bi bi-life-preserver" />
                <span>Documentation</span>
              </a>
            </li>

            <li className="sidebar-item">
              <a
                href="https://github.com/zuramai/mazer/blob/main/CONTRIBUTING.md"
                className="sidebar-link"
              >
                <i className="bi bi-puzzle" />
                <span>Contribute</span>
              </a>
            </li>

            <li className="sidebar-item">
              <a
                href="https://github.com/zuramai/mazer#donate"
                className="sidebar-link"
              >
                <i className="bi bi-cash" />
                <span>Donate</span>
              </a>
            </li> */}
            {token ? (
              <>
                <li
                  className="sidebar-item mt-3 px-5 py-2"
                  style={{ backgroundColor: "#435ebe", textAlign: "center" }}
                >
                  <Link
                    onClick={() => {
                      Logout();
                    }}
                  >
                    <span style={{ color: "white" }}>Logout</span>
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li
                  className="sidebar-item mt-3 px-5 py-2"
                  style={{
                    backgroundColor: "#435ebe",
                    textAlign: "center",
                    letterSpacing: "1px",
                  }}
                >
                  <Link to="/login">
                    <span style={{ color: "white" }}>Login</span>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>

        <button className="sidebar-toggler btn x" onClick={toggleSidebar}>
          <i data-feather="x"></i>
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
