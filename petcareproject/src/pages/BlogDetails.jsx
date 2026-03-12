import React from "react";
import { Link } from "react-router-dom";
import BreadCrumbs from "../comman/BreadCrumbs";

function BlogDetails() {
  return (
    <div>
      <div>
        {/*Start breadcrumb area*/}
       <BreadCrumbs title1="News Details" title2="News Details" imageUrl="assets/images/breadcrumb/breadcrumb-1.png"></BreadCrumbs>
        {/*End breadcrumb area*/}
        {/*Start Blog Style2 Area*/}
        <section id="blog-area" className="blog-single-area">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-7">
                <div className="blog-posts">
                  <div className="single-blog-style2">
                    <div className="text-holder">
                      {/*Start Blog Details Single*/}
                      <div className="blog-details-single">
                        <div className="categories">
                          <h5>Business</h5>
                        </div>
                        <h2 className="blog-title">
                          Lorem ipsum dolor sit amet, consecte cing elit, sed do
                          eiusmod tempor.
                        </h2>
                        <ul className="meta-info">
                          <li>
                            <span className="icon-user" />
                            <a href="#">by Piklo D. Sindom</a>
                          </li>
                          <li>
                            <span className="icon-calendar" />
                            <a href="#">24th March 2019</a>
                          </li>
                          <li>
                            <span className="icon-chat" />
                            <a href="#">35 Comments</a>
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
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum. Sed ut
                            perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium, totam
                            rem aperiam, eaque ipsa quae ab illo inventore
                            veritatis et quasi architecto beatae vitae dicta
                            sunt explicabo. Nemo enim ipsam voluptatem quia
                            voluptas sit aspernatur aut odit aut fugit, sed quia
                            consequuntur magni dolores eos qui ratione
                            voluptatem sequi nesciunt. Neque porro quisquam est,
                            qui dolorem ipsum quia dolor sit amet, consectetur,
                            adipisci velit, sed quia non numquam eius modi
                            tempora incidunt ut labore et dolore magnam aliquam
                            quaerat voluptatem. Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim
                            ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea.
                          </p>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non
                            proident, sunt in culpa qui officia deserunt. Lorem
                            ipsum dolor sit amet, consectetur adipisicing elit,
                            sed do eiusmod tempor incididunt ut labore
                          </p>
                        </div>
                        <div className="blog-details-image-1">
                          <img
                            src="assets/images/blog/blog-details-image-1.jpg"
                            alt
                          />
                        </div>
                        <div className="blog-details-text-1">
                          <h2>A cleansing hot shower or bath</h2>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam,
                            ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non
                            proident, sunt in culpa qui officia. et dolore magna
                            aliqua. Ut{" "}
                          </p>
                        </div>
                        <div className="blog-details-text-2">
                          <h2>Setting the mood with incense</h2>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia.{" "}
                          </p>
                        </div>
                        <div className="blog-details-text-3">
                          <h2>Setting the mood with incense</h2>
                          <ul>
                            <li>
                              <span className="icon-tick" />
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do.
                            </li>
                            <li>
                              <span className="icon-tick" />
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do.
                            </li>
                            <li>
                              <span className="icon-tick" />
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do.
                            </li>
                            <li>
                              <span className="icon-tick" />
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do.
                            </li>
                            <li>
                              <span className="icon-tick" />
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do.
                            </li>
                          </ul>
                        </div>
                        <div className="blog-details-author-box text-center">
                          <div className="quote">
                            <span className="icon-quote" />
                          </div>
                          <h6>by Hetmayar</h6>
                          <h2>
                            Viral dreamcatcher keytar typewriter, aest hetic
                            offal umami. Aesthetic polaroid pug pitchfork
                            post-ironic.
                          </h2>
                        </div>
                        <div className="blog-details-text-4">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, officia deserunt mollit anim
                            id est laborum. Sed ut perspiciatis unde omnis iste
                            natus error sit voluptatem accusantium.ex
                          </p>
                        </div>
                        <div className="blog-details-image-2">
                          <div className="image-box">
                            <img
                              src="assets/images/blog/blog-details-image-2.jpg"
                              alt
                            />
                          </div>
                          <div className="text-box">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiusmod tempor incididunt
                              ut labore et dolore magna aliqua. Ut enim ad minim
                              veniam, quis nostrud exercitation ullamco laboris
                              nisi ut aliquip ex ea commodo consequat. Duis aute
                              irure dolor in reprehenderit in voluptate velit
                              esse cillum dolore eu fugiat nulla pariatur.
                              Excepteur sint occaecat cupidatat no officia
                              deserunt mollit anim id est laborum. Sed ut
                              perspiciatis unde omnis iste natus error sit
                              voluptatem accusantium doloremque laudantium.
                            </p>
                          </div>
                        </div>
                        <div className="blog-details-text-5">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, deserunt mollit anim id est
                            laborum. Sed ut perspiciatis unde omnis iste natus
                            error sit voluptatem. ex ea commodo
                          </p>
                        </div>
                        <div className="tag-social-share-box">
                          <div className="single-box">
                            <div className="title">
                              <h3>Releted Tags</h3>
                            </div>
                            <ul className="tag-list">
                              <li>
                                <a href="#">Popular</a>
                              </li>
                              <li>
                                <a href="#">Desgin</a>
                              </li>
                              <li>
                                <a href="#">UI/UX</a>
                              </li>
                            </ul>
                          </div>
                          <div className="single-box">
                            <div className="title right">
                              <h3>Social Share</h3>
                            </div>
                            <ul className="social-share">
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
                      {/*End Blog Details Single*/}
                      <div className="blog-prev-next-option">
                        <div className="single-box left">
                          <p>
                            <a href="#">Prev Post</a>
                          </p>
                          <h2>
                            <a href="#">Tips On Minimalist</a>
                          </h2>
                        </div>
                        <div className="middle-box">
                          <div className="icon">
                            <a href="#">
                              <span className="icon-menu" />
                            </a>
                          </div>
                        </div>
                        <div className="single-box right">
                          <p>
                            <a href="#">Next Post</a>
                          </p>
                          <h2>
                            <a href="#">Less Is More</a>
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="blog-details-bottom-content">
                    <div className="related-blog-post">
                      <div className="inner-title">
                        <h3>Releted Post</h3>
                      </div>
                      <div className="row">
                        {/*Start Single blog Style1*/}
                        <div className="col-xl-6">
                          <div className="single-blog-style1">
                            <div className="img-holder">
                              <div className="inner">
                                <img
                                  src="assets/images/blog/related-blog-1.jpg"
                                  alt="Awesome Image"
                                />
                              </div>
                            </div>
                            <div className="text-holder">
                              <ul className="meta-info">
                                <li>
                                  <span className="icon-calendar" />
                                  <a href="#">24th March 2019</a>
                                </li>
                              </ul>
                              <h3 className="blog-title">
                                <a href="blog-single.html">
                                  A series of iOS 7 inspire vector icons sense
                                  <span className="round-box zoominout" />
                                </a>
                              </h3>
                              <div className="text">
                                <p>
                                  Lorem ipsum dolor sit amet, conse ctet ur
                                  adipisicing elit, sed doing.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/*End Single blog Style1*/}
                        {/*Start Single blog Style1*/}
                        <div className="col-xl-6">
                          <div className="single-blog-style1">
                            <div className="img-holder">
                              <div className="inner">
                                <img
                                  src="assets/images/blog/related-blog-2.jpg"
                                  alt="Awesome Image"
                                />
                              </div>
                            </div>
                            <div className="text-holder">
                              <ul className="meta-info">
                                <li>
                                  <span className="icon-calendar" />
                                  <a href="#">24th March 2019</a>
                                </li>
                              </ul>
                              <h3 className="blog-title">
                                <a href="blog-single.html">
                                  A series of iOS 7 inspire vector icons sense
                                  <span className="round-box zoominout" />
                                </a>
                              </h3>
                              <div className="text">
                                <p>
                                  Lorem ipsum dolor sit amet, conse ctet ur
                                  adipisicing elit, sed doing.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/*End Single blog Style1*/}
                      </div>
                    </div>
                    <div className="author-box-holder">
                      <div className="inner">
                        <div className="img-box">
                          <img src="assets/images/blog/author.jpg" alt />
                        </div>
                        <div className="text-box">
                          <span>Written by</span>
                          <h2>Rosalina D. William</h2>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/*Start comment box*/}
                    <div className="comment-box">
                      <div className="title">
                        <h3>Comments</h3>
                      </div>
                      <div className="outer-box">
                        <div className="row">
                          <div className="col-md-12">
                            {/*Start single comment*/}
                            <div className="single-comment">
                              <div className="single-comment-box">
                                <div className="img-holder">
                                  <img
                                    src="assets/images/blog/comment-1.png"
                                    alt="Awesome Image"
                                  />
                                </div>
                                <div className="text-holder">
                                  <div className="top">
                                    <div className="name">
                                      <h3>Rosalina Kelian</h3>
                                      <h5>
                                        <span className="icon-calendar" />
                                        24th March 2019
                                      </h5>
                                    </div>
                                    <div className="reply">
                                      <a href="#">
                                        <span className="icon-reply" />
                                        Reply
                                      </a>
                                    </div>
                                  </div>
                                  <div className="text">
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipisicing elit, sed do eiusmod tempor
                                      incididunt ut labore et dolore magna
                                      aliqua. Ut enim ad minim veniam, quis
                                      nostrud exercitation ullamco laboris nisi
                                      ut aliquip ex ea commodo consequat.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/*End single comment*/}
                            {/*Start single comment*/}
                            <div className="single-comment comment-reply">
                              <div className="single-comment-box">
                                <div className="img-holder">
                                  <img
                                    src="assets/images/blog/comment-2.png"
                                    alt="Awesome Image"
                                  />
                                </div>
                                <div className="text-holder">
                                  <div className="top">
                                    <div className="name">
                                      <h3>Rosalina Kelian</h3>
                                      <h5>
                                        <span className="icon-calendar" />
                                        24th March 2019
                                      </h5>
                                    </div>
                                    <div className="reply">
                                      <a href="#">
                                        <span className="icon-reply" />
                                        Reply
                                      </a>
                                    </div>
                                  </div>
                                  <div className="text">
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipisicing elit, sed do eiusmod tempor
                                      incididunt ut labore et dolore magna
                                      aliqua. Ut enim ad minim veniam, quis
                                      nostrud exercitation ullamco laboris nisi
                                      ut aliquip ex ea commodo consequat.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/*End single comment*/}
                            {/*Start single comment*/}
                            <div className="single-comment">
                              <div className="single-comment-box">
                                <div className="img-holder">
                                  <img
                                    src="assets/images/blog/comment-3.png"
                                    alt="Awesome Image"
                                  />
                                </div>
                                <div className="text-holder">
                                  <div className="top">
                                    <div className="name">
                                      <h3>Arista Williamson</h3>
                                      <h5>
                                        <span className="icon-calendar" />
                                        24th March 2019
                                      </h5>
                                    </div>
                                    <div className="reply">
                                      <a href="#">
                                        <span className="icon-reply" />
                                        Reply
                                      </a>
                                    </div>
                                  </div>
                                  <div className="text">
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipisicing elit, sed do eiusmod tempor
                                      incididunt ut labore et dolore magna
                                      aliqua. Ut enim ad minim veniam, quis
                                      nostrud exercitation ullamco laboris nisi
                                      ut aliquip ex ea commodo consequat.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/*End single comment*/}
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*End comment box*/}
                    {/*Start add comment box*/}
                    <div className="add-comment-box">
                      <div className="title">
                        <h3>Post Comment</h3>
                      </div>
                      <form id="add-comment-form" action="#">
                        <div className="row">
                          <div className="col-md-12">
                            <div className="row">
                              <div className="col-md-12">
                                <div className="input-box">
                                  <textarea
                                    name="message"
                                    placeholder="Type your comments...."
                                    required
                                    defaultValue={""}
                                  />
                                  <div className="icon">
                                    <span className="icon-pen" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-md-12">
                                <div className="input-box">
                                  <input
                                    type="text"
                                    name="fname"
                                    defaultValue
                                    placeholder="Type your name...."
                                    required
                                  />
                                  <div className="icon">
                                    <span className="icon-user" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-md-12">
                                <div className="input-box">
                                  <input
                                    type="email"
                                    name="femail"
                                    defaultValue
                                    placeholder="Type your email...."
                                    required
                                  />
                                  <div className="icon">
                                    <span className="icon-envelope" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-md-12">
                                <div className="input-box">
                                  <input
                                    type="text"
                                    name="fwebsite"
                                    defaultValue
                                    placeholder="Type your website...."
                                  />
                                  <div className="icon">
                                    <span className="icon-earth-grid-symbol" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-md-12">
                                <div className="button-box">
                                  <button className="btn-one" type="submit">
                                    <span className="txt">
                                      <i className="icon-chat" />
                                      Post Comments
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                    {/*End add comment box*/}
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

export default BlogDetails;
