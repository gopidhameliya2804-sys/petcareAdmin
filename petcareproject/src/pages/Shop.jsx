import React from "react";
import { Link } from "react-router-dom";
import BreadCrumbs from "../comman/BreadCrumbs";

function Shop() {
  return (
    <div>
      <div>
        {/*Start breadcrumb area*/}
       <BreadCrumbs title1="Our Shop" title2="Shop" imageUrl="assets/images/breadcrumb/breadcrumb-1.png"></BreadCrumbs>
        {/*End breadcrumb area*/}
        {/*Start Shop Area*/}
        <section className="shop-area">
          <div className="container">
            <div className="row">
              <div className="col-xl-9 col-lg-8">
                <div className="shop-content">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="showing-result-shorting">
                        <div className="showing">
                          <p>Showing 1-9 of 35 results</p>
                        </div>
                        <div className="shorting">
                          <select className="selectpicker" data-width="100%">
                            <option selected="selected">Default Sorting</option>
                            <option>Default Sorting</option>
                            <option>Default Sorting</option>
                            <option>Default Sorting</option>
                            <option>Default Sorting</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    {/*Start single product item*/}
                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                      <div className="single-product-item">
                        <div className="img-holder">
                          <img
                            src="assets/images/shop/shop-1.jpg"
                            alt="Awesome Product Image"
                          />
                          <div className="overlay-content">
                            <a className="btn-one" href="#">
                              <span className="txt">
                                Add To Cart
                                <span className="icon-basket" />
                              </span>
                            </a>
                          </div>
                        </div>
                        <div className="title-holder">
                          <h4>
                            <a href="shop-single.html">
                              Lucy Love Sophia Rust Chair
                            </a>
                          </h4>
                          <div className="price-box">
                            <span>£85.00</span> <del>£270.00</del>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*End single product item*/}
                    {/*Start single product item*/}
                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                      <div className="single-product-item">
                        <div className="img-holder">
                          <img
                            src="assets/images/shop/shop-2.jpg"
                            alt="Awesome Product Image"
                          />
                          <div className="overlay-content">
                            <a className="btn-one" href="#">
                              <span className="txt">
                                Add To Cart
                                <span className="icon-basket" />
                              </span>
                            </a>
                          </div>
                        </div>
                        <div className="title-holder">
                          <h4>
                            <a href="shop-single.html">
                              Lucy Love Sophia Rust Chair
                            </a>
                          </h4>
                          <div className="price-box">
                            <span>£85.00</span> <del>£270.00</del>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*End single product item*/}
                    {/*Start single product item*/}
                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                      <div className="single-product-item">
                        <div className="img-holder">
                          <img
                            src="assets/images/shop/shop-3.jpg"
                            alt="Awesome Product Image"
                          />
                          <div className="overlay-content">
                            <a className="btn-one" href="#">
                              <span className="txt">
                                Add To Cart
                                <span className="icon-basket" />
                              </span>
                            </a>
                          </div>
                        </div>
                        <div className="title-holder">
                          <h4>
                            <a href="shop-single.html">
                              Lucy Love Sophia Rust Chair
                            </a>
                          </h4>
                          <div className="price-box">
                            <span>£85.00</span> <del>£270.00</del>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*End single product item*/}
                    {/*Start single product item*/}
                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                      <div className="single-product-item">
                        <div className="img-holder">
                          <img
                            src="assets/images/shop/shop-4.jpg"
                            alt="Awesome Product Image"
                          />
                          <div className="overlay-content">
                            <a className="btn-one" href="#">
                              <span className="txt">
                                Add To Cart
                                <span className="icon-basket" />
                              </span>
                            </a>
                          </div>
                        </div>
                        <div className="title-holder">
                          <h4>
                            <a href="shop-single.html">
                              Lucy Love Sophia Rust Chair
                            </a>
                          </h4>
                          <div className="price-box">
                            <span>£85.00</span> <del>£270.00</del>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*End single product item*/}
                    {/*Start single product item*/}
                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                      <div className="single-product-item">
                        <div className="img-holder">
                          <img
                            src="assets/images/shop/shop-5.jpg"
                            alt="Awesome Product Image"
                          />
                          <div className="overlay-content">
                            <a className="btn-one" href="#">
                              <span className="txt">
                                Add To Cart
                                <span className="icon-basket" />
                              </span>
                            </a>
                          </div>
                        </div>
                        <div className="title-holder">
                          <h4>
                            <a href="shop-single.html">
                              Lucy Love Sophia Rust Chair
                            </a>
                          </h4>
                          <div className="price-box">
                            <span>£85.00</span> <del>£270.00</del>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*End single product item*/}
                    {/*Start single product item*/}
                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                      <div className="single-product-item">
                        <div className="img-holder">
                          <img
                            src="assets/images/shop/shop-6.jpg"
                            alt="Awesome Product Image"
                          />
                          <div className="overlay-content">
                            <a className="btn-one" href="#">
                              <span className="txt">
                                Add To Cart
                                <span className="icon-basket" />
                              </span>
                            </a>
                          </div>
                        </div>
                        <div className="title-holder">
                          <h4>
                            <a href="shop-single.html">
                              Lucy Love Sophia Rust Chair
                            </a>
                          </h4>
                          <div className="price-box">
                            <span>£85.00</span> <del>£270.00</del>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*End single product item*/}
                    {/*Start single product item*/}
                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                      <div className="single-product-item">
                        <div className="img-holder">
                          <img
                            src="assets/images/shop/shop-7.jpg"
                            alt="Awesome Product Image"
                          />
                          <div className="overlay-content">
                            <a className="btn-one" href="#">
                              <span className="txt">
                                Add To Cart
                                <span className="icon-basket" />
                              </span>
                            </a>
                          </div>
                        </div>
                        <div className="title-holder">
                          <h4>
                            <a href="shop-single.html">
                              Lucy Love Sophia Rust Chair
                            </a>
                          </h4>
                          <div className="price-box">
                            <span>£85.00</span> <del>£270.00</del>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*End single product item*/}
                    {/*Start single product item*/}
                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                      <div className="single-product-item">
                        <div className="img-holder">
                          <img
                            src="assets/images/shop/shop-8.jpg"
                            alt="Awesome Product Image"
                          />
                          <div className="overlay-content">
                            <a className="btn-one" href="#">
                              <span className="txt">
                                Add To Cart
                                <span className="icon-basket" />
                              </span>
                            </a>
                          </div>
                        </div>
                        <div className="title-holder">
                          <h4>
                            <a href="shop-single.html">
                              Lucy Love Sophia Rust Chair
                            </a>
                          </h4>
                          <div className="price-box">
                            <span>£85.00</span> <del>£270.00</del>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*End single product item*/}
                    {/*Start single product item*/}
                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                      <div className="single-product-item">
                        <div className="img-holder">
                          <img
                            src="assets/images/shop/shop-9.jpg"
                            alt="Awesome Product Image"
                          />
                          <div className="overlay-content">
                            <a className="btn-one" href="#">
                              <span className="txt">
                                Add To Cart
                                <span className="icon-basket" />
                              </span>
                            </a>
                          </div>
                        </div>
                        <div className="title-holder">
                          <h4>
                            <a href="shop-single.html">
                              Lucy Love Sophia Rust Chair
                            </a>
                          </h4>
                          <div className="price-box">
                            <span>£85.00</span> <del>£270.00</del>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*End single product item*/}
                    {/*Start single product item*/}
                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                      <div className="single-product-item">
                        <div className="img-holder">
                          <img
                            src="assets/images/shop/shop-10.jpg"
                            alt="Awesome Product Image"
                          />
                          <div className="overlay-content">
                            <a className="btn-one" href="#">
                              <span className="txt">
                                Add To Cart
                                <span className="icon-basket" />
                              </span>
                            </a>
                          </div>
                        </div>
                        <div className="title-holder">
                          <h4>
                            <a href="shop-single.html">
                              Lucy Love Sophia Rust Chair
                            </a>
                          </h4>
                          <div className="price-box">
                            <span>£85.00</span> <del>£270.00</del>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*End single product item*/}
                    {/*Start single product item*/}
                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                      <div className="single-product-item">
                        <div className="img-holder">
                          <img
                            src="assets/images/shop/shop-11.jpg"
                            alt="Awesome Product Image"
                          />
                          <div className="overlay-content">
                            <a className="btn-one" href="#">
                              <span className="txt">
                                Add To Cart
                                <span className="icon-basket" />
                              </span>
                            </a>
                          </div>
                        </div>
                        <div className="title-holder">
                          <h4>
                            <a href="shop-single.html">
                              Lucy Love Sophia Rust Chair
                            </a>
                          </h4>
                          <div className="price-box">
                            <span>£85.00</span> <del>£270.00</del>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*End single product item*/}
                    {/*Start single product item*/}
                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                      <div className="single-product-item">
                        <div className="img-holder">
                          <img
                            src="assets/images/shop/shop-12.jpg"
                            alt="Awesome Product Image"
                          />
                          <div className="overlay-content">
                            <a className="btn-one" href="#">
                              <span className="txt">
                                Add To Cart
                                <span className="icon-basket" />
                              </span>
                            </a>
                          </div>
                        </div>
                        <div className="title-holder">
                          <h4>
                            <a href="shop-single.html">
                              Lucy Love Sophia Rust Chair
                            </a>
                          </h4>
                          <div className="price-box">
                            <span>£85.00</span> <del>£270.00</del>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*End single product item*/}
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-7">
                <div className="sidebar-box-style2">
                  {/*Start Single Sidebar style2*/}
                  <div className="single-sidebar-style2">
                    <div className="title">
                      <h4>Filter By Color</h4>
                    </div>
                    <ul className="color-filter filter-checkbox">
                      <li>
                        <div className="single-checkbox">
                          <input type="checkbox" name="red" id="red-clr" />
                          <label htmlFor="red-clr">
                            <span />
                            Red
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="single-checkbox">
                          <input
                            type="checkbox"
                            name="blue"
                            id="blue-clr"
                            defaultChecked
                          />
                          <label htmlFor="blue-clr">
                            <span />
                            Blue
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="single-checkbox">
                          <input
                            type="checkbox"
                            name="white"
                            id="white-clr"
                            defaultChecked
                          />
                          <label htmlFor="white-clr">
                            <span />
                            White
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="single-checkbox">
                          <input type="checkbox" name="green" id="green-clr" />
                          <label htmlFor="green-clr">
                            <span />
                            Green
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="single-checkbox">
                          <input
                            type="checkbox"
                            name="violet"
                            id="violet-clr"
                          />
                          <label htmlFor="violet-clr">
                            <span />
                            Violet
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="single-checkbox">
                          <input
                            type="checkbox"
                            name="yellow"
                            id="yellow-clr"
                          />
                          <label htmlFor="yellow-clr">
                            <span />
                            Yellow
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="single-checkbox">
                          <input
                            type="checkbox"
                            name="orange"
                            id="orange-clr"
                          />
                          <label htmlFor="orange-clr">
                            <span />
                            Orange
                          </label>
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/*End Single Sidebar style2*/}
                  {/*Start Single Sidebar style2*/}
                  <div className="single-sidebar-style2">
                    <div className="title">
                      <h4>Filter By Size</h4>
                    </div>
                    <ul className="size-filter">
                      <li>&gt; XS(56)</li>
                      <li className="active">&gt; S(284)</li>
                      <li>&gt; M(284)</li>
                      <li>&gt; L(284)</li>
                      <li>&gt; XL(38)</li>
                    </ul>
                  </div>
                  {/*End Single Sidebar style2*/}
                  {/*Start Single Sidebar style2*/}
                  <div className="single-sidebar-style2">
                    <div className="title">
                      <h4>Filter By Price</h4>
                    </div>
                    <div className="price-ranger">
                      <div id="slider-range" />
                      <div className="ranger-min-max-block">
                        <input type="text" readOnly className="min" />
                        <span className="line" />
                        <input type="text" readOnly className="max" />
                        <input className type="submit" defaultValue="Filter" />
                      </div>
                    </div>
                  </div>
                  {/*End Single Sidebar style2*/}
                  {/*Start Single Sidebar style2*/}
                  <div className="single-sidebar-style2">
                    <div className="title">
                      <h4>Filter By Tags</h4>
                    </div>
                    <ul className="tag-filter">
                      <li>
                        <a href="#">#Accessories,</a>
                      </li>
                      <li>
                        <a href="#">#Clothing,</a>
                      </li>
                      <li>
                        <a href="#">#Fashion,</a>
                      </li>
                      <li>
                        <a href="#">#Footwear,</a>
                      </li>
                      <li>
                        <a href="#">#Good,</a>
                      </li>
                      <li>
                        <a href="#">#Kid,</a>
                      </li>
                      <li>
                        <a href="#">#Men,</a>
                      </li>
                      <li>
                        <a href="#">#Wear,</a>
                      </li>
                      <li>
                        <a href="#">#Wm.</a>
                      </li>
                    </ul>
                  </div>
                  {/*End Single Sidebar style2*/}
                  <div className="shop-sidebar-image-box">
                    <img src="assets/images/shop/shop-sidebar-image.jpg" alt />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*End Shop Area*/}
      </div>
    </div>
  );
}

export default Shop;
