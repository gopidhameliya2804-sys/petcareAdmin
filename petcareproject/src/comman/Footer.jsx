import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Footer() {
  useEffect(() => {
    const btn = document.querySelector(".scroll-to-target");

    const onScroll = () => {
      if (window.scrollY > 300) {
        btn.classList.add("visible");
      } else {
        btn.classList.remove("visible");
      }
    };

    const onClick = () => {
      const target = btn.getAttribute("data-target");
      document.querySelector(target).scrollIntoView({
        behavior: "smooth",
      });
    };

    window.addEventListener("scroll", onScroll);
    btn.addEventListener("click", onClick);

    return () => {
      window.removeEventListener("scroll", onScroll);
      btn.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <div>
      {/*Start footer area*/}
      <footer className="footer-area">
        <div
          className="footer-bg"
          style={{ backgroundImage: "url(assets/images/shape/footer-bg.png)" }}
        />
        <div className="footer">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="footer-logo">
                  <div className="logo">
                    <Link to="/">
                      <img
                        src="assets/images/footer/image.png"
                        alt="Awesome Footer Logo"
                        style={{ height: "60px", width: "100%" }}
                        title="Logo"
                      />
                    </Link>
                  </div>
                  <div className="copy-right">
                    <p>Copyright &amp; Design By</p>
                    <h4>WebTend - 2020</h4>
                  </div>
                </div>
                <div className="footer-menu">
                  <ul>
                    <li>
                      <a href="#">Terms &amp; Conditions</a>
                    </li>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="#">Refund Policy</a>
                    </li>
                    <li>
                      <a href="#">Get Support</a>
                    </li>
                  </ul>
                </div>
                <div className="footer-contact-info">
                  <div className="single-box">
                    <div className="icon">
                      <span className="icon-phone-call" />
                    </div>
                    <div className="title">
                      <span>Emergency Call</span>
                      <h3>
                        <a href="tel:123456789">+987 876 877 876 6</a>
                      </h3>
                    </div>
                  </div>
                  <div className="single-box">
                    <div className="icon">
                      <span className="icon-phone-call" />
                    </div>
                    <div className="title">
                      <span>Support Email</span>
                      <h3>
                        <a href="#">happypawsgrooming@gmail.com</a>
                      </h3>
                    </div>
                  </div>
                  <div className="single-box">
                    <div className="icon">
                      <span className="icon-phone-call" />
                    </div>
                    <div className="title">
                      <span>Address</span>
                      <h3>14/A, Ahmedabad, Gujarat</h3>
                    </div>
                  </div>
                  <div className="footer-social-info">
                    <a href="#" className="fb-clr">
                      <i className="fa fa-facebook" />
                    </a>
                    <a href="#" className="tw-clr">
                      <i className="fa fa-twitter" />
                    </a>
                    <a href="#" className="you-clr">
                      <i className="fa fa-youtube" />
                    </a>
                    <a href="#" className="sk-clr">
                      <i className="fa fa-skype" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/*End footer area*/}

      <button className="scroll-top scroll-to-target" data-target="html">
        <span className="fa fa-angle-up" />
      </button>
    </div>
  );
}

export default Footer;
