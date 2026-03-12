import React, { useState } from "react";
import { Link } from "react-router-dom";
import BreadCrumbs from "../comman/BreadCrumbs";

function Inquiry() {
  const [openIndex, setOpenIndex] = useState(0); 

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };


  return (
    <div>
      {/* Breadcrumb */}
      <BreadCrumbs title1="Inquiry" title2="Inquiry" imageUrl="assets/images/breadcrumb/breadcrumb-1.png"></BreadCrumbs>

     {/* Start Inquiry Dropdown Area */}
     <section className="faq-page-area">
      <div className="container">
        <div className="sec-title text-center">
          <h2>
            Inquiry Center
            <span className="round-box zoominout" />
          </h2>
          <p>Select a section below to view details</p>
        </div>

        <div className="accordion-box">

          {/* SERVICE */}
          <div className="accordion accordion-block">
            <div
              className={`accord-btn ${openIndex === 0 ? "active" : ""}`}
              onClick={() => toggleAccordion(0)}
            >
              <h4>
                <span className="" /> Service Inquiry
              </h4>
            </div>
            <div
              className={`accord-content ${
                openIndex === 0 ? "collapsed" : ""
              }`}
            >
              <p>Explore professional pet grooming, veterinary care, training, boarding, and wellness services with flexible scheduling, transparent pricing, and expert support designed to keep your pet healthy and happy.</p>
              <Link to="/services" className="btn-one mt-3">
                <span className="txt">View Services</span>
              </Link>
            </div>
          </div>

          {/* ADOPTION */}
          <div className="accordion accordion-block">
            <div
              className={`accord-btn ${openIndex === 1 ? "active" : ""}`}
              onClick={() => toggleAccordion(1)}
            >
              <h4>
                <span className="icon-pawprint" /> Adoption Inquiry
              </h4>
            </div>
            <div
              className={`accord-content ${
                openIndex === 1 ? "collapsed" : ""
              }`}
            >
              <p>Get guidance on adopting dogs or cats, understand eligibility, documentation, home checks, and track your adoption status while receiving pre- and post-adoption support.</p>
              <Link to="/adopt" className=" btn-one mt-3">
                <span className="txt">Adopt Now</span>
              </Link>
            </div>
          </div>

          {/* PAYMENT */}
          <div className="accordion accordion-block">
            <div
              className={`accord-btn ${openIndex === 2 ? "active" : ""}`}
              onClick={() => toggleAccordion(2)}
            >
              <h4>
                <span className="icon-wallet" /> Payment Inquiry
              </h4>
            </div>
            <div
              className={`accord-content ${
                openIndex === 2 ? "collapsed" : ""
              }`}
            >
              <p>Find help with UPI and card payments, invoices, refunds, failed transactions, and secure billing details for all pet care services in one place.</p>
              <Link to="/payment" className=" btn-one mt-3">
                <span className="txt">Payment Help</span>
              </Link>
            </div>
          </div>

          {/* GENERAL */}
          <div className="accordion accordion-block mar0">
            <div
              className={`accord-btn ${openIndex === 3 ? "active" : ""}`}
              onClick={() => toggleAccordion(3)}
            >
              <h4>
                <span className="icon-headphones" /> General Support
              </h4>
            </div>
            <div
              className={`accord-content ${
                openIndex === 3 ? "collapsed" : ""
              }`}
            >
              <p>Access FAQs, account assistance, service availability, pet profile help, and connect with our support team for quick, reliable solutions anytime.</p>
              <Link to="/contact" className=" btn-one mt-3 gradient-bg-1">
                <span className="txt">Contact Support</span>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
      {/* End Inquiry Dropdown Area */}
    </div>
  );
}

export default Inquiry;
