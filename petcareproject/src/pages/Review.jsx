import React from "react";
import { Link } from "react-router-dom";
import BreadCrumbs from "../comman/BreadCrumbs";

function Reviews() {
  return (
    <div>
      {/* Breadcrumb */}
      <BreadCrumbs title1="Review" title2="review" imageUrl="assets/images/breadcrumb/breadcrumb-1.png"></BreadCrumbs>
      <section className="contact-form-style1-area">
        <div className="container">
          {/* Section Title */}
          <div className="sec-title text-center">
            <h5>
              // <span>Customer Reviews</span> //
            </h5>
            <h2>
              Pet Parents Feedback
              <span className="round-box zoominout" />
            </h2>
          </div>

          {/* Review Wrapper (same as inquiry layout) */}
          <div className="row">
            <div className="col-xl-12">
              <div className="contact-form contact-page">
                <div className="default-form2">
                  <div className="row">
                    {/* Review Box */}
                    <div className="col-xl-4 col-lg-6">
                      <div className="single-contact-info-box">
                        <h4>Rahul Mehta</h4>
                        <p className="mb-1">Dog Grooming Service</p>

                        <div className="rating mb-2">
                          <i className="icon-star" />
                          <i className="icon-star" />
                          <i className="icon-star" />
                          <i className="icon-star" />
                          <i className="icon-star color-gray" />
                        </div>

                        <p>
                          Excellent grooming experience. Staff was friendly and
                          my Labrador looked amazing after the service.
                        </p>
                      </div>
                    </div>

                    {/* Review Box */}
                    <div className="col-xl-4 col-lg-6">
                      <div className="single-contact-info-box">
                        <h4>Ananya Patel</h4>
                        <p className="mb-1">Cat Boarding</p>

                        <div className="rating mb-2">
                          <i className="icon-star" />
                          <i className="icon-star" />
                          <i className="icon-star" />
                          <i className="icon-star" />
                          <i className="icon-star" />
                        </div>

                        <p>
                          Clean and calm environment. Daily updates made me feel
                          relaxed while my cat was boarded.
                        </p>
                      </div>
                    </div>

                    {/* Review Box */}
                    <div className="col-xl-4 col-lg-6">
                      <div className="single-contact-info-box">
                        <h4>Vikas Sharma</h4>
                        <p className="mb-1">Vet Consultation</p>

                        <div className="rating mb-2">
                          <i className="icon-star" />
                          <i className="icon-star" />
                          <i className="icon-star" />
                          <i className="icon-star color-gray" />
                          <i className="icon-star color-gray" />
                        </div>

                        <p>
                          Doctors were knowledgeable and explained everything
                          clearly. And I highly recommended.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Reviews;
