import React from "react";
import { Link } from "react-router-dom";
import BreadCrumbs from "../comman/BreadCrumbs";

function ProductDetails() {
  return (
    <div>
      <div>
        {/*Start breadcrumb area*/}
       <BreadCrumbs title1="Product Details" title2="shop Details" imageUrl="assets/images/breadcrumb/breadcrumb-1.png"></BreadCrumbs>
        {/*End breadcrumb area*/}
        {/*Start Shop Details Area*/}
        <section className="shop-details-area">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="shop-details-content">
                  <div className="row">
                    <div className="col-xl-5 col-lg-8">
                      <div className="single-product-image-holder">
                        <div className="single-product-image-holder">
                          <ul className="slider-content clearfix bxslider2">
                            <li>
                              <div className="single-product-slide clearfix">
                                <div className="big-image-box">
                                  <img
                                    src="assets/images/shop/shop-single-1.jpg"
                                    alt="Awesome Image"
                                  />
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="single-product-slide clearfix">
                                <div className="big-image-box">
                                  <img
                                    src="assets/images/shop/shop-single-2.jpg"
                                    alt="Awesome Image"
                                  />
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="single-product-slide clearfix">
                                <div className="big-image-box">
                                  <img
                                    src="assets/images/shop/shop-single-3.jpg"
                                    alt="Awesome Image"
                                  />
                                </div>
                              </div>
                            </li>
                          </ul>
                          <div className="slider-pager clearfix">
                            <ul className="thumb-box">
                              <li>
                                <a
                                  className="active"
                                  data-slide-index={0}
                                  href="#"
                                >
                                  <div className="img-holder">
                                    <img
                                      src="assets/images/shop/shop-single-thumb-1.jpg"
                                      alt="Awesome Image"
                                    />
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a data-slide-index={1} href="#">
                                  <div className="img-holder">
                                    <img
                                      src="assets/images/shop/shop-single-thumb-2.jpg"
                                      alt="Awesome Image"
                                    />
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a data-slide-index={2} href="#">
                                  <div className="img-holder">
                                    <img
                                      src="assets/images/shop/shop-single-thumb-3.jpg"
                                      alt="Awesome Image"
                                    />
                                  </div>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-7 col-lg-12">
                      <div className="single-product-info-box">
                        <div className="product-title">
                          <p>Wet Food</p>
                          <h2>Good Deeds Royal Pet Food</h2>
                        </div>
                        <div className="product-value">
                          <h3>
                            £245.00 <del>£399.99</del>
                          </h3>
                          <div className="review-box">
                            <ul>
                              <li>
                                <i className="fa fa-star" />
                              </li>
                              <li>
                                <i className="fa fa-star" />
                              </li>
                              <li>
                                <i className="fa fa-star" />
                              </li>
                              <li>
                                <i className="fa fa-star" />
                              </li>
                              <li>
                                <i className="fa fa-star-half" />
                              </li>
                            </ul>
                            <span>(25 Customer review)</span>
                          </div>
                        </div>
                        <div className="product-text">
                          <p>
                            Sweet as can be, the darling Lucy Love Sophia Rust
                            Red Embroidered Dress is here to brighten your day!
                            Slender straps support the apron neckline of this
                            gauzy, woven dress bedecked in floral embroidery.
                            Sheath silhouette ends at a mini hem. Sleek,
                            polished, and boasting an impeccably polished modern
                            fit, this blue, 2-button Lazio suit features a notch
                            lapel, flap pockets, and accompanying flat front
                            trousers—all in pure wool by Vitale Barberis
                            Canonico.
                          </p>
                          <div className="bottom">
                            <ul>
                              <li>
                                <span>Availability:</span> In stock{" "}
                              </li>
                              <li>
                                <span>Tags:</span> Fashion, Hood, Classic
                              </li>
                            </ul>
                            <ul>
                              <li>
                                <span>Product Code:</span> #4657
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="product-cart-box">
                          <div className="row">
                            <div className="col-xl-4 col-lg-4 col-md-4">
                              <div className="input-box">
                                <div className="title">
                                  <h4>Color</h4>
                                </div>
                                <select
                                  className="selectpicker"
                                  data-width="100%"
                                >
                                  <option selected="selected">
                                    Select Color
                                  </option>
                                  <option>Red</option>
                                  <option>Green</option>
                                  <option>Blue</option>
                                  <option>yellow</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-4">
                              <div className="input-box">
                                <div className="title">
                                  <h4>Size</h4>
                                </div>
                                <select
                                  className="selectpicker"
                                  data-width="100%"
                                >
                                  <option selected="selected">
                                    Select size
                                  </option>
                                  <option>XL</option>
                                  <option>L</option>
                                  <option>M</option>
                                  <option>LG</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-4">
                              <div className="input-box">
                                <div className="title">
                                  <h4>Qty</h4>
                                </div>
                                <div className="quantity-box">
                                  <input
                                    className="quantity-spinner"
                                    type="text"
                                    defaultValue={2}
                                    name="quantity"
                                  />
                                </div>
                                <div className="clear-selection">
                                  <a href="#">Clear Selection</a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-xl-12">
                              <div className="product-details-button-box">
                                <div className="addto-cart-button">
                                  <button
                                    className="btn-one addtocart"
                                    type="submit"
                                  >
                                    <span className="txt">
                                      <i className="icon-basket" />
                                      Add To Cart
                                    </span>
                                  </button>
                                </div>
                                <div className="wishlist-button">
                                  <button
                                    className="btn-one wishlist"
                                    type="submit"
                                  >
                                    <span className="txt">
                                      <i className="icon-basket" />
                                      Add To Wishlist
                                    </span>
                                  </button>
                                </div>
                                <div className="compare-button">
                                  <button
                                    className="btn-one compare"
                                    type="submit"
                                  >
                                    <span className="txt">
                                      <i className="icon-basket" />
                                      Compare
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="share-products-socials">
                          <h5>Share This:</h5>
                          <ul>
                            <li>
                              <a href="#">
                                <i
                                  className="fa fa-facebook fb"
                                  aria-hidden="true"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i
                                  className="fa fa-twitter tw"
                                  aria-hidden="true"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i
                                  className="fa fa-pinterest pin"
                                  aria-hidden="true"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i
                                  className="fa fa-linkedin lin"
                                  aria-hidden="true"
                                />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*End Shop Details Area*/}
        {/*Start Products Details Tab Area*/}
        <section className="products-details-tab-area">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="product-tab-box tabs-box">
                  <ul className="tab-btns tab-buttons clearfix">
                    <li data-tab="#desc" className="tab-btn active-btn">
                      <span>description</span>
                    </li>
                    <li data-tab="#comme" className="tab-btn">
                      <span>COMMENTS</span>
                    </li>
                    <li data-tab="#review" className="tab-btn">
                      <span>review</span>
                    </li>
                  </ul>
                  <div className="tabs-content">
                    <div
                      className="tab active-tab"
                      id="desc"
                      style={{ display: "block" }}
                    >
                      <div className="product-descriptions-content">
                        <div className="text">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum. Sed ut
                            perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium, totam
                            rem aperiam, eaque ipsa quae ab illo inventore
                            veritatis et quasi architecto beatae vitae dicta
                            sunt explicabo. Nemo enim ipsam voluptatem quia
                            voluptas sit aspernatur aut odit aut fugit, sed quia
                            consequuntur magni dolores eos qui ratione
                            voluptatem sequi nesciunt. Neque porro quisquam est,
                            qui dolorem ipsum quia dolor sit amet, consectetur,
                            adipisci velit, sed quia non numquam eius modi
                            tempora incidunt ut labore et dolore magnam aliquam
                            quaerat voluptatem.Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim
                            ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt
                            in culpa qui officia deserunt mollit anim id est
                            laborum. Sed ut perspiciatis unde omnis iste natus
                            error sit voluptatem accusantium doloremque
                            laudantium, totam rem aperiam, eaque ipsa quae ab
                            illo inventore veritatis et quasi architecto.
                          </p>
                        </div>
                        <div className="table-outer">
                          <img src="assets/images/shop/tab-table.jpg" alt />
                        </div>
                        <div className="bottom-text">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum. Sed ut
                            perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium, totam
                            rem aperiam, eaque ipsa quae ab illo inventore
                            veritatis et quasi architecto beatae vitae dicta
                            sunt explicabo. Nemo enim ipsam voluptatem quia
                            voluptas sit aspernatur aut odit aut fugit, sed quia
                            consequuntur magni dolores eos qui ratione
                            voluptatem sequi nesciunt. Neque porro quisquam est,
                            qui dolorem ipsum quia dolor sit amet, consectetur,
                            adipisci velit, sed quia non numquam eius modi
                            tempora incidunt ut labore.
                          </p>
                          <p>
                            Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non
                            proident, sunt in culpa qui officia deserunt mollit
                            anim id est laborum. Sed ut perspiciatis unde omnis
                            iste natus error sit voluptatem accusantium
                            doloremque laudantium, totam rem aperiam, eaque ipsa
                            quae ab illo inventore veritatis et quasi architecto
                            beatae vitae dicta sunt explicabo. Nemo enim ipsam
                            voluptatem quia voluptas sit aspernatur aut odit aut
                            fugit, sed quia consequuntur.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="tab" id="comme">
                      <div className="review-form">
                        <div className="shop-page-title">
                          <div className="title">Add Your Comments</div>
                          <p>
                            Your email address will not be published. Required
                            fields are marked <b>*</b>
                          </p>
                        </div>
                        <form id="review-form" action="#">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="input-box">
                                <p>
                                  Name<span>*</span>
                                </p>
                                <input
                                  type="text"
                                  name="fname"
                                  placeholder
                                  required
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="input-box">
                                <p>
                                  Email<span>*</span>
                                </p>
                                <input
                                  type="email"
                                  name="email"
                                  placeholder
                                  required
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-12">
                              <div className="add-rating-box">
                                <div className="add-rating-title">
                                  <p>Your Rating</p>
                                </div>
                                <div className="review-box">
                                  <ul>
                                    <li>
                                      <i className="fa fa-star" />
                                    </li>
                                    <li>
                                      <i className="fa fa-star" />
                                    </li>
                                    <li>
                                      <i className="fa fa-star" />
                                    </li>
                                    <li>
                                      <i className="fa fa-star" />
                                    </li>
                                    <li>
                                      <i className="fa fa-star" />
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-12">
                              <div className="input-box">
                                <p>
                                  Your Review<span>*</span>
                                </p>
                                <textarea
                                  name="review"
                                  placeholder
                                  required
                                  defaultValue={""}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-12">
                              <button className="btn-one" type="submit">
                                <span className="txt">
                                  Submit
                                  <i className="flaticon-next" />
                                </span>
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="tab" id="review">
                      <div className="review-box-holder">
                        <div className="row">
                          <div className="col-xl-12">
                            {/*Start single review outer box*/}
                            <div className="single-review-outer-box">
                              <div className="single-review-box">
                                <div className="image-holder">
                                  <img
                                    src="assets/images/shop/review-1.png"
                                    alt="Awesome Image"
                                  />
                                </div>
                                <div className="text-holder">
                                  <div className="top">
                                    <div className="name">
                                      <h3>
                                        Steven Rich{" "}
                                        <span> – April 10, 2019:</span>
                                      </h3>
                                    </div>
                                    <div className="review-box">
                                      <ul>
                                        <li>
                                          <i className="fa fa-star" />
                                        </li>
                                        <li>
                                          <i className="fa fa-star" />
                                        </li>
                                        <li>
                                          <i className="fa fa-star" />
                                        </li>
                                        <li>
                                          <i className="fa fa-star" />
                                        </li>
                                        <li>
                                          <i className="fa fa-star" />
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="text">
                                    <p>
                                      Value for money , I use it from long time
                                      and it is very useful and good product.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/*End single review outer box*/}
                            {/*Start single review outer box*/}
                            <div className="single-review-outer-box">
                              <div className="single-review-box">
                                <div className="image-holder">
                                  <img
                                    src="assets/images/shop/review-2.png"
                                    alt="Awesome Image"
                                  />
                                </div>
                                <div className="text-holder">
                                  <div className="top">
                                    <div className="name">
                                      <h3>
                                        William Cobus{" "}
                                        <span>– April 09, 2019:</span>
                                      </h3>
                                    </div>
                                    <div className="review-box">
                                      <ul>
                                        <li>
                                          <i className="fa fa-star" />
                                        </li>
                                        <li>
                                          <i className="fa fa-star" />
                                        </li>
                                        <li>
                                          <i className="fa fa-star" />
                                        </li>
                                        <li>
                                          <i className="fa fa-star" />
                                        </li>
                                        <li>
                                          <i className="fa fa-star" />
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="text">
                                    <p>
                                      We denounce with righteous indignation and
                                      dislike men who are so beguiled &amp;
                                      demoralized.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/*End single review outer box*/}
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
        {/*End Products Details Tab Area*/}
      </div>
    </div>
  );
}

export default ProductDetails;
