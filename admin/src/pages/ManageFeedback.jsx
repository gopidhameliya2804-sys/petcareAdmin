import React, { useState } from "react";
import Sidebar from "../common/Sidebar";
import api from "../utils/Axios.config";
import { useEffect } from "react";

function ManageFeedback() {
  const [ feedbacks , setFeedbacks] = useState([]);

  const FetchFeedback = async () => {
    try {
      let response = await api.get("/admin/feedback/");
      console.log(response.data);
      setFeedbacks(response.data.data);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    FetchFeedback();
  }, []);

  const DeleteFeedback = async (id) => {
    try {
      let response = await api.delete(`/admin/feedback/delete/${id}`);
      setFeedbacks(response.data.data);
      FetchFeedback();
    } catch (e) {
      console.log(e);
    }
  }

  const total = feedbacks.length;

  return (
    <div id="app">
      <Sidebar />
      <div id="main">

        {/* PAGE HEADER */}
        <div className="page-heading">
          <h3>User Feedback</h3>
          <p className="text-subtitle text-muted">
            Manage feedback & reviews from users
          </p>
        </div>

        {/* STATS */}
        <section className="section mt-3">
          <div className="row">
            <div className="col-md-4">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h6 className="text-muted">Total Feedback</h6>
                  <h4>{total}</h4>
                </div>
              </div>
            </div>
            {/* <div className="col-md-4">
              <div className="card shadow-sm border-start border-success border-4">
                <div className="card-body">
                  <h6 className="text-muted">Visible</h6>
                  <h4 className="text-success">{visible}</h4>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow-sm border-start border-danger border-4">
                <div className="card-body">
                  <h6 className="text-muted">Hidden</h6>
                  <h4 className="text-danger">{hidden}</h4>
                </div>
              </div>
            </div> */}
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
                    <th>Rating</th>
                    <th>Feedback</th>
                    <th>Date</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {feedbacks.map(value => (
                    <tr key={value.id}>
                      <td>
                        <strong>{value.name}</strong>
                      </td>

                      <td>
                        {Array.from({ length: 5 }).map((_, i) => (
                          <i
                            key={i}
                            className={`bi ${
                              i < value.rating
                                ? "bi-star-fill text-warning"
                                : "bi-star text-muted"
                            }`}
                          ></i>
                        ))}
                      </td>

                      <td className="text-muted">
                        {value.review.length > 50
                          ? value.review.substring(0, 50) + "..."
                          : value.review}
                      </td>

                      <td>{value.timestamp}</td>

                       <td className="text-center">
                          <button className="btn btn-sm btn-outline-danger"
                            onClick={() => { DeleteFeedback(value._id) }}>
                            Delete
                          </button>
                        </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ManageFeedback;
