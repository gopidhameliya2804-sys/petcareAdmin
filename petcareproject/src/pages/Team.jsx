import React from "react";
import { Link } from "react-router-dom";
import BreadCrumbs from "../comman/BreadCrumbs";

function Team() {
  return (
    <div>
      <div>
        {/*Start breadcrumb area*/}
        <BreadCrumbs title1="Our Team" title2="Team" imageUrl="assets/images/breadcrumb/breadcrumb-1.png"></BreadCrumbs>
        {/*End breadcrumb area*/}
        {/*Start Team Page Area*/}
        <section className="team-page-area">
          <div className="container">
            <div className="row">
              {/*Start Single Filter Box*/}
              <div className="col-xl-2 col-lg-4 col-md-4">
                <div className="single-filter-box text-center">
                  <span className="icon-coach" />
                  <h3>Trainer</h3>
                </div>
              </div>
              {/*End Single Filter Box*/}
              {/*Start Single Filter Box*/}
              <div className="col-xl-2 col-lg-4 col-md-4">
                <div className="single-filter-box text-center">
                  <span className="icon-stethoscope" />
                  <h3>Pet Expert</h3>
                </div>
              </div>
              {/*End Single Filter Box*/}
              {/*Start Single Filter Box*/}
              <div className="col-xl-2 col-lg-4 col-md-4">
                <div className="single-filter-box text-center">
                  <span className="icon-vet" />
                  <h3>Groomer</h3>
                </div>
              </div>
              {/*End Single Filter Box*/}
              {/*Start Single Filter Box*/}
              <div className="col-xl-2 col-lg-4 col-md-4">
                <div className="single-filter-box text-center">
                  <span className="icon-flask" />
                  <h3>Nutrition</h3>
                </div>
              </div>
              {/*End Single Filter Box*/}
              {/*Start Single Filter Box*/}
              <div className="col-xl-2 col-lg-4 col-md-4">
                <div className="single-filter-box text-center">
                  <span className="icon-veterinarian" />
                  <h3>Doctor</h3>
                </div>
              </div>
              {/*End Single Filter Box*/}
              {/*Start Single Filter Box*/}
              <div className="col-xl-2 col-lg-4 col-md-4">
                <div className="single-filter-box text-center">
                  <span className="icon-telemarketing" />
                  <h3>Support</h3>
                </div>
              </div>
              {/*End Single Filter Box*/}
            </div>
            <div className="row team-page-content">
              {/*Start Single Team Member*/}
              <div className="col-xl-3 col-lg-6 col-md-6">
                <div
                  className="single-team-member style2 wow animated fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="img-holder">
                    <div className="round-top" />
                    <div className="round-bottom" />
                    <div className="inner">
                      <img
                        src="assets/images/team/team-v1-1.png"
                        alt="Awesome Image"
                      />
                      <div className="overlay-style-one bg1" />
                    </div>
                  </div>
                  <div className="title-holder text-center">
                    <h5>Founder</h5>
                    <h3>
                      <a href="#">Rosalina D. William</a>
                    </h3>
                    <div className="team-social-link">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fa fa-facebook" aria-hidden="true" />
                          </a>
                        </li>
                        <li>
                          <a className="tw" href="#">
                            <i className="fa fa-twitter" aria-hidden="true" />
                          </a>
                        </li>
                        <li>
                          <a className="linkedin" href="#">
                            <i className="fa fa-linkedin" aria-hidden="true" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/*End Single Team Member*/}
              {/*Start Single Team Member*/}
              <div className="col-xl-3 col-lg-6 col-md-6">
                <div
                  className="single-team-member style2 wow animated fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="img-holder">
                    <div className="round-top" />
                    <div className="round-bottom" />
                    <div className="inner">
                      <img
                        src="assets/images/team/team-v1-2.png"
                        alt="Awesome Image"
                      />
                      <div className="overlay-style-one bg2" />
                    </div>
                  </div>
                  <div className="title-holder text-center">
                    <h5>CEO</h5>
                    <h3>
                      <a href="#">Miranda H. Halim</a>
                    </h3>
                    <div className="team-social-link">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fa fa-facebook" aria-hidden="true" />
                          </a>
                        </li>
                        <li>
                          <a className="tw" href="#">
                            <i className="fa fa-twitter" aria-hidden="true" />
                          </a>
                        </li>
                        <li>
                          <a className="linkedin" href="#">
                            <i className="fa fa-linkedin" aria-hidden="true" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/*End Single Team Member*/}
              {/*Start Single Team Member*/}
              <div className="col-xl-3 col-lg-6 col-md-6">
                <div
                  className="single-team-member style2 wow animated fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="img-holder">
                    <div className="round-top" />
                    <div className="round-bottom" />
                    <div className="inner">
                      <img
                        src="assets/images/team/team-v1-3.png"
                        alt="Awesome Image"
                      />
                      <div className="overlay-style-one bg2" />
                    </div>
                  </div>
                  <div className="title-holder text-center">
                    <h5>Groomer</h5>
                    <h3>
                      <a href="#">Hilixer D. Browni</a>
                    </h3>
                    <div className="team-social-link">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fa fa-facebook" aria-hidden="true" />
                          </a>
                        </li>
                        <li>
                          <a className="tw" href="#">
                            <i className="fa fa-twitter" aria-hidden="true" />
                          </a>
                        </li>
                        <li>
                          <a className="linkedin" href="#">
                            <i className="fa fa-linkedin" aria-hidden="true" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/*End Single Team Member*/}
              {/*Start Single Team Member*/}
              <div className="col-xl-3 col-lg-6 col-md-6">
                <div
                  className="single-team-member style2 wow animated fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="img-holder">
                    <div className="round-top" />
                    <div className="round-bottom" />
                    <div className="inner">
                      <img
                        src="assets/images/team/team-v1-4.png"
                        alt="Awesome Image"
                      />
                      <div className="overlay-style-one bg2" />
                    </div>
                  </div>
                  <div className="title-holder text-center">
                    <h5>Groomer</h5>
                    <h3>
                      <a href="#">Yokolili Y. Yankee</a>
                    </h3>
                    <div className="team-social-link">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fa fa-facebook" aria-hidden="true" />
                          </a>
                        </li>
                        <li>
                          <a className="tw" href="#">
                            <i className="fa fa-twitter" aria-hidden="true" />
                          </a>
                        </li>
                        <li>
                          <a className="linkedin" href="#">
                            <i className="fa fa-linkedin" aria-hidden="true" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/*End Single Team Member*/}
            </div>
          </div>
        </section>
        {/*End Team Page Area*/}
        {/*Start Testimonial style1 Area*/}
        <section className="testimonial-style1-area">
          <div className="image-box1">
            <img src="assets/images/testimonial/testimonial-image-1.png" alt />
          </div>
          <div className="image-box2">
            <img src="assets/images/testimonial/testimonial-image-2.png" alt />
          </div>
          <div className="image-box3 paroller">
            <img src="assets/images/testimonial/testimonial-image-3.png" alt />
          </div>
          <div className="image-box4 paroller">
            <img src="assets/images/testimonial/testimonial-image-4.png" alt />
          </div>
          <div
            className="layer-outer"
            style={{ backgroundImage: "url(assets/images/resources/map.png)" }}
          />
          <div className="container">
            <div className="sec-title text-center">
              <div className="icon">
                <i className="icon-bone" />
              </div>
              <h2>
                Clients Feedback
                <span className="round-box zoominout" />
              </h2>
            </div>
            <div className="row">
              <div className="col-xl-12 col-lg-12">
                <div className="testimonial-carousel owl-carousel owl-theme">
                  {/*Start Single Testimonial Style1*/}
                  <div
                    className="single-testimonial-style1  wow fadeInUp"
                    data-wow-delay="100ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="img-holder">
                      <img
                        src="assets/images/testimonial/tes-v1-1.png"
                        alt="Awesome Image"
                      />
                    </div>
                    <div className="text-holder">
                      <h2>Miranda H. Halim</h2>
                      <span>Founder, Miranda Family</span>
                      <div className="text-box">
                        <p>
                          One thing is clear though: taking a proactive approach
                          to collecting customer feedback ensures you never
                          stray too far from the needs of your community, even
                          as those needs evolve.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/*End Single Testimonial Style1*/}
                  {/*Start Single Testimonial Style1*/}
                  <div
                    className="single-testimonial-style1  wow fadeInUp"
                    data-wow-delay="100ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="img-holder">
                      <img
                        src="assets/images/testimonial/tes-v1-1.png"
                        alt="Awesome Image"
                      />
                    </div>
                    <div className="text-holder">
                      <h2>Miranda H. Halim</h2>
                      <span>Founder, Miranda Family</span>
                      <div className="text-box">
                        <p>
                          One thing is clear though: taking a proactive approach
                          to collecting customer feedback ensures you never
                          stray too far from the needs of your community, even
                          as those needs evolve.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/*End Single Testimonial Style1*/}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*End Testimonial Style1 Area*/}
      </div>
    </div>
  );
}

export default Team;
