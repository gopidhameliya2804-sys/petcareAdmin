import React from "react";
import { Link } from "react-router-dom";
import BreadCrumbs from "../comman/BreadCrumbs";

function HealthyMeal() {
  return (
    <div>
      <div>
        {/*Start breadcrumb area*/}
        <BreadCrumbs
          title1="Get Answers"
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
                      src="assets/images/services/heathy.jpg"
                      alt
                      style={{height:"540px" , borderRadius:"30px"}}
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
                      Healthy Meals
                      <span className="dotted" />
                    </h2>
                    <p>
                      Healthy meals are essential for maintaining a pet’s
                      overall health, energy, and well-being. Just like humans,
                      pets require a balanced diet that includes the right
                      amount of proteins, vitamins, minerals, and carbohydrates.
                      Providing healthy meals helps pets grow properly, maintain
                      a strong immune system, and stay active throughout the
                      day. A nutritious diet also improves the condition of a
                      pet’s skin and coat, making them look healthier and more
                      vibrant.
                    </p>
                    <p>
                      A healthy meal for pets usually includes high-quality
                      ingredients such as lean meat, vegetables, grains, and
                      essential nutrients. Protein is especially important
                      because it supports muscle growth and repair, while
                      vitamins and minerals help maintain strong bones and
                      teeth. Fresh and natural ingredients are always better
                      than processed foods because they provide better nutrition
                      and are easier for pets to digest.Healthy meals also
                      include providing clean and fresh water at all times.
                      Hydration plays a vital role in digestion, body
                      temperature regulation, and overall health. A
                      well-balanced diet combined with proper hydration ensures
                      that pets stay energetic and maintain a healthy lifestyle.
                    </p>
                  </div>
                  <div className="service-details-bottom-image">
                    <div className="row">
                      <div className="col-xl-6">
                        <div className="single-image-nox">
                          <img
                            src="assets/images/services/heathy1.jpg"
                            alt
                          />
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="single-image-nox">
                          <img
                            src="assets/images/services/heathy2.jpg"
                            alt
                            style={{height:"410px"}}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="service-details-bottom-text">
                    <p>
                      Proper portion control is another important part of
                      healthy feeding. Overfeeding can lead to obesity and other
                      health problems, while underfeeding can cause weakness and
                      lack of energy. Pet owners should follow recommended
                      feeding guidelines based on the pet’s age, breed, size,
                      and activity level. Puppies and kittens often require more
                      frequent meals, while adult pets usually eat two balanced
                      meals a day.Overall, providing healthy meals is one of the
                      most important responsibilities of a pet owner. A
                      nutritious diet not only supports physical health but also
                      improves a pet’s mood and behavior. When pets receive the
                      right kind of food and care, they can live longer,
                      happier, and healthier lives. 🐾
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

export default HealthyMeal;
