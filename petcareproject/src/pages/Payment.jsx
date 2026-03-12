import React from "react";
import BreadCrumbs from "../comman/BreadCrumbs";

function Payment() {
  return (
    <div>
      <div>
        {/* Breadcrumb Area */}
        <BreadCrumbs title1="Payment" title2="payment" imageUrl="assets/images/breadcrumb/breadcrumb-1.png"></BreadCrumbs>

        {/* Payment Form Area */}
        <section className="contact-form-style1-area">
          <div
            className="contact-form-style1-bg"
            style={{
              backgroundImage:
                "url(assets/images/shape/contact-form-style1-bg.png)",
            }}
          />
          <div className="container">
            <div className="sec-title text-center">
              <h2>
                Complete Your Payment
                <span className="round-box zoominout" />
              </h2>
            </div>

            <div className="row justify-content-center">
              <div className="col-xl-8 col-lg-10">
                <div className="contact-form contact-page">
                  <form className="default-form2" action="#" method="post">
                    <div className="row">
                      {/* Name */}
                      <div className="col-xl-6 col-lg-6">
                        <div className="input-box">
                          <input
                            type="text"
                            name="name"
                            placeholder="Cardholder Name"
                            required
                          />
                          <div className="icon">
                            <span className="icon-user" />
                          </div>
                        </div>
                      </div>

                      {/* Card Number */}
                      <div className="col-xl-6 col-lg-6">
                        <div className="input-box">
                          <input
                            type="text"
                            name="card_number"
                            placeholder="Card Number"
                            required
                          />
                          <div className="icon">
                            <span className="icon-credit-card" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      {/* Expiry Date */}
                      <div className="col-xl-6 col-lg-6">
                        <div className="input-box">
                          <input
                            type="text"
                            name="expiry"
                            placeholder="MM/YY"
                            onFocus={(e) => (e.target.type = "month")}
                            onBlur={(e) => (e.target.type = "text")}
                            required
                          />
                          <div className="icon">
                            <span className="icon-calendar" />
                          </div>
                        </div>
                      </div>

                      {/* CVV */}
                      <div className="col-xl-6 col-lg-6">
                        <div className="input-box">
                          <input
                            type="password"
                            name="cvv"
                            placeholder="CVV"
                            maxLength={4}
                            required
                          />
                          <div className="icon">
                            <span className="icon-lock" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      {/* Email */}
                      <div className="col-xl-6 col-lg-6">
                        <div className="input-box">
                          <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            required
                          />
                          <div className="icon">
                            <span className="icon-envelope" />
                          </div>
                        </div>
                      </div>

                      {/* Phone */}
                      <div className="col-xl-6 col-lg-6">
                        <div className="input-box">
                          <input
                            type="text"
                            name="phone"
                            placeholder="Phone Number"
                          />
                          <div className="icon">
                            <span className="icon-phone" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Amount */}
                    <div className="row">
                      <div className="col-xl-12">
                        <div className="input-box">
                          <input
                            type="text"
                            name="amount"
                            placeholder="Amount"
                            required
                          />
                          <div className="icon">
                            <span className="icon-dollar" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <h2 className="text-center">
                      OR
                      <span className="round-box zoominout" />
                    </h2>
                    {/* UPI ID */}
                    <div className="row">
                      <div className="col-xl-12">
                        <div className="input-box">
                          <input
                            type="text"
                            name="upi_id"
                            placeholder="Enter your UPI ID (e.g., yourname@upi)"
                            required
                          />
                          <div className="icon">
                            <span className="icon-mobile" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Amount */}
                    <div className="row">
                      <div className="col-xl-12">
                        <div className="input-box">
                          <input
                            type="text"
                            name="upi_amount"
                            placeholder="Amount"
                            required
                          />
                          <div className="icon">
                            <span className="icon-dollar" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="row">
                      <div className="col-xl-12">
                        <div className="button-box text-center">
                          <button
                            type="submit"
                            className="btn-one gradient-bg-1"
                          >
                            <span className="txt">
                              <i className="icon-credit-card" /> Pay Now
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Payment;
