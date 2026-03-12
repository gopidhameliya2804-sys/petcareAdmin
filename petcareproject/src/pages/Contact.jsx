import React, { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import BreadCrumbs from "../comman/BreadCrumbs";
import api from "../utils/AxiosConfig";

function Contact() {
  const navigate = useNavigate();
  let [inquiry, setInquiry] = useState({
    userId: "",
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInquiry((prev) => (
      { ...prev, 
      [name]: value 
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let response = await api.post("/user/inquiry/addinquiry", inquiry);
      console.log(response.data);
      setInquiry(response.data.data);
      alert("Inquiry submited successfully");
      setInquiry({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      navigate("/");
    } catch (e) {
      console.log(e);
      alert("Something went wrong");
    }
  };

  // console.log(inquiry);

  return (
    <div>
      <div>
        {/*Start breadcrumb area*/}
        <BreadCrumbs
          title1="contact"
          title2="contact"
          imageUrl="assets/images/breadcrumb/breadcrumb-1.png"
        ></BreadCrumbs>
        {/*End breadcrumb area*/}
        {/*Start Contact Info Area*/}
        <section className="contact-info-area style3">
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
                    onSubmit={handleSubmit}
                  >
                    <div className="row">
                      <div className="col-xl-6">
                        <div className="input-box">
                          <input
                            type="text"
                            name="name"
                            value={inquiry.name}
                            onChange={handleInputChange}
                            placeholder="Your name"
                            required
                          />
                          <div className="icon">
                            <span className="icon-user" />
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="input-box">
                          <input
                            type="email"
                            name="email"
                            value={inquiry.email}
                            onChange={handleInputChange}
                            placeholder="Email address"
                            required
                          />
                          <div className="icon">
                            <span className="icon-envelope" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-6">
                        <div className="input-box">
                          <input
                            type="text"
                            name="phone"
                            value={inquiry.phone}
                            onChange={handleInputChange}
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
                            name="subject"
                            value={inquiry.subject}
                            onChange={handleInputChange}
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
                            name="message"
                            placeholder="Write message"
                            value={inquiry.message}
                            onChange={handleInputChange}
                            required
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
        {/*Start Google Map Area*/}
        <section className="google-map-area">
          <div className="contact-map-outer">
            {/*Map Canvas*/}
            <div
              className="map-canvas"
              data-zoom={12}
              data-lat="-37.817085"
              data-lng="144.955631"
              data-type="roadmap"
              data-hue="#ffc400"
              data-title="Envato"
              data-icon-path="assets/images/resources/map-marker.png"
              data-content="Melbourne VIC 3000, Australia<br><a href='mailto:info@youremail.com'>info@youremail.com</a>"
            ></div>
          </div>
        </section>
        {/*End Google Map Area*/}
      </div>
    </div>
  );
}

export default Contact;
