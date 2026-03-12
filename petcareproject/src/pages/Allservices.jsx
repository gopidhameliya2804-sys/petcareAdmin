import React from "react";
import { Link } from "react-router-dom";
import BreadCrumbs from "../comman/BreadCrumbs";

function Allservices() {
  return (
    <div>
      <div>
        {/*Start breadcrumb area*/}
        <BreadCrumbs title1=" What We Do" title2="service" imageUrl="assets/images/breadcrumb/breadcrumb-1.png"></BreadCrumbs>
        {/*End breadcrumb area*/}
        {/* Start Service Style1 Area */}
        <section className="service-style1-area service-page">
          <div className="container">
            <div className="row">
              {/* 1. Pet Grooming */}
              <div
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="single-service-style1">
                  <div className="img-holder">
                    <div className="inner">
                      <img
                        src="assets/images/services/service-v1-1.jpg"
                        alt="Pet Grooming"
                      />
                    </div>
                  </div>
                  <div className="text-holder">
                    <h3>
                      <a href="#">Pet Grooming</a>
                    </h3>
                    <p>
                      Professional grooming including bath, haircut, nail trim,
                      and hygiene care.
                    </p>
                    <div className="button">
                      <a href="#">Read More</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2. Veterinary & Health Care */}
              <div
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft"
                data-wow-delay="100ms"
                data-wow-duration="1500ms"
              >
                <div className="single-service-style1">
                  <div className="img-holder">
                    <div className="inner">
                      <img
                        src="assets/images/services/service-v1-4.jpg"
                        alt="Veterinary Care"
                      />
                    </div>
                  </div>
                  <div className="text-holder">
                    <h3>
                      <a href="#">Veterinary Care</a>
                    </h3>
                    <p>
                      Routine checkups, vaccinations, emergency treatment by
                      expert veterinarians.
                    </p>
                    <div className="button">
                      <a href="#">Read More</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. Pet Boarding & Daycare */}
              <div
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <div className="single-service-style1">
                  <div className="img-holder">
                    <div className="inner">
                      <img
                        src="assets/images/services/service-v1-3.jpg"
                        alt="Pet Boarding"
                      />
                    </div>
                  </div>
                  <div className="text-holder">
                    <h3>
                      <a href="#">Pet Boarding</a>
                    </h3>
                    <p>
                      Safe, comfortable boarding and daycare when you are away.
                    </p>
                    <div className="button">
                      <a href="#">Read More</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* 4. Pet Training & Behavior */}
              <div
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="single-service-style1">
                  <div className="img-holder">
                    <div className="inner">
                      <img
                        src="assets/images/services/service-v1-2.jpg"
                        alt="Pet Training"
                      />
                    </div>
                  </div>
                  <div className="text-holder">
                    <h3>
                      <a href="#">Pet Training</a>
                    </h3>
                    <p>
                      Obedience, puppy, and behavior training from certified
                      trainers.
                    </p>
                    <div className="button">
                      <a href="#">Read More</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* 5. Pet Walking & Sitting */}
              <div
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight"
                data-wow-delay="100ms"
                data-wow-duration="1500ms"
              >
                <div className="single-service-style1">
                  <div className="img-holder">
                    <div className="inner">
                      <img
                        src="assets/images/services/service-v1-4.jpg"
                        alt="Pet Walking"
                      />
                    </div>
                  </div>
                  <div className="text-holder">
                    <h3>
                      <a href="#">Pet Walking</a>
                    </h3>
                    <p>
                      Daily walks and in-home sitting services for active pets.
                    </p>
                    <div className="button">
                      <a href="#">Read More</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* 6. Pet Food & Nutrition */}
              <div
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <div className="single-service-style1">
                  <div className="img-holder">
                    <div className="inner">
                      <img
                        src="assets/images/services/service-v1-3.jpg"
                        alt="Pet Nutrition"
                      />
                    </div>
                  </div>
                  <div className="text-holder">
                    <h3>
                      <a href="#">Pet Nutrition</a>
                    </h3>
                    <p>
                      Healthy diet plans and nutrition consultation for pets.
                    </p>
                    <div className="button">
                      <a href="#">Read More</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* 7. Pet Adoption & Breeding */}
              <div
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="single-service-style1">
                  <div className="img-holder">
                    <div className="inner">
                      <img
                        src="assets/images/services/service-v1-4.jpg"
                        alt="Pet Adoption"
                      />
                    </div>
                  </div>
                  <div className="text-holder">
                    <h3>
                      <a href="#">Pet Adoption</a>
                    </h3>
                    <p>Adoption support and ethical breeding guidance.</p>
                    <div className="button">
                      <a href="#">Read More</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* 8. Pet Accessories & Supplies */}
              <div
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft"
                data-wow-delay="100ms"
                data-wow-duration="1500ms"
              >
                <div className="single-service-style1">
                  <div className="img-holder">
                    <div className="inner">
                      <img
                        src="assets/images/services/service-v1-1.jpg"
                        alt="Pet Accessories"
                      />
                    </div>
                  </div>
                  <div className="text-holder">
                    <h3>
                      <a href="#">Pet Accessories</a>
                    </h3>
                    <p>
                      Toys, food, grooming kits, beds, and daily essentials.
                    </p>
                    <div className="button">
                      <a href="#">Read More</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* 9. Specialized Pet Services */}
              <div
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="single-service-style1">
                  <div className="img-holder">
                    <div className="inner">
                      <img
                        src="assets/images/services/service-v1-3.jpg"
                        alt="Special Pet Services"
                      />
                    </div>
                  </div>
                  <div className="text-holder">
                    <h3>
                      <a href="#">Special Services</a>
                    </h3>
                    <p>
                      Pet spa, massage, taxi, photography, and premium care.
                    </p>
                    <div className="button">
                      <a href="#">Read More</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* 10. Exotic & Other Pet Care */}
              <div
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight"
                data-wow-delay="100ms"
                data-wow-duration="1500ms"
              >
                <div className="single-service-style1">
                  <div className="img-holder">
                    <div className="inner">
                      <img
                        src="assets/images/services/service-v1-4.jpg"
                        alt="Exotic Pet Care"
                      />
                    </div>
                  </div>
                  <div className="text-holder">
                    <h3>
                      <a href="#">Exotic Pet Care</a>
                    </h3>
                    <p>
                      Special care services for birds, reptiles, and exotic
                      pets.
                    </p>
                    <div className="button">
                      <a href="#">Read More</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Service Style1 Area */}
        {/*Start Choose Style1 Area*/}
        <section className="choose-style1-area pdtop0">
          <div className="container">
            <div className="row">
              <div className="col-xl-6">
                <div className="feautres-content-box">
                  <div className="sec-title">
                    <h5>
                      //<span>Choices</span>//
                    </h5>
                    <h2>
                      Why Choose Us
                      <span className="round-box zoominout" />
                    </h2>
                  </div>

                  <div className="inner-content">
                    <div className="text">
                      <p>
                        We are dedicated to providing exceptional pet care with
                        compassion, expertise, and modern facilities. Our
                        experienced professionals ensure your pets receive the
                        best treatment in a safe and loving environment.
                      </p>
                    </div>

                    <ul className="top">
                      <li>
                        <div className="inner">
                          <div className="icon">
                            <span className="icon-vet" />
                          </div>
                          <div className="title">
                            <h3>Expert Pet Care</h3>
                            <p>Professional and compassionate handling</p>
                          </div>
                        </div>
                      </li>

                      <li>
                        <div className="inner">
                          <div className="icon">
                            <span className="icon-injection" />
                          </div>
                          <div className="title">
                            <h3>Trusted Medicine</h3>
                            <p>Safe and approved treatments</p>
                          </div>
                        </div>
                      </li>
                    </ul>

                    <ul className="bottom">
                      <li>
                        <div className="inner">
                          <div className="icon">
                            <span className="icon-veterinary" />
                          </div>
                          <div className="title">
                            <h3>Premium Grooming</h3>
                            <p>Gentle care for a healthy coat</p>
                          </div>
                        </div>
                      </li>

                      <li>
                        <div className="inner">
                          <div className="icon">
                            <span className="icon-vaccine" />
                          </div>
                          <div className="title">
                            <h3>Monthly Wellness Plans</h3>
                            <p>Complete care for long-term health</p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-xl-6">
                <div className="choose-style1-image-box">
                  <img
                    src="assets/images/resources/choose-style1-image.jpg"
                    alt="Why Choose Our Pet Care"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*End Choose Style1 Area*/}
        {/*Start Faq Style1 Area*/}
        <section className="faq-style1-area gray-bg">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="faq-style1-image-box">
                  <div className="faq-top">
                    <img src="assets/images/resources/faq-top-image.jpg" alt />
                  </div>
                  <div className="faq-main-image">
                    <img src="assets/images/resources/faq-main-image.jpg" alt />
                    <div className="box zoominout" />
                  </div>
                  <div className="faq-bottom">
                    <img
                      src="assets/images/resources/faq-bottom-image.jpg"
                      alt
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="faq-left-content style2">
                  <div className="sec-title">
                    <h5>
                      //<span>Faq</span>//
                    </h5>
                    <h2>
                      Get Every Answer
                      <br />
                      From Here
                      <span className="round-box zoominout" />
                    </h2>
                  </div>

                  <div className="accordion-box style2">
                    {/* FAQ 1 */}
                    <div className="accordion accordion-block">
                      <div className="accord-btn">
                        <h4>How do I book an appointment for my pet?</h4>
                      </div>
                      <div className="accord-content">
                        <p>
                          You can easily book an appointment through our
                          website, by calling our support number, or by visiting
                          our clinic. Our team will assist you in choosing the
                          right service for your pet.
                        </p>
                      </div>
                    </div>

                    {/* FAQ 2 */}
                    <div className="accordion accordion-block">
                      <div className="accord-btn active">
                        <h4>Do you provide emergency pet care services?</h4>
                      </div>
                      <div className="accord-content collapsed">
                        <p>
                          Yes, we offer emergency pet care services during
                          working hours. Please contact us immediately if your
                          pet needs urgent medical attention.
                        </p>
                      </div>
                    </div>

                    {/* FAQ 3 */}
                    <div className="accordion accordion-block">
                      <div className="accord-btn">
                        <h4>Are your grooming products safe for pets?</h4>
                      </div>
                      <div className="accord-content">
                        <p>
                          Absolutely. We use high-quality, vet-approved, and
                          pet-friendly grooming products that are safe for all
                          breeds and sensitive skin.
                        </p>
                      </div>
                    </div>

                    {/* FAQ 4 */}
                    <div className="accordion accordion-block mar0">
                      <div className="accord-btn">
                        <h4>What payment methods do you accept?</h4>
                      </div>
                      <div className="accord-content">
                        <p>
                          We accept cash, debit/credit cards, UPI payments, and
                          online transfers for your convenience. Payment details
                          are shared at the time of booking.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*End Faq Style1 Area*/}
        {/*Start thm form box style1 area*/}
        <section className="thm-formbox-style1-area style2">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="thm-formbox-style1">
                  <form
                    name="thm_form1"
                    className="thm-formbox1"
                    action="#"
                    method="post"
                  >
                    <div className="row">
                      <div className="col-xl-3 col-lg-3">
                        <div className="input-box">
                          <input
                            type="text"
                            name="form_search_area_name"
                            defaultValue
                            placeholder="Search Area Name"
                            required
                          />
                          <div className="icon">
                            <span className="icon-search" />
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3">
                        <div className="input-box">
                          <select className="selectpicker" data-width="100%">
                            <option selected="selected">Select Doctor</option>
                            <option>Rosalina D. William</option>
                            <option>Miranda H. Halim</option>
                            <option>Hilixer D. Browni</option>
                            <option>Yokolili Y. Yankee</option>
                          </select>
                          <div className="icon">
                            <span className="icon-user" />
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3">
                        <div className="input-box">
                          <select className="selectpicker" data-width="100%">
                            <option selected="selected">Select Service</option>
                            <option>Pet Grooming</option>
                            <option>Dog Setting</option>
                            <option>Healthy Meals</option>
                            <option>Veterinary Service</option>
                          </select>
                          <div className="icon">
                            <span className="icon-dog-1" />
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3">
                        <div className="button-box">
                          <button
                            className="btn-one"
                            type="submit"
                            data-loading-text="Please wait..."
                          >
                            <span className="txt">Search &amp; Book Now</span>
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
        {/*End thm form box style1 area*/}
        {/*Start Blog Style1 Area*/}
        <section className="blog-style1-area">
          <div className="container">
            <div className="sec-title">
              <h5>
                //<span>Insights</span>//
              </h5>
              <h2>
                News &amp; Feeds
                <span className="round-box zoominout" />
              </h2>
            </div>
            <div className="row">
              <div className="col-xl-12 col-lg-12">
                <div className="blog-carousel owl-carousel owl-theme owl-nav-style-one">
                  {/*Start Single blog Style1*/}
                  <div
                    className="single-blog-style1 wow fadeInLeft"
                    data-wow-delay="100ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="img-holder">
                      <div className="date-box">
                        <h5>24th June 2020</h5>
                      </div>
                      <div className="inner">
                        <img
                          src="assets/images/blog/blog-v1-1.jpg"
                          alt="Awesome Image"
                        />
                      </div>
                    </div>
                    <div className="text-holder">
                      <ul className="meta-info">
                        <li>
                          <span className="icon-user" />
                          <a href="#">By Admin</a>
                        </li>
                        <li>
                          <span className="icon-tag" />
                          <a href="#">Pet, Care, Medicine</a>
                        </li>
                      </ul>
                      <h3 className="blog-title">
                        <a href="blog-single.html">
                          Share five inspirational Quotes of the Day with
                          friends
                          <span className="round-box zoominout" />
                        </a>
                      </h3>
                    </div>
                  </div>
                  {/*End Single blog Style1*/}
                  {/*Start Single blog Style1*/}
                  <div
                    className="single-blog-style1 wow fadeInLeft"
                    data-wow-delay="100ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="img-holder">
                      <div className="date-box">
                        <h5>24th June 2020</h5>
                      </div>
                      <div className="inner">
                        <img
                          src="assets/images/blog/blog-v1-2.jpg"
                          alt="Awesome Image"
                        />
                      </div>
                    </div>
                    <div className="text-holder">
                      <ul className="meta-info">
                        <li>
                          <span className="icon-user" />
                          <a href="#">By Admin</a>
                        </li>
                        <li>
                          <span className="icon-tag" />
                          <a href="#">Pet, Care, Medicine</a>
                        </li>
                      </ul>
                      <h3 className="blog-title">
                        <a href="blog-single.html">
                          Share five inspirational Quotes of the Day with
                          friends
                          <span className="round-box zoominout" />
                        </a>
                      </h3>
                    </div>
                  </div>
                  {/*End Single blog Style1*/}
                  {/*Start Single blog Style1*/}
                  <div
                    className="single-blog-style1 wow fadeInLeft"
                    data-wow-delay="100ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="img-holder">
                      <div className="date-box">
                        <h5>24th June 2020</h5>
                      </div>
                      <div className="inner">
                        <img
                          src="assets/images/blog/blog-v1-3.jpg"
                          alt="Awesome Image"
                        />
                      </div>
                    </div>
                    <div className="text-holder">
                      <ul className="meta-info">
                        <li>
                          <span className="icon-user" />
                          <a href="#">By Admin</a>
                        </li>
                        <li>
                          <span className="icon-tag" />
                          <a href="#">Pet, Care, Medicine</a>
                        </li>
                      </ul>
                      <h3 className="blog-title">
                        <a href="blog-single.html">
                          Share five inspirational Quotes of the Day with
                          friends
                          <span className="round-box zoominout" />
                        </a>
                      </h3>
                    </div>
                  </div>
                  {/*End Single blog Style1*/}
                  {/*Start Single blog Style1*/}
                  <div
                    className="single-blog-style1 wow fadeInLeft"
                    data-wow-delay="100ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="img-holder">
                      <div className="date-box">
                        <h5>24th June 2020</h5>
                      </div>
                      <div className="inner">
                        <img
                          src="assets/images/blog/blog-v1-1.jpg"
                          alt="Awesome Image"
                        />
                      </div>
                    </div>
                    <div className="text-holder">
                      <ul className="meta-info">
                        <li>
                          <span className="icon-user" />
                          <a href="#">By Admin</a>
                        </li>
                        <li>
                          <span className="icon-tag" />
                          <a href="#">Pet, Care, Medicine</a>
                        </li>
                      </ul>
                      <h3 className="blog-title">
                        <a href="blog-single.html">
                          Share five inspirational Quotes of the Day with
                          friends
                          <span className="round-box zoominout" />
                        </a>
                      </h3>
                    </div>
                  </div>
                  {/*End Single blog Style1*/}
                  {/*Start Single blog Style1*/}
                  <div
                    className="single-blog-style1 wow fadeInLeft"
                    data-wow-delay="100ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="img-holder">
                      <div className="date-box">
                        <h5>24th June 2020</h5>
                      </div>
                      <div className="inner">
                        <img
                          src="assets/images/blog/blog-v1-2.jpg"
                          alt="Awesome Image"
                        />
                      </div>
                    </div>
                    <div className="text-holder">
                      <ul className="meta-info">
                        <li>
                          <span className="icon-user" />
                          <a href="#">By Admin</a>
                        </li>
                        <li>
                          <span className="icon-tag" />
                          <a href="#">Pet, Care, Medicine</a>
                        </li>
                      </ul>
                      <h3 className="blog-title">
                        <a href="blog-single.html">
                          Share five inspirational Quotes of the Day with
                          friends
                          <span className="round-box zoominout" />
                        </a>
                      </h3>
                    </div>
                  </div>
                  {/*End Single blog Style1*/}
                  {/*Start Single blog Style1*/}
                  <div
                    className="single-blog-style1 wow fadeInLeft"
                    data-wow-delay="100ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="img-holder">
                      <div className="date-box">
                        <h5>24th June 2020</h5>
                      </div>
                      <div className="inner">
                        <img
                          src="assets/images/blog/blog-v1-3.jpg"
                          alt="Awesome Image"
                        />
                      </div>
                    </div>
                    <div className="text-holder">
                      <ul className="meta-info">
                        <li>
                          <span className="icon-user" />
                          <a href="#">By Admin</a>
                        </li>
                        <li>
                          <span className="icon-tag" />
                          <a href="#">Pet, Care, Medicine</a>
                        </li>
                      </ul>
                      <h3 className="blog-title">
                        <a href="blog-single.html">
                          Share five inspirational Quotes of the Day with
                          friends
                          <span className="round-box zoominout" />
                        </a>
                      </h3>
                    </div>
                  </div>
                  {/*End Single blog Style1*/}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*End Blog Style1 Area*/}
      </div>
    </div>
  );
}

export default Allservices;
