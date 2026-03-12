import React, { useState } from "react";
import BreadCrumbs from "../comman/BreadCrumbs";
import api from "../utils/AxiosConfig";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Booking() {
  const [pets, setPets] = useState([]);
  const servicesdata = useLocation().state;
  const [error, setError] = useState("");
  const [service, setService] = useState(servicesdata);
  let price = service.price;
  const navigate = useNavigate();
  const [booking, setBooking] = useState({
    ser_id: service._id,
    user_id: "",
    pet_id: "",
    date: "",
    time: "",
  });

  const fetchPets = async () => {
    const response = await api.get("/user/pet/");
    console.log("Pets:", response.data);
    setPets(response.data.data);
  };
  useEffect(() => {
    fetchPets();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "time") {
      if (value < "09:00" || value > "20:00") {
        setError("Please select time between 09:00 AM and 08:00 PM");
      } else {
        setError(" ");
      }
    }
    setBooking((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePayment = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/user/payment/get-services", {
        amount: price,
      });

      const { id: order_id, amount } = response.data.data;

      // Set up RazorPay options
      const options = {
        key: "rzp_test_VQhEfe2NCXbbwI",
        amount: amount,
        currency: "INR",
        name: "PetCare",
        description: "Test Transaction",
        order_id: order_id,
        handler: async (response) => {
          try {
            let responsive = await api.post("/user/booking/addbooking", {
              ...booking,
              amount,
            });
            console.log(responsive.data);
            alert("Booking  Successfully");
            setBooking({
              ser_id: service._id,
              pet_id: "",
              user_id: "",
              date: "",
              time: "",
            });
            navigate("/booking-history");
          } catch (e) {
            console.log(e);
            alert("Booking Failed");
          }
        },
        prefill: {
          name: "John Doe",
          email: "john.doe@example.com",
          contact: "9999999999",
        },
        theme: {
          color: "#3399cc",
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (error) {
      console.error("Payment initiation failed:", error);
    }
  };
  const today = new Date().toISOString().split("T")[0];

  return (
    <div>
      {/*Start breadcrumb area*/}
      <BreadCrumbs
        title1="Book a Service"
        title2="Book a Service"
        imageUrl="assets/images/breadcrumb/breadcrumb-1.png"
      ></BreadCrumbs>
      {/*End breadcrumb area*/}

      {/*Start Booking Form Area*/}
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
            <h5>
              //<span>Book Your Service</span>//
            </h5>
            <h2>
              Schedule Your Pet Care
              <span className="round-box zoominout" />
            </h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="contact-form contact-page">
                <form
                  id="booking-form"
                  name="booking_form"
                  className="default-form2"
                  action="#"
                  method="post"
                >
                  {/* Date & Time */}
                  <div className="row">
                    <div className="col-xl-8 col-lg-8 mx-auto">
                      <div className="input-box">
                        <label></label>
                        <input
                          type="date"
                          name="date"
                          min={today}
                          value={booking.date}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="col-xl-8 col-lg-8 mx-auto">
                      <div className="input-box">
                        <select
                          name="pet_id"
                          value={booking.pet_id}
                          onChange={handleInputChange}
                          style={{ width: "100%", padding: "10px 10px" }}
                          required
                        >
                          <option value="">Select Pet</option>
                          {pets.map((pet) => (
                            <option key={pet._id} value={pet._id}>
                              {pet.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="col-xl-8 col-lg-8 mx-auto">
                      <div className="input-box">
                        <input
                          type="time"
                          name="time"
                          value={booking.time}
                          onChange={handleInputChange}
                          min="09:00"
                          max="20:00"
                          required
                        />
                        {error && (
                          <div
                            className="text-danger mt-1"
                            style={{ fontSize: "14px" }}
                          >
                            {error}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/*Submit Button*/}
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="button-box text-center">
                        <button
                          className="btn-one gradient-bg-1"
                          type="submit"
                          onClick={handlePayment}
                          data-loading-text="Please wait..."
                        >
                          <span className="txt">
                            <i className="icon-next" />
                            Book Appointment
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
      {/*End Booking Form Area*/}
    </div>
  );
}

export default Booking;
