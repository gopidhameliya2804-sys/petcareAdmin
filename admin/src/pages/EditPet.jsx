import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Sidebar from "../common/Sidebar";
import Footer from "../common/Footer";
import api from "../utils/Axios.config";

function EditPet() {
  const [categories, setCategories] = useState([]);
  const petData = useLocation().state;
  const navigate = useNavigate();
  const [pet, setPet] = useState({
    ...petData,
    newImage: null,
  });
  const [preview, setPreview] = useState(
    pet.image
      ? `http://localhost:3000/uploads/${pet.image}?t=${Date.now()}`
      : null,
  );
  console.log(pet);

  const fetchPetCategories = async () => {
    try {
      const res = await api.get("/admin/petcategory");
      setCategories(res.data?.data || []);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    fetchPetCategories();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPet((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPet((prev) => ({
        ...prev,
        newImage: file,
      }));
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("pet_cate_id", pet.pet_cate_id);
      formData.append("name", pet.name);
      formData.append("desc", pet.desc);
      formData.append("age", pet.age);
      formData.append("status", pet.status);
      formData.append("timestamp", new Date());
      if (pet.newImage) {
        formData.append("image", pet.newImage);
      }

      const response = await api.put(`/admin/pet/edit/${pet._id}`, formData);
      if (response.status === 200) {
        alert("Pet updated successfully");
        navigate("/manage-pet");
      }
    } catch (err) {
      console.error(err);
      alert("Failed to update pet");
    }
  };

  return (
    <div id="app">
      <Sidebar />

      <div id="main">
        {/* PAGE HEADING */}
        <div className="page-heading">
          <h3>Edit Pet</h3>
          <p className="text-subtitle text-muted">Update pet information</p>
        </div>

        <section className="section">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Edit Pet Details</h4>
            </div>

            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <input type="hidden" defaultValue={pet._id} />

                <div className="row">
                  {/* PET CATEGORY */}
                  <div className="col-md-6">
                    <label>Pet Category</label>
                    <select
                      className="form-control mt-2"
                      name="pet_cate_id"
                      value={pet.pet_cate_id}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Category</option>
                      {categories.map((cat) => (
                        <option key={cat._id} value={cat._id}>
                          {cat.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* PET NAME */}
                  <div className="col-md-6">
                    <label>Pet Name</label>
                    <input
                      type="text"
                      className="form-control mt-2"
                      name="name"
                      defaultValue={pet.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="row mt-3">
                  {/* AGE */}
                  <div className="col-md-4">
                    <label>Age</label>
                    <input
                      type="text"
                      className="form-control mt-2"
                      name="age"
                      defaultValue={pet.age}
                      onChange={handleChange}
                    />
                  </div>

                  {/* STATUS */}
                  <div className="col-md-4">
                    <label>Status</label>
                    <select
                      className="form-control mt-2"
                      name="status"
                      defaultValue={pet.status}
                      onChange={handleChange}
                    >
                      <option value="Available">Available</option>
                      <option value="Adopted">Adopted</option>
                    </select>
                  </div>

                  {/* ACTIVE STATUS */}
                  <div className="col-md-4">
                    <label>Active Status</label>
                    <select
                      className="form-control mt-2"
                      name="ActiveStatus"
                      defaultValue={pet.ActiveStatus}
                      onChange={handleChange}
                    >
                      <option value={true}>Active</option>
                      <option value={false}>Inactive</option>
                    </select>
                  </div>
                </div>

                {/* DESCRIPTION */}
                <div className="mt-3">
                  <label>Description</label>
                  <textarea
                    className="form-control mt-2"
                    name="desc"
                    rows="3"
                    defaultValue={pet.desc}
                    onChange={handleChange}
                  />
                </div>

                {/* IMAGE */}
                <div className="mt-3">
                  <label>Image URL</label>
                  <input
                    type="file"
                    className="form-control mt-2"
                    name="image"
                    accept="image/*"
                    // value={pet.image}
                    onChange={handleFileChange}
                  />
                </div>

                {/* IMAGE PREVIEW */}
                {preview && (
                  <div className="mt-4">
                    <label>Preview</label>
                    <div>
                      <img
                        src={preview}
                        alt="Preview"
                        style={{
                          width: "220px",
                          height: "150px",
                          objectFit: "cover",
                          borderRadius: "12px",
                          border: "1px solid #ddd",
                        }}
                      />
                    </div>
                  </div>
                )}

                {/* BUTTONS */}
                <div className="mt-4">
                  <button type="submit" className="btn btn-primary me-2">
                    Update Pet
                  </button>
                  <button
                    type="button"
                    className="btn btn-light"
                    onClick={() => navigate(-1)}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default EditPet;
