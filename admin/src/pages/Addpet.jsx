import React, { useEffect, useState } from "react";
import Sidebar from "../common/Sidebar";
import Footer from "../common/Footer";
import api from "../utils/Axios.config";
import cookie from "js-cookie";

function PetInput() {
  const [categories, setCategories] = useState([]);
  const [preview, setPreview] = useState(null);
  const [selectFile, setSelectFile] = useState(null);
  const [pet, setPet] = useState({
    pet_cate_id: "",
    name: "",
    image: "",
    desc: "",
    age: "",
    status: "Available",
    timestamp:new Date(),
  });

  const FetchCategories = async () => {
    try {
      const res = await api.get("/admin/petcategory/");
      setCategories(res.data.data || []);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    FetchCategories();
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
    setSelectFile(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...pet,
      timestamp: new Date(),
    };

    try {
      const formData = new FormData();
      formData.append("pet_cate_id", pet.pet_cate_id); 
      formData.append("name", pet.name);
      formData.append("image", selectFile);
      formData.append("desc", pet.desc);
      formData.append("age", pet.age);
      formData.append("status", pet.status);
      formData.append("timestamp", new Date());

      const response = await api.post("/admin/pet/addpet", formData);
      if (response.data.token) {
        cookie.set("token", response.data.token);
      }

      alert("Pet Added Successfully");

      setPet({
        pet_cate_id: "",
        name: "",
        image: "",
        desc: "",
        age: "",
        status: "Available",
        timestamp:"",
      });

      window.location.href = "/manage-pet";
    } catch (err) {
      console.error(err);
      alert("Failed to add pet");
    }
  };

  return (
    <div id="app">
      <Sidebar />

      <div id="main">
        <div className="page-heading">
          <h3>Add Pet</h3>
          <p className="text-subtitle text-muted">
            Add pets under specific categories
          </p>
        </div>

        <section className="section">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Pet Details</h4>
            </div>

            <div className="card-body">
              <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="row">
                  {/* CATEGORY */}
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
                      name="name"
                      className="form-control mt-2"
                      value={pet.name}
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
                      name="age"
                      className="form-control mt-2"
                      value={pet.age}
                      onChange={handleChange}
                    />
                  </div>

                  {/* STATUS */}
                  <div className="col-md-4">
                    <label>Status</label>
                    <select
                      className="form-control mt-2"
                      name="status"
                      value={pet.status}
                      onChange={handleChange}
                    >
                      <option value="Available">Available</option>
                      <option value="Adopted">Adopted</option>
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
                    value={pet.desc}
                    onChange={handleChange}
                  />
                </div>

                {/* IMAGE */}
                <div className="mt-3">
                  <label>Image URL</label>
                  <input
                    type="file"
                    name="image"
                    accept="image/*"
                    className="form-control mt-2"
                    onChange={handleFileChange}
                  />
                </div>

                {/* IMAGE PREVIEW */}
                {preview && (
                  <div className="mt-3">
                    <img
                      src={preview}
                      alt="Preview"
                      style={{
                        width: "180px",
                        height: "180px",
                        objectFit: "cover",
                        borderRadius: "12px",
                      }}
                    />
                  </div>
                )}

                {/* BUTTONS */}
                <div className="mt-4">
                  <button className="btn btn-primary">
                    Save Pet
                  </button>
                  <button
                    type="reset"
                    className="btn btn-light ms-2"
                    onClick={() =>
                      setPet({
                        pet_cate_id: "",
                        name: "",
                        image: "",
                        desc: "",
                        age: "",
                        status: "Available",
                        ActiveStatus: true,
                      })
                    }
                  >
                    Reset
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

export default PetInput;
