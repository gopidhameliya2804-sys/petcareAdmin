import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import BreadCrumbs from "../comman/BreadCrumbs";
import api from "../utils/AxiosConfig";

function Services() {
  let [services, setServices] = useState({});
  let [Loading, setLoading] = useState(true);
  const { bycategoryid } = useParams();

  const FetchServices = async () => {
    try {
      let response = await api.get(`/user/services/${bycategoryid}`);
      console.log(response.data);
      setServices(response.data.data);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  useEffect(() => {
    FetchServices();
  }, []);


  return (
    <div>
      <div>
        {/*Start breadcrumb area*/}
        <BreadCrumbs
          title1="Our Services"
          title2="Services"
          imageUrl="../assets/images/breadcrumb/breadcrumb-1.png"
        ></BreadCrumbs>
        {/*End breadcrumb area*/}
        {/*Start Blog Style2 Area*/}
        <section id="blog-area" className="blog-grid-area">
          <div className="container">
            <div className="row">
              {Loading ? (
                <p>Loading...</p>
              ) : services.length > 0 ? (
                services.map((value, index) => {
                  return (
                    <>
                      <div className="col-xl-4 col-lg-6 col-md-6">
                        <div
                          className="single-blog-style1 wow fadeInLeft"
                          data-wow-delay="100ms"
                          data-wow-duration="1500ms"
                        >
                          <div className="img-holder">
                            <div className="inner">
                              <img
                                src={`${api.defaults.baseURL}/uploads/${value.image}`}
                                alt={value.name}
                                style={{ height: "300px" }}
                              />
                            </div>
                          </div>
                          <div className="text-holder">
                            <ul className="meta-info">
                              <li>
                                <span className="icon-tag" />
                               {value.categoryName}
                              </li>
                            </ul>
                            <h3 className="blog-title">
                              <a href="#">
                                {value.name}
                                <span className="round-box zoominout" />
                              </a>
                            </h3>
                            <p>{value.desc}</p>
                            <div className="button">
                              <Link to={"/service-details"} state={value}>
                                Read More
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })
              ) : (
                <p>Not Services Found.</p>
              )}
            </div>
          </div>
        </section>

        {/*End Blog Style2 Area*/}
      </div>
    </div>
  );
}

export default Services;
