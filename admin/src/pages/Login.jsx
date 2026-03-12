import React from "react";
import { useState } from "react";
import cookie from "js-cookie";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  let [admin , setAdmin] = useState({
      email:"",
      password:"",
  })
  
  function handleInputChange(e){
    let {name , value} = e.target;
    setAdmin((prev) => ({
      ...prev,
      [name] : value
    }))
  }


  async function hnadleSubmit(e) {
    e.preventDefault();

    try {
      let response = await axios.post("https://petcareadmin.onrender.com/api/auth/signin", admin);
      console.log(response.data);
      if (token) {
      cookie.set("token", token, { expires: 1 });
        setAdmin({
          email:"",
          password:""
        })
        alert("Login Successful");
        navigate("/");
      }  
    } catch (e) {
      setAdmin({
          email:"",
          password:""
        })
        alert(" Invlalid Details");
        navigate("/login");
    }
  }
  // console.log(admin);

  return (
    <div
      id="auth"
      className="d-flex justify-content-center align-items-center  bg-light" 
    >
      <div className="col-12 col-md-5 col-lg-4 mt-5 mb-5" >
        <div id="auth-left" className="p-4 shadow rounded bg-white">
          <div className="auth-logo text-center mb-3">
            <a href="#">
              <img
                src="assets/images/logo/logo.png"
                alt="Logo"
                style={{ width: "120px" }}
              />
            </a>
          </div>

          <h1 className="auth-title text-center" style={{fontSize:"30px"}}>Log in.</h1>

          <p className="auth-subtitle mb-5 text-center">
            Log in with your data that you entered during registration.
          </p>

          <form onSubmit={hnadleSubmit}>  
            <div className="form-group position-relative has-icon-left mb-4">
              <input
               type="email"
               className="form-control form-control-xl"
               name="email"
               placeholder="Email Address"
               onChange={handleInputChange}
               value={admin.email}
              />
              <div className="form-control-icon">
                <i className="bi bi-person" />
              </div>
            </div>

            <div className="form-group position-relative has-icon-left mb-4">
              <input
                type="password"
                className="form-control form-control-xl"
                name="password"
                placeholder="Password"
                onChange={handleInputChange}
                value={admin.password}
              />
              <div className="form-control-icon">
                <i className="bi bi-shield-lock" />
              </div>
            </div>

            <div className="form-check form-check-lg d-flex align-items-end">
              <input
                className="form-check-input me-2"
                type="checkbox"
                id="flexCheckDefault"
              />
              <label className="form-check-label text-gray-600" htmlFor="flexCheckDefault">
                Keep me logged in
              </label>
            </div>

            <input type="submit" className="btn btn-primary btn-block btn-lg shadow-lg mt-5"  value={"Log in"} />
          </form>

          <div className="text-center mt-3 text-lg fs-4">
            <p>
              <a className="font-bold" href="auth-forgot-password.html" style={{fontSize:"20px"}}>
                Forgot password?
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
