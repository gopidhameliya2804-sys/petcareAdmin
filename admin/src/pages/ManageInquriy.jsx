import React, { useState } from "react";
import Sidebar from "../common/Sidebar";
import api from "../utils/Axios.config";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";

function ManageInquiry() {
  // const [inquiries, setInquiries] = useState([]);
  const navigate =  useNavigate(); 

  const FetchInquiry = async () => {
    try {
      let response = await api.get("/admin/inquiry/");
      console.log(response.data);
      return response.data.data;
    } catch (e) {
      console.log(e);
    }
  }

  const {data : inquiries = [] , isLoading , isError} = useQuery({
    queryKey: ["inquiries"],
    queryFn: FetchInquiry,
  });

  const DeleteInquiry = async (id) => {
    try {
      let response =  await api.delete(`/admin/inquiry/delete/${id}`);
      toast.success("Delete Inquiry successfully");
      FetchInquiry();
    } catch (e) {
      console.log(e);
    }
  }

  const total = inquiries.length;

  return (
    <div id="app">
      <Sidebar />
      <div id="main">

        {/* PAGE HEADER */}
        <div className="page-heading">
          <h3>Manage Inquiries</h3>
          <p className="text-subtitle text-muted">
            View and respond to user inquiries
          </p>
        </div>

        {/* STATS */}
        <section className="section mt-3">
          <div className="row">
            <div className="col-md-4">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h6 className="text-muted">Total Inquiries</h6>
                  <h4>{total}</h4>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TABLE */}
        <section className="section mt-4">
          <div className="card shadow-sm">
            <div className="card-body table-responsive">
              {isLoading ? (<p>Loading Inquiry Data...</p>) : (<>
              <table className="table table-hover align-middle">
                <thead className="table-light">
                  <tr>
                    <th>#</th>
                    <th>User</th>
                    <th>Email</th>
                    <th>Subject</th>
                    <th>Contact</th>
                    <th>Message</th>
                    <th>Date</th>
                    <th className="text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {inquiries.map((inquiry, index) => (
                    <tr key={inquiry.id}>
                      <td>{index + 1}</td>
                      <td>
                        <strong>{inquiry.name}</strong>
                      </td>

                      <td>{inquiry.email}</td>

                      <td>{inquiry.subject}</td>

                      <td>
                        <div>{inquiry.phone}</div>
                      </td>

                      <td>{inquiry.message}</td>

                      <td>{inquiry.timestamp.split("T")[0]}</td>

                      <td className="text-center">
                        <div className="d-flex justify-content-center gap-2">
                          <button
                            className="btn btn-sm btn-outline-primary"
                            onClick={() => {DeleteInquiry(inquiry._id)}}
                            >
                            <i className="bi bi-trash"></i>
                          </button>
                        </div>
                      </td>
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

export default ManageInquiry;
