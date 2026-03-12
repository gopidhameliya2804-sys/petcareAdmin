import React, { useEffect, useState } from "react";
import Sidebar from "../common/Sidebar";
import api from "../utils/Axios.config";
import { Link, useNavigate } from "react-router-dom";

function ManagePetCategories() {
  const [petcategory, setPetCategory] = useState([]);
  const navigate = useNavigate();

  const FetchPetCategory = async () => {
    try {
      const response = await api.get("/admin/petcategory/");
      console.log(response.data);
      setPetCategory(response.data.data || []);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    FetchPetCategory();
  }, []);

  const DeletePetCategory = async (id) => {
    try {
      let response = await api.delete(`/admin/petcategory/delete/${id}`);
      if (response.status == 200) {
        alert("Delete Pet Category");
        FetchPetCategory();
      }
    } catch (e) {
      console.log(e);
    }
  }


  const total = petcategory.length;
  const active = petcategory.filter((c) => c.status === "true").length;
  const inactive = petcategory.filter((c) => c.status === "false").length;

  return (
    <div id="app">
      <Sidebar />

      <div id="main">
        {/* PAGE HEADER */}
        <div className="page-heading">
          <div className="row">
            <div className="col-md-6">
              <h3>Pet Categories</h3>
              <p className="text-subtitle text-muted">
                Manage pet types available in the system
              </p>
            </div>
            <div className="col-md-6 text-end">
              <button
                className="btn btn-primary rounded-pill"
                onClick={() => navigate("/add-petcategory")}
              >
                <i className="bi bi-plus-lg me-2"></i>
                Add Pet Category
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
                  <h6 className="text-muted">Total Categories</h6>
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
                    <th>Category</th>
                    <th>Image</th>
                    <th>Status</th>
                    <th className="text-center">Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {petcategory.length === 0 ? (
                    <tr>
                      <td colSpan="5" className="text-center text-muted">
                        No categories found
                      </td>
                    </tr>
                  ) : (
                    petcategory.map((value, index) => (
                      <tr key={value._id}>
                        <td>{index + 1}</td>
                        <td>{value.name}</td>
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
                            "No Image"
                          )}
                        </td>
                        <td>
                          <span
                            className={`badge ${
                              value.status === "Active"
                                ? "bg-success"
                                : "bg-danger"
                            }`}
                          >
                            {value.status || "Active"}
                          </span>
                        </td>
                        <td className="text-center">
                          <Link to="/edit-petcategory" state={value} className="btn btn-sm btn-outline-primary me-2">
                            Edit
                          </Link>
                          <button className="btn btn-sm btn-outline-danger"
                            onClick={() => { DeletePetCategory(value._id) }}>
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

export default ManagePetCategories;
