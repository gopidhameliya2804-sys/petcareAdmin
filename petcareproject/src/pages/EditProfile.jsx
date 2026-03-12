import React, { useEffect, useState } from "react";
import BreadCrumbs from "../comman/BreadCrumbs";
import api from "../utils/AxiosConfig";
import { Link, useLocation, useNavigate } from "react-router-dom";

function EditProfile() {
  let userData = useLocation().state;
  const [user, setUser] = useState(userData);
  console.log(user);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await api.put(`/user/edit/${user._id}`, user);
      alert("Profile Updated Successfully");
      navigate("/profile")
    } catch (err) {
      console.log(err);
      alert("Update Failed");
    }
  };

  const users = {
    username: user.username,
    email:user.email,
    phone:user.phone
  }

  return (
    <div>
      <BreadCrumbs
        title1="Edit Profile"
        title2="Edit Profile"
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
              //<span>My Profile</span>//
            </h5>
            <h2>
              Update Your Details
              <span className="round-box zoominout" />
            </h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-xl-6">
              <div className="contact-form contact-page">
                <form
                  className="default-form2"
                  onSubmit={handleUpdate}
                >
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="input-box">
                        <input
                          type="text"
                          name="username"
                          value={users.username}
                          onChange={handleChange}
                          placeholder="Your Name"
                          required
                        />
                        <div className="icon">
                          <span className="icon-user" />
                        </div>
                      </div>
                    </div>

                    <div className="col-xl-12">
                      <div className="input-box">
                        <input
                          type="text"
                          name="phone"
                          value={users.phone}
                          onChange={handleChange}
                          placeholder="Phone Number"
                          required
                        />
                        <div className="icon">
                          <span className="icon-phone" />
                        </div>
                      </div>
                    </div>

                     <div className="col-xl-12">
                      <div className="input-box">
                        <input
                          type="email"
                          name="email"
                          value={users.email}
                          onChange={handleChange}
                          placeholder="email"
                          required
                        />
                        <div className="icon">
                          <span className="icon-email" />
                        </div>
                      </div>
                    </div>

                  </div>
                  

                  <div className="row">
                    <div className="col-xl-6">
                      <div className="button-box text-center">
                        <button
                          className="btn-one gradient-bg-1 px-3"
                          type="submit"
                        >
                          <span className="txt">
                            Save Changes
                          </span>
                        </button>
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div className="button-box text-center">
                        <button
                          className="btn-one gradient-bg-1 px-5"
                        >
                          <Link to="/profile" className="txt text-white">
                            Back
                          </Link>
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
    </div>
  );
}

export default EditProfile;