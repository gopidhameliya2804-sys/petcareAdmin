import React from "react";
import Sidebar from "../common/Sidebar";

function Table() {
  return (
    <div>
      <div id="app">
       <Sidebar />
        <div id="main">
          <div className="page-heading">
            <div className="page-title">
              <div className="row">
                <div className="col-12 col-md-6 order-md-1 order-last">
                  <h3>Table</h3>
                  <p className="text-subtitle text-muted">
                    For user to check they list
                  </p>
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
                        Table
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
            {/* Basic Tables start */}
            <section className="section">
              <div className="row" id="basic-table">
                <div className="col-12 col-md-6">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Table with outer spacing</h4>
                    </div>
                    <div className="card-content">
                      <div className="card-body">
                        <p className="card-text">
                          Using the most basic table up, here’s how
                          <code>.table</code>-based tables look in Bootstrap.
                          You can use any example of below table for your table
                          and it can be use with any type of bootstrap tables.
                        </p>
                        {/* Table with outer spacing */}
                        <div className="table-responsive">
                          <table className="table table-lg">
                            <thead>
                              <tr>
                                <th>NAME</th>
                                <th>RATE</th>
                                <th>SKILL</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="text-bold-500">Michael Right</td>
                                <td>$15/hr</td>
                                <td className="text-bold-500">UI/UX</td>
                              </tr>
                              <tr>
                                <td className="text-bold-500">
                                  Morgan Vanblum
                                </td>
                                <td>$13/hr</td>
                                <td className="text-bold-500">
                                  Graphic concepts
                                </td>
                              </tr>
                              <tr>
                                <td className="text-bold-500">Tiffani Blogz</td>
                                <td>$15/hr</td>
                                <td className="text-bold-500">Animation</td>
                              </tr>
                              <tr>
                                <td className="text-bold-500">Ashley Boul</td>
                                <td>$15/hr</td>
                                <td className="text-bold-500">Animation</td>
                              </tr>
                              <tr>
                                <td className="text-bold-500">Mikkey Mice</td>
                                <td>$15/hr</td>
                                <td className="text-bold-500">Animation</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">
                        Table without outer spacing
                      </h4>
                    </div>
                    <div className="card-content">
                      <div className="card-body">
                        <p className="card-text">
                          Using the most basic table up, here’s how
                          <code>.table</code>-based tables look in Bootstrap.
                          You can use any example of below table for your table
                          and it can be use with any type of bootstrap tables.
                        </p>
                      </div>
                      {/* Table with no outer spacing */}
                      <div className="table-responsive">
                        <table className="table mb-0 table-lg">
                          <thead>
                            <tr>
                              <th>NAME</th>
                              <th>RATE</th>
                              <th>SKILL</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="text-bold-500">Michael Right</td>
                              <td>$15/hr</td>
                              <td className="text-bold-500">UI/UX</td>
                            </tr>
                            <tr>
                              <td className="text-bold-500">Morgan Vanblum</td>
                              <td>$13/hr</td>
                              <td className="text-bold-500">
                                Graphic concepts
                              </td>
                            </tr>
                            <tr>
                              <td className="text-bold-500">Tiffani Blogz</td>
                              <td>$15/hr</td>
                              <td className="text-bold-500">Animation</td>
                            </tr>
                            <tr>
                              <td className="text-bold-500">Ashley Boul</td>
                              <td>$15/hr</td>
                              <td className="text-bold-500">Animation</td>
                            </tr>
                            <tr>
                              <td className="text-bold-500">Mikkey Mice</td>
                              <td>$15/hr</td>
                              <td className="text-bold-500">Animation</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Basic Tables end */}
            {/*  Inverse table start */}
            <section className="section">
              <div className="row" id="table-inverse">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Inverse table</h4>
                    </div>
                    <div className="card-content">
                      <div className="card-body">
                        <p>
                          You can also invert the colors—with light text on dark
                          backgrounds—with{" "}
                          <code className="highlighter-rouge">.table-dark</code>
                          .
                        </p>
                      </div>
                      {/* table with dark */}
                      <div className="table-responsive">
                        <table className="table table-dark mb-0">
                          <thead>
                            <tr>
                              <th>NAME</th>
                              <th>RATE</th>
                              <th>SKILL</th>
                              <th>TYPE</th>
                              <th>LOCATION</th>
                              <th>ACTION</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="text-bold-500">Michael Right</td>
                              <td>$15/hr</td>
                              <td className="text-bold-500">UI/UX</td>
                              <td>Remote</td>
                              <td>Austin,Taxes</td>
                              <td>
                                <a href="#">
                                  <i
                                    className="badge-circle font-medium-1"
                                    data-feather="mail"
                                  />
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td className="text-bold-500">Morgan Vanblum</td>
                              <td>$13/hr</td>
                              <td className="text-bold-500">
                                Graphic concepts
                              </td>
                              <td>Remote</td>
                              <td>Shangai,China</td>
                              <td>
                                <a href="#">
                                  <i
                                    className="badge-circle font-medium-1"
                                    data-feather="mail"
                                  />
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td className="text-bold-500">Tiffani Blogz</td>
                              <td>$15/hr</td>
                              <td className="text-bold-500">Animation</td>
                              <td>Remote</td>
                              <td>Austin,Texas</td>
                              <td>
                                <a href="#">
                                  <i
                                    className="badge-circle font-medium-1"
                                    data-feather="mail"
                                  />
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td className="text-bold-500">Ashley Boul</td>
                              <td>$15/hr</td>
                              <td className="text-bold-500">Animation</td>
                              <td>Remote</td>
                              <td>Austin,Texas</td>
                              <td>
                                <a href="#">
                                  <i
                                    className="badge-circle font-medium-1"
                                    data-feather="mail"
                                  />
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td className="text-bold-500">Mikkey Mice</td>
                              <td>$15/hr</td>
                              <td className="text-bold-500">Animation</td>
                              <td>Remote</td>
                              <td>Austin,Texas</td>
                              <td>
                                <a href="#">
                                  <i
                                    className="badge-circle font-medium-1"
                                    data-feather="mail"
                                  />
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="card-body">
                        <p>
                          You can also invert the colors—with dark text on light
                          backgrounds—with{" "}
                          <code className="highlighter-rouge">
                            .table-light
                          </code>
                          .
                        </p>
                      </div>
                      {/* table with light */}
                      <div className="table-responsive">
                        <table className="table table-light mb-0">
                          <thead>
                            <tr>
                              <th>NAME</th>
                              <th>RATE</th>
                              <th>SKILL</th>
                              <th>TYPE</th>
                              <th>LOCATION</th>
                              <th>ACTION</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="text-bold-500">Michael Right</td>
                              <td>$15/hr</td>
                              <td className="text-bold-500">UI/UX</td>
                              <td>Remote</td>
                              <td>Austin,Taxes</td>
                              <td>
                                <a href="#">
                                  <i
                                    className="badge-circle badge-circle-white text-secondary font-medium-1"
                                    data-feather="mail"
                                  />
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td className="text-bold-500">Morgan Vanblum</td>
                              <td>$13/hr</td>
                              <td className="text-bold-500">
                                Graphic concepts
                              </td>
                              <td>Remote</td>
                              <td>Shangai,China</td>
                              <td>
                                <a href="#">
                                  <i
                                    className="badge-circle badge-circle-white text-secondary font-medium-1"
                                    data-feather="mail"
                                  />
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td className="text-bold-500">Tiffani Blogz</td>
                              <td>$15/hr</td>
                              <td className="text-bold-500">Animation</td>
                              <td>Remote</td>
                              <td>Austin,Texas</td>
                              <td>
                                <a href="#">
                                  <i
                                    className="badge-circle badge-circle-white text-secondary font-medium-1"
                                    data-feather="mail"
                                  />
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td className="text-bold-500">Ashley Boul</td>
                              <td>$15/hr</td>
                              <td className="text-bold-500">Animation</td>
                              <td>Remote</td>
                              <td>Austin,Texas</td>
                              <td>
                                <a href="#">
                                  <i
                                    className="badge-circle badge-circle-white text-secondary font-medium-1"
                                    data-feather="mail"
                                  />
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td className="text-bold-500">Mikkey Mice</td>
                              <td>$15/hr</td>
                              <td className="text-bold-500">Animation</td>
                              <td>Remote</td>
                              <td>Austin,Texas</td>
                              <td>
                                <a href="#">
                                  <i
                                    className="badge-circle badge-circle-white text-secondary font-medium-1"
                                    data-feather="mail"
                                  />
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Inverse table end */}
            {/* Table head options start */}
            <section className="section">
              <div className="row" id="table-head">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Table head options</h4>
                    </div>
                    <div className="card-content">
                      <div className="card-body">
                        <p>
                          Similar to tables and dark tables, use the modifier
                          classes{" "}
                          <code className="highlighter-rouge">
                            .thead-light
                          </code>{" "}
                          or{" "}
                          <code className="highlighter-rouge">.thead-dark</code>{" "}
                          to make{" "}
                          <code className="highlighter-rouge">
                            &lt;thead&gt;
                          </code>
                          s appear light or dark gray.
                        </p>
                      </div>
                      {/* table head dark */}
                      <div className="table-responsive">
                        <table className="table mb-0">
                          <thead className="thead-dark">
                            <tr>
                              <th>NAME</th>
                              <th>RATE</th>
                              <th>SKILL</th>
                              <th>TYPE</th>
                              <th>LOCATION</th>
                              <th>ACTION</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="text-bold-500">Michael Right</td>
                              <td>$15/hr</td>
                              <td className="text-bold-500">UI/UX</td>
                              <td>Remote</td>
                              <td>Austin,Taxes</td>
                              <td>
                                <a href="#">
                                  <i
                                    className="badge-circle badge-circle-light-secondary font-medium-1"
                                    data-feather="mail"
                                  />
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td className="text-bold-500">Morgan Vanblum</td>
                              <td>$13/hr</td>
                              <td className="text-bold-500">
                                Graphic concepts
                              </td>
                              <td>Remote</td>
                              <td>Shangai,China</td>
                              <td>
                                <a href="#">
                                  <i
                                    className="badge-circle badge-circle-light-secondary font-medium-1"
                                    data-feather="mail"
                                  />
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td className="text-bold-500">Tiffani Blogz</td>
                              <td>$15/hr</td>
                              <td className="text-bold-500">Animation</td>
                              <td>Remote</td>
                              <td>Austin,Texas</td>
                              <td>
                                <a href="#">
                                  <i
                                    className="badge-circle badge-circle-light-secondary font-medium-1"
                                    data-feather="mail"
                                  />
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td className="text-bold-500">Ashley Boul</td>
                              <td>$15/hr</td>
                              <td className="text-bold-500">Animation</td>
                              <td>Remote</td>
                              <td>Austin,Texas</td>
                              <td>
                                <a href="#">
                                  <i
                                    className="badge-circle badge-circle-light-secondary font-medium-1"
                                    data-feather="mail"
                                  />
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td className="text-bold-500">Mikkey Mice</td>
                              <td>$15/hr</td>
                              <td className="text-bold-500">Animation</td>
                              <td>Remote</td>
                              <td>Austin,Texas</td>
                              <td>
                                <a href="#">
                                  <i
                                    className="badge-circle badge-circle-light-secondary font-medium-1"
                                    data-feather="mail"
                                  />
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Table head options end */}
            {/* Striped rows start */}
            <section className="section">
              <div className="row" id="table-striped">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Striped rows</h4>
                    </div>
                    <div className="card-content">
                      <div className="card-body">
                        <p className="card-text">
                          Use{" "}
                          <code className="highlighter-rouge">
                            .table-striped
                          </code>
                          to add zebra-striping to any table row within the{" "}
                          <code className="highlighter-rouge">
                            &lt;tbody&gt;
                          </code>
                          . This styling doesn't work in IE8 and below as{" "}
                          <code>:nth-child</code> CSS selector isn't supported.
                        </p>
                      </div>
                      {/* table striped */}
                      <div className="table-responsive">
                        <table className="table table-striped mb-0">
                          <thead>
                            <tr>
                              <th>NAME</th>
                              <th>RATE</th>
                              <th>SKILL</th>
                              <th>TYPE</th>
                              <th>LOCATION</th>
                              <th>ACTION</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="text-bold-500">Michael Right</td>
                              <td>$15/hr</td>
                              <td className="text-bold-500">UI/UX</td>
                              <td>Remote</td>
                              <td>Austin,Taxes</td>
                              <td>
                                <a href="#">
                                  <i
                                    className="badge-circle badge-circle-light-secondary font-medium-1"
                                    data-feather="mail"
                                  />
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td className="text-bold-500">Morgan Vanblum</td>
                              <td>$13/hr</td>
                              <td className="text-bold-500">
                                Graphic concepts
                              </td>
                              <td>Remote</td>
                              <td>Shangai,China</td>
                              <td>
                                <a href="#">
                                  <i
                                    className="badge-circle badge-circle-light-secondary font-medium-1"
                                    data-feather="mail"
                                  />
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td className="text-bold-500">Tiffani Blogz</td>
                              <td>$15/hr</td>
                              <td className="text-bold-500">Animation</td>
                              <td>Remote</td>
                              <td>Austin,Texas</td>
                              <td>
                                <a href="#">
                                  <i
                                    className="badge-circle badge-circle-light-secondary font-medium-1"
                                    data-feather="mail"
                                  />
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td className="text-bold-500">Ashley Boul</td>
                              <td>$15/hr</td>
                              <td className="text-bold-500">Animation</td>
                              <td>Remote</td>
                              <td>Austin,Texas</td>
                              <td>
                                <a href="#">
                                  <i
                                    className="badge-circle badge-circle-light-secondary font-medium-1"
                                    data-feather="mail"
                                  />
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td className="text-bold-500">Mikkey Mice</td>
                              <td>$15/hr</td>
                              <td className="text-bold-500">Animation</td>
                              <td>Remote</td>
                              <td>Austin,Texas</td>
                              <td>
                                <a href="#">
                                  <i
                                    className="badge-circle badge-circle-light-secondary font-medium-1"
                                    data-feather="mail"
                                  />
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Striped rows end */}
            {/* Striped rows with inverse dark table start */}
            <section className="section">
              <div className="row" id="table-striped-dark">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Striped inverse dark</h4>
                    </div>
                    <div className="card-content">
                      <div className="card-body">
                        <p className="card-text">
                          Use <code>.table-dark</code> with
                          <code>.table-striped</code> to add zebra-striping to
                          any inverse table row within the{" "}
                          <code>&lt;tbody&gt;</code>. This styling doesn't work
                          in IE8 and below as
                          <code>:nth-child</code> CSS selector isn't supported.
                        </p>
                      </div>
                      {/* table strip dark */}
                      <div className="table-responsive">
                        <table className="table table-striped table-dark mb-0">
                          <thead>
                            <tr>
                              <th>NAME</th>
                              <th>RATE</th>
                              <th>SKILL</th>
                              <th>TYPE</th>
                              <th>LOCATION</th>
                              <th>ACTION</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="text-bold-500">Michael Right</td>
                              <td>$15/hr</td>
                              <td className="text-bold-500">UI/UX</td>
                              <td>Remote</td>
                              <td>Austin,Taxes</td>
                              <td>
                                <a href="#">
                                  <i
                                    className="badge-circle font-medium-1"
                                    data-feather="mail"
                                  />
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td className="text-bold-500">Morgan Vanblum</td>
                              <td>$13/hr</td>
                              <td className="text-bold-500">
                                Graphic concepts
                              </td>
                              <td>Remote</td>
                              <td>Shangai,China</td>
                              <td>
                                <a href="#">
                                  <i
                                    className="badge-circle font-medium-1"
                                    data-feather="mail"
                                  />
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td className="text-bold-500">Tiffani Blogz</td>
                              <td>$15/hr</td>
                              <td className="text-bold-500">Animation</td>
                              <td>Remote</td>
                              <td>Austin,Texas</td>
                              <td>
                                <a href="#">
                                  <i
                                    className="badge-circle font-medium-1"
                                    data-feather="mail"
                                  />
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td className="text-bold-500">Ashley Boul</td>
                              <td>$15/hr</td>
                              <td className="text-bold-500">Animation</td>
                              <td>Remote</td>
                              <td>Austin,Texas</td>
                              <td>
                                <a href="#">
                                  <i
                                    className="badge-circle font-medium-1"
                                    data-feather="mail"
                                  />
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td className="text-bold-500">Mikkey Mice</td>
                              <td>$15/hr</td>
                              <td className="text-bold-500">Animation</td>
                              <td>Remote</td>
                              <td>Austin,Texas</td>
                              <td>
                                <a href="#">
                                  <i
                                    className="badge-circle font-medium-1"
                                    data-feather="mail"
                                  />
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Striped rows with inverse dark table end */}
            {/* Bordered table start */}
            <section className="section">
              <div className="row" id="table-bordered">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Bordered table</h4>
                    </div>
                    <div className="card-content">
                      <div className="card-body">
                        <p className="card-text">
                          Add <code>.table-bordered</code> for borders on all
                          sides of the table and cells. For Inverse Dark Table,
                          add <code>.table-dark</code> along with
                          <code>.table-bordered</code>.
                        </p>
                      </div>
                      {/* table bordered */}
                      <div className="table-responsive">
                        <table className="table table-bordered mb-0">
                          <thead>
                            <tr>
                              <th>NAME</th>
                              <th>RATE</th>
                              <th>SKILL</th>
                              <th>TYPE</th>
                              <th>LOCATION</th>
                              <th>ACTION</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="text-bold-500">Michael Right</td>
                              <td>$15/hr</td>
                              <td className="text-bold-500">UI/UX</td>
                              <td>Remote</td>
                              <td>Austin,Taxes</td>
                              <td>
                                <a href="#">
                                  <i
                                    className="badge-circle badge-circle-light-secondary font-medium-1"
                                    data-feather="mail"
                                  />
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td className="text-bold-500">Morgan Vanblum</td>
                              <td>$13/hr</td>
                              <td className="text-bold-500">
                                Graphic concepts
                              </td>
                              <td>Remote</td>
                              <td>Shangai,China</td>
                              <td>
                                <a href="#">
                                  <i
                                    className="badge-circle badge-circle-light-secondary font-medium-1"
                                    data-feather="mail"
                                  />
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td className="text-bold-500">Tiffani Blogz</td>
                              <td>$15/hr</td>
                              <td className="text-bold-500">Animation</td>
                              <td>Remote</td>
                              <td>Austin,Texas</td>
                              <td>
                                <a href="#">
                                  <i
                                    className="badge-circle badge-circle-light-secondary font-medium-1"
                                    data-feather="mail"
                                  />
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td className="text-bold-500">Ashley Boul</td>
                              <td>$15/hr</td>
                              <td className="text-bold-500">Animation</td>
                              <td>Remote</td>
                              <td>Austin,Texas</td>
                              <td>
                                <a href="#">
                                  <i
                                    className="badge-circle badge-circle-light-secondary font-medium-1"
                                    data-feather="mail"
                                  />
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td className="text-bold-500">Mikkey Mice</td>
                              <td>$15/hr</td>
                              <td className="text-bold-500">Animation</td>
                              <td>Remote</td>
                              <td>Austin,Texas</td>
                              <td>
                                <a href="#">
                                  <i
                                    className="badge-circle badge-circle-light-secondary font-medium-1"
                                    data-feather="mail"
                                  />
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Bordered table end */}
            {/* Borderless table start */}
            <section className="section">
              <div className="row" id="table-borderless">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Borderless Table</h4>
                    </div>
                    <div className="card-content">
                      <div className="card-body">
                        <p className="card-text">
                          Add <code>.table-borderless</code> for a table without
                          borders. It can also be used on dark tables.
                        </p>
                      </div>
                      {/* table with no border */}
                      <div className="table-responsive">
                        <table className="table table-borderless mb-0">
                          <thead>
                            <tr>
                              <th>NAME</th>
                              <th>RATE</th>
                              <th>SKILL</th>
                              <th>TYPE</th>
                              <th>LOCATION</th>
                              <th>ACTION</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="text-bold-500">Michael Right</td>
                              <td>$15/hr</td>
                              <td className="text-bold-500">UI/UX</td>
                              <td>Remote</td>
                              <td>Austin,Taxes</td>
                              <td>
                                <a href="#">
                                  <i
                                    className="badge-circle badge-circle-light-secondary font-medium-1"
                                    data-feather="mail"
                                  />
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td className="text-bold-500">Morgan Vanblum</td>
                              <td>$13/hr</td>
                              <td className="text-bold-500">
                                Graphic concepts
                              </td>
                              <td>Remote</td>
                              <td>Shangai,China</td>
                              <td>
                                <a href="#">
                                  <i
                                    className="badge-circle badge-circle-light-secondary font-medium-1"
                                    data-feather="mail"
                                  />
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td className="text-bold-500">Tiffani Blogz</td>
                              <td>$15/hr</td>
                              <td className="text-bold-500">Animation</td>
                              <td>Remote</td>
                              <td>Austin,Texas</td>
                              <td>
                                <a href="#">
                                  <i
                                    className="badge-circle badge-circle-light-secondary font-medium-1"
                                    data-feather="mail"
                                  />
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td className="text-bold-500">Ashley Boul</td>
                              <td>$15/hr</td>
                              <td className="text-bold-500">Animation</td>
                              <td>Remote</td>
                              <td>Austin,Texas</td>
                              <td>
                                <a href="#">
                                  <i
                                    className="badge-circle badge-circle-light-secondary font-medium-1"
                                    data-feather="mail"
                                  />
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td className="text-bold-500">Mikkey Mice</td>
                              <td>$15/hr</td>
                              <td className="text-bold-500">Animation</td>
                              <td>Remote</td>
                              <td>Austin,Texas</td>
                              <td>
                                <a href="#">
                                  <i
                                    className="badge-circle badge-circle-light-secondary font-medium-1"
                                    data-feather="mail"
                                  />
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Borderless table end */}
            {/* Hoverable rows start */}
            <section className="section">
              <div className="row" id="table-hover-row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Hoverable rows</h4>
                    </div>
                    <div className="card-content">
                      <div className="card-body">
                        <p>
                          Add{" "}
                          <code className="highlighter-rouge">
                            .table-hover
                          </code>{" "}
                          to enable a hover state on table rows within a
                          <code className="highlighter-rouge">
                            &lt;tbody&gt;
                          </code>
                          .
                        </p>
                      </div>
                      {/* table hover */}
                      <div className="table-responsive">
                        <table className="table table-hover mb-0">
                          <thead>
                            <tr>
                              <th>NAME</th>
                              <th>RATE</th>
                              <th>SKILL</th>
                              <th>TYPE</th>
                              <th>LOCATION</th>
                              <th>ACTION</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="text-bold-500">Michael Right</td>
                              <td>$15/hr</td>
                              <td className="text-bold-500">UI/UX</td>
                              <td>Remote</td>
                              <td>Austin,Taxes</td>
                              <td>
                                <a href="#">
                                  <i
                                    className="badge-circle badge-circle-light-secondary font-medium-1"
                                    data-feather="mail"
                                  />
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td className="text-bold-500">Morgan Vanblum</td>
                              <td>$13/hr</td>
                              <td className="text-bold-500">
                                Graphic concepts
                              </td>
                              <td>Remote</td>
                              <td>Shangai,China</td>
                              <td>
                                <a href="#">
                                  <i
                                    className="badge-circle badge-circle-light-secondary font-medium-1"
                                    data-feather="mail"
                                  />
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td className="text-bold-500">Tiffani Blogz</td>
                              <td>$15/hr</td>
                              <td className="text-bold-500">Animation</td>
                              <td>Remote</td>
                              <td>Austin,Texas</td>
                              <td>
                                <a href="#">
                                  <i
                                    className="badge-circle badge-circle-light-secondary font-medium-1"
                                    data-feather="mail"
                                  />
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td className="text-bold-500">Ashley Boul</td>
                              <td>$15/hr</td>
                              <td className="text-bold-500">Animation</td>
                              <td>Remote</td>
                              <td>Austin,Texas</td>
                              <td>
                                <a href="#">
                                  <i
                                    className="badge-circle badge-circle-light-secondary font-medium-1"
                                    data-feather="mail"
                                  />
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td className="text-bold-500">Mikkey Mice</td>
                              <td>$15/hr</td>
                              <td className="text-bold-500">Animation</td>
                              <td>Remote</td>
                              <td>Austin,Texas</td>
                              <td>
                                <a href="#">
                                  <i
                                    className="badge-circle badge-circle-light-secondary font-medium-1"
                                    data-feather="mail"
                                  />
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Hoverable rows end */}
            {/* Contextual classes start */}
            <section className="section">
              <div className="row" id="table-contexual">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Contextual classes</h4>
                    </div>
                    <div className="card-content">
                      <div className="card-body">
                        <p>
                          Use contextual classes to color table rows or
                          individual cells. Read full documnetation
                          <a
                            href="https://getbootstrap.com/docs/4.3/content/tables/#contextual-classes"
                            target="_blank"
                          >
                            here.
                          </a>
                        </p>
                      </div>
                      {/* table contextual / colored */}
                      <div className="table-responsive">
                        <table className="table mb-0">
                          <thead>
                            <tr>
                              <th>NAME</th>
                              <th>RATE</th>
                              <th>SKILL</th>
                              <th>TYPE</th>
                              <th>LOCATION</th>
                              <th>ACTION</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="table-active">
                              <td className="text-bold-500">Michael Right</td>
                              <td>$15/hr</td>
                              <td className="text-bold-500">UI/UX</td>
                              <td>Remote</td>
                              <td>Austin,Taxes</td>
                              <td>
                                <a href="#">
                                  <i
                                    className="badge-circle badge-circle-light-secondary font-medium-1"
                                    data-feather="mail"
                                  />
                                </a>
                              </td>
                            </tr>
                            <tr className="table-primary">
                              <td className="text-bold-500">Morgan Vanblum</td>
                              <td>$13/hr</td>
                              <td className="text-bold-500">
                                Graphic concepts
                              </td>
                              <td>Remote</td>
                              <td>Shangai,China</td>
                              <td>
                                <a href="#">
                                  <i
                                    className="badge-circle badge-circle-light-secondary font-medium-1"
                                    data-feather="mail"
                                  />
                                </a>
                              </td>
                            </tr>
                            <tr className="table-secondary">
                              <td className="text-bold-500">Tiffani Blogz</td>
                              <td>$15/hr</td>
                              <td className="text-bold-500">Animation</td>
                              <td>Remote</td>
                              <td>Austin,Texas</td>
                              <td>
                                <a href="#">
                                  <i
                                    className="badge-circle badge-circle-light-secondary font-medium-1"
                                    data-feather="mail"
                                  />
                                </a>
                              </td>
                            </tr>
                            <tr className="table-success">
                              <td className="text-bold-500">Ashley Boul</td>
                              <td>$15/hr</td>
                              <td className="text-bold-500">Animation</td>
                              <td>Remote</td>
                              <td>Austin,Texas</td>
                              <td>
                                <a href="#">
                                  <i
                                    className="badge-circle badge-circle-light-secondary font-medium-1"
                                    data-feather="mail"
                                  />
                                </a>
                              </td>
                            </tr>
                            <tr className="table-danger">
                              <td className="text-bold-500">Mikkey Mice</td>
                              <td>$15/hr</td>
                              <td className="text-bold-500">Animation</td>
                              <td>Remote</td>
                              <td>Austin,Texas</td>
                              <td>
                                <a href="#">
                                  <i
                                    className="badge-circle badge-circle-light-secondary font-medium-1"
                                    data-feather="mail"
                                  />
                                </a>
                              </td>
                            </tr>
                            <tr className="table-warning">
                              <td className="text-bold-500">Mikkey Mice</td>
                              <td>$15/hr</td>
                              <td className="text-bold-500">Animation</td>
                              <td>Remote</td>
                              <td>Austin,Texas</td>
                              <td>
                                <a href="#">
                                  <i
                                    className="badge-circle badge-circle-light-secondary font-medium-1"
                                    data-feather="mail"
                                  />
                                </a>
                              </td>
                            </tr>
                            <tr className="table-info">
                              <td className="text-bold-500">Mikkey Mice</td>
                              <td>$15/hr</td>
                              <td className="text-bold-500">Animation</td>
                              <td>Remote</td>
                              <td>Austin,Texas</td>
                              <td>
                                <a href="#">
                                  <i
                                    className="badge-circle badge-circle-light-secondary font-medium-1"
                                    data-feather="mail"
                                  />
                                </a>
                              </td>
                            </tr>
                            <tr className="table-light">
                              <td className="text-bold-500">Mikkey Mice</td>
                              <td>$15/hr</td>
                              <td className="text-bold-500">Animation</td>
                              <td>Remote</td>
                              <td>Austin,Texas</td>
                              <td>
                                <a href="#">
                                  <i
                                    className="badge-circle badge-circle-light-secondary font-medium-1"
                                    data-feather="mail"
                                  />
                                </a>
                              </td>
                            </tr>
                            <tr className="table-dark">
                              <td className="text-bold-500">Mikkey Mice</td>
                              <td>$15/hr</td>
                              <td className="text-bold-500">Animation</td>
                              <td>Remote</td>
                              <td>Austin,Texas</td>
                              <td>
                                <a href="#">
                                  <i
                                    className="badge-circle badge-circle-light-secondary font-medium-1"
                                    data-feather="mail"
                                  />
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Contextual classes end */}
            {/* Responsive tables start */}
            <section className="section">
              <div className="row" id="table-responsive">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Always responsive</h4>
                    </div>
                    <div className="card-content">
                      <div className="card-body">
                        <p>
                          Responsive tables allow tables to be scrolled
                          horizontally with ease. Make any table responsive
                          across all viewports by adding{" "}
                          <code className="highlighter-rouge">
                            .table-responsive
                          </code>
                          class on
                          <code className="highlighter-rouge">.table</code>. Or,
                          pick a maximum breakpoint with which to have a
                          responsive table up to by adding{" "}
                          <code className="highlighter-rouge">
                            {" "}
                            .table-responsive{"{"}-sm|-md|-lg|-xl{"}"}
                          </code>
                          . Read full documnetation{" "}
                          <a
                            href="https://getbootstrap.com/docs/4.3/content/tables/#responsive-tables"
                            target="_blank"
                          >
                            here.
                          </a>
                        </p>
                        <div className="alert alert-primary">
                          <h4 className="alert-heading">
                            Vertical clipping/truncation
                          </h4>
                          <p>
                            Responsive tables make use of{" "}
                            <code className="highlighter-rouge">
                              overflow-y: hidden
                            </code>
                            , which clips off any content that goes beyond the
                            bottom or top edges of the table. In particular,
                            this can clip off dropdown menus and other
                            third-party widgets.
                          </p>
                        </div>
                      </div>
                      {/* table responsive */}
                      <div className="table-responsive">
                        <table className="table mb-0">
                          <thead>
                            <tr>
                              <th scope="col">#</th>
                              <th scope="col">Heading 1</th>
                              <th scope="col">Heading 2</th>
                              <th scope="col">Heading 3</th>
                              <th scope="col">Heading 4</th>
                              <th scope="col">Heading 5</th>
                              <th scope="col">Heading 6</th>
                              <th scope="col">Heading 7</th>
                              <th scope="col">Heading 8</th>
                              <th scope="col">Heading 9</th>
                              <th scope="col">Heading 10</th>
                              <th scope="col">Heading 11</th>
                              <th scope="col">Heading 12</th>
                              <th scope="col">Heading 13</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Michael Right</td>
                              <td>Table cell</td>
                              <td>Table cell</td>
                              <td>Table cell</td>
                              <td>Table cell</td>
                              <td>Table cell</td>
                              <td>Table cell</td>
                              <td>Table cell</td>
                              <td>Table cell</td>
                              <td>Table cell</td>
                              <td>Table cell</td>
                              <td>Table cell</td>
                              <td>Table cell</td>
                              <td>Table cell</td>
                            </tr>
                            <tr>
                              <td>Michael Right</td>
                              <td>Table cell</td>
                              <td>Table cell</td>
                              <td>Table cell</td>
                              <td>Table cell</td>
                              <td>Table cell</td>
                              <td>Table cell</td>
                              <td>Table cell</td>
                              <td>Table cell</td>
                              <td>Table cell</td>
                              <td>Table cell</td>
                              <td>Table cell</td>
                              <td>Table cell</td>
                              <td>Table cell</td>
                            </tr>
                            <tr>
                              <td>Michael Right</td>
                              <td>Table cell</td>
                              <td>Table cell</td>
                              <td>Table cell</td>
                              <td>Table cell</td>
                              <td>Table cell</td>
                              <td>Table cell</td>
                              <td>Table cell</td>
                              <td>Table cell</td>
                              <td>Table cell</td>
                              <td>Table cell</td>
                              <td>Table cell</td>
                              <td>Table cell</td>
                              <td>Table cell</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
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

export default Table;
