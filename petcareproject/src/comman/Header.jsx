import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CheckToken from "../utils/CheckToken";
import Logout from "../utils/Logout";

function Header() {
  let [token, setToken] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    let token = CheckToken();
    setToken(token);
  }, []);
  // console.log(token);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  const toggleDropdown = (index) => {
    setOpenDropdown((prev) => (prev === index ? null : index));
  };

  return (
    <div className={`${isMenuOpen ? "mobile-menu-visible" : ""}`}>
      {/* Hidden Navigation Bar */}
      <section className="hidden-bar right-align">
        <div className="hidden-bar-closer">
          <button>
            <span className="flaticon-multiply" />
          </button>
        </div>
        <div className="hidden-bar-wrapper">
          <div className="logo">
            <a href="index.html">
              <img src="assets/images/resources/image.png" alt="Logo" />
            </a>
          </div>
          <div className="hiddenbar-about-us">
            <h3>About Us</h3>
            <div className="text">
              <p>
                We must explain to you how all seds this mistakens idea off
                denouncing pleasures and praising pain was born and I will give
                you a completed accounts off the system and expound the actually
                teaching.
              </p>
            </div>
          </div>
          <div className="contact-info-box">
            <h3>Contact Info</h3>
            <ul>
              <li>
                <h5>Address</h5>
                <p>
                  Romanian 9520 Faires Farm Road,
                  <br /> Carlsbad, NC 28213.
                </p>
              </li>
              <li>
                <h5>Phone</h5>
                <p>
                  <a href="tel:123456789">+1 555-7890-123</a>
                </p>
              </li>
              <li>
                <h5>Email</h5>
                <p>
                  <a href="mailto:info@templatepath.com">
                    happypawsgrooming@gmail.com
                  </a>
                </p>
              </li>
            </ul>
          </div>
          <div className="newsletter-form-box">
            <h3>Newsletter Subscribe</h3>
            <form action="#">
              <div className="row">
                <div className="col-xl-12">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address..."
                  />
                  <button type="submit">
                    <i className="fa fa-paper-plane" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="copy-right-text">
            <p>© CarePress 2020, All Rights Reserved.</p>
          </div>
        </div>
      </section>
      {/* End Hidden Bar */}
      <header className="main-header header-style-two">
        <div>
          {/*Start Header Top*/}
          {/* <div className="header-top">
            <div className="outer-container">
              <div className="outer-box clearfix">
                <div className="header-top-left pull-left">
                  <div className="header-contact-info">
                    <ul>
                      <li>
                        <span className="icon-envelope" />
                        <a href="#">happypawsgrooming@gmail.com</a>
                      </li>
                      <li>
                        <span className="icon-phone-call" />
                        <a href="tel:123456789">+098987 876 767</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="header-top-right pull-right">
                  <div className="header-social-link">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fa fa-facebook" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-twitter" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-linkedin" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-behance" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-pinterest" aria-hidden="true" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          {/*End header Top*/}
          <div className="header">
            <div className="outer-container">
              <div className="outer-box clearfix">
                {/*Start Header Left*/}
                <div className="header-left clearfix pull-left">
                  <div className="logo">
                    <a href="index.html">
                      <img
                        src="assets/images/resources/header-logo.png"
                        alt="Awesome Logo"
                        style={{ height: "60px", width: "100%" }}
                        title
                      />
                    </a>
                  </div>
                  <div className="nav-outer clearfix">
                    {/*Mobile Navigation Toggler*/}
                    <div className="mobile-nav-toggler" onClick={toggleMenu}>
                      <div className="inner">
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                      </div>
                    </div>
                    {/* Main Menu */}
                    <nav className="main-menu style1 navbar-expand-md navbar-light">
                      <div
                        className="collapse navbar-collapse show clearfix"
                        id="navbarSupportedContent"
                      >
                        {token ? (
                          <>
                            <ul className="navigation clearfix">
                              <li className=" current">
                                <Link to="/">Home</Link>
                              </li>
                              <li>
                                <Link to="/about">About</Link>
                              </li>
                              <li>
                                <Link to="/service-category">Services</Link>
                              </li>
                              <li>
                                <Link to="/pet-categories">Pets</Link>
                              </li>
                              <li className="dropdown">
                                <Link to="#"> Adoption</Link>
                                <ul>
                                  <li>
                                    <Link to="/adopt">Pet Adopt</Link>
                                  </li>
                                </ul>
                              </li>
                              <li className="dropdown">
                                <Link to="#">Pages</Link>
                                <ul>
                                  <li>
                                    <Link to="/inquiry">Inquiry</Link>
                                  </li>
                                  <li>
                                    <Link to="/pet-feedback">Feedback</Link>
                                  </li>
                                  <li>
                                    <Link to="/booking-history">Booking History</Link>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <Link to="/contact">Contact</Link>
                              </li>
                            </ul>
                          </>
                        ) : (
                          <>
                            <ul className="navigation clearfix text-center">
                              <li className=" current ">
                                <Link to="/">Home</Link>
                              </li>
                              <li>
                                <Link to="/about">About</Link>
                              </li>
                              <li>
                                <Link to="/service-category">Services</Link>
                              </li>
                              <li>
                                <Link to="/pet-categories">Pets</Link>
                              </li>
                              <li>
                                <Link to="/contact">Contact</Link>
                              </li>
                            </ul>
                          </>
                        )}
                      </div>
                    </nav>
                    {/* Main Menu End*/}
                  </div>
                </div>
                {/*End Header Left*/}
                {/*Start Header Right*/}
                <div className="header-right pull-right clearfix">
                  {token ? (
                    <>
                      <div className="button">
                        <Link to="/service-category" className="btn-one">
                          <span className="txt">Get Appointment</span>
                        </Link>
                      </div>
                      <div className="button">
                        <Link
                          className="btn-one"
                          onClick={() => {
                            Logout(navigate);
                          }}
                        >
                          <span className="txt">Logout</span>
                        </Link>
                      </div>
                      <div className="button">
                        <Link className="btn-one" to="/profile">
                          <span className="fa fa-user"></span>
                        </Link>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="button">
                        <Link className="btn-one" to="/login">
                          <span className="txt">Login</span>
                        </Link>
                      </div>
                      <div className="button">
                        <Link className="btn-one" to="/registration">
                          <span className="txt">Signup</span>
                        </Link>
                      </div>
                    </>
                  )}
                  {/* <div className="hidden-content-button bar-box">
                    <a
                      className="side-nav-toggler nav-toggler hidden-bar-opener"
                      href="#"
                    >
                      <ul>
                        <li className="red2" />
                        <li className="red2" />
                        <li />
                      </ul>
                      <ul>
                        <li />
                        <li />
                        <li />
                      </ul>
                      <ul>
                        <li className="red2" />
                        <li />
                        <li className="red2" />
                      </ul>
                    </a>
                  </div> */}
                </div>
                {/*End Header Right*/}
              </div>
            </div>
          </div>
          {/*End header */}
        </div>

        {/*Sticky Header*/}
        <div className="sticky-header">
          <div className="container">
            <div className="clearfix">
              {/*Logo*/}
              <div className="logo float-left">
                <a href="index.html" className="img-responsive">
                  <img
                    src="assets/images/resources/header-logo.png"
                    alt
                    style={{ height: "60px", width: "100%" }}
                    title
                  />
                </a>
              </div>
              {/*Right Col*/}
              <div className="right-col float-right">
                {/* Main Menu */}
                <nav className="main-menu clearfix">
                  {/*Keep This Empty / Menu will come through Javascript*/}
                  <div
                    className="collapse navbar-collapse show clearfix"
                    id="navbarSupportedContent"
                  >
                    {token ? (
                      <>
                        <ul className="navigation clearfix">
                          <li className="sticky-li" style={{marginRight:"27px"}}>
                            <Link to="/">Home</Link>
                          </li>
                          <li className="current sticky-li" style={{marginRight:"27px"}}>
                            <Link to="/about">About</Link>
                          </li>
                          <li className="sticky-li" style={{marginRight:"27px"}}>
                            <Link to="/service-category">Services</Link>
                          </li>
                          <li className="sticky-li" style={{marginRight:"27px"}}>
                            <Link to="/pet-categories">Pets</Link>
                          </li>
                          <li className="dropdown sticky-li" style={{marginRight:"27px"}}>
                            <Link to="#"> Adoption</Link>
                            <ul>
                              <li>
                                <Link to="/adopt">Pet Adopt</Link>
                              </li>
                            </ul>
                          </li>
                          <li className="dropdown sticky-li" style={{marginRight:"27px"}}>
                            <Link to="#">Pages</Link>
                            <ul>
                              <li>
                                <Link to="/inquiry">Inquiry</Link>
                              </li>
                              <li>
                                <Link to="/pet-feedback">Feedback</Link>
                              </li>
                              <li>
                                <Link to="/booking-history">Booking History</Link>
                              </li>
                            </ul>
                          </li>
                          <li className="sticky-li" style={{marginRight:"27px"}}>
                            <Link to="/contact">Contact</Link>
                          </li>
                          {token ? (
                            <>
                              <li>
                                <div className="button mt-3">
                                  <Link
                                    to="/service-category"
                                    className="btn-one"
                                    href="#"
                                  >
                                    <span className="txt">Get Appointment</span>
                                  </Link>
                                </div>
                              </li>
                              <li>
                                <div className="button  mt-3">
                                  <Link
                                    className="btn-one"
                                    onClick={() => {
                                      Logout();
                                    }}
                                  >
                                    <span className="txt">Logout</span>
                                  </Link>
                                </div>
                              </li>
                              <li>
                                <div className="button mt-3">
                                  <Link className="btn-one" to="/profile">
                                    <span className="fa fa-user"></span>
                                  </Link>
                                </div>
                              </li>
                            </>
                          ) : (
                            <>
                              <li>
                                <div className="button mt-3">
                                  <Link className="btn-one" to="/login">
                                    <span className="txt">Login</span>
                                  </Link>
                                </div>
                              </li>
                              <li>
                                <div className="button mt-3">
                                  <Link className="btn-one" to="/registration">
                                    <span className="txt">Signup</span>
                                  </Link>
                                </div>
                              </li>
                            </>
                          )}
                        </ul>
                      </>
                    ) : (
                      <>
                        {" "}
                        <ul className="navigation clearfix">
                          <li className="sticky-li">
                            <Link to="/">Home</Link>
                          </li>
                          <li className="current sticky-li">
                            <Link to="/about">About</Link>
                          </li>
                          <li className="sticky-li">
                            <Link to="/service-category">Services</Link>
                          </li>
                          <li className="sticky-li">
                            <Link to="/pet-categories">Pets</Link>
                          </li>
                          <li className="sticky-li">
                            <Link to="/contact">Contact</Link>
                          </li>
                          {token ? (
                            <>
                              <li>
                                <div className="button  mt-3">
                                  <Link
                                    className="btn-one"
                                    onClick={() => {
                                      Logout();
                                    }}
                                  >
                                    <span className="txt">Logout</span>
                                  </Link>
                                </div>
                              </li>
                              <li>
                                <div className="button mt-3">
                                  <Link className="btn-one" to="/profile">
                                    <span className="fa fa-user"></span>
                                  </Link>
                                </div>
                              </li>
                            </>
                          ) : (
                            <>
                              <li>
                                <div className="button mt-3">
                                  <Link className="btn-one" to="/login">
                                    <span className="txt">Login</span>
                                  </Link>
                                </div>
                              </li>
                              <li>
                                <div className="button mt-3">
                                  <Link className="btn-one" to="/registration">
                                    <span className="txt">Signup</span>
                                  </Link>
                                </div>
                              </li>
                            </>
                          )}
                        </ul>
                      </>
                    )}
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
        {/*End Sticky Header*/}

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
          <div className="menu-backdrop" onClick={() => setIsMenuOpen(false)} />

          <div className="close-btn" onClick={toggleMenu}>
            <span className="icon flaticon-multiply" />
          </div>

          <nav className="menu-box">
            <div className="nav-logo">
              <Link to="/" onClick={() => setIsMenuOpen(false)}>
                <img
                  src="assets/images/resources/mobilemenu-logo.png"
                  alt="logo"
                />
              </Link>
            </div>

            <div className="menu-outer">
              <ul className="navigation clearfix">
                <li className="">
                  <Link to="/">Home</Link>
                  {/* <ul style={{display : `${openDropdown === 1 ? "block" :"none"}`}}>
                    <li>
                      <Link to="/">Home Page 01</Link>
                    </li>
                    <li>
                      <Link to="/home2">Home Page 02</Link>
                    </li>
                  </ul> */}
                </li>

                <li>
                  <Link to="/about" onClick={() => setIsMenuOpen(false)}>
                    About
                  </Link>
                </li>

                <li>
                  <Link
                    to="/service-category"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Services
                  </Link>
                </li>

                <li>
                  <Link
                    to="/pet-categories"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Pets
                  </Link>
                </li>

                <li>
                  <Link to="/adopt" onClick={() => setIsMenuOpen(false)}>
                    Adopted Pet
                  </Link>
                </li>

                <li className={`dropdown ${openDropdown === 1 ? "open" : ""}`}>
                  <Link to="/booking">Booking</Link>
                  <ul
                    style={{
                      display: `${openDropdown === 1 ? "block" : "none"}`,
                    }}
                  >
                    <li>
                      <Link to="/service-category">Booking History</Link>
                    </li>
                    <li>
                      <Link to="/pet-grooming">View Payment</Link>
                    </li>
                  </ul>
                  <div
                    className="dropdown-btn"
                    onClick={() => toggleDropdown(1)}
                  >
                    <span className="fa fa-angle-right" />
                  </div>
                </li>
                <li>
                  <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                    Contact
                  </Link>
                </li>

                {/* <li className={`dropdown ${openDropdown === 2 ? "open" : ""}`}>
                  <Link to="#">pages</Link>
                  <ul
                    style={{
                      display: `${openDropdown === 2 ? "block" : "none"}`,
                    }}
                  >
                    <li>
                      <Link to="/registration">Sign up</Link>
                    </li>
                    <li>
                      <Link to="/login">Log in</Link>
                    </li>
                  </ul>
                  <div
                    className="dropdown-btn"
                    onClick={() => toggleDropdown(2)}
                  >
                    <span className="fa fa-angle-right" />
                  </div>
                </li> */}

                {token ? (
                  <>
                    <li>
                      <Link to="/contact" onClick={() => Logout()}>
                        Logout
                      </Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <Link
                        to="/registration"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Sign up
                      </Link>
                    </li>
                    <li>
                      <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                        Log in
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </nav>
        </div>
        {/* End Mobile Menu */}
      </header>
    </div>
  );
}

export default Header;
