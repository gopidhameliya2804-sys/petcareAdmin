import React from "react";
import Sidebar from "../common/Sidebar";
// import Chart from "react-apexcharts";

function ApexChart() {
  return (
    <div>
      <div id="app">
        <Sidebar />
        <div id="main">
          <div className="page-heading">
            <div className="page-title">
              <div className="row">
                <div className="col-12 col-md-6 order-md-1 order-last">
                  <h3>Apexcharts</h3>
                  <p className="text-subtitle text-muted">A chart for user </p>
                </div>
                <div className="col-12 col-md-6 order-md-2 order-first">
                  <nav
                    aria-label="breadcrumb"
                    className="breadcrumb-header float-start float-lg-end"
                  >
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="index.html">Dashboard</a>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Apexcharts
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
            <section className="section">
              <div className="row">
                <div className="col-md-9">
                  <div className="card">
                    <div className="card-header">
                      <h4>Line Area Chart</h4>
                    </div>
                    <div className="card-body">
                      <div id="area" />
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="card">
                    <div className="card-header">
                      <h4>Radial Gradient Chart</h4>
                    </div>
                    <div className="card-body">
                      <div id="radialGradient" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-header">
                      <h4>Line Chart</h4>
                    </div>
                    <div className="card-body">
                      <div id="line" />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-header">
                      <h4>Bar Chart</h4>
                    </div>
                    <div className="card-body">
                      <div id="bar" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <h4>Radial Gradient Chart</h4>
                    </div>
                    <div className="card-body">
                      <div id="candle" />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <footer>
            <div className="footer clearfix mb-0 text-muted">
              <div className="float-start">
                <p>2021 © Mazer</p>
              </div>
              <div className="float-end">
                <p>
                  Crafted with{" "}
                  <span className="text-danger">
                    <i className="bi bi-heart" />
                  </span>{" "}
                  by <a href="http://ahmadsaugi.com">A. Saugi</a>
                </p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default ApexChart;
