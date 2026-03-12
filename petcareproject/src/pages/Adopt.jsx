import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import BreadCrumbs from "../comman/BreadCrumbs";
import api from "../utils/AxiosConfig";

function AdoptPets() {
  let [adoptedPets, setAdoptedPets] = useState([]);
  let [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const FetchAdotedPets = async () => {
    try {
      let responsive = await api.get("/user/adoption/all");
      console.log(responsive.data.data);
      setAdoptedPets(responsive.data.data);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(true);
    }
  };

  useEffect(() => {
    FetchAdotedPets();
  }, []);


  return (
    <div>
      <div>
        {/* Breadcrumb */}
        <BreadCrumbs
          title1=" Adopt a Pet"
          title2="Pet Adoption"
          imageUrl="assets/images/breadcrumb/breadcrumb-1.png"
        ></BreadCrumbs>

        {/* Adoption Grid */}
        <section id="blog-area" className="blog-grid-area">
          <div className="container">
            <div className="row">
              {adoptedPets.map((item) => (
                <div
                  className="col-xl-4 col-lg-6 col-md-6"
                  key={item._id}
                  onClick={() => navigate("/adoption-tracking")}
                >
                  <div className="single-blog-style1 wow fadeInUp">
                    {/* Image */}
                    <div className="img-holder">
                      <div className="inner">
                        <img
                          src={item.pet_image}
                          alt={item.pet_name}
                          style={{ height: "300px" }}
                        />
                      </div>

                      {/* Status Badge */}
                      <div className="date-box">
                        <h5
                          style={{
                            color:
                              item.adop_status === "PENDING"
                                ? "#f1c40f"
                                : item.adop_status === "APPROVED"
                                  ? "#2ecc71"
                                  : "#e74c3c",
                          }}
                        >
                          {item.adop_status}
                        </h5>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="text-holder">
                      <h3 className="blog-title">
                        {item.pet_name}
                        <span className="round-box zoominout" />
                      </h3>

                      <ul className="meta-info">
                        <li>
                          <span>Age : </span>
                          {item.pet_age}
                        </li>
                        <li>
                          <span className="icon-tag" />₹ {item.pet_price}
                        </li>
                      </ul>

                      <p>
                        <strong>Requested Date:</strong>{" "}
                        {new Date(item.pet_time).toLocaleDateString()}
                      </p>

                      <p>
                        <strong>Reason :</strong>{" "}
                        {item.adop_reason}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AdoptPets;
