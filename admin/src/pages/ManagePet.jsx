import React, { useState } from "react";
import Sidebar from "../common/Sidebar";
import { useEffect } from "react";
import api from "../utils/Axios.config";
import { Link, useNavigate } from "react-router-dom";

function ManagePets() {
  const [pet, setPet] = useState([]);
  const navigate = useNavigate();

  const FetchPet = async () => {
    try {
      const response = await api.get("/admin/pet/");
      console.log(response.data);
      setPet(response.data.data || []);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    FetchPet();
  }, []);

  const DeletePet = async (id) => {
    try {
      let response = await api.delete(`/admin/pet/delete/${id}`);
      if (response.status == 200) {
        alert("Delete Pet");
        FetchPet();
        navigate("/manage-pet")
      }
    } catch (e) {
      console.log(e);
    }
  }

  const total = pet.length;
  const active = pet.filter((c) => Boolean(c.ActiveStatus)).length;
  const inactive = pet.filter((c) => !Boolean(c.ActiveStatus)).length;


  return (
    <div id="app">
      <Sidebar />
      <div id="main">
        {/* PAGE HEADER */}
        <div className="page-heading">
          <div className="row">
            <div className="col-md-6">
              <h3>Pets</h3>
              <p className="text-subtitle text-muted">
                Manage registered pets in the system
              </p>
            </div>
            <div className="col-md-6 text-end">
              <button
                className="btn btn-primary rounded-pill"
                onClick={() => navigate("/add-pet")}
              >
                <i className="bi bi-plus-lg me-2"></i>Add Pet
              </button>
            </div>
          </div>
        </div>

        {/* STATS */}
        <section className="section mt-3">
          <div className="row">
            <div className="col-md-4">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h6 className="text-muted">Total Pets</h6>
                  <h4>{total}</h4>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow-sm border-start border-success border-4">
                <div className="card-body">
                  <h6 className="text-muted">Active</h6>
                  <h4 className="text-success">{active}</h4>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow-sm border-start border-danger border-4">
                <div className="card-body">
                  <h6 className="text-muted">Inactive</h6>
                  <h4 className="text-danger">{inactive}</h4>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TABLE */}
        <section className="section mt-4">
          <div className="card shadow-sm">
            <div className="card-body table-responsive">
              <table className="table table-striped align-middle">
                <thead className="table-light">
                  <tr>
                    <th>#</th>
                    <th>Pet Name</th>
                    <th>Image</th>
                    <th>Age</th>
                    <th>Status</th>
                    <th>Created At</th>
                    <th className="text-center">Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {pet.length === 0 ? (
                    <tr>
                      <td colSpan="7" className="text-center text-muted">
                        No pets found
                      </td>
                    </tr>
                  ) : (
                    pet.map((value, index) => (
                      <tr key={value._id}>
                        {/* INDEX */}
                        <td>{index + 1}</td>

                        {/* NAME */}
                        <td className="fw-bold">{value.name}</td>

                        {/* IMAGE */}
                        <td>
                          {value.image ? (
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
                          ) : (
                            <span className="text-muted">No Image</span>
                          )}
                        </td>

                        {/* AGE */}
                        <td>{value.age}</td>

                        {/* STATUS */}
                        <td>
                          <span
                            className={`badge ${
                              value.ActiveStatus ? "bg-success" : "bg-danger"
                            }`}
                          >
                            {Boolean(value.ActiveStatus) ? "Active" : "Inactive"}

                          </span>
                        </td>

                        {/* TIMESTAMP */}
                        <td>{new Date(value.timestamp).toLocaleDateString()}</td>

                        {/* ACTIONS */}
                        <td className="text-center">
                          <Link to="/edit-pet" state={value} className="btn btn-sm btn-outline-primary me-2">
                            Edit
                          </Link>
                          <button className="btn btn-sm btn-outline-danger"
                            onClick={() => { DeletePet(value._id) }}>
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ManagePets;
