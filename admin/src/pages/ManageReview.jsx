import React, { useState } from "react";
import Sidebar from "../common/Sidebar";

function ViewReviews() {
  const [reviews] = useState([
    {
      id: "rev1",
      user: "Ankit Sharma",
      email: "ankit@gmail.com",
      rating: 5,
      review: "Amazing experience! The adoption process was smooth and staff was very helpful.",
      pet: "Golden Retriever",
      date: "2026-01-19",
      status: "Approved",
    },
    {
      id: "rev2",
      user: "Sneha Patel",
      email: "sneha@gmail.com",
      rating: 4,
      review: "Good service overall. Loved the pet care support.",
      pet: "Persian Cat",
      date: "2026-01-18",
      status: "Pending",
    },
  ]);

  const total = reviews.length;
  const approved = reviews.filter(r => r.status === "Approved").length;
  const pending = reviews.filter(r => r.status === "Pending").length;

  const [selectedReview, setSelectedReview] = useState(null);
  const [showViewModal, setShowViewModal] = useState(false);

  return (
    <div id="app">
      <Sidebar />
      <div id="main">

        {/* PAGE HEADER */}
        <div className="page-heading">
          <h3>User Reviews</h3>
          <p className="text-subtitle text-muted">
            View customer reviews and ratings
          </p>
        </div>

        {/* STATS */}
        <section className="section mt-3">
          <div className="row">
            <div className="col-md-4">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h6 className="text-muted">Total Reviews</h6>
                  <h4>{total}</h4>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow-sm border-start border-success border-4">
                <div className="card-body">
                  <h6 className="text-muted">Approved</h6>
                  <h4 className="text-success">{approved}</h4>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow-sm border-start border-warning border-4">
                <div className="card-body">
                  <h6 className="text-muted">Pending</h6>
                  <h4 className="text-warning">{pending}</h4>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TABLE */}
        <section className="section mt-4">
          <div className="card shadow-sm">
            <div className="card-body table-responsive">
              <table className="table table-hover align-middle">
                <thead className="table-light">
                  <tr>
                    <th>User</th>
                    <th>Pet</th>
                    <th>Rating</th>
                    <th>Review</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th className="text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {reviews.map(review => (
                    <tr key={review.id}>
                      <td>
                        <strong>{review.user}</strong>
                        <div className="text-muted small">{review.email}</div>
                      </td>

                      <td>{review.pet}</td>

                      <td>
                        {Array.from({ length: 5 }).map((_, i) => (
                          <i
                            key={i}
                            className={`bi ${
                              i < review.rating
                                ? "bi-star-fill text-warning"
                                : "bi-star text-muted"
                            }`}
                          ></i>
                        ))}
                      </td>

                      <td className="text-muted">
                        {review.review.length > 50
                          ? review.review.substring(0, 50) + "..."
                          : review.review}
                      </td>

                      <td>{review.date}</td>

                      <td>
                        <span
                          className={`badge ${
                            review.status === "Approved"
                              ? "bg-light-success text-success"
                              : "bg-light-warning text-warning"
                          }`}
                        >
                          {review.status}
                        </span>
                      </td>

                      <td className="text-center">
                        <button
                          className="btn btn-sm btn-outline-info"
                          onClick={() => {
                            setSelectedReview(review);
                            setShowViewModal(true);
                          }}
                        >
                          <i className="bi bi-eye"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* VIEW REVIEW MODAL */}
        {showViewModal && selectedReview && (
          <div className="modal fade show d-block" style={{ background: "rgba(0,0,0,.6)" }}>
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content p-4">
                <h4>{selectedReview.user}</h4>
                <p className="text-muted">{selectedReview.email}</p>
                <p><strong>Pet:</strong> {selectedReview.pet}</p>

                <p>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <i
                      key={i}
                      className={`bi ${
                        i < selectedReview.rating
                          ? "bi-star-fill text-warning"
                          : "bi-star text-muted"
                      }`}
                    ></i>
                  ))}
                </p>

                <p className="text-muted">{selectedReview.review}</p>

                <button
                  className="btn btn-dark w-100"
                  onClick={() => setShowViewModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default ViewReviews;
