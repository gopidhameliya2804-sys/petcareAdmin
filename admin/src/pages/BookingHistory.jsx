import React, { useEffect, useState } from "react";
import Sidebar from "../common/Sidebar";
import { useNavigate } from "react-router-dom";
import api from "../utils/Axios.config";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";

function BookingHistory() {
  // const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();

  const FetchBooking = async () => {
    try {
      let response = await api.get("/admin/booking/");
      console.log(response.data);
      return response.data.data;
    } catch (e) {
      console.log(e);
    }
  };

  const {data : bookings = [] , isLoading , isError} = useQuery({
    queryKey: ["booking"],
    queryFn: FetchBooking,
  });

  const DeleteBooking = async (id) => {
    try {
      let response = await api.delete(`/admin/booking/delete/${id}`);
      toast.success("booking delete successfully");
      FetchBooking();
    } catch (e) {
      console.log(e);
      toast.error("Something went wrong");
    }
  };

  const total = bookings.length;
  const confirmed = bookings.filter((b) => b.status === "Confirmed").length;
  const pending = bookings.filter((b) => b.status === "PENDING").length;
  const cancelled = bookings.filter((b) => b.status === "Cancelled").length;

  return (
    <div id="app">
      <Sidebar />
      <div id="main">
        {/* PAGE HEADER */}
        <div className="page-heading">
          <div className="row">
            <div className="col-md-6">
              <h3>Manage Bookings</h3>
              <p className="text-subtitle text-muted">
                View and manage customer bookings
              </p>
            </div>
          </div>
        </div>

        {/* STATS */}
        <section className="section mt-3">
          <div className="row">
            <div className="col-md-3">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h6 className="text-muted">Total Bookings</h6>
                  <h4>{total}</h4>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card shadow-sm border-start border-success border-4">
                <div className="card-body">
                  <h6 className="text-muted">Confirmed</h6>
                  <h4 className="text-success">{confirmed}</h4>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card shadow-sm border-start border-warning border-4">
                <div className="card-body">
                  <h6 className="text-muted">Pending</h6>
                  <h4 className="text-warning">{pending}</h4>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card shadow-sm border-start border-danger border-4">
                <div className="card-body">
                  <h6 className="text-muted">Cancelled</h6>
                  <h4 className="text-danger">{cancelled}</h4>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TABLE */}
        <section className="section mt-4">
          <div className="card shadow-sm">
            <div className="card-body table-responsive">
              {isLoading ? (<p>Loading Booking History...</p>) : (<>
              <table className="table table-hover align-middle">
                <thead className="table-light">
                  <tr>
                    <th>Id</th>
                    <th>Users</th>
                    <th>Service</th>
                    <th>Pet Name</th>
                    <th>Price</th>
                    <th>Date</th>
                    <th>Status</th>
                    {/* <th className="text-center">Actions</th> */}
                  </tr>
                </thead>
                <tbody>
                  {bookings.map((b, index) => (
                    <tr key={b._id}>
                      <td>{b._id.slice(0,4)}</td>
                      <td>
                        <strong>{b.user_name}</strong>
                        <div className="text-muted small">{b.phone}</div>
                      </td>
                      <td>{b.service_name}</td>
                      <td>{b.pet_name}</td>
                      <td>
                        {b.price}
                        <div className="text-muted small">{b.service_price}</div>
                      </td>
                      <td>{b.date.split("T")[0]}</td>
                      <td>
                       <span
                            className={`badge ${
                             b.status === "Confirmed"
                             ? "bg-success text-white"
                             : b.status === "Cancelled"
                             ? "bg-danger text-white"
                             : "bg-warning text-white"
                             }`}
                             >
                            {b.status}

                          </span>
                      </td>
                      {/* <td className="text-center">
                        <div className="d-flex justify-content-center gap-2">
                        <button
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => {
                              DeleteBooking(b._id);
                            }}
                            >
                            <i className="bi bi-trash"></i>
                            </button>
                            </div>
                            </td> */}
                    </tr>
                  ))}
                </tbody>
              </table>
              </>)}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default BookingHistory;
