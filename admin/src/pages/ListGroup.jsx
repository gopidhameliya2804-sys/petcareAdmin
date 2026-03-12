import React from "react";
import Sidebar from "../common/Sidebar";

function ListGroup() {
  return (
    <div>
      <div id="app">
       <Sidebar />
        <div id="main">
          <div className="page-heading">
            <div className="page-title">
              <div className="row">
                <div className="col-12 col-md-6 order-md-1 order-last">
                  <h3>List Group</h3>
                  <p className="text-subtitle text-muted">
                    List groups are a flexible and powerful component for
                    displaying a series of content
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
                        List Group
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
            {/* list groups simple & disabled start */}
            <section id="basic-list-group">
              <div className="row match-height">
                <div className="col-lg-6 col-md-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Simple List Group</h4>
                    </div>
                    <div className="card-content">
                      <div className="card-body">
                        <p>
                          The most basic list group is simply an unordered list
                          with list items, and the proper classes. Build upon it
                          with the options that follow, or your own CSS as
                          needed.
                        </p>
                        <ul className="list-group">
                          <li className="list-group-item active">
                            Cras justo odio
                          </li>
                          <li className="list-group-item">
                            Dapibus ac facilisis in
                          </li>
                          <li className="list-group-item">Morbi leo risus</li>
                          <li className="list-group-item">
                            Porta ac consectetur ac
                          </li>
                          <li className="list-group-item">
                            chocolate cheesecake candy
                          </li>
                          <li className="list-group-item">
                            Oat cake icing pastry pie carrot
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Disabled items</h4>
                    </div>
                    <div className="card-content">
                      <div className="card-body">
                        <p>
                          Add <code>.disabled</code> to a{" "}
                          <code>.list-group-item</code> to gray it out to appear
                          disabled.
                        </p>
                        <div className="list-group">
                          <span className="list-group-item">
                            Cras justo odio
                          </span>
                          <span className="list-group-item">
                            Dapibus ac facilisis in
                          </span>
                          <span className="list-group-item disabled">
                            Morbi leo risus
                          </span>
                          <span className="list-group-item">
                            Porta ac consectetur ac
                          </span>
                          <span className="list-group-item">
                            Vestibulum at eros
                          </span>
                          <span className="list-group-item">
                            Biscuit jelly beans macaroon danish pudding
                          </span>
                          <span className="list-group-item">
                            Oat cake icing pastry pie carrot
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* list groups simple & disabled end */}
            {/* list group button & badge start*/}
            <section className="list-group-button-badge">
              <div className="row match-height">
                <div className="col-lg-6 col-md-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Button list Group</h4>
                    </div>
                    <div className="card-content">
                      <div className="card-body">
                        <div className="list-group">
                          <button
                            type="button"
                            className="list-group-item list-group-item-action active"
                          >
                            Cras justo odio
                          </button>
                          <button
                            type="button"
                            className="list-group-item list-group-item-action"
                          >
                            Dapibus ac facilisis in
                          </button>
                          <button
                            type="button"
                            className="list-group-item list-group-item-action"
                          >
                            Morbi leo risus
                          </button>
                          <button
                            type="button"
                            className="list-group-item list-group-item-action"
                          >
                            Porta ac consectetur ac
                          </button>
                          <button
                            type="button"
                            className="list-group-item list-group-item-action"
                          >
                            Vestibulum at eros
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Badges</h4>
                    </div>
                    <div className="card-content">
                      <div className="card-body">
                        <p>
                          Use Utility classes <code>.d-flex</code>
                          <code>.justify-content-between</code>
                          <code>align-items-center</code> to create space
                          between badge and your content
                        </p>
                        <ul className="list-group">
                          <li className="list-group-item d-flex justify-content-between align-items-center">
                            <span>
                              {" "}
                              Biscuit jelly beans macaroon danish pudding.
                            </span>
                            <span className="badge bg-warning badge-pill badge-round ml-1">
                              8
                            </span>
                          </li>
                          <li className="list-group-item d-flex justify-content-between align-items-center">
                            <span> chocolate cheesecake candy</span>
                            <span className="badge bg-info badge-pill badge-round ml-1">
                              7
                            </span>
                          </li>
                          <li className="list-group-item d-flex justify-content-between align-items-center">
                            <span> Oat cake icing pastry pie carrot</span>
                            <span className="badge bg-danger badge-pill badge-round ml-1">
                              6
                            </span>
                          </li>
                          <li className="list-group-item d-flex justify-content-between align-items-center">
                            <span>
                              space between badgeOat cake icing pastry pie
                              carrot
                            </span>
                            <span className="badge bg-secondary badge-pill badge-round ml-1">
                              5
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* list group button & badge ends */}
            {/* list group Checkboxes and radios start */}
            <section id="list-group-icons">
              <div className="row match-height">
                <div className="col-lg-6 col-md-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Checkboxes and radios</h4>
                    </div>
                    <div className="card-content">
                      <div className="card-body">
                        <p>
                          Place checkboxes and radios within list group items
                          and customize as needed
                        </p>
                        <ul className="list-group">
                          <li className="list-group-item">
                            <input
                              className="form-check-input me-1"
                              type="checkbox"
                              defaultValue
                              aria-label="..."
                            />
                            Cras justo odio
                          </li>
                          <li className="list-group-item">
                            <input
                              className="form-check-input me-1"
                              type="checkbox"
                              defaultValue
                              aria-label="..."
                            />
                            Dapibus ac facilisis in
                          </li>
                          <li className="list-group-item">
                            <input
                              className="form-check-input me-1"
                              type="checkbox"
                              defaultValue
                              aria-label="..."
                            />
                            Morbi leo risus
                          </li>
                          <li className="list-group-item">
                            <input
                              className="form-check-input me-1"
                              type="checkbox"
                              defaultValue
                              aria-label="..."
                            />
                            Porta ac consectetur ac
                          </li>
                          <li className="list-group-item">
                            <input
                              className="form-check-input me-1"
                              type="checkbox"
                              defaultValue
                              aria-label="..."
                            />
                            Vestibulum at eros
                          </li>
                          <li className="list-group-item">
                            <input
                              className="form-check-input me-1"
                              type="checkbox"
                              defaultValue
                              aria-label="..."
                            />
                            Vestibulum at eros
                          </li>
                          <li className="list-group-item">
                            <input
                              className="form-check-input me-1"
                              type="checkbox"
                              defaultValue
                              aria-label="..."
                            />
                            Vestibulum at eros
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Custom content</h4>
                    </div>
                    <div className="card-content">
                      <div className="card-body">
                        <p>
                          Add nearly any HTML within, even for linked list
                          groups like the one below.
                        </p>
                        <div className="list-group">
                          <a
                            href="#"
                            className="list-group-item list-group-item-action active"
                          >
                            <div className="d-flex w-100 justify-content-between">
                              <h5 className="mb-1 text-white">
                                List group item heading
                              </h5>
                              <small>3 days ago</small>
                            </div>
                            <p className="mb-1">
                              Donec id elit non mi porta gravida at eget metus.
                              Maecenas sed diam eget risus varius blandit.
                            </p>
                            <small>Donec id elit non mi porta.</small>
                          </a>
                          <a
                            href="#"
                            className="list-group-item list-group-item-action"
                          >
                            <div className="d-flex w-100 justify-content-between">
                              <h5 className="mb-1">List group item heading</h5>
                              <small>3 days ago</small>
                            </div>
                            <p className="mb-1">
                              Donec id elit non mi porta gravida at eget metus.
                              Maecenas sed diam eget risus varius blandit.
                            </p>
                            <small>Donec id elit non mi porta.</small>
                          </a>
                          <a
                            href="#"
                            className="list-group-item list-group-item-action"
                          >
                            <div className="d-flex w-100 justify-content-between">
                              <h5 className="mb-1">List group item heading</h5>
                              <small>3 days ago</small>
                            </div>
                            <p className="mb-1">
                              Donec id elit non mi porta gravida at eget metus.
                              Maecenas sed diam eget risus varius blandit.
                            </p>
                            <small>Donec id elit non mi porta.</small>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* list group Checkboxes and radios end */}
            {/* list group with contextual & horizontal start */}
            <section id="list-group-contextual">
              <div className="row match-height">
                <div className="col-lg-6 col-md-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Contextual classes</h4>
                    </div>
                    <div className="card-content">
                      <div className="card-body">
                        <p>
                          Use contextual classes to style list items, default or
                          linked. Also includes .active state.
                        </p>
                        <ul className="list-group">
                          <li className="list-group-item list-group-item-primary">
                            Cras justo odio
                          </li>
                          <li className="list-group-item list-group-item-success">
                            Dapibus ac facilisis in
                          </li>
                          <li className="list-group-item list-group-item-danger">
                            Morbi leo risus
                          </li>
                          <li className="list-group-item list-group-item-warning">
                            Porta ac consectetur ac
                          </li>
                          <li className="list-group-item list-group-item-info">
                            Vestibulum at eros
                          </li>
                          <li className="list-group-item list-group-item-light">
                            chocolate cheesecake candy
                          </li>
                          <li className="list-group-item list-group-item-dark">
                            Oat cake icing pastry pie carrot
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Horizontal</h4>
                    </div>
                    <div className="card-content">
                      <div className="card-body">
                        <p>
                          Add <code>.list-group-horizontal</code> to change the
                          layout of list group items from vertical to horizontal
                          across all breakpoints.choose a responsive variantcode{" "}
                          <code>
                            .list-group-horizontal-{"{"}sm|md|lg|xl{"}"}
                          </code>{" "}
                          to make a list group horizontal starting at that
                          breakpoint’s min-width.
                        </p>
                        <div
                          className="list-group list-group-horizontal-sm mb-1 text-center"
                          role="tablist"
                        >
                          <a
                            className="list-group-item list-group-item-action active"
                            id="list-sunday-list"
                            data-bs-toggle="list"
                            href="#list-sunday"
                            role="tab"
                          >
                            Option 1
                          </a>
                          <a
                            className="list-group-item list-group-item-action"
                            id="list-monday-list"
                            data-bs-toggle="list"
                            href="#list-monday"
                            role="tab"
                          >
                            Option 2
                          </a>
                          <a
                            className="list-group-item list-group-item-action"
                            id="list-tuesday-list"
                            data-bs-toggle="list"
                            href="#list-tuesday"
                            role="tab"
                          >
                            Option 3
                          </a>
                        </div>
                        <div className="tab-content text-justify">
                          <div
                            className="tab-pane fade show active"
                            id="list-sunday"
                            role="tabpanel"
                            aria-labelledby="list-sunday-list"
                          >
                            Irure enim occaecat labore sit qui aliquip
                            reprehenderit amet velit. Deserunt ullamco ex elit
                            nostrud ut dolore nisi officia magna sit occaecat
                            laboris sunt dolor. Nisi eu minim cillum occaecat
                            aute est cupidatat aliqua labore aute occaecat ea
                            aliquip sunt amet. Aute mollit dolor ut exercitation
                            irure commodo non amet consectetur quis amet culpa.
                            Quis ullamco nisi amet qui aute irure eu. Magna
                            labore dolor quis ex labore id nostrud deserunt
                            dolor eiusmod eu pariatur culpa mollit in irure
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Iusto quis porro doloribus est natus
                            doloremque, eos laudantium exercitationem impedit
                            sapiente tenetur soluta reiciendis deserunt!
                          </div>
                          <div
                            className="tab-pane fade"
                            id="list-monday"
                            role="tabpanel"
                            aria-labelledby="list-monday-list"
                          >
                            Cupidatat quis ad sint excepteur laborum in esse
                            qui. Et excepteur consectetur ex nisi eu do cillum
                            ad laborum. Mollit et eu officia dolore sunt Lorem
                            culpa qui commodo velit ex amet id ex. Officia anim
                            incididunt laboris deserunt anim aute dolor
                            incididunt veniam aute dolore do exercitation. Dolor
                            nisi culpa ex ad irure in elit eu dolore. Ad laboris
                            ipsum reprehenderit irure non commodo enim culpa
                            commodo veniam incididunt veniam ad. Lorem ipsum
                            dolor sit amet consectetur, adipisicing elit.
                            Exercitationem, porro! Amet soluta tempora eveniet
                            blanditiis alias eos, dolor qui consectetur!
                          </div>
                          <div
                            className="tab-pane fade"
                            id="list-tuesday"
                            role="tabpanel"
                            aria-labelledby="list-tuesday-list"
                          >
                            Ut ut do pariatur aliquip aliqua aliquip
                            exercitation do nostrud commodo reprehenderit aute
                            ipsum voluptate. Irure Lorem et laboris nostrud amet
                            cupidatat cupidatat anim do ut velit mollit
                            consequat enim tempor. Consectetur est minim nostrud
                            nostrud consectetur irure labore voluptate irure.
                            Ipsum id Lorem sit sint voluptate est pariatur eu ad
                            cupidatat et deserunt culpa sit eiusmod deserunt.
                            Consectetur et fugiat anim do eiusmod aliquip nulla
                            laborum elit adipisicing pariatur cillum. Lorem
                            ipsum dolor sit amet consectetur adipisicing elit.
                            Molestias, inventore!
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* list group with contextual & horizontal ends */}
            {/* List group navigation start */}
            <section className="list-group-navigation">
              <div className="row">
                <div className="col-lg-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">List group navigation</h4>
                    </div>
                    <div className="card-content">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-12 col-sm-12 col-md-4">
                            <div className="list-group" role="tablist">
                              <a
                                className="list-group-item list-group-item-action active"
                                id="list-home-list"
                                data-bs-toggle="list"
                                href="#list-home"
                                role="tab"
                              >
                                Home
                              </a>
                              <a
                                className="list-group-item list-group-item-action"
                                id="list-profile-list"
                                data-bs-toggle="list"
                                href="#list-profile"
                                role="tab"
                              >
                                Profile
                              </a>
                              <a
                                className="list-group-item list-group-item-action"
                                id="list-messages-list"
                                data-bs-toggle="list"
                                href="#list-messages"
                                role="tab"
                              >
                                Messages
                              </a>
                              <a
                                className="list-group-item list-group-item-action"
                                id="list-settings-list"
                                data-bs-toggle="list"
                                href="#list-settings"
                                role="tab"
                              >
                                Settings
                              </a>
                            </div>
                          </div>
                          <div className="col-12 col-sm-12 col-md-8 mt-1">
                            <div
                              className="tab-content text-justify"
                              id="nav-tabContent"
                            >
                              <div
                                className="tab-pane show active"
                                id="list-home"
                                role="tabpanel"
                                aria-labelledby="list-home-list"
                              >
                                Velit aute mollit ipsum ad dolor consectetur
                                nulla officia culpa adipisicing exercitation
                                fugiat tempor. Voluptate deserunt sit sunt nisi
                                aliqua fugiat proident ea ut. Mollit voluptate
                                reprehenderit occaecat nisi ad non minim tempor
                                sunt voluptate consectetur exercitation id ut
                                nulla. Ea et fugiat aliquip nostrud sunt
                                incididunt consectetur culpa aliquip eiusmod
                                dolor. Anim ad Lorem aliqua in cupidatat nisi
                                enim eu nostrud do aliquip veniam minim. Lorem
                                ipsum dolor sit amet consectetur, adipisicing
                                elit. Aliquam itaque nisi obcaecati doloremque
                                et est ex possimus quidem dolorem soluta.
                              </div>
                              <div
                                className="tab-pane"
                                id="list-profile"
                                role="tabpanel"
                                aria-labelledby="list-profile-list"
                              >
                                Cupidatat quis ad sint excepteur laborum in esse
                                qui. Et excepteur consectetur ex nisi eu do
                                cillum ad laborum. Mollit et eu officia dolore
                                sunt Lorem culpa qui commodo velit ex amet id
                                ex. Officia anim incididunt laboris deserunt
                                anim aute dolor incididunt veniam aute dolore do
                                exercitation. Dolor nisi culpa ex ad irure in
                                elit eu dolore. Ad laboris ipsum reprehenderit
                                irure non commodo enim culpa commodo veniam
                                incididunt veniam ad.
                              </div>
                              <div
                                className="tab-pane"
                                id="list-messages"
                                role="tabpanel"
                                aria-labelledby="list-messages-list"
                              >
                                Ut ut do pariatur aliquip aliqua aliquip
                                exercitation do nostrud commodo reprehenderit
                                aute ipsum voluptate. Irure Lorem et laboris
                                nostrud amet cupidatat cupidatat anim do ut
                                velit mollit consequat enim tempor. Consectetur
                                est minim nostrud nostrud consectetur irure
                                labore voluptate irure. Ipsum id Lorem sit sint
                                voluptate est pariatur eu ad cupidatat et
                                deserunt culpa sit eiusmod deserunt. Consectetur
                                et fugiat anim do eiusmod aliquip nulla laborum
                                elit adipisicing pariatur cillum.
                              </div>
                              <div
                                className="tab-pane"
                                id="list-settings"
                                role="tabpanel"
                                aria-labelledby="list-settings-list"
                              >
                                Irure enim occaecat labore sit qui aliquip
                                reprehenderit amet velit. Deserunt ullamco ex
                                elit nostrud ut dolore nisi officia magna sit
                                occaecat laboris sunt dolor. Nisi eu minim
                                cillum occaecat aute est cupidatat aliqua labore
                                aute occaecat ea aliquip sunt amet. Aute mollit
                                dolor ut exercitation irure commodo non amet
                                consectetur quis amet culpa. Quis ullamco nisi
                                amet qui aute irure eu. Magna labore dolor quis
                                ex labore id nostrud deserunt dolor eiusmod eu
                                pariatur culpa mollit in irure
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* List group navigation ends */}
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

export default ListGroup;
