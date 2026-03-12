import React from "react";
import { Link } from "react-router-dom";
import BreadCrumbs from "../comman/BreadCrumbs";

function VeterinarySer() {
  return (
    <div>
      <div>
        {/*Start breadcrumb area*/}
        <BreadCrumbs
          title1="Veterinary Service"
          title2="Veterinary Service"
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
                      src="assets/images/services/service-details-v1-1.jpg"
                      alt
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
                      Veterinary Service
                      <span className="dotted" />
                    </h2>
                    <p>
                      Veterinary services play an important role in maintaining
                      the health and well-being of pets and other animals. These
                      services are provided by trained veterinarians who
                      specialize in diagnosing, treating, and preventing
                      illnesses in animals. Regular veterinary care helps ensure
                      that pets stay healthy and live longer, happier lives. Pet
                      owners rely on veterinary services to monitor their pet’s
                      physical condition and address any medical concerns that
                      may arise.
                    </p>
                    <p>
                      One of the most important veterinary services is routine
                      health check-ups. During these visits, veterinarians
                      examine pets to monitor their overall health, check their
                      weight, and look for any signs of illness. Vaccinations
                      are also a key part of preventive care, as they protect
                      pets from dangerous diseases such as rabies, distemper,
                      and parvovirus. Regular vaccinations help strengthen a
                      pet’s immune system and keep them safe from infections.In
                      addition to treatment, veterinarians also offer guidance
                      on nutrition, grooming, and overall pet care. They help
                      pet owners understand what type of food is best for their
                      pets, how to maintain proper hygiene, and how to manage
                      behavioral issues. Professional advice from veterinarians
                      helps pet owners provide better care for their
                      animals.Veterinary clinics are also equipped to handle
                      emergencies.
                    </p>
                  </div>
                  <div className="service-details-bottom-image">
                    <div className="row">
                      <div className="col-xl-6">
                        <div className="single-image-nox">
                          <img
                            src="assets/images/services/veterinary1.jpg"
                            alt
                            style={{ height: "410px" }}
                          />
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="single-image-nox">
                          <img
                            src="assets/images/services/veterinary2.jpg"
                            alt
                            style={{ height: "410px" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="service-details-bottom-text">
                    <p>
                      Veterinary services also include diagnostic tests and
                      medical treatments. Veterinarians may perform blood tests,
                      X-rays, or other examinations to identify health problems
                      accurately. If a pet becomes sick or injured,
                      veterinarians provide the necessary treatments,
                      medications, and sometimes surgery to help the animal
                      recover. These medical services are crucial for detecting
                      diseases early and ensuring proper care.Overall,
                      veterinary services are vital for keeping pets healthy,
                      active, and safe. Regular visits to the veterinarian not
                      only prevent serious health problems but also ensure that
                      pets live longer and happier lives. With proper medical
                      care and attention, pets can enjoy a high quality of life
                      and remain loving companions for many years. 🐾
                    </p>
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

export default VeterinarySer;
