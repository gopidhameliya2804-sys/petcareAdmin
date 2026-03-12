import React, { useEffect, useState } from "react";
import Sidebar from "../common/Sidebar";
import api from "../utils/Axios.config";
import { Link, useNavigate } from "react-router-dom";

function ManageServices() {
  let [service, setService] = useState([]);
  const navigate = useNavigate();
  const FetchService = async () => {
    try {
      let response = await api.get("/admin/service/");
      console.log(response.data);
      setService(response.data.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    FetchService();
  }, []);
  console.log(service);

  const DeleteService = async (id) => {
    try {
      let response = await api.delete(`/admin/service/delete/${id}`);
      if (response.status == 200) {
        alert("Delete Service ");
        FetchService();
      }
    } catch (e) {
      console.log(e);
    }
  };

  const total = service.length;
  const activeCount = service.filter((c) => c.status === "Active").length;
  const inactiveCount = service.filter((c) => c.status === "Inactive").length;

  return (
    <div id="app">
      <Sidebar />
      <div id="main">
        {/* PAGE HEADING */}
        <div className="page-heading">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h3>Services Management</h3>
              <p className="text-muted">
                Define specific pet services and pricing.
              </p>
            </div>
            <button
              onClick={() => navigate("/add-service")}
              className="btn btn-primary rounded-pill shadow"
            >
              Add Service
            </button>
          </div>
        </div>

        {/* STATS CARDS */}
        <section className="section mt-3">
          <div className="row">
            <div className="col-md-4 col-12">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h6 className="text-muted">Total Categories</h6>
                  <h4 className="mb-0">{total}</h4>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="card shadow-sm border-start border-success border-4">
                <div className="card-body">
                  <h6 className="text-muted">Active</h6>
                  <h4 className="mb-0 text-success">{activeCount}</h4>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="card shadow-sm border-start border-danger border-4">
                <div className="card-body">
                  <h6 className="text-muted">Inactive</h6>
                  <h4 className="mb-0 text-danger">{inactiveCount}</h4>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* DATA TABLE */}
        <section className="section mt-4">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-striped align-middle">
                  <thead className="table-light">
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Image</th>
                      <th>Description</th>
                      <th>Price</th>
                      <th>Status</th>
                      <th>Created At</th>
                      <th className="text-center">Actions</th>
                    </tr>
                  </thead>

                  <tbody>
                    {service.length > 0 ? (
                      service.map((value, index) => (
                        <tr key={value._id}>
                          {/* INDEX */}
                          <td>{index + 1}</td>

                          {/* NAME */}
                          <td className="fw-bold">{value.name}</td>

                          {/* IMAGE */}
                          <td>
                            <img
                              src={`${api.defaults.baseURL}/uploads/${value.image}`}
                              alt={value.name}
                              style={{
                                width: "60px",
                                height: "60px",
                                objectFit: "cover",
                                borderRadius: "8px",
                              }}
                            />
                          </td>

                          {/* DESCRIPTION */}
                          <td style={{ maxWidth: "250px" }}>
                            <span
                              className="text-truncate d-inline-block"
                              style={{ maxWidth: "230px" }}
                            >
                              {value.desc}
                            </span>
                          </td>

                          {/* PRICE */}
                          <td>{value.price}</td>

                          {/* STATUS */}
                          <td>
                            <span
                              className={`badge ${
                                value.status === "Active"
                                  ? "bg-success"
                                  : "bg-danger"
                              }`}
                            >
                              {value.status}
                            </span>
                          </td>

                          {/* TIMESTAMP */}
                          <td>
                            {new Date(value.timestamp).toLocaleDateString()}
                          </td>

                          {/* ACTIONS */}
                          <td className="text-center">
                            <Link
                              to="/edit-service"
                              state={value}
                              className="btn btn-sm btn-outline-primary me-2"
                            >
                              Edit
                            </Link>
                            <button
                              className="btn btn-sm btn-outline-danger"
                              onClick={() => {
                                DeleteService(value._id);
                              }}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="7" className="text-center text-muted py-4">
                          No services found
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ManageServices;
