import React from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import BreadCrumbs from "../comman/BreadCrumbs";
import { useState } from "react";
import { useEffect } from "react";
import api from "../utils/AxiosConfig";

function PetDetails() {
  let petdetailsobj = useLocation().state;
  let [petdetails, setPetDetails] = useState(petdetailsobj);
  const navigate = useNavigate();
  // console.log(petdetails);

  let [petCategory, setPetCategory] = useState([]);
  const [loading, setLoading] = useState(true);

  let FetchPetCategory = async (e) => {
    try {
      let response = await api.get("/user/petcategory");
      console.log(response.data);
      setPetCategory(response.data.data.slice(0,3));
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  useEffect(() => {
    FetchPetCategory();
  }, []);

  return (
    <div>
      {/* Breadcrumb */}
      <BreadCrumbs
        title1="Pet Details"
        title2="pet details"
        imageUrl="../assets/images/breadcrumb/breadcrumb-1.png"
      ></BreadCrumbs>

      {/* Main Section */}
      <section className="blog-single-area">
        <div className="container">
          <div className="row">
            {/* Left Content */}
            <div className="col-xl-8 col-lg-7">
              <div className="single-blog-style2">
                <div className="text-holder">
                  <div className="categories">
                    <h5>{petdetails.categoryName} Adoption</h5>
                  </div>

                  <h2 className="blog-title">{petdetails.name}</h2>

                  <ul className="meta-info">
                    <li>
                      <span className="icon-pawprint" /> Breed:{" "}
                      {petdetails.name}
                    </li>
                    <li>
                      <span className="icon-calendar" /> Age: {petdetails.age}{" "}
                      Years
                    </li>
                    <li>
                      <span className="icon-location" /> Location: Ahmedabad
                    </li>
                  </ul>

                  <div className="blog-details-image-1">
                    <img src={petdetails.image} alt={petdetails.name  } />
                  </div>

                  <div className="text">
                    <p>{petdetails.desc}</p>
                  </div>

                  <div className="blog-details-text-3">
                    <h2>Pet Highlights</h2>
                    <ul>
                      <li>
                        <span className="icon-tick" /> Fully vaccinated
                      </li>
                      <li>
                        <span className="icon-tick" /> Friendly with children
                      </li>
                      <li>
                        <span className="icon-tick" /> Obedience trained
                      </li>
                      <li>
                        <span className="icon-tick" /> Health verified
                      </li>
                    </ul>
                  </div>

                  <div className="blog-details-author-box text-center">
                    <span className="icon-heart" />
                    <h6>Pet Care Team</h6>
                    <h2>“Every adoption creates a lifelong bond of love.”</h2>
                  </div>
                  <div
                    className="mt-5 d-flex justify-content-between"
                    style={{textDecoration:"none"}}
                  >
                    <button
                      className="btn btn-secondary mb-3"
                      style={{backgroundColor:"#ff4880", border:"none", padding:"8px"}}
                    >
                      <Link to="/pet-adoption" state={petdetails} className="text-white">Start Adoption Process</Link>
                    </button>
                    <button
                      className="btn btn-secondary mb-3"
                      style={{backgroundColor:"#ff4880", border:"none", padding:"8px"}}
                      onClick={() => navigate(-1)}
                    >
                      ← Back
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-xl-4 col-lg-5">
              <div className="sidebar-wrapper">
                <div className="single-sidebar text-center">
                  <h3>Adoption Assistance</h3>
                  <p>
                    Schedule a visit, meet the pet, and get complete adoption
                    support from our expert team.
                  </p>
                  <Link to="/contact" className="btn-one gradient-bg-1">
                    <span className="txt">
                      <i className="icon-call" /> Contact Team
                    </span>
                  </Link>
                </div>

                <div className="single-sidebar">
                  <h3>Other Available Pets</h3>
                  <ul className="popular-feeds mt-3">
                   {petCategory.map((value , index) => {
                    return(
                      <>
                         <li>
                      <div className="inner">
                        <div className="img-box">
                          <img
                            src={`${api.defaults.baseURL}/uploads/${value.image}`}
                            alt={value.name}
                            style={{height:"100px"}}
                          />
                        </div>
                        <div className="title-box" style={{display:"flex"}}>
                          <h4 className="mt-4">
                            <Link to="#">{value.name}</Link>
                          </h4>
                        </div>
                      </div>
                    </li>
                      </>
                    )
                   })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PetDetails;
