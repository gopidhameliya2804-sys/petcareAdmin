import React, { useState } from "react";
import { Link } from "react-router-dom";
import cookie from "js-cookie";
import axios from "axios";
import BreadCrumbs from "../comman/BreadCrumbs";

function Login() {
  let [user, setUser] = useState({
    email: "",
    password: "",
  });

  function handleInputChange(e) {
    let { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      let response = await axios.post(
        "https://petcarebackend-wzcq.onrender.com/api/auth/signin",
        user,
      );
      if (response.data.token != "") {
        cookie.set("token", response.data.token);

        setUser({
          email: "",
          password: "",
        });
        alert("Login Successful");
        window.location.href = "/";
      }
    } catch (e) {
      setUser({
        email: "",
        password: "",
      });
      alert(" Invlalid Details");
      window.location.href = "/login";
    }
  }

  return (
    <>
      {/*Start breadcrumb area*/}
      <BreadCrumbs
        title1="Log in"
        title2="Log in"
        imageUrl="assets/images/breadcrumb/breadcrumb-1.png"
      ></BreadCrumbs>
      {/*End breadcrumb area*/}

      {/*Start Registration Form*/}
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
              //<span>Login </span>//
            </h5>
            <h2>
              Welcome Back
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
                          name="email"
                          placeholder="Email Address"
                          onChange={handleInputChange}
                          value={user.email}
                        />
                        <div className="icon">
                          <span className="icon-envelope" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row justify-content-center">
                    <div className="col-xl-4">
                      <div className="input-box">
                        <input
                          type="password"
                          name="password"
                          placeholder="Password"
                          onChange={handleInputChange}
                          value={user.password}
                        />
                        <div className="icon">
                          <span className="icon-lock" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row justify-content-center">
                    <div className="col-xl-4 text-end">
                      <div className="forgot-password">
                        <Link to="/forgot-password" >Forgot Password?</Link>
                      </div>
                    </div>
                  </div>

                  <div className="row mt-3">
                    <div className="col-xl-12">
                      <div className="button-box text-center">
                        <input
                          type="submit"
                          className="btn-one gradient-bg-1"
                          value={"Login"}
                        />
                    

                        <h6 className="mt-3">
                          Have not an account ?
                          <Link to="/registration"> Sign up</Link>
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
      {/*End Registration Form*/}
    </>
  );
}

export default Login;
