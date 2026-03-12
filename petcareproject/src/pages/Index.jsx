import { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { useEffect } from "react";
import api from "../utils/AxiosConfig";

function Index() {
  let [user, setUser] = useState({});
  const [activeSlide, setActiveSlide] = useState(0);
  const [feedback, setFeedback] = useState({});
  const [loading, setLoading] = useState(true);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    pauseOnHover: false,

    beforeChange: (current, next) => {
      setActiveSlide(next);
    },
  };

  async function FetchProfile() {
    try {
      let response = await api.get("/user/profileHome");
      setUser(response.data.user);
      // console.log(response.data);
    } catch (e) {
      console.log(e);
      // alert("You can't be an access");
    }
  }

  useEffect(() => {
    FetchProfile();
  }, []);

  const FetchFeedback = async () => {
    try {
      let response = await api.get("/user/feedback");
      console.log(response.data.data);
      setFeedback(response.data.data.slice(0, 2));
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  useEffect(() => {
    FetchFeedback();
  }, []);

  return (
    <div>
      <div>
        {/* Start Main Slider */}
        <section className="main-slider style1">
          <div className="slider-box">
            <Slider {...settings} className="banner-carousel">
              {/* Slide 1 */}
              <div className={`slide ${activeSlide === 0 ? "active" : ""}`}>
                <div
                  className="image-layer"
                  style={{
                    backgroundImage: "url(assets/images/slides/slide-v1-1.jpg)",
                  }}
                />
                <div className="auto-container">
                  <div className="content">
                    <h5>
                      //<span>Enjoy Your Holiday</span>//
                    </h5>
                    <h2>
                      We Keep Them <br /> Happy Anytime
                      <span className="round" />
                    </h2>
                    <div className="btns-box">
                      <Link className="btn-one" to="/service-category">
                        <span className="txt">Make Appointment</span>
                      </Link>
                      <a className="btn-one marleft style2" href="#">
                        <span className="txt">987-876-876-87</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Slide 2 */}
              <div className={`slide ${activeSlide === 1 ? "active" : ""}`}>
                <div
                  className="image-layer"
                  style={{
                    backgroundImage: "url(assets/images/slides/slide-v1-2.jpg)",
                  }}
                />
                <div className="auto-container">
                  <div className="content">
                    <h5>
                      //<span>Enjoy Your Holiday</span>//
                    </h5>
                    <h2>
                      We Keep Them <br /> Happy Anytime
                      <span className="round" />
                    </h2>
                    <div className="btns-box">
                      <a className="btn-one" href="#">
                        <span className="txt">Make Appointment</span>
                      </a>
                      <a className="btn-one marleft style2" href="#">
                        <span className="txt">987-876-876-87</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Slide 3 */}
              <div className={`slide ${activeSlide === 2 ? "active" : ""}`}>
                <div
                  className="image-layer"
                  style={{
                    backgroundImage: "url(assets/images/slides/slide-v1-3.jpg)",
                  }}
                />
                <div className="auto-container">
                  <div className="content">
                    <h5>
                      //<span>Enjoy Your Holiday</span>//
                    </h5>
                    <h2>
                      We Keep Them <br /> Happy Anytime
                      <span className="round" />
                    </h2>
                    <div className="btns-box">
                      <a className="btn-one" href="#">
                        <span className="txt">Make Appointment</span>
                      </a>
                      <a className="btn-one marleft style2" href="#">
                        <span className="txt">987-876-876-87</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </section>

        {/* End Main Slider paroller */}

        {/*Start Featured Area*/}
        <section className="featured-area">
          <div className="container">
            <div className="row">
              {/*Start Single Featured Box*/}
              <div className="col-xl-4">
                <div className="single-featured-box">
                  <div className="inner">
                    <div className="icon">
                      <span className="icon-dog" />
                    </div>
                    <div className="text">
                      <h3>Dog Boarding</h3>
                      <p>
                        Safe and comfortable boarding for your furry friends
                        while you're away. We provide cozy beds, regular walks,
                        and plenty of love.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/*End Single Featured Box*/}
              {/*Start Single Featured Box*/}
              <div className="col-xl-4">
                <div className="single-featured-box">
                  <div className="inner">
                    <div className="icon">
                      <span className="icon-dog-food clr2" />
                    </div>
                    <div className="text">
                      <h3>Healthy Meals</h3>
                      <p>
                        Nutritious and delicious meals tailored to your pet's
                        needs. Fresh ingredients, balanced diet, and special
                        care for every dog.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/*End Single Featured Box*/}
              {/*Start Single Featured Box*/}
              <div className="col-xl-4">
                <div className="single-featured-box">
                  <div className="inner">
                    <div className="icon">
                      <span className="icon-pet-bowl clr3" />
                    </div>
                    <div className="text">
                      <h3>Pet Adoption</h3>
                      <p>
                        Find your new best friend! We help you adopt pets
                        safely, matching the perfect companion to your home and
                        lifestyle.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/*End Single Featured Box*/}
            </div>
          </div>
        </section>
        {/*End Featured Area*/}
        {/*Start About Style1 Area*/}
        <section className="about-style1-area">
          <div className="container">
            <div className="row">
              {/* Left Image Section */}
              <div className="col-xl-7">
                <div className="about-style1-image-box">
                  <div
                    className="about-style1-image-box-bg"
                    style={{
                      backgroundImage:
                        "url(assets/images/shape/about-style1-image-box-bg.png)",
                    }}
                  />
                  <div className="main-image">
                    <img src="assets/images/about/about-1.png" alt="Pet Care" />
                  </div>
                  <div className="about-experience-box">
                    <div className="count-box">
                      <h2>
                        <span
                          className="timer"
                          data-from={1}
                          data-to={20}
                          data-speed={5000}
                          data-refresh-interval={50}
                        >
                          14
                        </span>
                        <span className="icon-plus plus-icon" />
                      </h2>
                      <h5>Years Experience</h5>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Content Section */}
              <div className="col-xl-5">
                <div className="about-style1-content-box">
                  <div className="sec-title">
                    <h5>
                      //<span>About Us</span>//
                    </h5>
                    <h2>
                      Caring for Your <br /> Beloved Pets
                      <span className="round-box zoominout" />
                    </h2>
                  </div>
                  <div className="inner-content">
                    <div className="text">
                      <p>
                        At Paws & Claws, we are dedicated to providing the
                        highest quality care for your pets. From grooming and
                        boarding to nutritious meals and playful activities, we
                        ensure your furry friends are happy, healthy, and loved.
                      </p>
                      <p>
                        Our team of certified groomers and animal lovers brings
                        years of experience and passion to every pet we care
                        for. Trust us to treat your pets like family.
                      </p>
                    </div>

                    <div className="row">
                      <div className="col-xl-6">
                        <ul>
                          <li>
                            <div className="icon">
                              <span className="icon-tick" />
                            </div>
                            <div className="title">
                              <h5>Certified Groomer</h5>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="col-xl-6">
                        <ul>
                          <li>
                            <div className="icon">
                              <span className="icon-tick" />
                            </div>
                            <div className="title">
                              <h5>Animal Lover</h5>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="col-xl-6">
                        <ul>
                          <li>
                            <div className="icon">
                              <span className="icon-tick" />
                            </div>
                            <div className="title">
                              <h5>14+ Years Experience</h5>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="col-xl-6">
                        <ul>
                          <li>
                            <div className="icon">
                              <span className="icon-tick" />
                            </div>
                            <div className="title">
                              <h5>Loving Pet Parents</h5>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Right Content Section */}
            </div>
          </div>
        </section>
        {/*End About Style1 Area*/}
        {/* Start Service Style1 Area */}
        <section className="service-style1-area">
          <div className="shape1">
            <img src="assets/images/shape/shape-1.png" alt />
          </div>
          <div className="shape2">
            <img src="assets/images/shape/shape-2.png" alt />
          </div>
          <div className="container">
            <div className="sec-title text-center">
              <div className="icon">
                <i className="icon-bone" />
              </div>
              <h2>
                What We Do
                <span className="round-box zoominout" />
              </h2>
            </div>
            <div className="row">
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
                      <Link to="/petgrooming">Pet Grooming</Link>
                    </h3>
                    <p>
                      Keep your pets looking their best with our professional
                      grooming services. From baths to haircuts, we make them
                      shine!
                    </p>
                    <div className="button">
                      <Link to="/petgrooming">Read More</Link>
                    </div>
                  </div>
                </div>
              </div>
              {/*End Single Service Style1*/}

              {/*Start Single Service Style1*/}
              <div
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft"
                data-wow-delay="100ms"
                data-wow-duration="1500ms"
              >
                <div className="single-service-style1">
                  <div className="img-holder">
                    <div className="inner">
                      <img
                        src="assets/images/services/service-v1-2.jpg"
                        alt="Dog Training"
                      />
                    </div>
                  </div>
                  <div className="text-holder">
                    <h3>
                      <Link to="/dogsetting">Dog Setting</Link>
                    </h3>
                    <p>
                      Dog sitting provides temporary care for dogs, including
                      feeding, walking, playtime, and maintaining
                      their daily routine.
                    </p>
                    <div className="button">
                      <Link to="/dogsetting">Read More</Link>
                    </div>
                  </div>
                </div>
              </div>
              {/*End Single Service Style1*/}

              {/*Start Single Service Style1*/}
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
                        alt="Healthy Meals"
                      />
                    </div>
                  </div>
                  <div className="text-holder">
                    <h3>
                      <Link to="/healthymeal">Healthy Meals</Link>
                    </h3>
                    <p>
                      We provide nutritious and balanced meals for your pets,
                      tailored to their age, size, and dietary needs.
                    </p>
                    <div className="button">
                      <Link to="/healthymeal">Read More</Link>
                    </div>
                  </div>
                </div>
              </div>
              {/*End Single Service Style1*/}

              {/*Start Single Service Style1*/}
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
                        alt="Veterinary Service"
                      />
                    </div>
                  </div>
                  <div className="text-holder">
                    <h3>
                      <Link to="/veterinaryService">Veterinary Service</Link>
                    </h3>
                    <p>
                      Our qualified veterinarians provide routine check-ups,
                      vaccinations, emergency care to keep your pets healthy &
                      happy.
                    </p>
                    <div className="button">
                      <Link to="/veterinaryService">Read More</Link>
                    </div>
                  </div>
                </div>
              </div>
              {/*End Single Service Style1*/}
            </div>
          </div>
        </section>
        {/* End Service Style1 Area */}
        {/*Start Video Gallery Area*/}
        {/* <section className="video-gallery-area">
          <div className="container-fullwidth">
            <div className="row">
              <div className="col-xl-6">
                <div className="video-gallery-content-box text-center">
                  <img
                    src="assets/images/resources/video-gallery-image.png"
                    alt="Pet Food & Products"
                  />
                  <h2>
                    Get Every Pet
                    <br /> Food &amp; Toods Here
                  </h2>
                  <p>
                    Discover a wide range of pet foods, accessories, and care
                    products to keep your furry friends happy and healthy.
                    Quality products for every pet, delivered with love.
                  </p>
                  <div className="button">
                    <Link className="btn-one" to="shop">
                      <i className="fa fa-shopping-cart" aria-hidden="true" />
                      <span className="txt">Shop Now</span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div
                  className="video-holder-box text-center"
                  style={{
                    backgroundImage:
                      "url(assets/images/resources/video-gallery-bg.jpg)",
                  }}
                >
                  <div
                    className="icon wow zoomIn"
                    data-wow-delay="300ms"
                    data-wow-duration="1500ms"
                  >
                    <a
                      className="video-popup thm-bgclr"
                      title="Watch CarePress Video"
                      href="https://www.youtube.com/watch?v=p25gICT63ek"
                    >
                      <span className="icon-play-button" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/*End Video Gallery Area*/}
        {/*Start Feautres Area*/}
        <section className="feautres-area">
          <div className="container">
            <div className="row">
              <div className="col-xl-6">
                <div
                  className="working-hours-box"
                  style={{
                    backgroundImage:
                      "url(assets/images/resources/working-hours-box-bg.jpg)",
                  }}
                >
                  <div className="inner-content">
                    <div className="title">
                      <h3>
                        Working Hours
                        <span />
                      </h3>
                      <p>We are here to care for your pets every day!</p>
                    </div>
                    <ul>
                      <li>
                        <span className="left">Monday</span>{" "}
                        <span className="right">08AM - 10PM</span>
                      </li>
                      <li>
                        <span className="left">Thuesday</span>{" "}
                        <span className="right">08AM - 10PM</span>
                      </li>
                      <li>
                        <span className="left">Wednesday</span>{" "}
                        <span className="right">08AM - 10PM</span>
                      </li>
                      <li>
                        <span className="left">Thursday</span>{" "}
                        <span className="right">08AM - 10PM</span>
                      </li>
                      <li>
                        <span className="left">Friday</span>{" "}
                        <span className="right">08AM - 10PM</span>
                      </li>
                      <li>
                        <span className="left">Saturday</span>{" "}
                        <span className="right">08AM - 10PM</span>
                      </li>
                      <li>
                        <span className="left">Sunday</span>{" "}
                        <span className="right holiday">Holiday</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="feautres-content-box">
                  <div className="sec-title">
                    <h5>
                      //<span>Features</span>//
                    </h5>
                    <h2>
                      Core Level Features
                      <span className="round-box zoominout" />
                    </h2>
                  </div>
                  <div className="inner-content">
                    <div className="text">
                      <p>
                        Our services are designed to ensure your pets are happy,
                        healthy, and well cared for. We combine professional
                        expertise with love and attention to provide the best
                        for your furry friends.
                      </p>
                    </div>
                    <ul className="top">
                      <li>
                        <div className="inner">
                          <div className="icon">
                            <span className="icon-vet" />
                          </div>
                          <div className="title">
                            <h3>Pet Care</h3>
                            <p>
                              Comprehensive daily care for pets of all kinds.
                            </p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="inner">
                          <div className="icon">
                            <span className="icon-injection" />
                          </div>
                          <div className="title">
                            <h3>Pet Medicine</h3>
                            <p>
                              Professional medical attention when your pet needs
                              it.
                            </p>
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
                            <h3>Grooming</h3>
                            <p>
                              Expert grooming to keep your pet clean and
                              stylish.
                            </p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="inner">
                          <div className="icon">
                            <span className="icon-vaccine" />
                          </div>
                          <div className="title">
                            <h3>Monthly Care</h3>
                            <p>
                              Regular check-ups and preventive care for a
                              healthy pet.
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*End Feautres Area*/}
        {/*Start Team Area*/}
        <section className="team-area">
          <div className="container">
            <div className="sec-title text-center">
              <div className="icon">
                <i className="icon-bone" />
              </div>
              <h2>
                Our Groomers
                <span className="round-box zoominout" />
              </h2>
            </div>
            <div className="row">
              {/*Start Single Team Member*/}
              <div className="col-xl-3 col-lg-6 col-md-6">
                <div
                  className="single-team-member wow animated fadeInUp"
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
                  className="single-team-member wow animated fadeInUp"
                  data-wow-delay="0.3s"
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
                  className="single-team-member wow animated fadeInUp"
                  data-wow-delay="0.5s"
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
                  className="single-team-member wow animated fadeInUp"
                  data-wow-delay="0.7s"
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
        {/*End Team Area*/}

        {/*Start Testimonial style1 Area*/}
        <section className="testimonial-style1-area mt-5">
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
              <div className="col-xl-12">
                <div className="testimonial-carousel owl-carousel owl-theme">
                  {/* Feedback Card */}
                  {loading ? (
                    <p>User Feedabck Loading...</p>
                  ) : feedback.length > 1 ? (
                    feedback.map((value) => {
                      return (
                        <>
                          <div className="single-testimonial-style1 no-image mt-4">
                            <div className="text-holder">
                              <div className="user-header">
                                <h3>{value.name}</h3>
                                <span className="email">{value.email}</span>
                              </div>

                              <div className="rating">★★★★☆</div>

                              <div className="text-box">
                                <p>{value.review}</p>
                              </div>
                            </div>
                          </div>
                        </>
                      );
                    })
                  ) : (
                    <p>Feedback are not show.</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*End Testimonial Style1 Area*/}
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

export default Index;
