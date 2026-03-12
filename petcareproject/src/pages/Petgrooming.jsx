import React from "react";
import { Link } from "react-router-dom";
import BreadCrumbs from "../comman/BreadCrumbs";

function Petgrooming() {
  return (
    <div>
      <div>
        {/*Start breadcrumb area*/}
        <BreadCrumbs
          title1="Pet Grooming"
          title2="Service Details"
          imageUrl="assets/images/breadcrumb/breadcrumb-1.png"
        ></BreadCrumbs>
        {/*End breadcrumb area*/}
        {/*Start Service Details Area*/}
        <section className="service-details-area">
          <div className="container">
            <div className="row">
              <div className="col-xl-9 col-lg-8">
                <div className="service-details-content">
                  <div className="service-details-main-image">
                    <img
                      src="assets/images/services/image.jpg"
                      alt
                      style={{borderRadius:"30px"}}
                    />
                    <div className="overlay-box">
                      <div className="icon">
                        <span className="icon-vaccine" />
                      </div>
                      <div className="title">
                        <h3>Monthly Care</h3>
                        <p>Get a solid solution</p>
                      </div>
                    </div>
                  </div>
                  <div className="service-details-text-box">
                    <h2>
                      Pet Grooming
                      <span className="dotted" />
                    </h2>
                    <p>
                      Pet grooming is an important part of maintaining a pet’s
                      overall health, hygiene, and appearance. It involves
                      cleaning and caring for a pet’s body, including their fur,
                      skin, nails, ears, and teeth. Regular grooming helps pets
                      stay comfortable and prevents common problems such as skin
                      infections, parasites, and excessive shedding. Grooming
                      also allows pet owners to check for any unusual signs like
                      wounds, lumps, or ticks.
                    </p>
                    <p>
                      One of the main aspects of pet grooming is bathing and
                      brushing. Bathing helps remove dirt, bad odor, and
                      bacteria from a pet’s coat, while brushing keeps the fur
                      smooth and prevents tangles or mats. Different pets
                      require different grooming routines depending on their
                      breed, coat type, and activity level. For example,
                      long-haired pets may need more frequent brushing than
                      short-haired ones. Pet grooming also includes trimming
                      nails, cleaning ears, and maintaining dental hygiene. Long
                      nails can cause discomfort or difficulty while walking, so
                      regular nail trimming is essential. Cleaning the ears
                      helps prevent infections caused by dirt or wax buildup,
                      and brushing a pet’s teeth reduces the risk of dental
                      diseases and bad breath.
                    </p>
                  </div>
                  <div className="service-details-bottom-image">
                    <div className="row">
                      <div className="col-xl-6">
                        <div className="single-image-nox">
                          <img
                            src="assets/images/services/service-details-v1-2.jpg"
                            alt
                          />
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="single-image-nox">
                          <img
                            src="assets/images/services/service-details-v1-3.jpg"
                            alt
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="service-details-bottom-text">
                    <p>
                      Overall, regular grooming keeps pets healthy, happy, and
                      well-maintained. It not only improves a pet’s appearance
                      but also strengthens the bond between pets and their
                      owners. Proper grooming ensures that pets feel comfortable
                      and live a healthier life. 🐾
                    </p>
                    <h3>Benefits of Pet Grooming :</h3>
                    <ul style={{listStyleType:"circle",paddingLeft:"30px" , }}>
                      <li>Keeps pets clean and healthy</li>
                      <li>Prevents skin infections and parasites</li>
                      <li>Reduces hair shedding</li>
                      <li>Helps detect health problems early</li>
                      <li>Makes pets look neat and feel comfortable</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4">
                <div className="service-details-sidebar">
                  <div className="service-details-categories">
                    <div className="title">
                      <h3>
                        Services Category
                        <span className="dotted" />
                      </h3>
                    </div>
                    <div className="categories-box">
                      <ul className="categories clearfix">
                        <li className="active">
                          <Link to="/petgrooming">Pet Grooming</Link>
                        </li>
                        <li>
                          <Link to="/dogsetting">Dog Setting</Link>
                        </li>
                        <li>
                          <Link to="/healthymeal">Healthy Meals</Link>
                        </li>
                        <li>
                          <Link to="/veterinaryService">
                            Veterinary Service
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className="callto-action-box text-center"
                    style={{
                      backgroundImage:
                        "url(assets/images/resources/callto-action-box-bg.jpg)",
                    }}
                  >
                    <p>Call To Action</p>
                    <h3>
                      Enjoy Your Whole
                      <br /> Weekend.
                    </h3>
                    <a className="btn-one" href="#">
                      <span className="txt">Appointment</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-12">
                <div className="servicedet-prev-next-option">
                  <div className="box prev">
                    <div className="inner">
                      <div className="image">
                        <img
                          src="assets/images/services/service-details-prev-1.jpg"
                          alt
                        />
                      </div>
                      <div className="title">
                        <p>
                          <a href="#">Prev Service</a>
                        </p>
                        <h3>
                          <Link to="/petgrooming">Pet Grooming.</Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="box next">
                    <div className="inner-next">
                      <div className="image">
                        <img
                          src="assets/images/services/service-details-next-1.jpg"
                          alt
                        />
                      </div>
                      <div className="title">
                        <p>
                          <a href="#">Next Service</a>
                        </p>
                        <h3>
                          <Link to="/dogsetting">Pet Sitting.</Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*End Service Details Area*/}
      </div>
    </div>
  );
}

export default Petgrooming;
