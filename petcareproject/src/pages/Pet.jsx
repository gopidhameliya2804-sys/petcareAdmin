import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import api from "../utils/AxiosConfig";
import { useEffect } from "react";
import BreadCrumbs from "../comman/BreadCrumbs";

function Pet() {
  const { bycategoryid } = useParams();
  const navigate = useNavigate();
  let [pet, setPet] = useState({});
  const [loading, setLoading] = useState(true);

  const FetchPet = async (e) => {
    try {
      let response = await api.get(`/user/pet/${bycategoryid}`);
      console.log(response.data);
      setPet(response.data.data);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  useEffect(() => {
    FetchPet();
  }, []);
  console.log(pet);

  return (
    <div>
      <div>
        {/*Start breadcrumb area*/}
        <BreadCrumbs
          title1="Pet"
          title2="pet"
          imageUrl="../assets/images/breadcrumb/breadcrumb-1.png"
        ></BreadCrumbs>
        {/*End breadcrumb area*/}
        {/* Breeds Grid */}
        <section id="blog-area" className="blog-grid-area">
          <div className="container">
            <div className="row">
              {loading ? (
                <p>Loading...</p>
              ) : pet.length > 0 ? (
                pet.map((value, index) => {
                  return (
                    <>
                      <div
                        className="col-xl-4 col-lg-6 col-md-6"
                      >
                        <div className="single-blog-style1">
                          <div className="img-holder">
                            <div className="inner">
                              <img
                               src={`${api.defaults.baseURL}/uploads/${value.image}`}
                                alt={value.name}
                                style={{height:"300px"}}
                              />
                            </div>
                          </div>
                          <div className="text-holder">
                            <ul className="meta-info">
                              <li>
                                <span className="icon-pawprint" />
                                Friendly Breed
                              </li>
                            </ul>
                            <h3 className="blog-title">
                              {value.name}
                              <span className="round-box zoominout" />
                            </h3>
                            <p>
                              {value.desc}
                            </p>
                            <Link to={"/pet-details"} state={value} >View Details</Link>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })
              ) : (
                <p>No Pet  Found.</p>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Pet;
