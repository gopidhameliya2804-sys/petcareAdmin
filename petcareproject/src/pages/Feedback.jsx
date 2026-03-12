import React from "react";
import { Link } from "react-router-dom";
import BreadCrumbs from "../comman/BreadCrumbs";

function Feedback() {
  con
  return (
    <div>
      {/* Start breadcrumb area */}
     <BreadCrumbs title1="Feedback" title2="Feedback" imageUrl="assets/images/breadcrumb/breadcrumb-1.png"></BreadCrumbs>
      {/* End breadcrumb area */}

      {/* Start Feedback Info Area */}
      <section className="contact-info-area style3">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-6 col-md-6">
              <div className="single-contact-info-box">
                <span className="icon-star" />
                <div className="title">
                  <h3>
                    Rate Service
                    <span className="dotted" />
                  </h3>
                </div>
                <p>Share your experience with our pet care services.</p>
              </div>
            </div>

            <div className="col-xl-3 col-lg-6 col-md-6">
              <div className="single-contact-info-box">
                <span className="icon-pawprint" />
                <div className="title">
                  <h3>
                    Pet Experience
                    <span className="dotted" />
                  </h3>
                </div>
                <p>Tell us how your pet felt during the service.</p>
              </div>
            </div>

            <div className="col-xl-3 col-lg-6 col-md-6">
              <div className="single-contact-info-box">
                <span className="icon-like" />
                <div className="title">
                  <h3>
                    Suggestions
                    <span className="dotted" />
                  </h3>
                </div>
                <p>Help us improve with your valuable suggestions.</p>
              </div>
            </div>

            <div className="col-xl-3 col-lg-6 col-md-6">
              <div className="single-contact-info-box">
                <span className="icon-mail-1" />
                <div className="title">
                  <h3>
                    Response
                    <span className="dotted" />
                  </h3>
                </div>
                <p>We may contact you if follow-up is required.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Feedback Info Area */}

      {/* Start Feedback Form Area */}
      <section className="contact-form-style1-area">
        <div
          className="contact-form-style1-bg"
          style={{
            backgroundImage:
              "url(assets/images/shape/contact-form-style1-bg.png)",
          }}
        />
        <div className="container">
          <div className="sec-title text-center">
            <h5>
              //<span>Feedback</span>//
            </h5>
            <h2>
              Share Your Feedback
              <span className="round-box zoominout" />
            </h2>
          </div>

          <div className="row">
            <div className="col-xl-12">
              <div className="contact-form contact-page">
                <form className="default-form2">
                  <div className="row">
                    <div className="col-xl-6 col-lg-6">
                      <div className="input-box">
                        <input type="text" placeholder="Your Name" required />
                        <div className="icon">
                          <span className="icon-user" />
                        </div>
                      </div>
                    </div>

                    <div className="col-xl-6 col-lg-6">
                      <div className="input-box">
                        <input type="email" placeholder="Email Address" />
                        <div className="icon">
                          <span className="icon-envelope" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-xl-6 col-lg-6">
                      <div className="input-box">
                        <select className="selectpicker" data-width="100%">
                          <option selected>Service Used</option>
                          <option>Grooming</option>
                          <option>Vaccination</option>
                          <option>Training</option>
                          <option>Boarding</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-xl-6 col-lg-6">
                      <div className="input-box">
                        <select className="selectpicker" data-width="100%">
                          <option selected>Rating</option>
                          <option>⭐ Excellent</option>
                          <option>⭐⭐ Good</option>
                          <option>⭐⭐⭐ Average</option>
                          <option>⭐⭐⭐⭐ Poor</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-xl-6">
                      <div className="input-box">
                        <input type="text" placeholder="Pet Name (Optional)" />
                        <div className="icon">
                          <span className="icon-pawprint" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-xl-12">
                      <div className="input-box">
                        <textarea
                          placeholder="Write your feedback here..."
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-xl-12">
                      <div className="button-box text-center">
                        <button className="btn-one gradient-bg-1" type="submit">
                          <span className="txt">
                            <i className="icon-send" />
                            Submit Feedback
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Feedback Form Area */}
    </div>
  );
}

export default Feedback;
