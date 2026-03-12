import React from "react";
import BreadCrumbs from "../comman/BreadCrumbs";

function NotFound() {
  return (
    <div>
      <div className="boxed_wrapper">
        <div className="preloader" />
        {/*Start breadcrumb area*/}
        <BreadCrumbs title1="Error Page" title2="404" imageUrl="assets/images/breadcrumb/breadcrumb-1.png"></BreadCrumbs>
        {/*End breadcrumb area*/}
        {/*Start Error Page Area*/}
        <section className="error-page-area">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div
                  className="error-content text-center wow slideInUp"
                  data-wow-delay="0ms"
                  data-wow-duration="1500ms"
                >
                  <h4>Page Not Found</h4>
                  <div className="title">404</div>
                  <p>
                    We’re unable to find a page you are looking for, Try later
                    or click the button.
                  </p>
                  <div className="btns-box">
                    <a className="btn-one" href="index.html">
                      <span className="txt">Back to Home</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*End Error Page Area*/}
      </div>
    </div>
  );
}

export default NotFound;
