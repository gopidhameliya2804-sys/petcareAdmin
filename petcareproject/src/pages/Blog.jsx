import React from "react";
import { Link } from "react-router-dom";
import BreadCrumbs from "../comman/BreadCrumbs";

function Blog() {
  return (
    <div>
      <div>
        {/*Start breadcrumb area*/}
       <BreadCrumbs title1=" News Feeds" title2=" News Feeds" imageUrl="assets/images/breadcrumb/breadcrumb-1.png"></BreadCrumbs>
        {/*End breadcrumb area*/}
        {/*Start Blog Style2 Area*/}
        <section id="blog-area" className="blog-style3-area">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-7">
                <div className="blog-posts">
                  {/*Start Single blog Style2*/}
                  <div
                    className="single-blog-style2 wow fadeInLeft"
                    data-wow-delay="100ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="img-holder">
                      <div className="inner">
                        <img
                          src="assets/images/blog/blog-v2-1.jpg"
                          alt="Awesome Image"
                        />
                      </div>
                    </div>
                    <div className="text-holder">
                      <div className="categories">
                        <h5>Business</h5>
                      </div>
                      <h2 className="blog-title">
                        <a href="blog-single.html">
                          Lorem ipsum dolor sit amet, consecte cing elit, sed do
                          eiusmod tempor.
                        </a>
                      </h2>
                      <ul className="meta-info">
                        <li>
                          <span className="icon-eye" />
                          <a href="#">232 Views</a>
                        </li>
                        <li>
                          <span className="icon-chat" />
                          <a href="#">35 Comments</a>
                        </li>
                        <li>
                          <span className="icon-calendar" />
                          <a href="#">24th March 2019</a>
                        </li>
                      </ul>
                      <div className="text">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint{" "}
                        </p>
                      </div>
                      <div className="bottom-box">
                        <div className="author">
                          <div className="image">
                            <img src="assets/images/blog/author-1.png" alt />
                          </div>
                          <div className="name">
                            <h4>by Hetmayar</h4>
                          </div>
                        </div>
                        <div className="readmore">
                          <a href="#">
                            <span className="icon-next" />
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*End Single blog Style2*/}
                  {/*Start Single blog Style2*/}
                  <div
                    className="single-blog-style2 wow fadeInLeft"
                    data-wow-delay="100ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="single-item">
                      <div className="img-holder">
                        <div
                          className="video-holder-box style3 text-center"
                          style={{
                            backgroundImage:
                              "url(assets/images/blog/blog-v2-2.jpg)",
                          }}
                        >
                          <div className="icon">
                            <a
                              className="video-popup"
                              title="CarePress"
                              href="https://www.youtube.com/watch?v=p25gICT63ek"
                            >
                              <span className="icon-play-button" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="text-holder">
                        <div className="categories">
                          <h5>Business</h5>
                        </div>
                        <h2 className="blog-title">
                          <a href="blog-single.html">
                            Adipisicing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore.
                          </a>
                        </h2>
                        <ul className="meta-info">
                          <li>
                            <span className="icon-eye" />
                            <a href="#">232 Views</a>
                          </li>
                          <li>
                            <span className="icon-chat" />
                            <a href="#">35 Comments</a>
                          </li>
                          <li>
                            <span className="icon-calendar" />
                            <a href="#">24th March 2019</a>
                          </li>
                        </ul>
                        <div className="text">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint{" "}
                          </p>
                        </div>
                        <div className="bottom-box">
                          <div className="author">
                            <div className="image">
                              <img src="assets/images/blog/author-1.png" alt />
                            </div>
                            <div className="name">
                              <h4>by Hetmayar</h4>
                            </div>
                          </div>
                          <div className="readmore">
                            <a href="#">
                              <span className="icon-next" />
                              Read More
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*End Single blog Style2*/}
                  {/*Start Single blog Style2*/}
                  <div
                    className="single-blog-style2 wow fadeInLeft"
                    data-wow-delay="100ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="blog-carousel-2 owl-carousel owl-theme owl-nav-style-one">
                      {/*Start Single Item*/}
                      <div className="single-item">
                        <div className="img-holder">
                          <div className="inner">
                            <img
                              src="assets/images/blog/blog-v2-3.jpg"
                              alt="Awesome Image"
                            />
                          </div>
                        </div>
                      </div>
                      {/*End Single Item*/}
                      {/*Start Single Item*/}
                      <div className="single-item">
                        <div className="img-holder">
                          <div className="inner">
                            <img
                              src="assets/images/blog/blog-v2-3.jpg"
                              alt="Awesome Image"
                            />
                          </div>
                        </div>
                      </div>
                      {/*End Single Item*/}
                    </div>
                    <div className="text-holder">
                      <div className="categories">
                        <h5>Business</h5>
                      </div>
                      <h2 className="blog-title">
                        <a href="blog-single.html">
                          Magna aliqua. Ut enim ad minim veniam, quis nostrud
                          exercitation ullamco
                        </a>
                      </h2>
                      <ul className="meta-info">
                        <li>
                          <span className="icon-eye" />
                          <a href="#">232 Views</a>
                        </li>
                        <li>
                          <span className="icon-chat" />
                          <a href="#">35 Comments</a>
                        </li>
                        <li>
                          <span className="icon-calendar" />
                          <a href="#">24th March 2019</a>
                        </li>
                      </ul>
                      <div className="text">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint{" "}
                        </p>
                      </div>
                      <div className="bottom-box">
                        <div className="author">
                          <div className="image">
                            <img src="assets/images/blog/author-1.png" alt />
                          </div>
                          <div className="name">
                            <h4>by Hetmayar</h4>
                          </div>
                        </div>
                        <div className="readmore">
                          <a href="#">
                            <span className="icon-next" />
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*End Single blog Style2*/}
                  {/*Start Single blog Style2*/}
                  <div
                    className="single-blog-style2 wow fadeInLeft"
                    data-wow-delay="100ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="audio-box-holder">
                      <img src="assets/images/blog/audio.jpg" alt />
                    </div>
                    <div className="text-holder">
                      <div className="categories">
                        <h5>Business</h5>
                      </div>
                      <h2 className="blog-title">
                        <a href="blog-single.html">
                          Laboris nisi ut aliquip ex ea commodo consequat. Duis
                          aute irure dolor.
                        </a>
                      </h2>
                      <ul className="meta-info">
                        <li>
                          <span className="icon-eye" />
                          <a href="#">232 Views</a>
                        </li>
                        <li>
                          <span className="icon-chat" />
                          <a href="#">35 Comments</a>
                        </li>
                        <li>
                          <span className="icon-calendar" />
                          <a href="#">24th March 2019</a>
                        </li>
                      </ul>
                      <div className="text">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint{" "}
                        </p>
                      </div>
                      <div className="bottom-box">
                        <div className="author">
                          <div className="image">
                            <img src="assets/images/blog/author-1.png" alt />
                          </div>
                          <div className="name">
                            <h4>by Hetmayar</h4>
                          </div>
                        </div>
                        <div className="readmore">
                          <a href="#">
                            <span className="icon-next" />
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*End Single blog Style2*/}
                  {/*Start Single blog Style2*/}
                  <div
                    className="single-blog-style2 wow fadeInLeft"
                    data-wow-delay="100ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="text-holder">
                      <div className="categories">
                        <h5>Business</h5>
                      </div>
                      <h2 className="blog-title">
                        <a href="blog-single.html">
                          In reprehenderit in voluptate velit esse cillum dolore
                          eu fugiat nulla pariatur.
                        </a>
                      </h2>
                      <ul className="meta-info">
                        <li>
                          <span className="icon-eye" />
                          <a href="#">232 Views</a>
                        </li>
                        <li>
                          <span className="icon-chat" />
                          <a href="#">35 Comments</a>
                        </li>
                        <li>
                          <span className="icon-calendar" />
                          <a href="#">24th March 2019</a>
                        </li>
                      </ul>
                      <div className="text">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint{" "}
                        </p>
                      </div>
                      <div className="bottom-box">
                        <div className="author">
                          <div className="image">
                            <img src="assets/images/blog/author-1.png" alt />
                          </div>
                          <div className="name">
                            <h4>by Hetmayar</h4>
                          </div>
                        </div>
                        <div className="readmore">
                          <a href="#">
                            <span className="icon-next" />
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*End Single blog Style2*/}
                  {/*Start Single blog Style2*/}
                  <div
                    className="single-blog-style2 wow fadeInLeft"
                    data-wow-delay="100ms"
                    data-wow-duration="1500ms"
                  >
                    <div
                      className="outer-box"
                      style={{
                        backgroundImage:
                          "url(assets/images/pattern/single-blog-style2-bg.jpg)",
                      }}
                    >
                      <div className="inner-content">
                        <div className="icon-holder">
                          <span className="icon-quote" />
                        </div>
                        <div className="text-holder">
                          <h2 className="blog-title">
                            <a href="blog-single.html">
                              Excepteur sint occaecat cupida tat non proident,
                              sunt in.
                            </a>
                          </h2>
                          <ul className="meta-info">
                            <li>
                              <span className="icon-eye" />
                              <a href="#">232 Views</a>
                            </li>
                            <li>
                              <span className="icon-chat" />
                              <a href="#">35 Comments</a>
                            </li>
                            <li>
                              <span className="icon-calendar" />
                              <a href="#">24th March 2019</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*End Single blog Style2*/}
                  {/*Start Single blog Style2*/}
                  <div
                    className="single-blog-style2 style2instyle3 wow fadeInLeft"
                    data-wow-delay="100ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="text-holder">
                      <div className="categories">
                        <h5>Business</h5>
                      </div>
                      <h2 className="blog-title">
                        <a href="blog-single.html">
                          Culpa qui officia deserunt mollit anim id est laborum.
                          Sed ut perspiciatis
                        </a>
                      </h2>
                      <ul className="meta-info">
                        <li>
                          <span className="icon-eye" />
                          <a href="#">232 Views</a>
                        </li>
                        <li>
                          <span className="icon-chat" />
                          <a href="#">35 Comments</a>
                        </li>
                        <li>
                          <span className="icon-calendar" />
                          <a href="#">24th March 2019</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/*End Single blog Style2*/}
                </div>
                <div className="row">
                  <div className="col-xl-12">
                    <ul className="styled-pagination clearfix text-center">
                      <li className="prev">
                        <a href="#">
                          <i
                            className="fa fa-angle-double-left"
                            aria-hidden="true"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">1</a>
                      </li>
                      <li className="active">
                        <a href="#">2</a>
                      </li>
                      <li>
                        <a href="#">3</a>
                      </li>
                      <li className="dotted">
                        <a href="#">
                          <span>...</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">10</a>
                      </li>
                      <li className="next">
                        <a href="#">
                          <i
                            className="fa fa-angle-double-right"
                            aria-hidden="true"
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/*Start sidebar Wrapper*/}
              <div className="col-xl-4 col-lg-5 col-md-9 col-sm-12">
                <div className="sidebar-wrapper">
                  <div
                    className="single-sidebar wow fadeInUp animated"
                    data-wow-delay="0.0s"
                    data-wow-duration="1200ms"
                  >
                    <div className="sidebar-about-me-box text-center">
                      <div className="title">
                        <h3>About Me</h3>
                      </div>
                      <div className="image-box">
                        <img
                          src="assets/images/blog/sidebar-me-box-1.png"
                          alt="Awesome Image"
                        />
                      </div>
                      <div className="text-holder">
                        <h3>Rosalina D. Willaimson</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectet ur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore.
                        </p>
                        <div className="sidebar-social-link">
                          <ul>
                            <li>
                              <a href="#">
                                <i
                                  className="fa fa-facebook"
                                  aria-hidden="true"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i
                                  className="fa fa-twitter"
                                  aria-hidden="true"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i
                                  className="fa fa-linkedin"
                                  aria-hidden="true"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i
                                  className="fa fa-behance"
                                  aria-hidden="true"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i
                                  className="fa fa-pinterest"
                                  aria-hidden="true"
                                />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*Start single sidebar*/}
                  <div
                    className="single-sidebar wow fadeInUp animated"
                    data-wow-delay="0.1s"
                    data-wow-duration="1200ms"
                  >
                    <div className="title">
                      <h3>Search Objects</h3>
                    </div>
                    <div className="sidebar-search-box">
                      <form className="search-form" action="#">
                        <input
                          placeholder="Search your keyword..."
                          type="text"
                        />
                        <button type="submit">
                          <i className="fa fa-search" aria-hidden="true" />
                        </button>
                      </form>
                    </div>
                  </div>
                  {/*End single sidebar*/}
                  {/*Start single sidebar*/}
                  <div
                    className="single-sidebar wow fadeInUp animated"
                    data-wow-delay="0.2s"
                    data-wow-duration="1200ms"
                  >
                    <div className="title">
                      <h3>Popular Feeds</h3>
                    </div>
                    <ul className="popular-feeds">
                      <li>
                        <div className="inner">
                          <div className="img-box">
                            <img
                              src="assets/images/sidebar/popular-feeds-1.png"
                              alt="Awesome Image"
                            />
                            <div className="overlay-content">
                              <a href="#">
                                <i className="fa fa-link" aria-hidden="true" />
                              </a>
                            </div>
                          </div>
                          <div className="title-box">
                            <h4>
                              <a href="#">
                                Lorem ipsum dolor sit
                                <br /> cing elit, sed do.
                              </a>
                            </h4>
                            <h6>
                              <span className="icon-calendar-1" />
                              24th March 2019
                            </h6>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="inner">
                          <div className="img-box">
                            <img
                              src="assets/images/sidebar/popular-feeds-2.png"
                              alt="Awesome Image"
                            />
                            <div className="overlay-content">
                              <a href="#">
                                <i className="fa fa-link" aria-hidden="true" />
                              </a>
                            </div>
                          </div>
                          <div className="title-box">
                            <h4>
                              <a href="#">
                                Lorem ipsum dolor sit
                                <br /> cing elit, sed do.
                              </a>
                            </h4>
                            <h6>
                              <span className="icon-calendar-1" />
                              24th March 2019
                            </h6>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="inner">
                          <div className="img-box">
                            <img
                              src="assets/images/sidebar/popular-feeds-3.png"
                              alt="Awesome Image"
                            />
                            <div className="overlay-content">
                              <a href="#">
                                <i className="fa fa-link" aria-hidden="true" />
                              </a>
                            </div>
                          </div>
                          <div className="title-box">
                            <h4>
                              <a href="#">
                                Lorem ipsum dolor sit
                                <br /> cing elit, sed do.
                              </a>
                            </h4>
                            <h6>
                              <span className="icon-calendar-1" />
                              24th March 2019
                            </h6>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="inner">
                          <div className="img-box">
                            <img
                              src="assets/images/sidebar/popular-feeds-4.png"
                              alt="Awesome Image"
                            />
                            <div className="overlay-content">
                              <a href="#">
                                <i className="fa fa-link" aria-hidden="true" />
                              </a>
                            </div>
                          </div>
                          <div className="title-box">
                            <h4>
                              <a href="#">
                                Lorem ipsum dolor sit
                                <br /> cing elit, sed do.
                              </a>
                            </h4>
                            <h6>
                              <span className="icon-calendar-1" />
                              24th March 2019
                            </h6>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/*End single sidebar*/}
                  {/*Start sidebar categories Box*/}
                  <div
                    className="single-sidebar wow fadeInUp animated"
                    data-wow-delay="0.3s"
                    data-wow-duration="1200ms"
                  >
                    <div className="title">
                      <h3>Categories</h3>
                    </div>
                    <ul className="categorie-boxs">
                      <li>
                        <a href="#">
                          Business <span>26</span>
                        </a>
                      </li>
                      <li className="active">
                        <a href="#">
                          Consultant <span>30</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Creative <span>71</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          UI/UX <span>56</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Technology <span>60</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/*End sidebar categories Box*/}
                  {/*Start sidebar categories Box*/}
                  <div
                    className="single-sidebar wow fadeInUp animated"
                    data-wow-delay="0.4s"
                    data-wow-duration="1200ms"
                  >
                    <div className="title">
                      <h3>Never Miss News</h3>
                    </div>
                    <ul className="sidebar-social-links">
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
                  {/*End sidebar categories Box*/}
                  {/*Start Single Sidebar */}
                  <div
                    className="single-sidebar wow fadeInUp animated"
                    data-wow-delay="0.5s"
                    data-wow-duration="1200ms"
                  >
                    <div className="title">
                      <h3>Twitter Feeds</h3>
                    </div>
                    <ul className="sidebar-twitter-feeds">
                      <li>
                        <div className="inner">
                          <div className="icon">
                            <span className="icon-twitter" />
                          </div>
                          <div className="text">
                            <p>
                              <a href="#">
                                Rescue - #Gutenberg ready @ wordpress Theme for
                                Creative Bloggers available on @ ThemeForest
                                https://t.co/2r1POjOjgVC…
                                https://t.co/rDAnPyClu1
                              </a>
                            </p>
                            <h5>November 25, 2018</h5>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="inner">
                          <div className="icon">
                            <span className="icon-twitter" />
                          </div>
                          <div className="text">
                            <p>
                              <a href="#">
                                Rescue - #Gutenberg ready @ wordpress Theme for
                                Creative Bloggers available on @ ThemeForest
                                https://t.co/2r1POjOjgVC…
                                https://t.co/rDAnPyClu1
                              </a>
                            </p>
                            <h5>November 25, 2018</h5>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="inner">
                          <div className="icon">
                            <span className="icon-twitter" />
                          </div>
                          <div className="text">
                            <p>
                              <a href="#">
                                Rescue - #Gutenberg ready @ wordpress Theme for
                                Creative Bloggers available on @ ThemeForest
                                https://t.co/2r1POjOjgVC…
                                https://t.co/rDAnPyClu1
                              </a>
                            </p>
                            <h5>November 25, 2018</h5>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/*End Single Sidebar */}
                  {/*Start Single Sidebar */}
                  <div
                    className="single-sidebar wow fadeInUp animated"
                    data-wow-delay="0.6s"
                    data-wow-duration="1200ms"
                  >
                    <div className="title">
                      <h3>Instagram Feeds</h3>
                    </div>
                    <ul className="instagram">
                      <li>
                        <div className="img-box">
                          <img
                            src="assets/images/sidebar/instagram-1.jpg"
                            alt="Awesome Image"
                          />
                          <div className="overlay-content">
                            <a
                              className="lightbox-image"
                              data-fancybox="gallery"
                              href="assets/images/sidebar/instagram-1.jpg"
                            >
                              <i
                                className="fa fa-search-plus"
                                aria-hidden="true"
                              />
                            </a>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="img-box">
                          <img
                            src="assets/images/sidebar/instagram-2.jpg"
                            alt="Awesome Image"
                          />
                          <div className="overlay-content">
                            <a
                              className="lightbox-image"
                              data-fancybox="gallery"
                              href="assets/images/sidebar/instagram-2.jpg"
                            >
                              <i
                                className="fa fa-search-plus"
                                aria-hidden="true"
                              />
                            </a>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="img-box">
                          <img
                            src="assets/images/sidebar/instagram-3.jpg"
                            alt="Awesome Image"
                          />
                          <div className="overlay-content">
                            <a
                              className="lightbox-image"
                              data-fancybox="gallery"
                              href="assets/images/sidebar/instagram-3.jpg"
                            >
                              <i
                                className="fa fa-search-plus"
                                aria-hidden="true"
                              />
                            </a>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="img-box">
                          <img
                            src="assets/images/sidebar/instagram-4.jpg"
                            alt="Awesome Image"
                          />
                          <div className="overlay-content">
                            <a
                              className="lightbox-image"
                              data-fancybox="gallery"
                              href="assets/images/sidebar/instagram-4.jpg"
                            >
                              <i
                                className="fa fa-search-plus"
                                aria-hidden="true"
                              />
                            </a>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="img-box">
                          <img
                            src="assets/images/sidebar/instagram-5.jpg"
                            alt="Awesome Image"
                          />
                          <div className="overlay-content">
                            <a
                              className="lightbox-image"
                              data-fancybox="gallery"
                              href="assets/images/sidebar/instagram-5.jpg"
                            >
                              <i
                                className="fa fa-search-plus"
                                aria-hidden="true"
                              />
                            </a>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="img-box">
                          <img
                            src="assets/images/sidebar/instagram-6.jpg"
                            alt="Awesome Image"
                          />
                          <div className="overlay-content">
                            <a
                              className="lightbox-image"
                              data-fancybox="gallery"
                              href="assets/images/sidebar/instagram-6.jpg"
                            >
                              <i
                                className="fa fa-search-plus"
                                aria-hidden="true"
                              />
                            </a>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="img-box">
                          <img
                            src="assets/images/sidebar/instagram-7.jpg"
                            alt="Awesome Image"
                          />
                          <div className="overlay-content">
                            <a
                              className="lightbox-image"
                              data-fancybox="gallery"
                              href="assets/images/sidebar/instagram-7.jpg"
                            >
                              <i
                                className="fa fa-search-plus"
                                aria-hidden="true"
                              />
                            </a>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="img-box">
                          <img
                            src="assets/images/sidebar/instagram-8.jpg"
                            alt="Awesome Image"
                          />
                          <div className="overlay-content">
                            <a
                              className="lightbox-image"
                              data-fancybox="gallery"
                              href="assets/images/sidebar/instagram-8.jpg"
                            >
                              <i
                                className="fa fa-search-plus"
                                aria-hidden="true"
                              />
                            </a>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="img-box">
                          <img
                            src="assets/images/sidebar/instagram-9.jpg"
                            alt="Awesome Image"
                          />
                          <div className="overlay-content">
                            <a
                              className="lightbox-image"
                              data-fancybox="gallery"
                              href="assets/images/sidebar/instagram-9.jpg"
                            >
                              <i
                                className="fa fa-search-plus"
                                aria-hidden="true"
                              />
                            </a>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/*End Single Sidebar */}
                  {/*Start single sidebar*/}
                  <div
                    className="single-sidebar wow fadeInUp animated"
                    data-wow-delay="0.7s"
                    data-wow-duration="1200ms"
                  >
                    <div className="title">
                      <h3>Popular Tags</h3>
                    </div>
                    <ul className="popular-tag">
                      <li>
                        <a href="#">popular</a>
                      </li>
                      <li>
                        <a href="#">desgin</a>
                      </li>
                      <li>
                        <a href="#">ux</a>
                      </li>
                      <li>
                        <a href="#">usability</a>
                      </li>
                      <li>
                        <a href="#">develop</a>
                      </li>
                      <li>
                        <a href="#">icon</a>
                      </li>
                      <li>
                        <a href="#">business</a>
                      </li>
                      <li>
                        <a href="#">consult</a>
                      </li>
                      <li>
                        <a href="#">kit</a>
                      </li>
                      <li>
                        <a href="#">keyboard</a>
                      </li>
                      <li>
                        <a href="#">mouse</a>
                      </li>
                      <li>
                        <a href="#">tech</a>
                      </li>
                    </ul>
                  </div>
                  {/*End single sidebar*/}
                  <div
                    className="sidebar-add-banner-box"
                    style={{
                      backgroundImage:
                        "url(assets/images/sidebar/add-banner.jpg)",
                    }}
                  >
                    <div className="inner">
                      <h6>350x600</h6>
                      <h3>Add Banner</h3>
                    </div>
                  </div>
                </div>
              </div>
              {/*End Sidebar Wrapper*/}
            </div>
          </div>
        </section>
        {/*End Blog Style2 Area*/}
      </div>
    </div>
  );
}

export default Blog;
