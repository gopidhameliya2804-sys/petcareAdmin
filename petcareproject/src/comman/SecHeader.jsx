import React from "react";
import { Link } from "react-router-dom";

function SecHeader() {
  return (
    <div>
      <div>
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
                <img
                  src="assets/images/resources/hidden-bar-logo.png"
                  alt="Logo"
                />
              </a>
            </div>
            <div className="hiddenbar-about-us">
              <h3>About Us</h3>
              <div className="text">
                <p>
                  We must explain to you how all seds this mistakens idea off
                  denouncing pleasures and praising pain was born and I will
                  give you a completed accounts off the system and expound the
                  actually teaching.
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
                      supportyou@example.com
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
        {/* Main header*/}
        <header className="main-header header-style-two">
          {/*Start Header Top*/}
          <div className="header-top style2">
            <div className="outer-container">
              <div className="outer-box clearfix">
                <div className="header-top-left pull-left">
                  <div className="header-contact-info style2">
                    <ul>
                      <li>
                        <span className="icon-envelope" />
                        <a href="mailto:logistic@email.com">happypawsgrooming@gmail.com</a>
                      </li>
                      <li>
                        <span className="icon-phone-call" />
                        <a href="tel:123456789">+098987 876 767</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="header-top-right pull-right">
                  <div className="header-social-link style2">
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
          </div>
          {/*End header Top*/}
          <div className="header style2">
            <div className="outer-container">
              <div className="outer-box clearfix">
                {/*Start Header Left*/}
                <div className="header-left clearfix pull-left">
                  <div className="logo">
                    <a href="index.html">
                      <img
                        src="assets/images/resources/logo-2.png"
                        alt="Awesome Logo"
                        title
                      />
                    </a>
                  </div>
                  <div className="nav-outer clearfix">
                    {/*Mobile Navigation Toggler*/}
                    <div className="mobile-nav-toggler">
                      <div className="inner">
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                      </div>
                    </div>
                    {/* Main Menu */}
                    <nav className="main-menu style2 navbar-expand-md navbar-light">
                      <div
                        className="collapse navbar-collapse show clearfix"
                        id="navbarSupportedContent"
                      >
                        <ul className="navigation clearfix">
                          <li className=" current">
                            <Link to="/">Home</Link>
                          </li>
                          <li>
                            <Link to="about">About</Link>
                          </li>
                          <li className="dropdown">
                            <Link to="#">Services</Link>
                            <ul>
                              <li>
                                <Link to="allservices">View All Services</Link>
                              </li>
                              <li>
                                <Link to="petgrooming">Pet Grooming</Link>
                              </li>
                              <li>
                                <Link to="dogsetting">Dog Setting</Link>
                              </li>
                              <li>
                                <Link to="healthymeal">Healthy Meals</Link>
                              </li>
                              <li>
                                <Link to="veterinaryService">
                                  Veterinary Service
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li className="dropdown">
                            <Link to="#">Pages</Link>
                            <ul>
                              <li>
                                <Link to="shop">Our Shop</Link>
                              </li>
                              <li>
                                <Link to="productdetails">Product Details</Link>
                              </li>
                              <li>
                                <Link to="faq">Faq</Link>
                              </li>
                              <li>
                                <Link to="team">Our Team</Link>
                              </li>
                              <li>
                                <Link to="registration">Registration</Link>
                              </li>
                              <li>
                                <Link to="login">Log in</Link>
                              </li>
                              <li>
                                <Link to="error.html">404 Error page</Link>
                              </li>
                            </ul>
                          </li>
                          <li className="dropdown">
                            <Link to="#">News</Link>
                            <ul>
                              <li>
                                <Link to="blog">Blog with sidebar</Link>
                              </li>
                              <li>
                                <Link to="blog_gridview">Blog Grid View</Link>
                              </li>
                              <li>
                                <Link to="blogdetails">Blog Details</Link>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <Link to="contact">Contact</Link>
                          </li>
                        </ul>
                      </div>
                    </nav>
                    {/* Main Menu End*/}
                  </div>
                </div>
                {/*End Header Left*/}
                {/*Start Header Right*/}
                <div className="header-right pull-right clearfix">
                  <div className="button">
                    <a className="btn-one style2" href="#">
                      <span className="txt">Get Appointment</span>
                    </a>
                  </div>
                  <div className="hidden-content-button bar-box style2">
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
                  </div>
                </div>
                {/*End Header Right*/}
              </div>
            </div>
          </div>
          {/*End header */}
          {/*Sticky Header*/}
          <div className="sticky-header">
          <div className="container">
            <div className="clearfix">
              {/*Logo*/}
              <div className="logo float-left">
                <a href="index.html" className="img-responsive">
                  <img
                    src="assets/images/resources/sticky-logo.png"
                    alt
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
                    <ul className="navigation clearfix">
                      <li className="">
                        <Link to="/">Home</Link>
                      </li>
                      <li className="current">
                        <Link to="about">About</Link>
                      </li>
                      <li className="dropdown">
                        <Link to="#">Services</Link>
                        <ul>
                          <li>
                            <Link to="allservices">View All Services</Link>
                          </li>
                          <li>
                            <Link to="petgrooming">Pet Grooming</Link>
                          </li>
                          <li>
                            <Link to="dogsetting">Dog Setting</Link>
                          </li>
                          <li>
                            <Link to="healthymeal">Healthy Meals</Link>
                          </li>
                          <li>
                            <Link to="veterinaryService">
                              Veterinary Service
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <Link to="#">Pages</Link>
                        <ul>
                          <li>
                            <Link to="shop">Our Shop</Link>
                          </li>
                          <li>
                            <Link to="productdetails">Product Details</Link>
                          </li>
                          <li>
                            <Link to="faq">Faq</Link>
                          </li>
                          <li>
                            <Link to="team">Our Team</Link>
                          </li>
                          <li>
                            <Link to="registration">Registration</Link>
                          </li>
                           <li>
                            <Link to="login">Log in</Link>
                          </li>
                           <li>
                            <Link to="login">Log in</Link>
                          </li>
                          <li>
                            <Link to="error.html">404 Error page</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <Link to="#">News</Link>
                        <ul>
                          <li>
                            <Link to="blog">Blog with sidebar</Link>
                          </li>
                          <li>
                            <Link to="blog_gridview">Blog Grid View</Link>
                          </li>
                          <li>
                            <Link to="blogdetails">Blog Details</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="contact">Contact</Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
          {/*End Sticky Header*/}
          {/* Mobile Menu  */}
          <div className="mobile-menu">
            <div className="menu-backdrop" />
            <div className="close-btn">
              <span className="icon flaticon-multiply" />
            </div>
            <nav className="menu-box">
              <div className="nav-logo">
                <a href="index.html">
                  <img
                    src="assets/images/resources/mobilemenu-logo.png"
                    alt
                    title
                  />
                </a>
              </div>
              <div className="menu-outer">
                {/*Here Menu Will Come Automatically Via Javascript / Same Menu as in Header*/}
              </div>
              {/*Social Links*/}
              <div className="social-links">
                <ul className="clearfix">
                  <li>
                    <a href="#">
                      <span className="fab fa fa-facebook-square" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="fab fa fa-twitter-square" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="fab fa fa-pinterest-square" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="fab fa fa-google-plus-square" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="fab fa fa-youtube-square" />
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          {/* End Mobile Menu */}
        </header>
      </div>
    </div>
  );
}

export default SecHeader;
