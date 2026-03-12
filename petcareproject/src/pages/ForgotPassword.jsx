import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import BreadCrumbs from "../comman/BreadCrumbs";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // try {
      setLoading(true);
      setMessage("");

      const response = await axios.post("http://localhost:8000/api/user/password/forgot" , { email });

      if (response.data.status) {
        setMessage("Reset link sent to your email");
        setEmail("");
      } else {
        setMessage(response.data.Message);
      }

    // } catch (error) {
    //   setMessage("Something went wrong");
    // } 
  };

  return (
    <>
      <BreadCrumbs
        title1="Forgot Password"
        title2="Forgot Password"
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
              //<span>Reset Password</span>//
            </h5>
            <h2>
              Forgot Your Password?
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
                          type="email"
                          placeholder="Enter Your Email Address"
                          value={email}
                          onChange={handleInputChange}
                          required
                        />
                        <div className="icon">
                          <span className="icon-envelope" />
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
                          disabled={loading}
                        >
                           Send Reset Link
                        </button>

                        <h6 className="mt-3">
                          Remember your password?
                          <Link to="/login"> Back to Login</Link>
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

export default ForgotPassword;