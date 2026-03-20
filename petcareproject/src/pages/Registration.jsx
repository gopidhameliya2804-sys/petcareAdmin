import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import BreadCrumbs from "../comman/BreadCrumbs";
import { toast } from "react-toastify";

function Registration() {
  let [loading, setLoading] = useState(false);
  let [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  let [error, setError] = useState({
    usernameError: "",
    emailError: "",
    phoneError: "",
    passwordError: "",
  });

  function handleInputChange(e) {
    let { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function validationForm() {
    let isValid = true;
    let emailFormat =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let phoneFormat = /^(?:\(\d{3}\)|\d{3})[-.\s]?\d{3}[-.\s]?\d{4}$/;
    let passwordFormat =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;

    if (!user.username) {
      error.usernameError = "Username is required";
      isValid = false;
    } else {
      error.usernameError = "";
    }

    if (!user.email) {
      error.emailError = "Email is required*";
      isValid = false;
    } else if (!emailFormat.test(user.email)) {
      error.emailError = "Provide valid email";
    } else {
      error.emailError = "";
    }

    if (!user.phone) {
      error.phoneError = "Email is required*";
      isValid = false;
    } else if (!phoneFormat.test(user.phone)) {
      error.phoneError = "Provide valid phone number";
    } else {
      error.phoneError = "";
    }

    if (!user.password) {
      error.passwordError = "Email is required*";
      isValid = false;
    } else if (!passwordFormat.test(user.password)) {
      error.passwordError =
        "Password must contain uppercase , lowercase, special char , number and at 8 char";
    } else {
      error.passwordError = "";
    }
    setError((prev) => ({ ...prev }));
    return isValid;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    if (!validationForm()) return;

    try {
      let response = await axios.post(
        "https://petcarebackend-wzcq.onrender.com/api/auth/signup",
        user,
      );
      console.log(response.data);

      if (response.data.status) {
        console.log(response.data.message);

        toast.success("Signup Successful");
        window.location.href = "/login";
      }
    } catch (e) {
      setUser({
        username: "",
        email: "",
        phone: "",
        password: "",
      });
      toast.error(" Invlalid Details");
      window.location.href = "/registration";
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <div>
        {/*Start breadcrumb area*/}
        <BreadCrumbs
          title1="Registration"
          title2="registration"
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
                //<span>Register Now</span>//
              </h5>
              <h2>
                Create Your Account
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
                            type="text"
                            name="username"
                            placeholder="Full Name"
                            onChange={handleInputChange}
                            value={user.username}
                          />
                          {error.usernameError && (
                            <p style={{ color: "red" }}>
                              {error.usernameError}
                            </p>
                          )}
                          <div className="icon">
                            <span className="icon-user" />
                          </div>
                        </div>
                      </div>
                    </div>
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
                          {error.emailError && (
                            <p style={{ color: "red" }}>{error.emailError}</p>
                          )}
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
                            type="tel"
                            name="phone"
                            placeholder="Phone Number"
                            onChange={handleInputChange}
                            value={user.phone}
                          />
                          {error.phoneError && (
                            <p style={{ color: "red" }}>{error.phoneError}</p>
                          )}
                          <div className="icon">
                            <span className="icon-phone" />
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
                          {error.passwordError && (
                            <p style={{ color: "red" }}>
                              {error.passwordError}
                            </p>
                          )}
                          <div className="icon">
                            <span className="icon-lock" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row mt-3">
                      <div className="col-xl-12">
                        <div className="button-box text-center">
                          <input
                            type="submit"
                            className="btn-one gradient-bg-1"
                            disabled={loading}
                            value={loading ? "Please Wait..." : "Register Now"}
                          >
                            {/* <span className="txt">
                              <i className="icon-send" />
                              Register Now
                            </span> */}
                          </input>
                          <h6 className="mt-3">
                            {" "}
                            Already have an account ?{" "}
                            <Link to="/login"> Sign in</Link>
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
      </div>
    </div>
  );
}

export default Registration;
