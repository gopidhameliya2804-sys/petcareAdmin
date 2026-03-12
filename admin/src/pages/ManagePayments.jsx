import React, { useState } from "react";
import Sidebar from "../common/Sidebar";

function ManagePayments() {
  const [payments, setPayments] = useState([
    {
      id: "pay1",
      customer: "John Doe",
      service: "Pet Grooming",
      amount: "$45.00",
      method: "UPI",
      date: "12 Feb 2026",
      status: "Paid",
      txnId: "TXN9845123",
    },
    {
      id: "pay2",
      customer: "Emma Watson",
      service: "Pet Training",
      amount: "$120.00",
      method: "Card",
      date: "14 Feb 2026",
      status: "Pending",
      txnId: "TXN4578123",
    },
  ]);

  const [selectedPayment, setSelectedPayment] = useState(null);
  const [showViewModal, setShowViewModal] = useState(false);
  const [showRefundModal, setShowRefundModal] = useState(false);

  // Stats
  const total = payments.length;
  const paid = payments.filter(p => p.status === "Paid").length;
  const pending = payments.filter(p => p.status === "Pending").length;

  return (
    <div id="app">
      <Sidebar />
      <div id="main">

        {/* PAGE HEADER */}
        <div className="page-heading">
          <div className="row">
            <div className="col-md-6">
              <h3>Manage Payments</h3>
              <p className="text-subtitle text-muted">
                Track and manage customer transactions
              </p>
            </div>
          </div>
        </div>

        {/* STATS */}
        <section className="section mt-3">
          <div className="row">
            <div className="col-md-4">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h6 className="text-muted">Total Transactions</h6>
                  <h4>{total}</h4>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow-sm border-start border-success border-4">
                <div className="card-body">
                  <h6 className="text-muted">Paid</h6>
                  <h4 className="text-success">{paid}</h4>
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

        {/* PAYMENT TABLE */}
        <section className="section mt-4">
          <div className="card shadow-sm">
            <div className="card-body table-responsive">
              <table className="table table-hover align-middle">
                <thead className="table-light">
                  <tr>
                    <th>Customer</th>
                    <th>Service</th>
                    <th>Amount</th>
                    <th>Method</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th className="text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {payments.map(pay => (
                    <tr key={pay.id}>
                      <td>
                        <strong>{pay.customer}</strong>
                        <div className="text-muted small">{pay.txnId}</div>
                      </td>
                      <td>{pay.service}</td>
                      <td className="fw-bold">{pay.amount}</td>
                      <td>{pay.method}</td>
                      <td>{pay.date}</td>
                      <td>
                        <span className={`badge ${
                          pay.status === "Paid"
                            ? "bg-light-success text-success"
                            : "bg-light-warning text-warning"
                        }`}>
                          {pay.status}
                        </span>
                      </td>
                      <td className="text-center">
                        <div className="d-flex justify-content-center gap-2">
                          <button
                            className="btn btn-sm btn-outline-info"
                            onClick={() => {
                              setSelectedPayment(pay);
                              setShowViewModal(true);
                            }}
                          >
                            <i className="bi bi-eye"></i>
                          </button>

                          {pay.status === "Paid" && (
                            <button
                              className="btn btn-sm btn-outline-danger"
                              onClick={() => {
                                setSelectedPayment(pay);
                                setShowRefundModal(true);
                              }}
                            >
                              <i className="bi bi-arrow-counterclockwise"></i>
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* VIEW PAYMENT MODAL */}
        {showViewModal && selectedPayment && (
          <div className="modal fade show d-block" style={{ background: "rgba(0,0,0,.6)" }}>
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content p-4">
                <h4>Payment Details</h4>
                <hr />
                <p><strong>Customer:</strong> {selectedPayment.customer}</p>
                <p><strong>Service:</strong> {selectedPayment.service}</p>
                <p><strong>Amount:</strong> {selectedPayment.amount}</p>
                <p><strong>Method:</strong> {selectedPayment.method}</p>
                <p><strong>Transaction ID:</strong> {selectedPayment.txnId}</p>
                <p><strong>Status:</strong> {selectedPayment.status}</p>
                <button
                  className="btn btn-dark w-100 mt-3"
                  onClick={() => setShowViewModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* REFUND CONFIRM MODAL */}
        {showRefundModal && selectedPayment && (
          <div className="modal fade show d-block" style={{ background: "rgba(0,0,0,.6)" }}>
            <div className="modal-dialog modal-dialog-centered modal-sm">
              <div className="modal-content p-4 text-center">
                <i className="bi bi-arrow-counterclockwise text-danger fs-1 mb-3"></i>
                <h5>Refund Payment?</h5>
                <p className="text-muted small">
                  Refund {selectedPayment.amount} to customer.
                </p>
                <div className="d-flex gap-2">
                  <button
                    className="btn btn-light w-100"
                    onClick={() => setShowRefundModal(false)}
                  >
                    Cancel
                  </button>
                  <button className="btn btn-danger w-100">
                    Refund
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default ManagePayments;
