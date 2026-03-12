import React, { useEffect, useState } from "react";
import BreadCrumbs from "../comman/BreadCrumbs";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import api from "../utils/AxiosConfig";

function PetAdoption() {
  const petadata = useLocation().state;
  const [pet , setPet] = useState(petadata);
  // console.log(pet);
  const navigate = useNavigate();
  const [petadopt, setPetAdopt] = useState({
    adop_reason: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPetAdopt((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/user/adoption/petadoption", {
        pet_id: pet._id,
        ...petadopt,
      });

      alert("Adoption request submitted successfully");
      navigate("/adopt");
    } catch (e) {
      console.log(e);
      alert("Something went wrong");
    }
  };
  return (
    <div>
      <BreadCrumbs
        title1="Pet Adoption"
        title2="Adoption Form"
        imageUrl="assets/images/breadcrumb/breadcrumb-1.png"
      />
     
      <section className="contact-form-style1-area">
        <div
          className="contact-form-style1-bg"
          style={{
            backgroundImage:
              "url(assets/images/shape/contact-form-style1-bg.png)",
          }}
        />
        <div className="container">
          <div className="sec-title text-center">
            <h5>
              //<span>Pet Adoption</span>//
            </h5>
            <h2>
              Adopt a Loving Pet
              <span className="round-box zoominout" />
            </h2>
          </div>

          <div className="row">
            <div className="col-xl-12">
              <div className="contact-form contact-page">
                <form className="default-form2" onSubmit={handleSubmit}>
                  <div className="row">
                    {/* Adoption Status */}
                    {/* <div className="col-xl-6 col-lg-6">
                      <div className="input-box">
                         <select className="selectpicker"
                  name="adop_status"
                  value={petadopt.adop_status}
                  onChange={handleInputChange}
                  // disabled={petadopt.adop_status === "APPROVED"}
                  required
                >
                  <option value="">Select Adoption Status</option>
                  <option value="INTERESTED">Interested</option>
                  <option value="PENDING">Pending Approval</option>
                  <option value="APPROVED">Approved</option>
                </select>

                {petadopt.adop_status === "APPROVED" && (
                  <p style={{ color: "green", marginTop: "5px" }}>
                    ✔ This pet is already approved
                  </p>
                )}
                      </div>
                    </div> */}

                    {/* Adoption Reason */}
                    <div className="col-xl-12">
                      <div className="input-box">
                        <input
                          type="text"
                          name="adop_reason"
                          placeholder="Reason for Adoption"
                          value={petadopt.adop_reason}
                          onChange={handleInputChange}
                          required
                        />
                        <div className="icon">
                          <span className="icon-pen" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="button-box text-center">
                        <button className="btn-one gradient-bg-1" type="submit">
                          <span className="txt">
                            <i className="icon-send" />
                            Submit Adoption Request
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Adoption Form Area */}
    </div>
  );
}

export default PetAdoption;
