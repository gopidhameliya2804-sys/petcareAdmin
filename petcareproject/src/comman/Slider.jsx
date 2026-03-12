import React from 'react'

function Slider() {
  return (
    <div>
      <div className="preloader" />

        {/* Start Main Slider */}
        <section className="main-slider style1">
          <div className="slider-box">
            {/* Banner Carousel */}
            <div className="banner-carousel owl-theme owl-carousel">
              {/* Slide */}
              <div className="slide">
                <div
                  className="image-layer"
                  style={{
                    backgroundImage: "url(assets/images/slides/slide-v1-1.jpg)",
                  }}
                />
                <div className="auto-container">
                  <div className="content">
                    <h5>
                      //<span>Enjoy Your Holiday</span>//
                    </h5>
                    <h2>
                      We Keep Them
                      <br /> Happy Anytime
                      <span className="round" />
                    </h2>
                    <div className="btns-box">
                      <a className="btn-one" href="#">
                        <span className="txt">Make Appointment</span>
                      </a>
                      <a className="btn-one marleft style2" href="#">
                        <span className="txt">987-876-876-87</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Slide */}
              <div className="slide">
                <div
                  className="image-layer"
                  style={{
                    backgroundImage: "url(assets/images/slides/slide-v1-2.jpg)",
                  }}
                />
                <div className="auto-container">
                  <div className="content">
                    <h5>
                      //<span>Enjoy Your Holiday</span>//
                    </h5>
                    <h2>
                      We Keep Them
                      <br /> Happy Anytime
                      <span className="round" />
                    </h2>
                    <div className="btns-box">
                      <a className="btn-one" href="#">
                        <span className="txt">Make Appointment</span>
                      </a>
                      <a className="btn-one marleft style2" href="#">
                        <span className="txt">987-876-876-87</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Slide */}
              <div className="slide">
                <div
                  className="image-layer"
                  style={{
                    backgroundImage: "url(assets/images/slides/slide-v1-3.jpg)",
                  }}
                />
                <div className="auto-container">
                  <div className="content">
                    <h5>
                      //<span>Enjoy Your Holiday</span>//
                    </h5>
                    <h2>
                      We Keep Them
                      <br /> Happy Anytime
                      <span className="round" />
                    </h2>
                    <div className="btns-box">
                      <a className="btn-one" href="#">
                        <span className="txt">Make Appointment</span>
                      </a>
                      <a className="btn-one marleft style2" href="#">
                        <span className="txt">987-876-876-87</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Main Slider paroller */}

    </div>
  )
}

export default Slider
