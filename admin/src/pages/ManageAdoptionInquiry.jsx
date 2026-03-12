import React, { useState } from "react";
import Sidebar from "../common/Sidebar";

function ManageAdoptionInquiry() {
  const [inquiries, setInquiries] = useState([
    {
      id: "inq1",
      petName: "Rocky",
      adopterName: "Amit Patel",
      email: "amit@gmail.com",
      phone: "9876543210",
      message: "I want to adopt Rocky. Please contact me.",
      status: "Pending",
      date: "2026-01-15",
    },
    {
      id: "inq2",
      petName: "Milo",
      adopterName: "Sara Khan",
      email: "sara@gmail.com",
      phone: "9123456780",
      message: "Interested in adoption process.",
      status: "Approved",
      date: "2026-01-14",
    },
  ]);

  const [selectedInquiry, setSelectedInquiry] = useState(null);
  const [showViewModal, setShowViewModal] = useState(false);
  const [showStatusModal, setShowStatusModal] = useState(false);

  const total = inquiries.length;
  const pending = inquiries.filter(i => i.status === "Pending").length;
  const approved = inquiries.filter(i => i.status === "Approved").length;
  const rejected = inquiries.filter(i => i.status === "Rejected").length;

  return (
    <div id="app">
      <Sidebar />
      <div id="main">

        {/* PAGE HEADER */}
        <div className="page-heading">
          <h3>Adoption Inquiries</h3>
          <p className="text-subtitle text-muted">
            Manage user adoption requests
          </p>
        </div>

        {/* STATS */}
        <section className="section mt-3">
          <div className="row">
            <div className="col-md-3">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h6 className="text-muted">Total</h6>
                  <h4>{total}</h4>
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
              <div className="card shadow-sm border-start border-success border-4">
                <div className="card-body">
                  <h6 className="text-muted">Approved</h6>
                  <h4 className="text-success">{approved}</h4>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card shadow-sm border-start border-danger border-4">
                <div className="card-body">
                  <h6 className="text-muted">Rejected</h6>
                  <h4 className="text-danger">{rejected}</h4>
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
                    <th>Pet</th>
                    <th>Adopter</th>
                    <th>Contact</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th className="text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {inquiries.map(inquiry => (
                    <tr key={inquiry.id}>
                      <td>
                        <strong>{inquiry.petName}</strong>
                      </td>
                      <td>
                        {inquiry.adopterName}
                      </td>
                      <td>
                        <div>{inquiry.email}</div>
                        <div className="text-muted small">{inquiry.phone}</div>
                      </td>
                      <td>{inquiry.date}</td>
                      <td>
                        <span className={`badge ${
                          inquiry.status === "Pending"
                            ? "bg-light-warning text-warning"
                            : inquiry.status === "Approved"
                            ? "bg-light-success text-success"
                            : "bg-light-danger text-danger"
                        }`}>
                          {inquiry.status}
                        </span>
                      </td>
                      <td className="text-center">
                        <div className="d-flex justify-content-center gap-2">
                          <button
                            className="btn btn-sm btn-outline-info"
                            onClick={() => {
                              setSelectedInquiry(inquiry);
                              setShowViewModal(true);
                            }}
                          >
                            <i className="bi bi-eye"></i>
                          </button>

                          <button
                            className="btn btn-sm btn-outline-primary"
                            onClick={() => {
                              setSelectedInquiry(inquiry);
                              setShowStatusModal(true);
                            }}
                          >
                            <i className="bi bi-check2-circle"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* VIEW INQUIRY MODAL */}
        {showViewModal && selectedInquiry && (
          <div className="modal fade show d-block" style={{ background: "rgba(0,0,0,.6)" }}>
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content p-4">
                <h4>{selectedInquiry.adopterName}</h4>
                <p className="text-muted">Interested in {selectedInquiry.petName}</p>
                <p><strong>Email:</strong> {selectedInquiry.email}</p>
                <p><strong>Phone:</strong> {selectedInquiry.phone}</p>
                <p><strong>Message:</strong></p>
                <p className="text-muted">{selectedInquiry.message}</p>
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

        {/* UPDATE STATUS MODAL */}
        {showStatusModal && selectedInquiry && (
          <div className="modal fade show d-block" style={{ background: "rgba(0,0,0,.6)" }}>
            <div className="modal-dialog modal-dialog-centered modal-sm">
              <div className="modal-content p-4">
                <h5>Update Inquiry Status</h5>
                <select className="form-control mb-3" defaultValue={selectedInquiry.status}>
                  <option>Pending</option>
                  <option>Approved</option>
                  <option>Rejected</option>
                </select>
                <button className="btn btn-primary w-100 mb-2">
                  Update Status
                </button>
                <button
                  className="btn btn-light w-100"
                  onClick={() => setShowStatusModal(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default ManageAdoptionInquiry;
