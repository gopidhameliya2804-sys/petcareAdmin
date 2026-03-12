import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Sidebar from "../common/Sidebar";
import Footer from "../common/Footer";
import api from "../utils/Axios.config";

function EditService() {
  const serviceData = useLocation().state;
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [service, setService] = useState({
    ...serviceData,
    newImage: null,
  });
  const [preview, setPreview] = useState(
    service.image
      ? `http://localhost:3000/uploads/${service.image}?t=${Date.now()}`
      : null,
  );

  const fetchCategories = async () => {
    try {
      const res = await api.get("/admin/servicecategory");
      setCategories(res.data?.data || []);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    fetchCategories();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setService((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setService((prev) => ({
        ...prev,
        newImage: file,
      }));
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = {
        ...service,
        timestamp: new Date(),
      };
      const formData = new FormData();
      formData.append("ser_cate_id", service.ser_cate_id);
      formData.append("name", service.name);
      formData.append("desc", service.desc);
      formData.append("price", service.price);
      formData.append("status", service.status);
      formData.append("timestamp", new Date());
      if (service.newImage) {
        formData.append("image", service.newImage);
      }

      const response = await api.put(
        `/admin/service/edit/${service._id}`,
        formData,
      );

      if (response.status === 200) {
        alert("Service updated successfully");
        navigate("/manage-services");
      }
    } catch (err) {
      console.error(err);
      alert("Failed to update service");
    }
  };

  return (
    <div id="app">
      <Sidebar />

      <div id="main">
        {/* PAGE HEADING */}
        <div className="page-heading">
          <h3>Edit Service</h3>
          <p className="text-subtitle text-muted">Update service details</p>
        </div>

        <section className="section">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Edit Service</h4>
            </div>

            <div className="card-body">
              <form onSubmit={handleSubmit} encType="multipart/form-data">
                <input type="hidden" name="_id" value={service._id} />

                <div className="row">
                  {/* CATEGORY */}
                  <div className="col-md-6">
                    <label>Service Category</label>
                    <select
                      className="form-control mt-2"
                      name="ser_cate_id"
                      value={service.ser_cate_id}
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

                  {/* SERVICE NAME */}
                  <div className="col-md-6">
                    <label>Service Name</label>
                    <input
                      type="text"
                      className="form-control mt-2"
                      name="name"
                      value={service.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="row mt-3">
                  {/* PRICE */}
                  <div className="col-md-4">
                    <label>Price</label>
                    <input
                      type="number"
                      className="form-control mt-2"
                      name="price"
                      value={service.price}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* STATUS */}
                  <div className="col-md-4">
                    <label>Status</label>
                    <select
                      className="form-control mt-2"
                      name="status"
                      value={service.status}
                      onChange={handleChange}
                    >
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
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
                    value={service.desc}
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
                    // defaultValue={service.image}
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
                    Update Service
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

export default EditService;
