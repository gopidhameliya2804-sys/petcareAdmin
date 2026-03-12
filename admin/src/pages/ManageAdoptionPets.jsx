import React, { useEffect, useState } from "react";
import Sidebar from "../common/Sidebar";
import api from "../utils/Axios.config";

function ManageAdoptionPets() {
  const [pets, setPets] = useState([]);

  const FetchAdoptPets = async () => {
    try {
      let response = await api.get("/admin/adoption/all");
      // console.log(response.data);
      setPets(response.data.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    FetchAdoptPets();
  }, []);

  const DeleteAdoption = async (id) => {
   try {
      let response = await api.delete(`/admin/adoption/delete/${id}`);
      if (response.status == 200) {
        alert("Delete Pet adoption Request");
        FetchAdoptPets();
        navigate("/manage-petAdoption")
      }
    } catch (e) {
      console.log(e);
    }
  }
  // console.log(pets);

  const total = pets.length;
  const Approved = pets.filter(p => p.adop_status === "APPROVED").length;
  const Pending = pets.filter(p => p.adop_status === "PENDING").length;

  return (
    <div id="app">
      <Sidebar />
      <div id="main">
        {/* PAGE HEADER */}
        <div className="page-heading">
          <div className="row">
            <div className="col-md-6">
              <h3>Pet Adoption Profiles</h3>
              <p className="text-subtitle text-muted">
                Manage pets available for adoption
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
                  <h6 className="text-muted">Total Pets</h6>
                  <h4>{total}</h4>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow-sm border-start border-success border-4">
                <div className="card-body">
                  <h6 className="text-muted">Approved</h6>
                  <h4 className="text-success">{Approved}</h4>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow-sm border-start border-secondary border-4">
                <div className="card-body">
                  <h6 className="text-muted">Pending</h6>
                  <h4 className="text-secondary">{Pending}</h4>
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
                    <th>Age</th>
                    <th>Reason</th>
                    <th>Price</th>
                    <th>Time</th>
                    <th>Status</th>
                    <th className="text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {pets.map((item) => (
                    <tr key={item._id}>
                      {/* User */}
                      <td>
                        <strong>{item.user_name || "N/A"}</strong>
                        <div className="text-muted small">
                          {item.user_email || ""}
                        </div>
                      </td>

                      {/* Pet */}
                      <td>
                        <div className="d-flex align-items-center">
                          <span>{item.pet_name}</span>
                        </div>
                      </td>

                      {/* Age */}
                      <td>{item.pet_age}</td>

                      {/* Reason */}
                      <td>{item.adop_reason}</td>

                      {/* Price */}
                      <td>₹ {item.pet_price}</td>

                      {/* Time */}
                      <td>{new Date(item.pet_time).toLocaleDateString()}</td>

                      {/* Status */}
                      <td>
                        <span
                          className={`badge ${
                            item.adop_status === "PENDING"
                              ? "bg-light-warning text-warning"
                              : item.adop_status === "APPROVED"
                                ? "bg-light-success text-success"
                                : "bg-light-danger text-danger"
                          }`}
                        >
                          {item.adop_status}
                        </span>
                      </td>

                      {/* Actions */}
                      <td className="text-center">
                        <div className="d-flex justify-content-center gap-2">
                          <button
                            className="btn btn-sm btn-outline-danger"
                            onClick={() => {DeleteAdoption(item._id) }}
                          >
                            <i className="bi bi-trash"></i>
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
      </div>
    </div>
  );
}

export default ManageAdoptionPets;
