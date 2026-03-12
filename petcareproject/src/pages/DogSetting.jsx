import React from "react";
import { Link } from "react-router-dom";
import BreadCrumbs from "../comman/BreadCrumbs";

function DogSetting() {
  return (
    <div>
      <div>
        {/*Start breadcrumb area*/}
        <BreadCrumbs
          title1="Dog Setting"
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
                      src="assets/images/services/image2.jpg"
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
                      Dog Setting
                      <span className="dotted" />
                    </h2>
                    <p>
                      Dog sitting is a service where a trained caregiver takes
                      care of a dog when the owner is away. This service ensures
                      that dogs receive proper attention, food, exercise, and
                      companionship in the absence of their owners. Dog sitting
                      can take place in the owner’s home, at the sitter’s home,
                      or at a specialized pet care facility. The main goal of
                      dog sitting is to make sure that the dog feels safe,
                      comfortable, and well cared for while the owner is busy or
                      traveling.
                    </p>
                    <p>
                      A dog sitter is responsible for providing daily care such
                      as feeding the dog according to its schedule, giving fresh
                      water, and ensuring that the dog gets enough exercise.
                      Regular walks, playtime, and mental stimulation are
                      important parts of dog sitting because they help keep the
                      dog active and happy. The sitter also observes the dog’s
                      behavior and health to make sure everything is normal and
                      the dog is feeling comfortable.Another important part of
                      dog sitting is providing companionship and emotional
                      comfort. Dogs are social animals and can feel lonely when
                      their owners are not around. A responsible dog sitter
                      spends time interacting with the dog, playing with it, and
                      giving it attention to make sure it feels secure and
                      loved.
                    </p>
                  </div>
                  <div className="service-details-bottom-image">
                    <div className="row">
                      <div className="col-xl-6">
                        <div className="single-image-nox">
                          <img
                            src="assets/images/services/dogSetting1.jpg"
                            alt
                            style={{height:"410px"}}
                          />
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="single-image-nox">
                          <img
                            src="assets/images/services/dogSetting2.jpg"
                            alt
                            style={{height:"410px"}}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="service-details-bottom-text">
                    <p>
                      Dog sitting services also include maintaining the dog’s
                      hygiene and routine. This may involve light grooming,
                      cleaning feeding areas, and ensuring that the dog’s living
                      space remains clean. A good dog sitter follows the pet
                      owner’s instructions carefully, including medication
                      schedules, dietary needs, and specific habits of the dog.
                      This helps maintain the dog’s normal routine and reduces
                      stress while the owner is away.Overall, dog sitting is a
                      reliable and convenient solution for pet owners who need
                      someone trustworthy to care for their pets. It ensures
                      that dogs receive proper care, safety, and affection even
                      when their owners are not available. Professional dog
                      sitting services help maintain a dog’s health, happiness,
                      and daily routine. 🐶
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

export default DogSetting;
