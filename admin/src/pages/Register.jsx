import React from 'react'

function Register() {
  return (
    <div>
      <div id="auth" className="d-flex justify-content-center align-items-center vh-100">
        <div className="row w-100 justify-content-center">
          <div className="col-12 col-md-5 col-lg-4">
            <div id="auth-left" className="p-4 shadow rounded bg-white">
              <div className="auth-logo text-center mb-3">
                <a href="#">
                  <img src="assets/images/logo/logo.png" alt="Logo" style={{ width: "120px" }} />
                </a>
              </div>
              <h1 className="auth-title text-center">Sign Up</h1>
              <p className="auth-subtitle mb-4 text-center">
                Input your data to register to our website.
              </p>

              <form>
                <div className="form-group position-relative has-icon-left mb-4">
                  <input
                    type="email"
                    className="form-control form-control-xl"
                    placeholder="Email"
                  />
                  <div className="form-control-icon">
                    <i className="bi bi-envelope" />
                  </div>
                </div>

                <div className="form-group position-relative has-icon-left mb-4">
                  <input
                    type="text"
                    className="form-control form-control-xl"
                    placeholder="Username"
                  />
                  <div className="form-control-icon">
                    <i className="bi bi-person" />
                  </div>
                </div>

                <div className="form-group position-relative has-icon-left mb-4">
                  <input
                    type="password"
                    className="form-control form-control-xl"
                    placeholder="Password"
                  />
                  <div className="form-control-icon">
                    <i className="bi bi-shield-lock" />
                  </div>
                </div>

                <button className="btn btn-primary btn-block btn-lg w-100 shadow-lg mt-4">
                  Sign Up
                </button>
              </form>

              <div className="text-center mt-4 fs-6">
                <p className="text-gray-600">
                  Already have an account?{" "}
                  <a href="auth-login.html" className="font-bold">
                    Log in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
