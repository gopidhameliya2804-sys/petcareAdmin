import React, { useEffect, useState } from "react";
import Sidebar from "../common/Sidebar";
import api from "../utils/Axios.config";

function ManageUsers() {
  const [users, setUsers] = useState([]);

  const FetchUser = async () => {
    try {
      let response = await api.get("/admin/users");
      console.log(response.data);
      setUsers(response.data.data || []);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    FetchUser();
  }, []);

  const handleToggleStatus = async (id, currentStatus) => {
    try {
      const newStatus = currentStatus === "Active" ? "Blocked" : "Active";

      await api.put(`/admin/users/activeStatus/${id}`, {
        status: newStatus,
      });

      FetchUser(); 
    } catch (err) {
      alert("Failed to update status");
    }
  };

  
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;

    try {
      await api.delete(`/admin/users/${id}`);
      FetchUser();
    } catch (err) {
      alert("Failed to delete user");
    }
  };

 
  const totalUsers = users.length;
  const activeUsers = users.filter(u => users.activeStatus?.toLowerCase() === "active").length;
  const blockedUsers = users.filter(u => users.activeStatus?.toLowerCase() === "blocked").length;

  return (
    <div id="app">
      <Sidebar />

      <div id="main">
        <div className="page-heading">
          <h3>Manage Users</h3>
          <p className="text-subtitle text-muted">
            Manage PetCare application users
          </p>
        </div>

        {/* STATS */}
        <section className="section">
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h6>Total Users</h6>
                  <h4>{totalUsers}</h4>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-start border-success border-4">
                <div className="card-body">
                  <h6>Active Users</h6>
                  <h4 className="text-success">{activeUsers}</h4>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-start border-danger border-4">
                <div className="card-body">
                  <h6>Blocked Users</h6>
                  <h4 className="text-danger">{blockedUsers}</h4>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* USER TABLE */}
        <section className="section mt-4">
          <div className="card">
            <div className="card-body table-responsive">
              <table className="table table-hover table-striped">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    {/* <th>Status</th> */}
                    <th className="text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, index) => (
                    <tr key={user._id}>
                      <td>{index + 1}</td>
                      <td>{user.username}</td>
                      <td>{user.email}</td>
                      <td>{user.role}</td>
                      {/* <td>
                        <span className={`badge ${user.activeStatus === "Active" ? "bg-success" : "bg-danger"}`}>
                          {user.activeStatus}
                        </span>
                      </td> */}
                      <td className="text-center">
                        <button
                          onClick={() => handleToggleStatus(user._id, user.activeStatus)}
                          className={`btn btn-sm ${
                            user.activeStatus === "Active"
                              ? "btn-outline-warning"
                              : "btn-outline-success"
                          }`}
                        >
                          {user.activeStatus === "Active" ? "Block" : "Activate"}
                        </button>

                        <button
                          onClick={() => handleDelete(user._id)}
                          className="btn btn-sm btn-outline-danger ms-2"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}

                  {users.length === 0 && (
                    <tr>
                      <td colSpan="6" className="text-center text-muted">
                        No users found
                      </td>
                    </tr>
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

export default ManageUsers;
