import React, { useEffect, useState } from "react";
import BreadCrumbs from "../comman/BreadCrumbs";
import api from "../utils/AxiosConfig";

function BookingHistory() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBookings = async () => {
      try {
        const responsive = await api.get("/user/booking/"); 
        console.log(responsive.data)
        setBookings(responsive.data.data || []);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    
    useEffect(() => {
      fetchBookings();
    }, []);
    console.log(bookings.user_name);
    

  return (
    <div>
      {/* Breadcrumb */}
      <BreadCrumbs
        title1="Bookings Overview"
        title2="Bookings"
        imageUrl="assets/images/breadcrumb/breadcrumb-1.png"
      />

      {/* Booking Data Section */}
      <section className="contact-form-style1-area">
        <div className="container">
          <div className="sec-title text-center">
            <h5>
              //<span>Booking Summary</span>//
            </h5>
            <h2>
              Upcoming & Past Booking
              <span className="round-box zoominout" />
            </h2>
          </div>

          {loading ? (
            <p className="text-center">Loading booking data...</p>
          ) : bookings.length > 0 ? (
            <div className="row">
              {bookings.map((value, index) => (
                <div className="col-xl-6 col-lg-6" key={index}>
                  <div className="single-testimonial-style1 no-image mt-4">
                    <div className="text-holder">

                      {/* User Info */}
                      <div className="user-header">
                        <h3>{value.user_name}</h3>
                        <span className="email">{value.email}</span>
                        <p>{value.phone}</p>
                      </div>

                      {/* Service */}
                      <div className="mt-2">
                        <strong>Service:</strong> {value.service_name}
                      </div>
                      <div className="mt-2">
                        <strong>Pet:</strong> {value.pet_name}
                      </div>

                      {/* Date & Time */}
                      <div className="mt-2">
                        <p>
                          <strong>Date:</strong>{" "}
                          {new Date(value.date).toLocaleDateString()}
                        </p>
                        <p>
                          <strong>Time:</strong> {value.time}
                        </p>
                      </div>

                      {/* Payment & Status */}
                      <div className="mt-3 d-flex justify-content-between">
                        <span className="payment-mode">
                          {value.paymentmode === "cash"
                            ? "Cash"
                            : "UPI / Online"}
                        </span>

                        {/* <span
                          className={`status ${
                            value.status === "PENDING"
                              ? "status-pending"
                              : "status-confirmed"
                          }`}
                        >
                          {value.status}
                        </span> */}
                      </div>

                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center">No bookings found.</p>
          )}
        </div>
      </section>
    </div>
  );
}

export default BookingHistory
