import React, { useEffect, useState } from "react";
import Sidebar from "../common/Sidebar";
import api from "../utils/Axios.config";
import { Link, useNavigate } from "react-router-dom";

function ManageServiceCategories() {
  const [serviceCategory, setServiceCategory] = useState([]);
  const navigate = useNavigate();

  const FetchServiceCategory = async () => {
    try {
      const response = await api.get("/admin/servicecategory/");
      setServiceCategory(response.data.data || []);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    FetchServiceCategory();
  }, []);

  const DeleteSerCategory = async (id) => {
    try {
      let response = await api.delete(`/admin/servicecategory/delete/${id}`);
      if (response.status == 200) {
        alert("Delete Service Category");
        FetchServiceCategory();
      }
    } catch (e) {
      console.log(e);
    }
  }

  const total = serviceCategory.length;
  const activeCount = serviceCategory.filter((c) => c.status === "Active").length;
  const inactiveCount = serviceCategory.filter((c) => c.status === "Inactive").length;
  

  return (
    <div id="app">
      <Sidebar />

      <div id="main">
        {/* PAGE HEADING */}
        <div className="page-heading">
          <div className="page-title">
            <div className="row">
              <div className="col-md-6">
                <h3>Services Category</h3>
                <p className="text-muted">Manage service Category</p>
              </div>
              <div className="col-md-6 text-end">
                <button
                  className="btn btn-primary"
                  onClick={() => navigate("/add-servicecategory")}
                >
                  <i className="bi bi-plus-lg me-2"></i>Add Service Category
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
                    <h6>Total Services</h6>
                    <h4>{total}</h4>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card shadow-sm border-start border-success border-4">
                  <div className="card-body">
                    <h6>Active</h6>
                    <h4 className="text-success">{activeCount}</h4>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card shadow-sm border-start border-danger border-4">
                  <div className="card-body">
                    <h6>Inactive</h6>
                    <h4 className="text-danger">{inactiveCount}</h4>
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
                  {serviceCategory.length === 0 ? (
                    <tr>
                      <td colSpan="5" className="text-center text-muted">
                        No categories found
                      </td>
                    </tr>
                  ) : (
                    serviceCategory.map((value, index) => (
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
                                ? "bg-danger"
                                : "bg-success"
                            }`}
                          >
                            {value.status || "Active"}
                          </span>
                        </td>
                        <td className="text-center">
                          <Link to="/edit-servicecategory" state={value} className="btn btn-sm btn-outline-primary me-2">
                            Edit
                          </Link>
                          <button className="btn btn-sm btn-outline-danger" 
                            onClick={() => { DeleteSerCategory(value._id) }} >
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

        {/* FOOTER */}
        <footer className="text-center text-muted py-3">
          © 2026 PetCare Admin
        </footer>
      </div>
    </div>
  );
}

export default ManageServiceCategories;
