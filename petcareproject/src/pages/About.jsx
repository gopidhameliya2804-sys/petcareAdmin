import React from "react";
import { Link, useNavigate } from "react-router-dom";
import BreadCrumbs from "../comman/BreadCrumbs";
import { useState } from "react";
import api from "../utils/AxiosConfig";

function About() {
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
        <BreadCrumbs title1="About us" title2="About us" imageUrl="assets/images/breadcrumb/breadcrumb-1.png"></BreadCrumbs>
        {/*End breadcrumb area*/}
        {/*Start About Style2 Area*/}
        <section className="about-style2-area">
          <div className="container">
            <div className="row">
              <div className="col-xl-5">
                <div className="about-style1-content-box style1instyle2">
                  <div className="sec-title">
                    <h5>
                      //<span>About Us</span>//
                    </h5>
                    <h2>
                      Trusted Care For
                      <br /> Your Beloved Pet
                      <span className="round-box zoominout" />
                    </h2>
                  </div>
                  <div className="inner-content">
                    <div className="text">
                      <p>
                        We are a passionate pet care agency dedicated to
                        providing safe, loving, and professional services for
                        your furry companions. With years of experience in pet
                        grooming, boarding, training, and veterinary support, we
                        treat every pet like family.
                      </p>
                    </div>
                    <div className="button-box">
                      <Link className="btn-one" to="/booking">
                        <span className="txt">Make Appointment</span>
                      </Link>
                      <a
                        className="btn-one style2 marleft"
                        href="tel:123456789"
                      >
                        <i className="fa fa-phone" aria-hidden="true" />
                        <span className="txt">987-876-876-87</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-7">
                <div
                  className="video-holder-box style2 text-center"
                  style={{
                    backgroundImage:
                      "url(assets/images/resources/video-gallery-bg-2.jpg)",
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
            </div>
          </div>
        </section>
        {/*End About Style2 Area*/}
        {/* Start Showcase Area */}
        <section className="showcase-area">
          <div className="container">
            <div className="sec-title text-center">
              <h5>
                //<span>Showcase</span>//
              </h5>
              <h2>
                Photo Showcase
                <span className="round-box zoominout" />
              </h2>
            </div>
            <div className="row masonary-layout">
              {/*Start Single Showcase box*/}
              <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="single-showcase-box">
                  <div className="img-holder">
                    <img src="assets/images/resources/showcase-1.jpg" alt />
                  </div>
                </div>
              </div>
              {/*End Single Showcase box*/}
              {/*Start Single Showcase box*/}
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="single-showcase-box">
                  <div className="img-holder">
                    <img src="assets/images/resources/showcase-2.jpg" alt />
                  </div>
                </div>
              </div>
              {/*End Single Showcase box*/}
              {/*Start Single Showcase box*/}
              <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="single-showcase-box">
                  <div className="img-holder">
                    <img src="assets/images/resources/showcase-3.jpg" alt />
                  </div>
                </div>
              </div>
              {/*End Single Showcase box*/}
              {/*Start Single Showcase box*/}
              <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="single-showcase-box">
                  <div className="img-holder">
                    <img src="assets/images/resources/showcase-4.jpg" alt />
                  </div>
                </div>
              </div>
              {/*End Single Showcase box*/}
              {/*Start Single Showcase box*/}
              <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="single-showcase-box">
                  <div className="img-holder">
                    <img src="assets/images/resources/showcase-5.jpg" alt />
                  </div>
                </div>
              </div>
              {/*End Single Showcase box*/}
            </div>
          </div>
        </section>
        {/* End Showcase Area */}
        {/*Start Skillset Area*/}
        <section className="skillset-area">
          <div className="container">
            <div className="row">
              <div className="col-xl-6">
                <div className="skillset-progress-box">
                  <div className="row">
                    {/* Experience */}
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="progress-block text-center">
                        <div className="inner-box">
                          <div className="graph-outer">
                            <input
                              type="text"
                              className="dial"
                              data-fgcolor="#ff4880"
                              data-bgcolor="#f4f2ef"
                              data-width={200}
                              data-height={200}
                              data-linecap="normal"
                              defaultValue={95}
                            />
                            <div className="inner-text count-box">
                              <span
                                className="count-text"
                                data-stop={95}
                                data-speed={2000}
                              />
                              %
                            </div>
                          </div>
                        </div>
                        <div className="title">
                          <h2>Happy <br /> Pets</h2>
                          <p>Care with love & comfort</p>
                        </div>
                      </div>
                    </div>

                    {/* Success Rate */}
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="progress-block green text-center">
                        <div className="inner-box">
                          <div className="graph-outer">
                            <input
                              type="text"
                              className="dial"
                              data-fgcolor="#8fc424"
                              data-bgcolor="#f4f2ef"
                              data-width={200}
                              data-height={200}
                              data-linecap="normal"
                              defaultValue={98}
                            />
                            <div className="inner-text count-box">
                              <span
                                className="count-text"
                                data-stop={98}
                                data-speed={2000}
                              />
                              %
                            </div>
                          </div>
                        </div>
                        <div className="title">
                          <h2>Client Satisfaction</h2>
                          <p>Trusted by pet parents</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Content */}
              <div className="col-xl-6">
                <div className="skillset-content-box">
                  <div className="sec-title">
                    <h5>
                      //<span>Skillset</span>//
                    </h5>
                    <h2>
                      Our Core Values
                      <span className="round-box zoominout" />
                    </h2>
                  </div>

                  <div className="text">
                    <p>
                      Our expertise is built on compassion, professionalism, and
                      a deep understanding of animal behavior. We ensure every
                      pet receives personalized care in a safe, clean, and
                      loving environment.
                    </p>
                  </div>

                  <div className="bottom-text">
                    <div className="img-box">
                      <img
                        src="assets/images/resources/skillset-image.jpg"
                        alt="Pet Care Skills"
                      />
                    </div>
                    <div className="text-box">
                      <p>
                        From grooming and hygiene to training and health
                        support, our team combines modern techniques with gentle
                        handling — creating a stress-free experience for pets
                        and complete peace of mind for owners.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*End Skillset Area*/}
        {/*Start Fact Counter Area*/}
        <section className="fact-counter-area">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="fact-counter-box">
                  <div className="row">
                    {/*Start Single Fact Counter*/}
                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                      <div
                        className="single-fact-counter wow fadeInRight text-center"
                        data-wow-delay="100ms"
                        data-wow-duration="1500ms"
                      >
                        <div className="count-box">
                          <h2>
                            <span
                              className="timer"
                              data-from={1}
                              data-to={378}
                              data-speed={5000}
                              data-refresh-interval={50}
                            >
                              378
                            </span>
                            <i className="flaticon-plus red" />
                          </h2>
                          <h5>Active Clients</h5>
                        </div>
                      </div>
                    </div>
                    {/*End Single Fact Counter*/}
                    {/*Start Single Fact Counter*/}
                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                      <div
                        className="single-fact-counter wow fadeInRight text-center"
                        data-wow-delay="100ms"
                        data-wow-duration="1500ms"
                      >
                        <div className="count-box">
                          <h2>
                            <span
                              className="timer"
                              data-from={1}
                              data-to={378}
                              data-speed={5000}
                              data-refresh-interval={50}
                            >
                              378
                            </span>
                            <i className="flaticon-plus green" />
                          </h2>
                          <h5>Country Coverage</h5>
                        </div>
                      </div>
                    </div>
                    {/*End Single Fact Counter*/}
                    {/*Start Single Fact Counter*/}
                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                      <div
                        className="single-fact-counter wow fadeInRight text-center"
                        data-wow-delay="100ms"
                        data-wow-duration="1500ms"
                      >
                        <div className="count-box">
                          <h2>
                            <span
                              className="timer"
                              data-from={1}
                              data-to={58}
                              data-speed={5000}
                              data-refresh-interval={50}
                            >
                              58
                            </span>
                            <i className="flaticon-plus orange" />
                          </h2>
                          <h5>Pet Deliver</h5>
                        </div>
                      </div>
                    </div>
                    {/*End Single Fact Counter*/}
                    {/*Start Single Fact Counter*/}
                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                      <div
                        className="single-fact-counter wow fadeInRight text-center"
                        data-wow-delay="100ms"
                        data-wow-duration="1500ms"
                      >
                        <div className="count-box">
                          <h2>
                            <span
                              className="timer"
                              data-from={1}
                              data-to={378}
                              data-speed={5000}
                              data-refresh-interval={50}
                            >
                              378
                            </span>
                            <i className="flaticon-plus blues" />
                          </h2>
                          <h5>Get Rewards</h5>
                        </div>
                      </div>
                    </div>
                    {/*End Single Fact Counter*/}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*End Fact Counter Area*/}
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
      </div>
    </div>
  );
}

export default About;
