import React, { useState } from "react";
import { Link } from "react-router-dom";
import BreadCrumbs from "../comman/BreadCrumbs";

function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <div>
        {/*Start breadcrumb area*/}
        <BreadCrumbs title1="Get Answers" title2="FAQ" imageUrl="assets/images/breadcrumb/breadcrumb-1.png"></BreadCrumbs>
        {/*End breadcrumb area*/}
        {/*Start Faq Page Area*/}
        <section className="faq-page-area">
          <div className="container">
            <div className="row">
              <div className="col-xl-6">
                <div className="faq-left-content-box">
                  <div className="accordion-box">
                    {/*Start single accordion box*/}
                    <div className="accordion accordion-block">
                      <div
                        className={`accord-btn ${openIndex === 0 ? "active" : ""}`}
                        onClick={() => toggleAccordion(0)}
                      >
                        <h4>How can i install this theme?</h4>
                      </div>
                      <div
                        className={`accord-content ${
                          openIndex === 0 ? "collapsed" : ""
                        }`}
                      >
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris.
                        </p>
                      </div>
                    </div>
                    {/*End single accordion box*/}
                    {/*Start single accordion box*/}
                    <div className="accordion accordion-block">
                      <div
                        className={`accord-btn ${openIndex === 1 ? "active" : ""}`}
                        onClick={() => toggleAccordion(1)}
                      >
                        <h4>What is terms &amp; conditions?</h4>
                      </div>
                      <div
                        className={`accord-content ${
                          openIndex === 1 ? "collapsed" : ""
                        }`}
                      >
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris.
                        </p>
                      </div>
                    </div>
                    {/*End single accordion box*/}
                    {/*Start single accordion box*/}
                    <div className="accordion accordion-block">
                      <div
                        className={`accord-btn ${openIndex === 2 ? "active" : ""}`}
                        onClick={() => toggleAccordion(2)}
                      >
                        <h4>How can i make change on this theme?</h4>
                      </div>
                      <div
                        className={`accord-content ${
                          openIndex === 2 ? "collapsed" : ""
                        }`}
                      >
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris.
                        </p>
                      </div>
                    </div>
                    {/*End single accordion box*/}
                    {/*Start single accordion box*/}
                    <div className="accordion accordion-block mar0">
                      <div
                        className={`accord-btn ${openIndex === 3 ? "active" : ""}`}
                        onClick={() => toggleAccordion(3)}
                      >
                        <h4>What is your payment system?</h4>
                      </div>
                      <div
                        className={`accord-content ${
                          openIndex === 3 ? "collapsed" : ""
                        }`}
                      >
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris.
                        </p>
                      </div>
                    </div>
                    {/*End single accordion box*/}
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="faq-right-content-box">
                  <div className="accordion-box">
                    {/*Start single accordion box*/}
                    <div className="accordion accordion-block">
                      <div
                        className={`accord-btn ${openIndex === 4 ? "active" : ""}`}
                        onClick={() => toggleAccordion(4)}
                      >
                        <h4>How can i install this theme?</h4>
                      </div>
                      <div
                        className={`accord-content ${
                          openIndex === 4 ? "collapsed" : ""
                        }`}
                      >
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris.
                        </p>
                      </div>
                    </div>
                    {/*End single accordion box*/}
                    {/*Start single accordion box*/}
                    <div className="accordion accordion-block">
                      <div
                        className={`accord-btn ${openIndex === 5 ? "active" : ""}`}
                        onClick={() => toggleAccordion(5)}
                      >
                        <h4>What is terms &amp; conditions?</h4>
                      </div>
                      <div
                        className={`accord-content ${
                          openIndex === 5 ? "collapsed" : ""
                        }`}
                      >
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris.
                        </p>
                      </div>
                    </div>
                    {/*End single accordion box*/}
                    {/*Start single accordion box*/}
                    <div className="accordion accordion-block">
                      <div
                        className={`accord-btn ${openIndex === 6 ? "active" : ""}`}
                        onClick={() => toggleAccordion(6)}
                      >
                        <h4>How can i make change on this theme?</h4>
                      </div>
                      <div
                        className={`accord-content ${
                          openIndex === 6 ? "collapsed" : ""
                        }`}
                      >
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris.
                        </p>
                      </div>
                    </div>
                    {/*End single accordion box*/}
                    {/*Start single accordion box*/}
                    <div className="accordion accordion-block mar0">
                      <div
                        className={`accord-btn ${openIndex === 7 ? "active" : ""}`}
                        onClick={() => toggleAccordion(7)}
                      >
                        <h4>What is your payment system?</h4>
                      </div>
                      <div
                        className={`accord-content ${
                          openIndex === 7 ? "collapsed" : ""
                        }`}
                      >
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris.
                        </p>
                      </div>
                    </div>
                    {/*End single accordion box*/}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*End Faq Page Area*/}
        {/*Start Contact Info Area*/}
        <section className="contact-info-area style2">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp">
                <div className="single-contact-info-box">
                  <span className="icon-envelope" />
                  <div className="title">
                    <h3>
                      Email Address
                      <span className="dotted" />
                    </h3>
                  </div>
                  <ul>
                    <li>
                      <a href="mailto:info@webmail.com">info@webmail.com</a>
                    </li>
                    <li>
                      <a href="mailto:jobs@webmail.com">jobs@webmail.com</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="200ms"
              >
                <div className="single-contact-info-box">
                  <span className="icon-call" />
                  <div className="title">
                    <h3>
                      Phone Number
                      <span className="dotted" />
                    </h3>
                  </div>
                  <ul>
                    <li>
                      <a href="tel:123456789">244-344-786-999-6</a>
                    </li>
                    <li>
                      <a href="tel:123456789">987-675-987-908</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="400ms"
              >
                <div className="single-contact-info-box">
                  <span className="icon-pin-2" />
                  <div className="title">
                    <h3>
                      Office Address
                      <span className="dotted" />
                    </h3>
                  </div>
                  <p>
                    13/A, Jhumando City
                    <br /> New York, NYC
                  </p>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="600ms"
              >
                <div className="single-contact-info-box">
                  <span className=" icon-mail-1" />
                  <div className="title">
                    <h3>
                      Web Connection
                      <span className="dotted" />
                    </h3>
                  </div>
                  <ul>
                    <li>
                      <a href="https://www.facebook.com/webexample">
                        fb.com/webexample
                      </a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/webexample">
                        tw.com/webexample
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*End Contact Info Area*/}
        {/*Start Contact Form Style1 Area*/}
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
                //<span>Contact Us</span>//
              </h5>
              <h2>
                Get In Touch
                <span className="round-box zoominout" />
              </h2>
            </div>
            <div className="row">
              <div className="col-xl-12">
                <div className="contact-form contact-page">
                  <form
                    id="contact-form"
                    name="contact_form"
                    className="default-form2"
                    action="https://mehedi.asiandevelopers.com/demo/carepress/assets/inc/sendmail.php"
                    method="post"
                  >
                    <div className="row">
                      <div className="col-xl-4 col-lg-4">
                        <div className="input-box">
                          <input
                            type="text"
                            name="form_name"
                            defaultValue
                            placeholder="Your name"
                            required
                          />
                          <div className="icon">
                            <span className="icon-user" />
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4">
                        <div className="input-box">
                          <input
                            type="email"
                            name="form_email"
                            defaultValue
                            placeholder="Email address"
                            required
                          />
                          <div className="icon">
                            <span className="icon-envelope" />
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4">
                        <div className="input-box">
                          <select className="selectpicker" data-width="100%">
                            <option selected="selected">Select Subject</option>
                            <option>Pet Grooming</option>
                            <option>Dog Setting</option>
                            <option>Healthy Meals</option>
                            <option>Veterinary Service</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-6">
                        <div className="input-box">
                          <input
                            type="text"
                            name="form_phone"
                            defaultValue
                            placeholder="Phone number"
                          />
                          <div className="icon">
                            <span className="icon-phone" />
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="input-box">
                          <input
                            type="text"
                            name="form_subject"
                            defaultValue
                            placeholder="Subject"
                          />
                          <div className="icon">
                            <span className="icon-pen" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-12">
                        <div className="input-box">
                          <textarea
                            name="form_message"
                            placeholder="Write message"
                            required
                            defaultValue={""}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-12">
                        <div className="button-box text-center">
                          <input
                            id="form_botcheck"
                            name="form_botcheck"
                            className="form-control"
                            type="hidden"
                            defaultValue
                          />
                          <button
                            className="btn-one gradient-bg-1"
                            type="submit"
                            data-loading-text="Please wait..."
                          >
                            <span className="txt">
                              <i className="icon-send" />
                              Submit Now
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
        {/*End Contact Form Style1 Area*/}
      </div>
    </div>
  );
}

export default Faq;
