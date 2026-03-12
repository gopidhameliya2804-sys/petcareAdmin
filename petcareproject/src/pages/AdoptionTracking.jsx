import React from "react";
import { Link, useLocation } from "react-router-dom";

function AdoptionTracking() {
  const location = useLocation();
  // Falling back to "Bruno" if no state is passed, but designed to take dynamic data
  const pet = location.state?.pet || {
    name: "Bruno",
    breed: "Golden Retriever",
    age: "2 Years",
    gender: "Male",
    image: "assets/images/resources/pet-default.jpg",
    location: "Ahmedabad Shelter",
    requestDate: "12 Feb 2026"
  };

  return (
    <div className="boxed_wrapper">
      {/*Start breadcrumb area*/}
      <section
        className="breadcrumb-area"
        style={{
          backgroundImage: "url(assets/images/breadcrumb/breadcrumb-1.png)",
        }}
      >
        <div className="banner-curve-gray" />
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="inner-content clearfix text-center">
                <div className="title wow slideInUp animated" data-wow-delay="0.3s">
                  <h2>Track Adoption <span className="dotted" /></h2>
                </div>
                <div className="breadcrumb-menu wow slideInDown animated" data-wow-delay="0.3s">
                  <ul className="clearfix">
                    <li><Link to="/">Home</Link></li>
                    <li className="active">Adoption Tracking</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-single-area">
        <div className="container">
          <div className="row">
            {/* ===== Left Content ===== */}
            <div className="col-xl-8 col-lg-7">
              <div className="blog-posts">
                <div className="single-blog-style2">
                  {/* Pet Image Header */}
                  <div className="img-holder">
                    <img src={pet.image} alt={pet.name} style={{ borderRadius: '15px', marginBottom: '30px' }} />
                  </div>

                  <div className="text-holder">
                    <div className="blog-details-single">
                      <div className="categories">
                        <h5>Application ID: #AD-{Math.floor(Math.random() * 10000)}</h5>
                      </div>

                      <h2 className="blog-title">Adoption Status for {pet.name} 🐶</h2>

                      <ul className="meta-info">
                        <li><span className="icon-calendar" /> Request Date: {pet.requestDate}</li>
                        <li><span className="icon-location" /> {pet.location}</li>
                      </ul>

                      <div className="text">
                        <p>We are currently reviewing your application for <strong>{pet.name}</strong>. Our team ensures that every pet goes to a home that matches their specific needs and energy levels.</p>
                      </div>

                      {/* ===== Tracking Steps (Visual Progress) ===== */}
                      <div className="blog-details-text-3">
                        <h2 className="mb-4">Adoption Journey</h2>
                        <ul className="tracking-list">
                          <li className="completed">
                            <span className="icon-tick" /> <strong>Application Received:</strong> We have received your interest in {pet.name}.
                          </li>
                          <li className="completed">
                            <span className="icon-tick" /> <strong>Document Verification:</strong> Your ID and address proofs have been verified.
                          </li>
                          <li className="current">
                            <span className="icon-search" /> <strong>Home Visit:</strong> Our coordinator is scheduled to visit your home this weekend.
                          </li>
                          <li className="pending">
                            <span className="icon-clock" /> <strong>Final Approval:</strong> Pending visit report.
                          </li>
                        </ul>
                      </div>

                      <div className="blog-details-author-box text-center">
                        <div className="quote"><span className="icon-heart" /></div>
                        <h6>Adoption Tip</h6>
                        <h2>"Saving one dog will not change the world, but surely for that one dog, the world will change forever."</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ===== Sidebar ===== */}
            <div className="col-xl-4 col-lg-5">
              <div className="sidebar-wrapper">
                {/* Pet Identity Card */}
                <div className="single-sidebar">
                  <div className="title"><h3>Pet Details</h3></div>
                  <ul className="categorie-boxs">
                    <li><a href="#">Name <span>{pet.name}</span></a></li>
                    <li><a href="#">Breed <span>{pet.breed}</span></a></li>
                    <li><a href="#">Age <span>{pet.age}</span></a></li>
                    <li><a href="#">Gender <span>{pet.gender}</span></a></li>
                  </ul>
                </div>

                {/* Quick Status Widget */}
                <div className="single-sidebar">
                  <div className="title"><h3>Current Status</h3></div>
                  <div className="sidebar-twitter-feeds">
                    <div className="inner mb-3">
                      <div className="icon" style={{ background: '#77d7b9' }}><span className="icon-tick" /></div>
                      <div className="text">
                        <h5>Verified</h5>
                        <p>Background check pass</p>
                      </div>
                    </div>
                    <div className="inner">
                      <div className="icon" style={{ background: '#f5c06d' }}><span className="icon-clock" /></div>
                      <div className="text">
                        <h5>In Progress</h5>
                        <p>Home Verification</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Support CTA */}
                <div className="single-sidebar">
                   <div className="contact-info-box-1 text-center" style={{ background: '#f7f8f9', padding: '30px', borderRadius: '10px' }}>
                      <div className="icon-holder"><span className="icon-call" /></div>
                      <h4>Need Help?</h4>
                      <p>Call our Ahmedabad office for urgent queries.</p>
                      <Link to="/contact" className="btn-one">Contact Shelter</Link>
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

export default AdoptionTracking;