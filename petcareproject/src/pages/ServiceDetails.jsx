import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import BreadCrumbs from "../comman/BreadCrumbs";
import { useState } from "react";
import { useEffect } from "react";
import api from "../utils/AxiosConfig";

function ServiceDetails() {
  let serviceobj = useLocation().state;
  let [servicedetails, setServiceDetails] = useState(serviceobj);
  // console.log(servicedetails);
  const { bycategoryid } = useParams();
  let [services, setServices] = useState("");

  const FetchServices = async () => {
    try {
      let response = await api.get(`/user/services/${bycategoryid}`);
      setServices(response.data.data);

    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    FetchServices();
  }, [bycategoryid]);
  console.log(services);
  
  return (
    <div>
      <div>
        {/*Start breadcrumb area*/}
       <BreadCrumbs title1="Know Your Service" title2="Service" imageUrl="../assets/images/breadcrumb/breadcrumb-1.png"></BreadCrumbs>
        {/*End breadcrumb area*/}
        {/*Start Blog Style2 Area*/}
        <section id="blog-area" className="blog-style3-area">
          <div className="container">
            <div className="row">
              <div className="col-xl-8">
                <div className="blog-posts">
                  {/*Start Single blog Style2*/}
                  {/*Start Bath & Dry Subcategory*/}
                  <div
                    className="single-blog-style2 wow fadeInUp"
                    data-wow-delay="100ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="img-holder">
                      <img src={servicedetails.image} className="style3" style={{height:"400px" , width:"100%"}}></img>
                    </div>
                    <div className="text-holder">
                      {/* Category */}
                      <div className="categories">
                        <h5>{servicedetails.categoryName}</h5>
                      </div>

                      {/* Title */}
                      <h2 className="blog-title">{servicedetails.name}</h2>

                      {/* Short Intro */}
                      <p className="service-subtitle">
                        {servicedetails.desc}
                      </p>

                      {/* Feature Chips */}
                      <ul className="service-features meta-info" >
                        <li>🛁 Warm Bath</li>
                        <li>💨 Blow / Towel Dry</li>
                      </ul>
                      <ul className="service-features meta-info mt-2" >
                        <li>🐾 Paw & Ear Care</li>
                        <li>🪮 Brushing</li>
                      </ul>

                      {/* Description */}
                      <div className="text">
                        <p>
                         Our <strong>Bath & Dry grooming service</strong> is designed to
                keep your pet clean, comfortable, and fresh without the stress
                of full trimming. We focus on hygiene, relaxation, and coat
                health using high-quality grooming products.
                        </p>
                      </div>

                      {/* Meta Info */}
                      <ul className="meta-info justify-content-center">
                        <li>
                          <span className="icon-clock" /> 30–60 Minutes
                        </li>
                        <li>
                          <span className="icon-paw" /> Dogs & Cats
                        </li>
                      </ul>

                      {/* CTA */}
                      <div className="bottom-box justify-content-center">
                        <div className="readmore">
                          <Link to="/booking"  state={servicedetails}  className="theme-btn">
                            <span className="icon-next" /> Book Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*End Bath & Dry Subcategory*/}

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
                  
                </div>
                {/* <div className="row">
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
                </div> */}
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

export default ServiceDetails;
