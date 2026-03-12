import React, { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import api from "../utils/AxiosConfig";
import BreadCrumbs from "../comman/BreadCrumbs";

function ResetPassword() {
  const { token } = useParams();
  const navigate = useNavigate();

  const [passwordData, setPasswordData] = useState({
    password:"",
    confimPassword:""
  });
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    const { name , value } = e.target;
    setPasswordData((prev) => ({
        ...prev,
        [name] : value,
    }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (passwordData.password !== passwordData.confimPassword) {
        alert("Password do not Match");
        return;
    }

    try {
      const response = await api.post("/user/password/reset", {
        token,
        newPassword: passwordData.password,
      });

      if (response.data.status) {
        setMessage("Password reset successful");
        setTimeout(() => navigate("/login"), 2000);
      } else {
        setMessage(response.data.message);
      }
    } catch (error) {
      setMessage("Invalid or expired token");
    }
  };

  return (
    <>
      <BreadCrumbs
        title1="Reset Password"
        title2="Reset Password"
        imageUrl="../assets/images/breadcrumb/breadcrumb-1.png"
      />

      <section className="contact-form-style1-area">
        <div
          className="contact-form-style1-bg"
          style={{
            backgroundImage:
              "url(../assets/images/shape/contact-form-style1-bg.png)",
          }}
        />
        <div className="container">
          <div className="sec-title text-center">
            <h5>
              //<span>New Password</span>//
            </h5>
            <h2>
              Set Your New Password
              <span className="round-box zoominout" />
            </h2>
          </div>

          <div className="row">
            <div className="col-xl-12">
              <div className="contact-form contact-page">
                <form
                  className="default-form2 text-center"
                  onSubmit={handleSubmit}
                >
                  <div className="row justify-content-center">
                    <div className="col-xl-4">
                      <div className="input-box">
                        <input
                          type="password"
                          name="password"
                          placeholder="Enter New Password"
                          value={passwordData.password}
                          onChange={handleInputChange}
                          required
                        />
                        <div className="icon">
                          <span className="icon-lock" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row justify-content-center">
                    <div className="col-xl-4">
                      <div className="input-box">
                        <input
                          type="password"
                          name="confimPassword"
                          placeholder="Enter New Password"
                          value={passwordData.confimPassword}
                          onChange={handleInputChange}
                          required
                        />
                        <div className="icon">
                          <span className="icon-lock" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Message Display */}
                  {message && (
                    <div className="row justify-content-center mt-2">
                      <div className="col-xl-4">
                        <p>{message}</p>
                      </div>
                    </div>
                  )}

                  <div className="row mt-3">
                    <div className="col-xl-12">
                      <div className="button-box text-center">
                        <button
                          type="submit"
                          className="btn-one gradient-bg-1"
                        >
                          Reset Password
                        </button>

                        <h6 className="mt-3">
                          Back to
                          <Link to="/login"> Login</Link>
                        </h6>
                      </div>
                    </div>
                  </div>

                </form>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

export default ResetPassword;