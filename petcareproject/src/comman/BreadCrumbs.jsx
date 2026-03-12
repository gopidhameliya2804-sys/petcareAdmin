import React from 'react'
import { Link } from 'react-router-dom'

function BreadCrumbs(props) {
  return (
    <div>
       <section
          className="breadcrumb-area"
          style={{
            backgroundImage: `url(${props.imageUrl})`,
          }}
        >
          <div className="banner-curve" />
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="inner-content clearfix text-center">
                  <div
                    className="title wow slideInUp animated"
                    data-wow-delay="0.3s"
                    data-wow-duration="1500ms"
                  >
                    <h2>
                      {props.title1}
                      <span className="dotted" />
                    </h2>
                  </div>
                  <div
                    className="breadcrumb-menu wow slideInDown animated"
                    data-wow-delay="0.3s"
                    data-wow-duration="1500ms"
                  >
                    <ul className="clearfix">
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li className="active">{props.title2}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default BreadCrumbs;
