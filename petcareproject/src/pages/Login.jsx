import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import cookie from "js-cookie";
import axios from "axios";
import { toast } from "react-toastify";
import BreadCrumbs from "../comman/BreadCrumbs";
import { useMutation } from "@tanstack/react-query";

function Login() {
  const navigate = useNavigate();
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

  const addUser = async (user) => {
    let response = await axios.post(
      "https://petcarebackend-wzcq.onrender.com/api/auth/signin",
      user,
    );
    return response.data;
  };

  const mutation = useMutation({
    mutationFn: addUser,

    onSuccess: (response) => {
      if (response.token) {
      cookie.set("token", response.token);

        setUser({
          email: "",
          password: "",
        });
        toast.success("Login Successful", {
          onClose: () => {
            window.location.href = "/";
          },
        });
      }
    },
    onError: () => {
      toast.error("Invlalid Details");
    }
  });

  async function handleSubmit(e) {
    e.preventDefault();
     
    mutation.mutate(user);
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
                        <Link to="/forgot-password">Forgot Password?</Link>
                      </div>
                    </div>
                  </div>

                  <div className="row mt-3">
                    <div className="col-xl-12">
                      <div className="button-box text-center">
                        <input
                          type="submit"
                          className="btn-one gradient-bg-1"
                          disabled={mutation.isPending}
                          value={mutation.isPending ? "loggining..." : "Login Now"}
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
